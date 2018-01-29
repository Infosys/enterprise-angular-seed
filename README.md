# Angular-CLI based Angular Seed

## Dependencies

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.
Please install angular cli to make use of this project first..
`npm i -g @angular/cli`
OR
`yarn global add @angular/cli`

This application also makes uses of yarn to install dependencies.. please install yarn
'npm i -g yarn'
Once yarn is installed. you can use `yarn add pkg` or `yarn add pkg -D` to install any dependency.

if you use npm to install packages - it will fail with error saying `yarn-or-die`. That's your cue to use yarn command.

## Features of this seed

* [x] Uses angular-cli to scaffold the project
* [x] Base reset CSS (via normalize.css and sanitize.css)
* [x] Uses slim scrollbars for the content page
* [x] Entire application is lazy loaded only - even the home page
* [x] Uses yarn for any new package install and controls yarn-lock file..
* [x] conditional console.log output controlled via environment.ts?
* [ ] Adds demo pages to use salient application upgrades
  * [x] Uses primeNG for some basic widgets
  * [x] Authorization directive
  * [ ] Progress / Busy Indicator Directive
  * [x] Uses Animations
  * [ ] Uses More better and subtle Animations
  * [ ] Dynamic component loader example
  * [ ] JSON schema based dynamic forms
  * [ ] Form validations
* [x] Small Chart demo using Chartist
* [x] Prettier to format the code automatically
* [x] Automated build and deploy to gh_pages on github
* [ ] OAuth authentication

## Notes

* IE 11 support is disabled by default. If you need to support IE11 - please uncheck appropriate blocks in polyfills.ts. This increases size of polyfills bundle file.

## Salient Features

* Uses angular 5.0.0+. So optimizer is available.
* Everything is lazy loaded. App module contains nothing. It simply redirects to home module.
* Slim scrollbars using perfect-scrollbars. See configuration in home.module. Still need to experiment with configuration and individual component level setup.
* configurable logging using loglevel. see configuration in app.component.ts. You can override the same in each component if you so desire. In Production the log level are automatically set to 'warn' via environment variable.
* Loader / spinner directive.. There are couple of options.. e.g. [ngx-loading](https://github.com/Zak-C/ngx-loading) - this is simple.. but developer must remember to turn on and off! On the other hand [angular2-busy](https://github.com/devyumao/angular2-busy) only refers to observables.. but seems little unsupported at the moment.
  * angular2-busy is working but puts the backdrop on the entire page.. not to the host element only. Also it is adding platform-browser-dynamic - which is fairly big chunk.. hence I must go for another alternative..
* Authorization is provided via ngx-permissions. To use - we must make a call to BE to retrieve available roles and permissions. Eventually - the entire game is of permissions only using two directives.
  * Need to add RouteGuard example as well as programmatic access to authentication data in modules.
* Animation is implemented for route animation for now. Need more complex animation cases implemented.
* PrimeNG menubar is implemented.
  * Purposefully, font-awesome is not included as the moment as usually.. it is clunky download for couple of icons.
* A catch all component call not-found is looking for any incorrect routing.
* Header and sticky footer has been implemented.
* Application code gets formatted automatically as part of git commit so code sent for review is always formatted!
