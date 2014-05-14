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
    var flight;
    $.each($('#tblODs tr').slice(3), function() {
      var totalDeparts,
        totalArrives,
        totalDuration,
        departs,
        arrives,
        stops = "",
        cabin = "",
        type = "";
      var flightNumber = $('td:nth-child(2)', this).text();
      if(flightNumber !== "") {
        if (this.className.indexOf("tbl-collapse") > -1) {
          type = "multi";
          totalDeparts = $('td:nth-child(3)', this).text();
          totalArrives = $('td:nth-child(4)', this).text();
          totalDuration = $('td:nth-child(5)', this).text();
          flight = {
            type: type,
            flightNumber: flightNumber,
            departs: totalDeparts,
            arrives: totalArrives,
            duration: totalDuration
          }
        } else if (this.className.indexOf("tbl-detail") > -1) {
          type = "detail";
          totalDeparts = $('td:nth-child(3)', this).text();
          totalArrives = $('td:nth-child(4)', this).text();
          totalDuration = $('td:nth-child(5)', this).text();
          stops = $('td:nth-child(6)', this).text();
          cabin = $('td:nth-child(6)', this).text();
          flight = {
            type: type,
            flightNumber: flightNumber,
            departs: totalDeparts,
            arrives: totalArrives,
            stops: stops,
            cabin: cabin
          }
        } else {
          type = "direct";
          totalDeparts = $('td:nth-child(3)', this).text();
          totalArrives = $('td:nth-child(4)', this).text();
          totalDuration = $('td:nth-child(5)', this).text();
          stops = $('td:nth-child(6)', this).text();
          cabin = $('td:nth-child(6)', this).text();
          flight = {
            type: type,
            flightNumber: flightNumber,
            departs: totalDeparts,
            arrives: totalArrives,
            duration: totalDuration,
            stops: stops,
            cabin: cabin
          }
        }

        output.push(flight);
      }
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
