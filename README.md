![](http://i.imgur.com/GDWvTpp.png)

# BNotify
A notification system written in NodeJS using the BAT platform.

## Installation

```sh
$ npm install -g bnotify
```

## Usage

```sh
$ bnotify <title> <description> <duration> <icon>
```

## Example

### Single notification

```sh
bnotify 'Hello World' 'I am BNotify' 10000
```

![](http://i.imgur.com/kzaJa58.png)

### Multiple notifications

![](http://i.imgur.com/nnHdnDu.png)

### Using as library

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


## Usage

## Documentation
## `BNotify(options)`
Opens a new notification window.

### Params
- **Object** `options`: An object containing the following fields:
 - `title` (String): The notification title.
 - `description` (String): The notification description.
 - `duration` (Number): The notification duration.
 - `icon` (String): The notification icon.

## How to contribute
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
