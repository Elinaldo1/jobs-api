import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

interface CandidatesRequest{
    name: string,
    bio: string,
    email: string,
    phone: string,
    openToWork: string
}
interface CandidatesInstance extends Model {
    id: number,
    name: string,
    bio: string,
    email: string,
    phone: string,
    openToWork: string
}

const Canditate = sequelize.define<CandidatesInstance>(
    'candidates',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: DataTypes.TEXT,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: DataTypes.STRING,
        openToWork: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }
);

export { Canditate, CandidatesInstance, CandidatesRequest };

