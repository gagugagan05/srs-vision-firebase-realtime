# Firebase Realtime Setup

Firebase is now the cloud database provider for SRS Vision.

Required Firebase setup:
- Enable Anonymous Authentication.
- Create Realtime Database.
- Use the database URL configured in `firebase-config.js`.
- Publish development rules first, then tighten them before public production.

The website uses local-first saves, Firebase cloud sync, and Realtime Database listeners.
