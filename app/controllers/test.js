const fs = require("fs");
const path = require('path');
const moment = require('moment');
const delDir = require('../utils/delDir');
const Request = require('superagent');

exports.testFunction = function (opts) {
   return async function (ctx) {
      try {
         const models = opts.sequelize.models;
         let data = ctx.request.body;
         // let params = ctx.params;
         // let res = await models.test.findOne({
         //    where: {
         //       id: data.id
         //    }
         // })
         ctx.status = 200;
         ctx.body = 'TEST SUCCESS';
      } catch (error) {
         opts.log.error(error)
         ctx.status = 400;
      }
   }
}
