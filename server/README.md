# API Mocks

Api mocks in this project are implemented client-side with [mockjax](https://github.com/jakerella/jquery-mockjax) and can be found in [ajax-mock.js](../../tests/helpers/ajax-mock.js)

## Why?

Although ember-cli comes with a great http mock library out of the box `ember g http-mock` it's trickier running it on [travis](http://travis-ci.org) due to the fact it actually stands up a local server.

Mockjax works easily because ember uses jquery ajax for http requests.