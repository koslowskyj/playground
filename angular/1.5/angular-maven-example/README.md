Playground project to test usage of maven and npm in one buildchain.

Prequisites:
- install java jdk 
- install git cli https://git-scm.com/downloads
- install maven 3.x.x https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html
- install npm https://www.npmjs.com/package/npm or https://nodejs.org

create a new maven project:
- i chose the following settings for initial creation

```
   <groupId>my.example</groupId>
   <artifactId>angular-maven-example</artifactId>
   <version>0.0.1-SNAPSHOT</version>
   <packaging>pom</packaging>
```

run npm init:
 - creates package json file see also: https://docs.npmjs.com/getting-started/using-a-package.json`
 - output should be similar to this
 
```
   {
      "name": "angular-maven-example",
      "version": "0.0.1",
      "description": "test project to demonstrate maven npm integration",
      "scripts": {
         "test": "karma start"
      },
      "repository": {
         "type": "git",
         "url": "https://github.com/koslowskyj/playground/tree/master/angular/1.5/angular-maven-example.git"
      },
      "author": "koslowskyj",
      "license": "GPL-3.0"
   }
```

 - package.json --> project file and dependency mangement form npm?

add angular to package.json
 - run ```npm install angular -save```
 - creates dependency in package.json
 ```
   "dependencies": {
      "angular": "^1.5.5"
   }
 ```

add karma (a test runner) and jasmine (behaviour driven javascript testing framework) to out test dependencies:
 - run ```npm install karma@0.12.37 --save-dev``` https://www.npmjs.com/package/karma
   ```//install karma with version 0.12.37 this creates us "karma": "^0.12.37" --> 0.12.37 to 1.0.0``` 
 - run ```npm install jasmine-core@2.4.1 --save-dev``` http://jasmine.github.io/
 - run ```npm install karma-jasmine@0.3.8 --save-dev``` https://github.com/karma-runner/karma-jasmine
   ```//karma adapter for jasmine framework```

we should be able to run karma already but it does nothing
````
    $ npm test

    > angular-maven-example@0.0.1 test X:\somewhere\angular-maven-example
    > karma start
   
    (node:4476) fs: re-evaluating native module sources is not supported. If you are
    using the graceful-fs module, please update it to a more recent version.
    (node:4476) DeprecationWarning: process.EventEmitter is deprecated. Use require(
    'events') instead.
    INFO [karma]: Karma v0.12.37 server started at http://localhost:9876/
````

 


