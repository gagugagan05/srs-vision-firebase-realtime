# Mixing-safe upload guide

1. Open the existing `srs-vision-firebase-realtime` GitHub repository.
2. Upload the **contents** of this folder to the repository root.
3. When GitHub asks to replace files such as `index.html`, `app.js`, `styles.css`, `firebase-config.js`, choose **Replace**.
4. Do not create a new nested folder for the upload.
5. Old extra files may remain temporarily, but the new root `index.html` is the file GitHub Pages will load.
6. After upload, open GitHub Pages and press `Ctrl + F5`.

If old `index.html` remains instead of the new one, none of the new UI fixes will appear. In that case, replace the root `index.html` with the one in this package.
