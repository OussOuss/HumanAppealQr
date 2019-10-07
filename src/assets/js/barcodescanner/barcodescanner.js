let varScanApp = {
  // Application Constructor
  initialize: function () {
      this.bindEvents();
  },
  bindEvents: function () {
      document.addEventListener('deviceready', this.onDeviceReady);
  },
  onDeviceReady: function () {
      console.log('Received Device Ready Event');
      Log.initialize(app.displayLogLine);
  },
  scan: function () {
    return new Promise((resolve, reject) => {
      window.cordova.plugins.barcodeScanner.scan(
        (result) => {
          return resolve(result.text);
        },
        (error) => {
          return reject('ERROR');
        }
      );
    });
  },
};
