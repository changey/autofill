var casper = require('casper').create();
// starting the casper functionality by following the url given

casper.start('https://www.lifemiles.com/index.aspx');
casper.viewport(1500,1500);

// Fill the login form that appear in twitter login page ,here the form class = clearfix signin js-signin ,username field name attribute =session[username_or_email] and password field name = session[password] 

casper.then(function() {
this.fill('#status-bar', {
  'txtUser': 'geraldmelodia@outlook.com',
  'username-pass': 'projectms',
  'txtPassword': 'projectms'
}, false);
this.wait(1000);
});
casper.then(function clickButton() {
	this.click('#botonlogin');
  this.wait(1000);
});

casper.waitForSelector('#botonlogin', function() {
  this.click('#botonlogin');
});

casper.thenOpen('https://www.lifemiles.com/eng/use/red/dynredpar.aspx');

casper.then(function() {
  this.captureSelector('enjoy.png', 'body');
  this.fillSelectors('#requirementsform', {
    '#textOrigen': 'San Francisco (SFO), United States',
    '#textDestino': 'Taipei, Taiwan Taoyuan International Airport (TPE), Taiwan',
    '#fechaSalida': '06/23/2014',
    '#fechaRegreso': '06/29/2014'
  }, false);
});

casper.evaluate(function() {
  
  return parent.document.getElementById('requirementsform').submit()

});

casper.then(function clickButton() {

  var titleText = parent.document.getElementById('requirementsform').submit();
  this.echo('origin: ', titleText);
  //this.echo('Title is: ' + titleText);
  
});

//casper.thenOpen('https://www.lifemiles.com/eng/use/red/dynredcal.aspx?qd=2');

casper.then(function submit() {
  this.wait(1000);
  this.capture('after.png');
});

//casper.then(function clickButton() {
//
//  var titleText = this.evaluate(function() {
//    return submitForm
//  });
//  this.echo('origin: ', titleText);
//  //this.echo('Title is: ' + titleText);
//  this.evaluate(function() {
//    document.querySelector('a[href="javascript:goForm();"]').id = 'New';
//  });
//  this.echo('Title is now: ' + this.evaluate(function() {
//    return document.querySelector('a[href="javascript:goForm();"]').id;
//  }));
//  ///this.capture('after.png');
//  
//});

//casper.waitForSelector('a[href="javascript:goForm();"]', function() {
//  this.click('a[href="javascript:goForm();"]');
//  this.wait(3000);
//  this.capture('after.png');
//});

//casper.then(function clickButton() {
//  this.click('a[href="javascript:goForm();"]');
//  var nameCount = this.evaluate(function() {
//    var names = $('a[href="javascript:goForm();"]');
//    names.id = "foo";
//    //this.captureSelector('anchor.png', names);
//    return names.length;
//  });
//  this.echo(nameCount);
//  
//  this.captureSelector('after.png', 'body');
//});

//casper.then(function clickButton() {
//  var nameCount = this.evaluate(function() {
//    var names = $('a[href="javascript:goForm();"]');
//    //this.captureSelector('anchor.png', names);
//    return names.id;
//  });
//  this.echo(nameCount);
//
//});

//casper.waitForSelector('a[href="javascript:goForm();"]', function() {
//  this.click('a[href="javascript:goForm();"]');
//  this.captureSelector('after2.png', 'a[href="javascript:goForm();"]');
//});


//Then run the casperjs 
casper.run();