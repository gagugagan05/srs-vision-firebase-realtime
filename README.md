# SRS Vision — Firebase Realtime v6 Mix-Safe

This package is a root-level replacement for older SRS Vision / 3FS builds.

## Important for mixed repositories
You may have old files in your GitHub repository. Upload this package's files to the repository **root** and choose **Replace** for files with the same names.

The active application is:
- `index.html`
- `app.js`
- `styles.css`
- `firebase-config.js`
- `database.rules.json`
- `assets/`

This build also includes compatibility files named `auth.js`, `live-db.js`, `supabase-config.js`, `database.sql`, and `portal.html` so old filenames do not need to be hunted down individually. The active `index.html` does not use Supabase.

## v6 interaction fixes
- Assignment confirmation Save/Done action closes reliably.
- Team member Edit and Customise actions use direct delegated click handlers.
- Project Edit/Assign/Share/Continue actions are direct targets.
- Dashboard cards and Recent Activity entries can be opened directly.
- Reports render from normalized state and have a safe fallback.
- Sidebar has independent vertical scrolling.
- Main Dashboard greeting updates automatically by local time.
- Firebase realtime state uses sectioned data and local-first persistence.

## Firebase
Realtime Database URL is already configured in `firebase-config.js`.
Anonymous Authentication is expected to be enabled in the Firebase project.

## GitHub
Repository name: `srs-vision-firebase-realtime`

### Root layout
```text
index.html
app.js
styles.css
firebase-config.js
database.rules.json
auth.js
live-db.js
supabase-config.js
database.sql
portal.html
srs-vision-logo.png
srs-vision-logo-transparent.png
assets/
```

Do not place these files inside an extra folder such as `SRS-Vision-Firebase-CLEAN-v6/`.
