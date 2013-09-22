# generator-booang
================

A yoeman generator with angular (v1.2.0-rc.2) and bootstrap (v3) versions.

Based on the [MEAN stack](https://github.com/wlepinski/generator-meanstack) generator for Yeoman by W. Lepinski.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed on the latest version.
    `npm install -g yo`
- Install the generator: `npm install -g generator-booang`
- Run: `yo booang`

After that follow the steps below.

1. Use the comand `grunt server` to start the application with built-in preview server with LiveReload on chrome. 
2. Use the command <code>grunt</code> to generate the optimized files for your application.


### App
Sets up a new MEAN (MongoDB, Expressjs, AngularJS and Node.js) app with Twitter Bootstrap, generating all the boilerplate you need to get started. The app generator also optionally installs Jquery.

## Bower Components

The following packages are always installed by the [app](#app) generator:

* angular
* angular-mocks
* angular-scenario
* angular-animate
* angular-route
* angular-cookies
* angular-loader
* angular-resource
* angular-sanitize
* angular-touch
* bootstrap
* es5-shim
* json3

Bower is set to install packages on `./app/libs/`

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)