import { Job } from "../../models";

const listJobsService = {
    execute: async() => {
        const jobs = await Job.findAll({
            include: 'company'
        });

        return {jobs};
    }
};

export { listJobsService };

