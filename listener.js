const WebSocket2 = require('hyco-ws');

const ns = "latam-cppr.servicebus.windows.net";
const path = "latam-cppr-mdc";
const keyrule = "defaultListener";
const key = "4HmiBLPhVxtckJDeeCcDiR1ByOX8npSfGUS1U9ojnX8=";

// 'mssql://tableau:sord@GSCLSCL6019/BI/SORD'
// Endpoint=sb://latam-cppr.servicebus.windows.net/;SharedAccessKeyName=defaultListener;SharedAccessKey=4HmiBLPhVxtckJDeeCcDiR1ByOX8npSfGUS1U9ojnX8=;EntityPath=latam-cppr-mdc

var wss = WebSocket2.createRelayedServer(
    {
        server : WebSocket2.createRelayListenUri(ns, path),
        token: WebSocket2.createRelayToken('http://' + ns, keyrule, key)
    }, 
    function (ws) {
        console.log('connection accepted');
        ws.onmessage = function (event) {
            console.log(event.data);
        };
        ws.on('close', function () {
            console.log('connection closed');
        });       
});

console.log('listening');

wss.on('error', function(err) {
    console.log('error' + err);
});