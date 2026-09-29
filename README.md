# SRS Vision — Firebase Realtime

This repository is the clean Firebase version of SRS Vision. Do not mix it with the old 3FS/Supabase build.

## Repository

Recommended GitHub repository name:

`srs-vision-firebase-realtime`

## Main features

- SRS Vision first dashboard as the main dashboard
- Separate dashboards for tools
- Projects, team, work queue, notifications, calendar, reports, accounts and banking
- 13 SRS Vision members in one team
- Manual member email / WhatsApp fields
- Project assignment creates saved work + notification
- Local-first autosave
- Firebase Anonymous Authentication
- Firebase Realtime Database sync
- Realtime listeners for shared changes
- Large local music audio blobs are not uploaded to Realtime Database

## Firebase project already configured

Project ID: `srs-vision`

Realtime Database URL:
`https://srs-vision-default-rtdb.asia-southeast1.firebasedatabase.app`

Authentication: Anonymous enabled

## Important

The included development database rules allow any authenticated Firebase user to read/write. Before exposing the app publicly, replace them with restrictive rules for the intended SRS Vision users.

## GitHub Pages

Upload the contents of this folder to the repository root. Then enable GitHub Pages from Settings → Pages → Deploy from branch → main → root.
