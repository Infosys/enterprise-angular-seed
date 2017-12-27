# Angular-CLI based Angular Seed

## Dependencies
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.
Please install angular cli to make use of this project first..
`npm i -g @angular/cli `
OR
`yarn global add @angular/cli`

This application also makes uses of yarn to install dependencies.. please install yarn
'npm i -g yarn'
Once yarn is installed. you can use `yarn add pkg` or `yarn add pkg -D` to install any dependency.

if you use npm to install packages - it will fail with error saying `yarn-or-die`. That's your cue to use yarn command.

## Features of this seed

* Uses angular-cli to scaffold the project
* Adds demo pages to use salient application upgrades
    * [x] slim scrollbars
    * [x] Entire application is lazy loaded only - even the home page
    * [x] uses yarn for any new package install and controlls yarn-lock file..
    * [ ] Authorization directive
    * [ ] Progress / Busy Indicator Directive
    * [x] conditional console.log output controlled via webpack?

## Notes

* IE 11 support is disabled by default. If you need to support IE11 - please uncheck appropriate blocks in polyfills.ts. This increases size of polyfills bundle file.


## Salient Features
* Uses angular 5.0.0+. So optimizer is available.
* Everything is lazy loaded. App module contains nothing. It simply redirects to home module.
* Slim scrollbars using perfect-scrollbars. See configuration in home.module. Still need to experiment with configuration and individual component level setup.
* configurable logging using loglevel. see configuration in app.component.ts. You can override the same in each component if you so desire. In Production the log level are automatically set to 'warn' via environment variable.
* Loader / spinner directive.. There are couple of options.. e.g. [ngx-loading](https://github.com/Zak-C/ngx-loading) - this is simple.. but developer must remember to turn on and off! On the other hand [angular2-busy](https://github.com/devyumao/angular2-busy) only refers to observables.. but seems little unsupported at the moment. 
    * angular2-busy is working but puts the backdrop on the entire page.. not to the host element only.