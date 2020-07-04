const args = require('node-args');

const runEnvironmentIsDev = process.env.NODE_ENV == 'development';
const devDataBaseUri = "postgres://postgres:postgres@localhost:5432/postgres";
const proDataBaseUri = "postgres://postgres:postgres@localhost:63721/postgres";

const configs = {
    runEnvironmentIsDev: runEnvironmentIsDev,
    log: {
        appenders: {
            default: {
                type: 'dateFile',
                filename: './logs/api',
                pattern: 'yyyy-MM-dd.log',
                layout: {
                    type: 'pattern',
                    pattern: '%d{yyyy-MM-dd hh:mm:ss} -|- %p -|- %h %n ······· %m'
                },
                encoding: 'utf-8',
                alwaysIncludePattern: true,
                daysToKeep: 7,
            },
            development: {
                type: 'stdout',
                layout: {
                    type: 'pattern',
                    pattern: '%d{yyyy-MM-dd hh:mm:ss} -|- %p -|- %h %n ······· %m'
                },
            }
        },
        categories: {
            default: {
                appenders: ['default'],
                level: 'debug'
            },
            development: {
                appenders: ['default', 'development'],
                level: 'debug'
            },
            production: {
                appenders: ['default'],
                level: 'debug'
            }
        }
    },
    dataBase: {
        uri: runEnvironmentIsDev ? devDataBaseUri : proDataBaseUri,
        options: {
            //dialect: 'postgres',
            timezone: '+08:00',
            define: {
                freezeTableName: true, // 固定表名
                timestamps: false // 不含列 "createAt"/"updateAt"/"DeleteAt"
            },
            timestamps: true,
            logging: false
        }
    },
    sequelize: null,
}

module.exports = configs;