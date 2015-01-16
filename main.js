$(document).ready(function () {
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
          ;

        BAT.resize(nSize.width, nSize.height);
        BAT.setWindowPosition(scrSize.width - nSize.width, 35);

        if (!icon) {
            $("#icon", $not).hide();
        } else {
            $("#icon", $not).attr("src", icon);
        }

        $("#title").html(title);
        $("#description").html(description);

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
