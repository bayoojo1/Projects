const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class User extends Sequelize.Model {}
    User.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        // id: {
        //     type: Sequelize.UUID,
        //     defaultValue: Sequelize.UUIDV1,
        //     primaryKey: true,
        // },
        unique_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "address"',
                },
            },
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for "mobile"',
                },
            },
        },
        business_name: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: false,
        },
        aboutus: {
            type: Sequelize.STRING,
        },
    }, {sequelize});
    return User;
};