module.exports = {
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: '123456789',
    database: 'express_sequelize',
    port: 3306,
    define: {
        timestamps: true, // Aqui estou auto incrementando. Assim que pôr um registro, irá colocar uma data.
        underscored: true,
    },
};

// Tive que mudar o arquivo para formato cjs para que o Sequelize conseguisse buscar as informações. U.U