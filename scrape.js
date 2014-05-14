//pjs.addSuite({
//  // single URL or array
//  url: '/Users/changey/Documents/aaproject_ms/autofill/success_search.html',
//  // single function or array, evaluated in the client
//  scraper: function() {
//    return $('.fr-table-heading').text();
//  }
//});

pjs.addSuite({
  url: 'http://en.wikipedia.org/wiki/List_of_towns_in_Vermont',
  scraper: function() {
    return $('#sortable_table_id_0 tr').slice(1).map(function() {
      var name = $('td:nth-child(2)', this).text(),
        county = $('td:nth-child(3)', this).text(),
      // convert relative URLs to absolute
        link = _pjs.toFullUrl(
          $('td:nth-child(2) a', this).attr('href')
        );
      return {
        model: "myapp.town",
        fields: {
          name: name,
          county: county,
          link: link
        }
      }
    }).toArray(); // don't forget .toArray() if you're using .map()
  }
});
-