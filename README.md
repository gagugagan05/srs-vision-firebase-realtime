# SRS Vision — Firebase Realtime Production v3

SRS Vision keeps the **first dashboard as the main dashboard** and opens specialist tools in separate dashboards.

## v3 fixes
- Assignment-created **Save** button now closes the confirmation safely and confirms that the assignment is already saved.
- Reports page is resilient to malformed/missing remote state and renders its KPI/graph panels instead of going blank.
- Main Dashboard is resilient to incomplete Firebase state and preserves safe defaults.
- Main Dashboard greeting automatically switches between **Good Morning / Good Afternoon / Good Evening / Good Night** based on the browser's local time.
- Sidebar now has its own vertical scroll, so the last tool/management items no longer overlap the Live Database item.
- Hero greeting/banner has stronger contrast and a reliable minimum height.
- Rendering errors are caught and shown as a recovery panel instead of leaving a blank page.

## Realtime architecture
- Firebase Authentication with Anonymous sign-in
- Firebase Realtime Database at `/srsVision`
- Local-first autosave for immediate responsiveness
- Firebase cloud sync for shared data
- Realtime Database listeners for live updates
- Large local audio blobs stay local instead of being uploaded to RTDB
- Project/team/task/notification/account data is separated by top-level sections so the app can update only the changed section

## Team
All 13 SRS Vision members belong to one team. Team contacts, projects, assignments and work queue are editable.

## Firebase setup
See `FIREBASE_SETUP.md` and `REALTIME_SETUP_REQUIRED.md`.

## GitHub
Recommended repository name: `srs-vision-firebase-realtime`
