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

## Features of this seed

* Uses angular-cli to scaffold the project
* Adds demo pages to use salient application upgrades
    * [ ] slim scrollbars
    * [ ] Entire application is lazy loaded only - even the home page
    * [ ] uses yarn for any new package install and controlls yarn-lock file..
    * [ ] Authorization directive
    * [ ] Loading directive
    * [ ] conditional console.log output controlled via webpack?

## Notes

* IE 11 support is disabled by default. If you need to support IE11 - please uncheck appropriate blocks in polyfills.ts. This increases size of polyfills bundle file.