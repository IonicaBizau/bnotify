[![bnotify](http://i.imgur.com/GDWvTpp.png)](#)

# `$ bnotify` [![Support this project][donate-now]][paypal-donations]

A notification system written in NodeJS using the BAT platform.

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g bnotify
```

Then, run `bnotify --help` and see what the CLI tool can do.

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

## Example

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

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md