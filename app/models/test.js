module.exports = function (Sequelize, sequelize, models) {
    const test = sequelize.define('test', {
        id: {
            field: 'id',
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    })

    models.test = test;
    return test
}