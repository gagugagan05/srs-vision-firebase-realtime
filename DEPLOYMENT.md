# Deployment

Upload the contents of this folder to the root of the GitHub repository.

Required files:
- `index.html`
- `app.js`
- `styles.css`
- `firebase-config.js`
- `database.rules.json`
- `srs-vision-logo.png`
- `srs-vision-logo-transparent.png`
- `assets/`

Recommended repository name: `srs-vision-firebase-realtime`

Enable GitHub Pages from **Settings → Pages**.

Before public production, tighten Firebase Realtime Database rules so only intended SRS Vision users can read/write shared data.


## Clean deployment rule
Do not mix files from older SRS Vision/3FS/Supabase builds. Upload this build as the complete repository root and remove old root files first. The required root file is index.html.
