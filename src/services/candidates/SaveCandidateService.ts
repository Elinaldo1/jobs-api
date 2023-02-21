import { Canditate } from "../../models";
import { CandidatesRequest } from "../../models/candidates";

const saveCandidateService = {
    execute: async({ name, bio, email, phone, openToWork }: CandidatesRequest) => {
        
            const candidate = await Canditate.create({
                name,
                bio,
                email,
                phone,
                openToWork
            });

            return {candidate}
    }
};

export { saveCandidateService };

