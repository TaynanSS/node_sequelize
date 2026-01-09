import Sequelize from 'sequelize';

import dbconfig from '../config/database.cjs';

import User from '../models/User.js';
import Address from '../models/Address.js';
import Course from '../models/Course.js';


const connection = new Sequelize(dbconfig);

User.init(connection);
Address.init(connection);
Course.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Course.associate(connection.models);


export default connection;