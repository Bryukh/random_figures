var config = require("./webpack.config");

var prodConfig = Object.assign({}, config);

prodConfig.entry = [
    './src/index'
];

prodConfig.plugins = [];

module.exports = prodConfig;