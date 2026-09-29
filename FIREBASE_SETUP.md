# SRS Vision Firebase Setup

1. Firebase project: SRS Vision
2. Web app: SRS Vision Web
3. Authentication → Sign-in providers → Anonymous → Enabled
4. Realtime Database created in asia-southeast1 (Singapore)
5. Database path used by the app: `/srsVision`
6. `firebase-config.js` contains the project web configuration and database URL.

For development the current rules allow authenticated Firebase users. Before public production, tighten rules so access is limited to the intended SRS Vision users.

The app saves local state immediately and syncs to Firebase. Realtime listeners update open dashboards when shared sections change. Large local audio data URLs are intentionally not uploaded to RTDB to avoid unnecessary downloads; they remain in local browser storage.
