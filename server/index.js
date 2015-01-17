// Dependencies
var Lien = require("lien")
  , WebSocketServer = require("ws").Server
  , Exec = require("child_process").exec
  , Ul = require("ul")
  , Bat = require("batjs")
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

// Listen for requests on /api/open
app.page.add("/api/open", "post", function (lien) {
    var id = Math.random().toString(36);

    _windows[id] = lien.data = Ul.merge({
        title: ""
      , description: ""
      , duration: 4000
      , icon: ""
    }, lien.data);

    lien.data.title = lien.data.title.replace(/\"/g, "\\\"");
    lien.data.description = lien.data.description.replace(/\"/g, "\\\"");

    Bat({
        d: "http://localhost:1111"
      , tt: true
      , u: true
      , _: [
            lien.data.title
          , lien.data.description
          , lien.data.icon
          , lien.data.duration
          , id
        ]
    }, function (err, stdout) {
        delete _windows[id];
    });

    lien.end(lien.data);
});


// Websocket server
var wss = new WebSocketServer({ server: app._server });
wss.on("connection", function(ws) {
    ws.onmessage = function (e) {
        e = JSON.parse(e.data);
        if (e.ev === "down" && _windows[e.id]) {
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
    };
});

