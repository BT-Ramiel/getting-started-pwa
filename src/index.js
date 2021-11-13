if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then((registration) => {
      console.log('Service worker registered')
      console.log(registration)
    })
    .catch((error) => {
      console.error('Service worker registration failed')
      console.error(error)
    })
} else {
  console.warn("Your browser doesn't support service workers")
}
