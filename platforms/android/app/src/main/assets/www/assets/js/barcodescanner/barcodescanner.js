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
    var result = null;
      window.cordova.plugins.barcodeScanner.scan(
              function (result) {
                result=  result.text;
              },
              function (error) {
                result = "Scanning failed: " + error;
              }
      );
      return result;
  },
};
