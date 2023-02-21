import { Canditate } from "../../models";

const deleteCandidateService = {
    execute: async(id: string) => {

        const candidate = await Canditate.destroy({
            where: {
                id
            }
        });

        if (candidate === 0) {
            throw new Error('Candidato não existe');
        }
        return;
    }
};

export { deleteCandidateService };

