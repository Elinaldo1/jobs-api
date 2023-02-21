import { Job } from "../../models";
import { JobRequest } from "../../models/job";

const saveJobService = {
    execute: async({ title, description, limitDate, companyId }: JobRequest) => {
        
            const job = await Job.create({
                title,
                description,
                limitDate,
                companyId
            });

            return { job }
    }
};

export { saveJobService };

