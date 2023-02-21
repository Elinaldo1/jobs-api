import { Canditate } from "../../models";

const listCandidatesService = {
    execute: async() => {
            
            const candidates = await Canditate.findAll({include: 'jobs'});
    
            return {candidates};

    }
}

export { listCandidatesService };

