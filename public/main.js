$(document).ready(function () {

    var ws = new WebSocket("ws://localhost:1111");

    setTimeout(function () {
        var argv = BAT.argv()
          , title = argv[5]
          , description = argv[6]
          , icon = argv[7]
          , duration = argv[8]
          , scrSize = BAT.getScreenSize()
          , $not = $(".notification")
          , nSize = {
                width: $not.outerWidth(true)
              , height: $not.outerHeight(true)
            }
          , position = {
                left: scrSize.width - nSize.width
              , top: 35
            }
          ;

        ws.onmessage = function (event) {
            BAT.debug(event.data);
            event = JSON.parse(event.data);
            if (event.ev === "down") {
                BAT.setWindowPosition(position.left, position.top += nSize.height + 10);
            }

            if (event.ev === "up") {
                BAT.setWindowPosition(position.left, position.top -= nSize.height + 10);
            }
        };


        BAT.resize(nSize.width, nSize.height);
        BAT.setWindowPosition(position.left, position.top);

        if (!icon) {
            $("#icon", $not).hide();
        } else {
            $("#icon", $not).attr("src", icon);
        }

        $("#title").html(title);
        $("#description").html(description);
        ws.onopen = function () {
            ws.send(JSON.stringify({
                ev: "down"
              , id: argv.slice(-1)[0]
            }));
        };

        setTimeout(function() {
            $not.fadeIn();
            setTimeout(function() {
                $not.fadeOut(function () {
                    ws.send(JSON.stringify({
                        ev: "up"
                      , id: argv.slice(-1)[0]
                    }));
                    BAT.closeWindow();
                });
            }, parseInt(duration));
        }, 0);
    }, 0);
});
