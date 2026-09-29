/* Legacy filename compatibility shim.
   Firebase realtime sync is implemented by the active app.js. */
(() => {
  'use strict';
  window.init3FSLiveSync = window.init3FSLiveSync || ((cb) => {
    try { cb && cb(); } catch (e) { console.warn('Legacy live-sync callback failed', e); }
  });
})();
