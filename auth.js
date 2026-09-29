/* Compatibility shim for older SRS Vision/3FS files.
   The active application is index.html + app.js + Firebase.
   This file intentionally does not load Supabase or create a second auth system. */
(() => {
  'use strict';
  if (window.threefsAuth) return;
  window.threefsAuth = {
    profile: () => ({ full_name: 'SRS Vision' }),
    role: () => 'team-member',
    roleLabel: () => 'Team Workspace',
    can: () => true,
    is: () => true,
    ready: () => Promise.resolve(true),
    signIn: async () => ({ data: { session: null }, error: null }),
    signOut: async () => ({ error: null })
  };
})();
