'use strict';

describe('Example integration tests', function () {
   beforeEach(function () {
      browser.get('/index.html');
   });

   it('should redirect index.html to index.html#/', function () {
      browser.getLocationAbsUrl().then(function (url) {
         expect(url.split('#')[1]).toBe('/');
      });
   });
   
   
});