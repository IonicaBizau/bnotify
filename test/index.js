// Dependencies
var BNotify = require("../lib");

// Show the notification
BNotify({
    title: "Test Notification"
  , description: "Adipisicing molestias soluta consectetur debitis doloribus. Doloremque amet temporibus suscipit quis ipsum vitae rerum ad iure nulla repellat iure molestias. Provident reiciendis veritatis doloribus maxime eum repellendus aut possimus ab!"
  , duration: 4000
  , icon: "/bell.png"
}, function () {
    process.exit(0);
});

