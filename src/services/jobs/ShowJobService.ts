import { Job } from "../../models";

const showJobService = {
    execute: async(id: string) => {

            const job = await Job.findByPk(id, {include: 'company'});
            
            const candidatesCount = await job?.countCandidates();

            if (job === null) {
                throw new Error('Vaga não existe');
            }
            
            return { ...job?.get(), candidatesCount };
    }
};

export { showJobService };

