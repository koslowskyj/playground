//http://www.protractortest.org/#/
'use strict';

exports.config = {


   baseUrl: 'http://localhost:3000/',
   allScriptsTimeout: 11000,
   selenimumAddress: 'http://localhost:4444/wd/hub',
   
   //seleniumServerJar: 'selenium/selenium-java-2.53.0.jar',
   localSeleniumStandaloneOpts: {
   		port: 4444,
   		args: [] 		
   },

   specs: [
      'src/main/test/integration/*.js'
   ],

   capabilities: {
      'browserName': 'chrome'
   },

   framework: 'jasmine',

   jasmineNodeOpts: {
	  showColors: true,   	  
      defaultTimeoutInterval: 30000
   }
};