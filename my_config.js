pjs.addSuite({
  // single URL or array
  url: 'http://en.wikipedia.org/wiki/List_of_towns_in_Vermont',
  // single function or array, evaluated in the client
  scraper: function() {
    return $('h1#firstHeading').text();
  }
});