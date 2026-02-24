# HostAfrica Upload Commands (Exact)

Use this with the static export in `project/out`.

## 1) Build Export (from project root)

```powershell
Set-Location "D:\Maleng Legacy Group Workspace\maleng-legacy-group-websites\01_Parent_Site_MalengLegacy.com\02_Code_and_Development\project"
npm install
npm run prepare:export
```

`prepare:export` runs subsidiary sync first, then export, so parent `/subsidiaries/*` pages are always up to date before upload.

## 2) Upload via WinSCP CLI (recommended on Windows)

### Install WinSCP
- Download: https://winscp.net/eng/download.php
- Ensure `winscp.com` is available at:
  - `C:\Program Files (x86)\WinSCP\WinSCP.com`
  - or `C:\Program Files\WinSCP\WinSCP.com`

### One-shot command

```powershell
$winScp = "C:\Program Files (x86)\WinSCP\WinSCP.com"
$localOut = "D:\Maleng Legacy Group Workspace\maleng-legacy-group-websites\01_Parent_Site_MalengLegacy.com\02_Code_and_Development\project\out"
$host = "YOUR_HOSTAFRICA_SFTP_HOST"
$user = "YOUR_SFTP_USERNAME"
$pass = "YOUR_SFTP_PASSWORD"

& $winScp /command `
  "open sftp://$($user):$($pass)@$($host)/ -hostkey=*" `
  "synchronize remote -delete -mirror `"$localOut`" /public_html/" `
  "exit"
```

## 3) Upload via SCP (if SSH shell access is enabled)

```powershell
$localOut = "D:\Maleng Legacy Group Workspace\maleng-legacy-group-websites\01_Parent_Site_MalengLegacy.com\02_Code_and_Development\project\out"
$host = "YOUR_HOSTAFRICA_SSH_HOST"
$user = "YOUR_SSH_USERNAME"

scp -r "$localOut\*" "$user@$host:/public_html/"
```

## 4) Post-upload checks

```powershell
# Quick checks to run in browser:
# https://www.malenglegacy.co.za/
# https://www.malenglegacy.co.za/robots.txt
# https://www.malenglegacy.co.za/subsidiaries/tech
```

## 5) Required DNS records (HostAfrica panel)

- `A` record: `@` -> your HostAfrica server IP
- `CNAME`: `www` -> `@`

## 6) Notes

- This project is configured for static export using `output: 'export'` in Next.js config.
- Re-deploy after any content/code change by re-running `npm run prepare:export` and upload again.
- Place production analytics ID in `.env.local` before export:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
