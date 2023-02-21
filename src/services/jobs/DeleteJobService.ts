import { Job } from "../../models";

const deleteJobService = {
    execute: async(id: string) => {
        
        const job = await Job.destroy({
            where: {
                id
            }
        });
        
        if (job === 0) {
            throw new Error('Vaga não existe');
        }
        return job;
    }
};

export { deleteJobService };

