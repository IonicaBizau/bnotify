
[![bnotify](http://i.imgur.com/GDWvTpp.png)](#)

# `$ bnotify`

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/bnotify.svg)](https://www.npmjs.com/package/bnotify) [![Downloads](https://img.shields.io/npm/dt/bnotify.svg)](https://www.npmjs.com/package/bnotify) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A notification system written in NodeJS using the BAT platform.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g bnotify
```


Then, run `bnotify --help` and see what the CLI tool can do.


```
$ bnotify --help
Usage: bnotify <title> <description> <duration> <icon>
```


Ensure you have [installed](https://github.com/IonicaBizau/dotfiles#applications) and [configured NodeJS and NPM](https://github.com/IonicaBizau/dotfiles#npm-config).


Ensure you have installed the [BAT](https://github.com/IonicaBizau/bat#installation) on your machine.

## Screenshots
```sh
$ bnotify 'Hello World' 'I am BNotify' 10000
```
![](http://i.imgur.com/kzaJa58.png)

### Multiple notifications
![](http://i.imgur.com/nnHdnDu.png)

### Multiple notifications
![](http://i.imgur.com/nnHdnDu.png)


## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save bnotify
```



```js
// Dependencies
var BNotify = require("bnotify");

// Show the notification
BNotify({
    title: "Test Notification"
  , description: "Adipisicing molestias soluta consectetur debitis doloribus. Doloremque amet temporibus suscipit quis ipsum vitae rerum ad iure nulla repellat iure molestias. Provident reiciendis veritatis doloribus maxime eum repellendus aut possimus ab!"
  , duration: 4000
  , icon: "/bell.png"
}, function () {
    process.exit(0);
});
```

## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
