import Sequelize from 'sequelize';

import dbconfig from '../config/database.cjs';
import User from '../models/User.js';

const connection = new Sequelize(dbconfig);

User.init(connection);

export default connection;