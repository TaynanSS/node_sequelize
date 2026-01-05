'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    // Add altering commands here.
    // Abaixo estou criando os CAMPOS da minha TABELA USERS
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER, // campo vai ser INTEIRO
        primaryKey: true,
        autoIncrement: true, // Vai incrementar automaticamente, colocando um ID ao adicionar na tabela.
        allowNull: false, // Não pode ser NULO.
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE, // Como auto incrementei um timestamp, preciso informar que estou colocando isso.
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });

  },

  async down (queryInterface, Sequelize) {
    
    // Add reverting commands here.

  
    await queryInterface.dropTable('users');

  }
};
