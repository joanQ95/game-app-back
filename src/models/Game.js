const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('game', {
        idAPI: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        background_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        platforms: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true,
        },
        released: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.DECIMAL,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genres: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: false,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            default: false,
        },
    },
        {
            timestamps: true,
            versionKey: false,
        }
    )
};