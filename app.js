var connect = require("connect");
var server = require("serve-static");
var routerConnect = require("connect-route");
var routerPiano = require("./modules/router");

var app = connect();

app.use(routerConnect(routerPiano));

app.use(server(__dirname + '/public'));
app.use(server(__dirname + '/public/libs'));

app.listen(8000);
