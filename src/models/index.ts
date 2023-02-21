import { Canditate } from "./candidates";
import { Company } from "./company";
import { Job } from "./job";

Company.hasMany(Job);
Job.belongsTo(Company);
Job.belongsToMany(Canditate, {through: 'job_candidates'})
Canditate.belongsToMany(Job, {through: 'job_candidates'})

export {
    Canditate,
    Company,
    Job
};

