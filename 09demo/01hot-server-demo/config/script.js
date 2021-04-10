const path = require("path");
const liveServer = require("live-server");
const env = Object.assign({},require("./env"));

;(function(env) {
    let dirname = __dirname;
    console.log('----',dirname);
    let options = {};
    options.port = typeof env.port === "number" ? env.port : 8080; //端口
    options.host = env.host || "127.0.0.1";   //主机IP
    options.file = env.enterPoint || "";
    options.root = env.root ? path.join(dirname,env.root) : "";
    options.watch = env.watch || "";
    liveServer.start(options);
})(env);