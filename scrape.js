//pjs.addSuite({
//  // single URL or array
//  url: '/Users/changey/Documents/aaproject_ms/autofill/success_search.html',
//  // single function or array, evaluated in the client
//  scraper: function() {
//    return $('.fr-table-heading').text();
//  }
//});
var js = document.createElement("script");

js.type = "text/javascript";
js.src = "vendor/js/underscore.js";

document.body.appendChild(js);

pjs.addSuite({
  url: 'file://localhost/Users/changey/Documents/aaproject_ms/autofill/success_search.html',
  scraper: function() {
    var output = [];
    $.each($('#tblODs tr').slice(3), function() {
      var totalDeparts,
          totalArrives,
          totalDuration,
          stops = "",
          cabin = "",
          type = "";
      if (this.className.indexOf("tbl-collapse") > -1) {
        type = "multi";
      } else {
        type = "direct";
      }
      var flightNumber = $('td:nth-child(2)', this).text();
        if (flightNumber === "Multiple") {
            totalDeparts = $('td:nth-child(3)', this).text();
            totalArrives = $('td:nth-child(4)', this).text();
            totalDuration = $('td:nth-child(5)', this).text();
        } else {
          totalDeparts = $('td:nth-child(3)', this).text();
          totalArrives = $('td:nth-child(4)', this).text();
          totalDuration = $('td:nth-child(5)', this).text();
          stops = $('td:nth-child(6)', this).text();
          cabin = $('td:nth-child(6)', this).text();
        }

      var flight = {
        type: type,
        flightNumber: flightNumber,
        departs: totalDeparts,
        arrives: totalArrives,
        duration: totalDuration,
        stops: stops,
        cabin: cabin
      }
      output.push(flight);
    });
    var outputJson = JSON.stringify(output, null, ' ');
    console.log(outputJson);

//    return $('#tblODs tr').slice(3).map(function() {
//      var flightNumber = $('td:nth-child(2)', this).text(),
//        departs = $('td:nth-child(3)', this).text(),
//      // convert relative URLs to absolute
//        link = _pjs.toFullUrl(
//          $('td:nth-child(2) a', this).attr('href')
//        );
//      return {
//        model: "myapp.flight",
//        fields: {
//          flightNumber: flightNumber,
//          departs: departs,
//          link: link
//        }
//      }
//    }).toArray(); // don't forget .toArray() if you're using .map()
  }
});
