import Sequelize from 'sequelize';

import dbconfig from '../config/database.js';

const connection = new Sequelize(dbconfig);

try {
    connection.authenticate();
    console.log('Connection has been established sucessfully.');
} catch (error) {
    console.error('Unable to connect to the database: ', error);
}

export default connection;