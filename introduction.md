Question : What is Angular ?
Answer : Angular is a framework for building client application in HTML, CSS and Javascript / Typescript.

Question : Why do we need Angular ?
Answer : - It makes application easy to maintain and test.
         - It gives our application a clean structure. It includes a lot to re-usable code.
         - Angular makes your life a lot easier.

Question : How to setup development environment ?
Answer : You need following to setup angular project :
    - Install latest stable version of Nodejs.
    - Install Angular CLI using npm(Node package manager) by running "npm install -g @angular/cli"
    - Run "ng new hello-world" to create new angular application
    - Visual studio code is the best editor to work with Angular
    - Go to the application folder and run "ng serve" to run the angular application
    - Head over to locahost:4200 to see the application running.

Question : Explain the structure of an Angular application ?
Answer :
  1. e2e(folder) : stands for End to End. Here we write end to end test for the application. There are basically automated test which simulates the real user.
  2. node_modules(folder) : Stores all the third party library on which the application may depend upon. This folder is for development purpose only. Part of this folder is deployed with the application and we don't put this folder to a server.
  3. src(folder) : Actual source code of the application lives in src folder.
  4. src/app(folder) : Inside app folder we have a modules and a components. Every application has at least a module and a component.
  5. src/assets(folder) : Static assets of the application are stored inside this folder, like image, icon etc.
  6. src/environment(folder) : This is where we store the application setting for different environment like : production and development.
  7. Other files are :
    - favicon.ico : It is the icon of the application.
    - index.html  : HTML file which contains our angular application. For now it don't have any reference to any .js and .css file. These references will be dynamically added to the page.
    - main.ts : This is the starting point of angular application. Works like a main method in other programming languages. Here we bootstrap the main module of the application.
    - pollyfills.ts : Required for angular to run.
    - styles.css
    - .angular-cli.json : Settings for angular cli goes here.
    - package.json : determines the dependencies of our angular application.
    - tsconfig.json : Settings here will be used by the typescript compiler.
    - tslint.json: Setting for tslint(Analysis tool for typescipt) goes here.

Question : How Angular application is bundled ?
Answer : Angular CLI uses webpack, which is a build automation tool. It gets all stylesheets and javascript file and bundles and minifies that bundle. It creates following bundle files:
  - pollyfills.bundle.js : Contains the script to fill the gap between the version of javascript needed by Angular and the version of javascript supported by most of the browsers.
  - main.bundle.js : It contains all the source code of the application.
  - styles.bundle.js : It included all the stylsheets used in the application.
  - vendor.bundle.js : It includes all third party libraries.
  - All these files are added to the html page at runtime by webpack.. you can view them inspecting the source code of the application.

  - whenever a file is changed, webpack automatically recompiles your application and refreshes your bundle and reloads the page in the browser- This feature of webpack is called "Hot module replacement/re-loading"

Question : History of Angular Version ?
Answer : - AngualrJS was introduced in 2010 to build frontend javascript applications.
          - Angular2 with typescript came out in 2016 and was completely different from angular 1.x versions.
          - 2.0 - 2.1 - 2.2 - 2.3 - 4
          - To align all packages version with @angular/router, Angular team skipped to 4 from 2.
          - Angular 4 is not a major upgrade to angular 2.
          - AngularJS (1.x versions)
          - Angular (2+ versions)

