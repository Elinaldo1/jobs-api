import { Canditate } from "../../models";

const showCandidateService = {
    execute: async(id: string) => {

            const candidate = await Canditate.findByPk(id, {
                include: 'jobs'
            });
                
                if (candidate === null) {
                    throw new Error('Candidato não encontrado');
                }
                
                return {candidate};
    }
};

export { showCandidateService };

