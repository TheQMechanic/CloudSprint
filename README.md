# Cloud Career Command Center

React + Firebase career tracker for a 12-week cloud architect pivot plan.

## Local Setup

1. Run `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Fill in the Firebase web app config from the Firebase console.
4. Enable Google as a Firebase Authentication provider.
5. Create a Firestore database and publish `firestore.rules`.
6. Run `npm run dev`.

The app works without Firebase config by storing guest progress in local storage. Google sign-in and cloud sync become active once Firebase environment variables are present.

## Firebase Hosting

Build with `npm run build`, then deploy `dist` with Firebase Hosting:

```bash
firebase deploy
```
