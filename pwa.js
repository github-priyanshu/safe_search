op("head").insertAdjacentHTML("beforeend",`<link rel="manifest" href="pwa/manifest.json">`)
if ('serviceWorker' in navigator) {
   window.addEventListener('load', function () { navigator.serviceWorker.register('pwa/sw.js').then(function (registration) { console.log('ServiceWorker registration successful with scope: ', registration.scope); }, function (err) { console.log('ServiceWorker registration failed: ', err); }); });
}
