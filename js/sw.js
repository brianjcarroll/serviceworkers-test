// service workers shit goes here.

(function () {
  if (navigator.serviceWorker) {
    console.log('This browser supports service workers.');

    navigator.serviceWorker.register(
      'main.js',
      'sw.js',
      '../index.html',
      '../css/main.css',
      '../css/normalize.css',
      '..normalize.min.css'
    ).then(
      function (sw) {
        console.log(sw);
      }
    )
  }
}());

console.log('hey');
