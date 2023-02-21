require('dotenv').config();

module.exports = {
    dialect: 'postgres',
    url: process.env.DATABASE_URL
}

// npx sequelize-cli db:create = cria um banco de dados especificado no final de DATABASE_URL

// npx sequelize-cli migration:generate --name nameMigration = cria
// o esqueleto de uma migration na pasta migrations