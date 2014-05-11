var casper = require('casper').create();
// starting the casper functionality by following the url given

casper.start('http://www.united.com/web/en-US/default.aspx?root=1');
casper.viewport(1500,1500);
// Fill the login form that appear in twitter login page ,here the form class = clearfix signin js-signin ,username field name attribute =session[username_or_email] and password field name = session[password] 

casper.then(function() {

this.fill('#bookingBox', {
	'ctl00$ContentInfo$Booking1$Origin$txtOrigin': 'SFO',
	'ctl00$ContentInfo$Booking1$Destination$txtDestination': 'PEK',
	'ctl00$ContentInfo$Booking1$DepDateTime$Depdate$txtDptDate': '5/11/2014',
	'ctl00$ContentInfo$Booking1$RetDateTime$Retdate$txtRetDate': '6/6/2014'
}, false);


// }, false);
});
casper.then(function clickButton() {
	this.click('#ctl00_ContentInfo_Booking1_SearchBy_rdosearchby3');
    this.click('input[name="ctl00$ContentInfo$Booking1$btnSearchFlight"]');
});

// .thenClick('input[name="ctl00$ContentInfo$Booking1$btnSearchFlight"]', function() {
	
// })


//This is for triggering the wait function

casper.then(function() {
this.waitFor(function check() {
return this.Waiter();
}, function then() {
this.echo('Olayy!');
});
});

//After that am putting the execution wait for 3 seconds to slow down the procedure

casper.Waiter = function() {
// adjust wait time between clicks
this.wait(3000, function() {
this.captureSelector('foo.png', '#mainContent');
this.echo('I waited for 3 seconds.');
});
return true;
};

//And at last am returning the value entered in the username field to check all worked correctly

casper.then(function() {
var first_name = this.evaluate(function() {
return $('.js-username-field').val();
});require('utils').dump(first_name);
});

//Then run the casperjs 
casper.run();