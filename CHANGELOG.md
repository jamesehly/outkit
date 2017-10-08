# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.0.1"></a>
## [1.0.1](https://github.com/jamesehly/outkit/compare/v1.0.0...v1.0.1) (2017-10-08)


### Bug Fixes

* **window:** add default options and placement ([3480ede](https://github.com/jamesehly/outkit/commit/3480ede))
* **window:** remove unused options ([c686184](https://github.com/jamesehly/outkit/commit/c686184))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/jamesehly/outkit/compare/v0.2.5...v1.0.0) (2017-10-08)


### Bug Fixes

* **architecture:** drop component suffix from classes ([1048072](https://github.com/jamesehly/outkit/commit/1048072))
* **architecture:** rename component directory to components ([d043070](https://github.com/jamesehly/outkit/commit/d043070))
* **cleanup:** remove examples and animator ([380fdcd](https://github.com/jamesehly/outkit/commit/380fdcd))
* **export:** fix re-exporting default exports ([df03373](https://github.com/jamesehly/outkit/commit/df03373))
* **layout:** fixed bug where calling init added on to child arrays ([d1464c7](https://github.com/jamesehly/outkit/commit/d1464c7))
* **layout:** remove animator from layout children ([8a00621](https://github.com/jamesehly/outkit/commit/8a00621))
* **layout:** set duration to zero on child components for layout ([34d6d96](https://github.com/jamesehly/outkit/commit/34d6d96))
* **logger:** export logger so that you can build exteral components ([93644f8](https://github.com/jamesehly/outkit/commit/93644f8))


### Features

* **component:** refactor component constructor to find element ([94ce674](https://github.com/jamesehly/outkit/commit/94ce674))


### BREAKING CHANGES

* **architecture:** class architecture has been redone so that the Component
suffix was dropped from the component classes. This decision was made to
make it less verbose when instansiating components. new Drawer as opposed
to new DrawerComponent (and drawer is a composite anyway).
* **component:** components now take in a selector query string instead
  of the logger and animator. This was done to make it easier to create
  new third party components, and to make it easier to instantiate
  components without the need for a factory class.  Drawbacks are tight
  coupling with Logger and OutkitAnimator.  The animator can be changed
  after instantiation and I don't see using a different logger.



<a name="0.2.6"></a>
## [0.2.6](https://github.com/jamesehly/outkit/compare/v0.2.5...v0.2.6) (2017-09-02)



<a name="0.2.5"></a>
## [0.2.5](https://github.com/jamesehly/outkit/compare/v0.2.3...v0.2.5) (2017-09-02)


### Bug Fixes

* add dist files ([5bb5699](https://github.com/jamesehly/outkit/commit/5bb5699))



<a name="0.2.3"></a>
## [0.2.3](https://github.com/jamesehly/outkit/compare/v0.2.2...v0.2.3) (2017-09-02)


### Bug Fixes

* add commit all flag ([6c9095c](https://github.com/jamesehly/outkit/commit/6c9095c))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/jamesehly/outkit/compare/v0.2.1...v0.2.2) (2017-08-10)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/jamesehly/outkit/compare/v0.2.0...v0.2.1) (2017-08-10)


### Bug Fixes

* add postbump event to standard version for release ([b9b6916](https://github.com/jamesehly/outkit/commit/b9b6916))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/jamesehly/outkit/compare/v0.1.4...v0.2.0) (2017-08-10)


### Bug Fixes

* change build step to be after versioning ([35b0a9b](https://github.com/jamesehly/outkit/commit/35b0a9b))


### Features

* add vertical layout component ([e346beb](https://github.com/jamesehly/outkit/commit/e346beb))



<a name="0.1.4"></a>
## [0.1.4](https://github.com/jamesehly/outkit/compare/v0.1.3...v0.1.4) (2017-08-08)


### Bug Fixes

* add build step before release step ([acdda68](https://github.com/jamesehly/outkit/commit/acdda68))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/jamesehly/outkit/compare/v0.1.2...v0.1.3) (2017-08-08)


### Bug Fixes

* actually build files this time ([3c05a67](https://github.com/jamesehly/outkit/commit/3c05a67))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/jamesehly/outkit/compare/v0.1.1...v0.1.2) (2017-08-08)


### Bug Fixes

* fix bug step function for animating pixel dimensions ([e9b3344](https://github.com/jamesehly/outkit/commit/e9b3344))



<a name="0.1.1"></a>
## 0.1.1 (2017-07-31)


### Bug Fixes

* add sorry excuse for  readme file and other stuff ([8fb2b01](https://github.com/jamesehly/outkit/commit/8fb2b01))
