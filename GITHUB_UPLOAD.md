# GitHub Upload — SRS Vision Firebase Realtime

Recommended repository name:

`srs-vision-firebase-realtime`

1. Create a **new empty repository** with the name above.
2. Extract this ZIP.
3. Upload the **contents of `srs-vision-command-center`** to the repository root.
4. Keep the Firebase files in the root; do not mix them with older 3FS/Supabase builds.
5. Enable GitHub Pages from **Settings → Pages** and deploy from the `main` branch / root.
6. Open the Pages URL and test Dashboard → Projects → Assign → Save, Reports, sidebar scrolling, and Firebase status.

Do not add old `supabase-config.js`, `live-db.js`, or old 3FS files to the active root.


## Clean deployment rule
Do not mix files from older SRS Vision/3FS/Supabase builds. Upload this build as the complete repository root and remove old root files first. The required root file is index.html.
