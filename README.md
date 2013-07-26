# flight-click-trap

[![Build Status](https://secure.travis-ci.org/ahume/flight-click-trap.png)](http://travis-ci.org/ahume/flight-click-trap)

A [Flight](https://github.com/flightjs/flight) component for…

## Installation

```bash
bower install --save flight-click-trap
```

## Example

```javascript
this.after('initialize', function() {
	this.enableClickTrap();
	this.on('componentReceivedClick', function() {
		this.enableComponent();
	});
	this.on('componentLostClick', function() {
		this.disableComponent();
	});
});

```

The clicktrap has a small performance overhead as it's called on every user click, so
you'll likely want to disable it when your component is hidden or unused.

```javascript
this.disableClickTrap()
```

## Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
