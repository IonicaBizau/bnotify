$(document).ready(function () {

    $(window).on("contextmenu", function () {
        return false;
    });

    // Connect to websocket
    var ws = new WebSocket("ws://localhost:1111");

    setTimeout(function () {

        // Prepare data
        var argv = BAT.argv()
          , title = argv[5]
          , description = argv[6]
          , icon = argv[7]
          , duration = argv[8]
          , scrSize = BAT.getScreenSize()
          , $not = $(".notification")
          ;

        // Set the window and the title
        $("#title").html(title);
        $("#description").html(description);

        // Set the icon
        if (!icon) {
            $("#icon", $not).hide();
        } else {
            $("#icon", $not).attr("src", icon);
        }

        // Compute positions
        var br = $not.get(0).getBoundingClientRect()
          , nSize = {
                width: $not.outerWidth(true)
              , height: $not.outerHeight(true) + 20
            }
          , position = {
                left: scrSize.width - nSize.width
              , top: 35
            }
          ;

        // WS Communication
        ws.onmessage = function (event) {
            event = JSON.parse(event.data);
            if (event.ev === "down") {

                $(position).animate({ top: position.top + nSize.height - 10 }, {
                    duration: 100,
                    step: function() {
                        BAT.setWindowPosition(this.left, this.top);
                    }
                });

            }
        };

        ws.onopen = function () {
            ws.send(JSON.stringify({
                ev: "down"
              , id: argv.slice(-1)[0]
            }));
        };

        // Resize the window
        BAT.resize(nSize.width, nSize.height);
        BAT.setWindowPosition(position.left, position.top);

        // Set timeout
        setTimeout(function() {
            $not.fadeIn();
            setTimeout(function() {
                $not.fadeOut(function () {
                    BAT.closeWindow();
                });
            }, parseInt(duration));
        }, 0);
    }, 0);
});
