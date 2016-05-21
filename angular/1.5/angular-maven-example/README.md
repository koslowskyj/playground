Playground project to test usage of maven and npm in one buildchain.

Prequisites:
- install java jdk 
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


