import { Canditate } from "../../models";
import { CandidatesRequest } from "../../models/candidates";

const updateCandidateService = {
    execute: async(id: string,
        {
         name, bio, email, phone, openToWork 
        }: CandidatesRequest 
    ) => {

        const candidate = await Canditate.findByPk(id);
            
            if (candidate === null) {
                throw new Error('Candidato não existe');
            }
    
            candidate.name = name
            candidate.bio = bio
            candidate.email = email
            candidate.phone = phone
            candidate.openToWork = openToWork
            
            await candidate.save();
    
            return {candidate};

    }
}

export { updateCandidateService };

