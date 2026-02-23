param(
  [Parameter(Mandatory = $true)] [string]$Host,
  [Parameter(Mandatory = $true)] [string]$User,
  [Parameter(Mandatory = $true)] [string]$Password,
  [string]$WinScpPath = "C:\Program Files (x86)\WinSCP\WinSCP.com"
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $projectRoot "out"

if (-not (Test-Path $WinScpPath)) {
  $altPath = "C:\Program Files\WinSCP\WinSCP.com"
  if (Test-Path $altPath) {
    $WinScpPath = $altPath
  } else {
    Write-Error "WinSCP.com not found. Install WinSCP or pass -WinScpPath."
    exit 1
  }
}

if (-not (Test-Path $outDir)) {
  Write-Host "Static export folder not found. Running build/export..." -ForegroundColor Yellow
  Push-Location $projectRoot
  npm run export
  if ($LASTEXITCODE -ne 0) {
    Pop-Location
    Write-Error "Export failed."
    exit 1
  }
  Pop-Location
}

$commands = @(
  "open sftp://$($User):$($Password)@$($Host)/ -hostkey=*",
  "synchronize remote -delete -mirror `"$outDir`" /public_html/",
  "exit"
)

Write-Host "Uploading $outDir to /public_html on $Host ..." -ForegroundColor Cyan
& $WinScpPath /command $commands

if ($LASTEXITCODE -eq 0) {
  Write-Host "Deployment complete." -ForegroundColor Green
  Write-Host "Verify: https://www.malenglegacy.co.za/" -ForegroundColor Green
} else {
  Write-Error "Deployment failed. Check credentials/host path and retry."
  exit $LASTEXITCODE
}
