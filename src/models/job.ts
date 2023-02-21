import { BelongsToManyAddAssociationMixin, BelongsToManyCountAssociationsMixin, BelongsToManyRemoveAssociationMixin, DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { CandidatesInstance } from "./candidates";

interface JobRequest {
    title: string
    description: string
    limitDate: Date
    companyId: number
}

interface JobInstance extends Model {
    id: number
    title: string
    description: string
    limitDate: Date
    companyId: number
    addCandidate: BelongsToManyAddAssociationMixin<CandidatesInstance, number>,
    removeCandidate: BelongsToManyRemoveAssociationMixin<CandidatesInstance, number>,
    countCandidates: BelongsToManyCountAssociationsMixin
}    

const Job = sequelize.define<JobInstance>('jobs', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    limitDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'companies',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
    
});

export { Job, JobRequest };

