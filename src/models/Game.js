const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('game', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
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
            type: DataTypes.STRING,
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
            defaultValue: false,
            allowNull: false,
        },
    },
        {
            timestamps: true,
            versionKey: false,
        }
    )
};