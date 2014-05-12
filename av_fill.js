var casper = require('casper').create();
// starting the casper functionality by following the url given

casper.start('https://www.lifemiles.com/index.aspx');
casper.viewport(1500,1500);

// Fill the login form that appear in twitter login page ,here the form class = clearfix signin js-signin ,username field name attribute =session[username_or_email] and password field name = session[password] 

casper.then(function() {
this.fill('#status-bar', {
  'txtUser': 'alexdiaz03@outlook.com',
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
//  this.fillSelectors('#requirementsform', {
//    '#textOrigen': 'San Francisco (SFO), United States',
//    '#textDestino': 'Taipei, Taiwan Taoyuan International Airport (TPE), Taiwan',
//    '#fechaSalida': '06/23/2014',
//    '#fechaRegreso': '06/29/2014'
//  }, false);

  this.evaluate(function() {
    $("#cmbOrigen option:selected")[0].text='San Francisco (SFO), United States';
    $("#cmbOrigen option:selected")[0].value="SFO";
    $('#textOrigen').val('San Francisco (SFO), United States');
    $('#textDestino').val('Taipei, Taiwan Taoyuan International Airport (TPE), Taiwan');

    $("#cmbDestino option:selected")[0].text='Taipei, Taiwan Taoyuan International Airport (TPE), Taiwan';
    $("#cmbDestino option:selected")[0].value="TPE";
    $('#fechaSalida').val('06/23/2014');
    $('#fechaRegreso').val('06/29/2014');
    submitForm();
    //$('a[href="javascript:goForm();"]').click();
    var names = $("#cmbDestino option:selected")
  });
  
//  var paragraph = this.evaluate(function() {
//    return document.querySelector('#textOrigen').val();
//  });
//  this.echo("origin: ", paragraph);
//
//  var paragraph2 = this.evaluate(function() {
//    document.querySelector('#fechaSalida').setAttribute('value', '06/23/2014');
//    return "foo";
//  });
//  this.echo("departureDate: ", paragraph2);
});



//casper.then(function() {
//
//  this.wait(1000);
//  this.capture('after.png');
//});


//
//casper.thenEvaluate(function() {
//  document.querySelector('#textOrigen').setAttribute('value', 'San Francisco (SFO), United States');
//  document.querySelector('#textDestino').setAttribute('value', 'Taipei, Taiwan Taoyuan International Airport (TPE), Taiwan');
//  document.querySelector('#fechaSalida').setAttribute('value', '06/23/2014');
//  document.querySelector('#fechaRegreso').setAttribute('value', '06/29/2014');
//  //document.querySelector('#requirementsform').submit();
//});

casper.waitForSelector('#aspnetForm', function() {
  this.echo(this.getCurrentUrl());
  this.capture('after.png');
}, function() {
  this.echo("Timeout reached");
  this.echo(this.getCurrentUrl());
  this.capture('fail.png');
  // do something
}, 150000);

//casper.then(function() {
//
//  this.wait(10000);
//  this.capture('after.png');
//});


//Then run the casperjs 
casper.run();