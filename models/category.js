const sequelize = require('../util/dbconfig')
const Sequelize = require('sequelize');

const Category = sequelize.define('Category', {
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})



module.exports = Category;