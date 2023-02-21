import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL || '';

const sequelize = new Sequelize(databaseUrl, {
    define: {
        underscored: true,
        updatedAt: true,
        createdAt: true
    }
});

export { sequelize };

