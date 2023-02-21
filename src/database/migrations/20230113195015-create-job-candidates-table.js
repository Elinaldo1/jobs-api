// src/database/migrations/XXXXXXXXXXXXXX-create-job-candidates-table.js

'use strict';

// aqui aplicamos o conceito de chave primária compposta(junção da PK candidates com a PK jobs)
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('job_candidates', {
      candidate_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'candidates',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      job_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'jobs',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('job_candidates')
  }
};
