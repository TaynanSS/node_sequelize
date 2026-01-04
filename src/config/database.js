const dbconfig = {
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: '123456789',
    database: 'express_sequelize',
    port: 3306,
    define: {
        timestamps: true,
        underscored: true,
    },
};

export default dbconfig;