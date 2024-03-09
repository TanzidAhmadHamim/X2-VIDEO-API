'use strict';
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = require("./x2server.js");
const log = require("../utils/logger");
const checkAPI = require("../utils");
const config = require("../config.json");
const APIKEY = process.cwd() + "/utils/APIKEY.json"
const app = express();
const getIP = require('ipware')().get_ip;
const fs = require('fs');

global.checkAPI = checkAPI.check_api_key
global.config = config;
global.APIKEY = APIKEY;
global.home = process.cwd() + '/x2.html';

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    var ipInfo = getIP(req);
    var block = require("../utils/block-ban/block.js")(ipInfo.clientIp)
    if (block == true) return
    var limit = require("../utils/block-ban/limit-request.js")(ipInfo.clientIp)
    var type = global.config.ADMIN.includes(ipInfo.clientIp) ? 'ADMIN' : 'IP'
    log(`${type}: ${ipInfo.clientIp} - X2 REQUESTED TO PATH: ${decodeURIComponent(req.url)}`, '• X2 •');
    next();
});

app.use("/", server);
app.set("json spaces", 4);
app.use((error, req, res, next) => {
    res.status(error.status).json({
        message: error.message
    });
});

app.set('port', (process.env.PORT || 8888));
app.get('/', function (request, response) {
    response.sendFile(global.home);
}).listen(app.get('port'));
app.get('/styles.css', function (request, response) {
    response.sendFile(global.css);
})
app.get('/docs', function (request, response) {
    response.sendFile(global.docs);
})
const port = app.get('port');
log(`X2 API is running, server is listening on ${port}`, '• X2 •');
app.post('/upcode', function (req, res) {
    var code = req.body.code;
    var id = ((Math.random() + 1).toString(36).substring(2)).toUpperCase()
    fs.writeFile(
        `${__dirname}/public/codeStorage/database/_${id}.js`,
        code,
        "utf-8",
        function (err) {
            if (err) return res.json({
                status: false,
                url: 'CANT UPLOAD YOUR CODE IN X2 SERVER!'
            })
            return res.json({
                status: true,
                url: 'https://docs-api.nguyenhaidang.ml/upcode/raw/?id=' + id
            })
        }
    );
});
