// Dependencies
var Lien = require("lien")
  , WebSocketServer = require("ws").Server
  , Exec = require("child_process").exec
  , Ul = require("ul")
  ;

// Opened Windows
var _windows = {};

// Init lien server
var app = new Lien({
    host: "localhost"
  , port: 1111
  , root: __dirname + "/public"
});

// Add page
app.page.add("/", function (lien) {
    lien.file("/index.html");
});

app.page.add("/api/open", "post", function (lien) {
    console.log(lien.data);
    var id = Math.random().toString(36);

    _windows[id] = lien.data = Ul.merge({
        title: ""
      , description: ""
      , duration: 4000
      , icon: ""
    }, lien.data);

    lien.data.title = lien.data.title.replace(/\"/g, "\\\"");
    lien.data.description = lien.data.description.replace(/\"/g, "\\\"");

    var command =
        "bat -d http://localhost:1111 --tt -u \"F\" \"F\" \"F\" \"F\" \"F\""
        .replace("F", lien.data.title)
        .replace("F", lien.data.description)
        .replace("F", lien.data.icon)
        .replace("F", lien.data.duration)
        .replace("F", id)
        ;

    console.log(command);

    Exec(command, function (err, stdout) {
        console.log(err || stdout);
        delete _windows[id];
    });

    lien.end(lien.data);
});


// Websocket server
var wss = new WebSocketServer({ server: app._server });
wss.on("connection", function(ws) {
    ws.onmessage = function (e) {
        e = JSON.parse(e.data);
        if (e.ev === "down") {
            _windows[e.id].ws = ws;
            for (var k in _windows) {
                if (k === e.id) { continue; }
                var cWin = _windows[k];
                if (cWin.ws) {
                    cWin.ws.send(JSON.stringify({
                        ev: "down"
                    }));
                }
            }
        }

        if (e.ev === "up") {
            delete _windows[e.id];
            for (var k in _windows) {
                var cWin = _windows[k];
                if (cWin.ws) {
                    cWin.ws.send(JSON.stringify({
                        ev: "up"
                    }));
                }
            }
        }
    };
    ws.send(JSON.stringify(), function() {});
});

