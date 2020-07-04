const fs = require('fs');
const path = require('path');
const Router = require('koa-router')
const router = new Router();

module.exports.getRouters = function (opts, sequelize) {
    fs.readdirSync(path.join(__dirname, 'routers')).forEach((filename) => {
        require(`./routers/${filename}`)(router, opts, sequelize);
    })
    return router;
}

module.exports.getDBModels = function (Sequelize, sequelise, models){
    fs.readdirSync(path.join(__dirname, 'models')).forEach((filename) => {
        require(`./models/${filename}`)(Sequelize, sequelise, models);
    })
}