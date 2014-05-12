var casper = require('casper').create();
casper.test.begin("Can select a different tour location", {
  setUp: function() {
    casper.start('https://www.lifemiles.com/index.aspx');
//    casper.evaluate(function() {
//      localStorage.clear();
//    }, {});
  },

  test: function(test) {
    casper
      .then(function() {
        this.fill('#status-bar', {
          'txtUser': 'theofficiallago2@gmail.com',
          'txtPassword': 'projectms'
        }, false);

      })

      .thenClick("#botonlogin", function() {
      })

      .waitForSelector('a.hi-name', function() {
        test.assertExists('a.hi-name');

      })

    casper.run(function() {
      test.done();
    });

  }
});