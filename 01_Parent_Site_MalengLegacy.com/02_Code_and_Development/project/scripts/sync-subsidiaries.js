const fs = require('fs');
const path = require('path');

const SUBSIDIARY_MAP = {
  '01_Maleng_Legacy_Agri_and_Farming': 'agri.js',
  '02_Maleng_Legacy_Capital_and_Investment': 'capital.js',
  '03_Maleng_Legacy_Executive_Car_Wash': 'carwash.js',
  '04_Maleng_Legacy_Catering_and_Events': 'catering.js',
  '05_Maleng_Legacy_Construction_and_Infrastructure': 'construction.js',
  '06_Maleng_Legacy_Corporate_Services': 'corporate.js',
  '07_Maleng_Legacy_Energy_and_Solar': 'energy.js',
  '08_Maleng_Legacy_Events_and_Conferencing': 'events.js',
  '09_Maleng_Legacy_Facility_Management': 'facility.js',
  '10_Maleng_Legacy_Logistics_and_Transport': 'logistics.js',
  '11_Maleng_Legacy_Media_and_Signage': 'media.js',
  '12_Maleng_Legacy_Property_Development': 'property.js',
  '13_Maleng_Legacy_Security_and_Protection': 'security.js',
  '14_Maleng_Legacy_Tech_and_Consulting': 'tech.js',
  '15_Maleng_Legacy_Training_and_Development': 'training.js',
  '16_Maleng_Legacy_Vault_Assets': 'vault.js'
};

function convertImportPaths(content) {
  return content
    .replace(/from\s+(['"])\.\.\/components\//g, 'from $1../../components/')
    .replace(/from\s+(['"])\.\.\/styles\//g, 'from $1../../styles/');
}

function getPaths() {
  const projectRoot = path.resolve(__dirname, '..');
  const websitesRoot = path.resolve(projectRoot, '..', '..', '..');

  const sourceRoot = path.join(websitesRoot, '02_Subsidiary_Sites_Template');
  const destinationRoot = path.join(projectRoot, 'pages', 'subsidiaries');

  return { sourceRoot, destinationRoot };
}

function syncOnce() {
  const { sourceRoot, destinationRoot } = getPaths();

  if (!fs.existsSync(sourceRoot)) {
    console.error(`Source root not found: ${sourceRoot}`);
    return { ok: false, synced: 0 };
  }

  if (!fs.existsSync(destinationRoot)) {
    console.error(`Destination root not found: ${destinationRoot}`);
    return { ok: false, synced: 0 };
  }

  let synced = 0;
  const missing = [];

  Object.entries(SUBSIDIARY_MAP).forEach(([folderName, destinationFile]) => {
    const sourceFile = path.join(
      sourceRoot,
      folderName,
      '02_Code_and_Development',
      'project',
      'pages',
      'index.js'
    );
    const destinationFilePath = path.join(destinationRoot, destinationFile);

    if (!fs.existsSync(sourceFile)) {
      missing.push(sourceFile);
      return;
    }

    const content = fs.readFileSync(sourceFile, 'utf8');
    const converted = convertImportPaths(content);
    fs.writeFileSync(destinationFilePath, converted, 'utf8');
    synced += 1;

    console.log(`Synced ${folderName} -> pages/subsidiaries/${destinationFile}`);
  });

  if (missing.length > 0) {
    console.log('\nMissing source files:');
    missing.forEach((item) => console.log(`- ${item}`));
  }

  console.log(`\nSync complete: ${synced} file(s) updated.`);
  return { ok: synced > 0, synced };
}

function watchMode() {
  const { sourceRoot } = getPaths();

  const sourceFiles = Object.keys(SUBSIDIARY_MAP).map((folderName) =>
    path.join(
      sourceRoot,
      folderName,
      '02_Code_and_Development',
      'project',
      'pages',
      'index.js'
    )
  );

  console.log('Watch mode active: monitoring standalone subsidiary pages for changes...');
  console.log('Press Ctrl+C to stop.\n');

  let timer = null;
  const triggerSync = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      console.log('\nDetected change. Running sync...');
      syncOnce();
    }, 250);
  };

  let watchedCount = 0;
  sourceFiles.forEach((filePath) => {
    if (!fs.existsSync(filePath)) {
      console.warn(`Watch skipped (missing): ${filePath}`);
      return;
    }

    fs.watchFile(filePath, { interval: 500 }, (curr, prev) => {
      if (curr.mtimeMs !== prev.mtimeMs) {
        console.log(`Changed: ${filePath}`);
        triggerSync();
      }
    });

    watchedCount += 1;
  });

  if (watchedCount === 0) {
    console.warn('No source files are currently available to watch.');
    console.warn('Watcher will stay active and retry sync every 10 seconds until files appear.');
  } else {
    console.log(`Watching ${watchedCount} file(s).`);
  }

  const retryInterval = setInterval(() => {
    if (watchedCount === 0) {
      const result = syncOnce();
      if (result.synced > 0) {
        console.log('Source files detected. Re-evaluating watch targets...');
      }
    }
  }, 10000);

  process.on('SIGINT', () => {
    clearInterval(retryInterval);
    sourceFiles.forEach((filePath) => fs.unwatchFile(filePath));
    console.log('\nWatch mode stopped.');
    process.exit(0);
  });
}

function main() {
  const isWatchMode = process.argv.includes('--watch');

  const result = syncOnce();
  if (!result.ok && !isWatchMode) {
    process.exit(1);
  }

  if (isWatchMode) {
    if (!result.ok) {
      console.warn('Initial sync had issues; watch mode will continue and resync on changes/retry.');
    }
    watchMode();
    return;
  }

  process.exit(0);
}

main();
