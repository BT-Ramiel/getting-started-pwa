self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open('static')
      .then((cache) =>
        cache.addAll(['./', './src/master.css', './images/logo192.png'])
      )
  )
  console.log('Service worker installed')
})

self.addEventListener('fetch', (event) => {
  console.log(`Intercepting fetch request for: ${event.request.url}`)
})
