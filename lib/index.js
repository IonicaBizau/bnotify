// Dependencies
var JsonRequest = require("jsonrequest")
  , Forever = require("forever-monitor")
  ;

// Constants
const HOST = "http://localhost:1111/api/open";

var _s = false;
function daemonize() {
    if (_s === true) { return; }
    _s = true;
    var child = new Forever.Monitor(__dirname + "/../server/index.js");
    child.on("exit", function (e) {
        _s = false;
        daemonize();
    });
    child.start();
}


/**
 * BNotify
 * Opens a new notification window.
 *
 * @name BNotify
 * @function
 * @param {Object} options An object containing the following fields:
 *
 *  - `title` (String): The notification title.
 *  - `description` (String): The notification description.
 *  - `duration` (Number): The notification duration.
 *  - `icon` (String): The notification icon.
 *
 * @return {undefined}
 */
var BNotify = module.exports = function (options, callback) {

    // Defaults
    callback = callback || function (err) {
        if (err) throw err;
    };

    // Make the request
    JsonRequest({
        url: HOST
      , method: "POST"
      , data: options
    }, function (err, data) {
        if (err && err.code === "ECONNREFUSED") {
            daemonize();
            setTimeout(function() {
                BNotify(options, callback)
            }, 100);
            return;
        }
        callback(err, data);
    });
};
