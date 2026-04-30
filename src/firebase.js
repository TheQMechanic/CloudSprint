/**
 * Firebase initialisation — lazy-loaded.
 *
 * The heavy Firebase SDKs (auth, firestore) are only imported when the user
 * actually tries to sign in.  Until then the app runs in local-only mode,
 * keeping the initial JS bundle small.
 */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const missingFirebaseConfig = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

export const firebaseReady = missingFirebaseConfig.length === 0;

// ── Lazy singletons ────────────────────────────────────────────────────
// Each getter imports the Firebase module on first call and caches the result.

let _app = null;
let _auth = null;
let _db = null;
let _googleProvider = null;
let _sdkLoaded = false;

/**
 * Dynamically loads the core Firebase SDKs and returns { app, auth, db, googleProvider }.
 * Resolves instantly on subsequent calls.
 */
export async function loadFirebase() {
  if (_sdkLoaded) {
    return { app: _app, auth: _auth, db: _db, googleProvider: _googleProvider };
  }

  if (!firebaseReady) {
    return { app: null, auth: null, db: null, googleProvider: null };
  }

  const [
    { initializeApp, getApps },
    { getAuth, GoogleAuthProvider },
    { getFirestore },
  ] = await Promise.all([
    import('firebase/app'),
    import('firebase/auth'),
    import('firebase/firestore'),
  ]);

  _app = getApps()[0] || initializeApp(firebaseConfig);
  _auth = getAuth(_app);
  _db = getFirestore(_app);
  _googleProvider = new GoogleAuthProvider();
  _googleProvider.setCustomParameters({ prompt: 'select_account' });
  _sdkLoaded = true;

  // Activate App Check when the reCAPTCHA site key is provided (free tier).
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (recaptchaKey) {
    try {
      const { initializeAppCheck, ReCaptchaEnterpriseProvider } = await import(
        'firebase/app-check'
      );
      initializeAppCheck(_app, {
        provider: new ReCaptchaEnterpriseProvider(recaptchaKey),
        isTokenAutoRefreshEnabled: true,
      });
    } catch (err) {
      console.warn('App Check setup skipped:', err);
    }
  }

  return { app: _app, auth: _auth, db: _db, googleProvider: _googleProvider };
}

/**
 * Returns the cached instances synchronously.
 * Only valid AFTER `loadFirebase()` has resolved at least once.
 */
export function getFirebaseSync() {
  return { app: _app, auth: _auth, db: _db, googleProvider: _googleProvider };
}
