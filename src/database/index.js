import Sequelize from 'sequelize';

import dbconfig from '../config/database.cjs';

const connection = new Sequelize(dbconfig);



export default connection;