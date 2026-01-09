'use strict';

/** @type {import('sequelize-cli').Migration} */

export default {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key:'id' }, //informa que é um foreighkey do id da tabela users e
        onUpdate: 'CASCADE', // quando deletar ou atualizar os dados, irá fazer em todos os dados associados a ele.
        onDelete: 'CASCADE',
      },

      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      district: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }

    });
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('addresses');
    
  }
};
