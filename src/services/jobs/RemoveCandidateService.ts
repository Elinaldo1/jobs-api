import { Canditate, Job } from "src/models";

const removeCandidateService = {
    execute: async(jobId: string, candidateId: number) => {

        const job = await Job.findByPk(jobId);
        const candidate = await Canditate.findByPk(candidateId);

        if (!jobId || !candidateId) {
            throw new Error("id do job e candidateId não pode está vazio!");
            
        }
        
        if (job === null) {
            throw new Error("Vaga não existe!");
            
        }

        if (candidate === null) {
            throw new Error("Candidato não existe!");
            
        }

        const removedCandidate = await job.removeCandidate(candidateId);

        return {removedCandidate};
    }
};

export { removeCandidateService };

