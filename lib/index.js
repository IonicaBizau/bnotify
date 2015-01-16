// Dependencies
var JsonRequest = require("jsonrequest");

// Constants
const HOST = "http://localhost:1111/api/open";


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
var BNotify = module.exports = function (options) {
    JsonRequest({
        url: HOST
      , method: "POST"
      , data: options
    }, function (err, data) {
        console.log(err || data);
        process.exit(0);
    });
};
