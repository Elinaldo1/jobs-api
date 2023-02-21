import { Company } from "../../models";

const showCompanyService = {
    execute: async(id: string) => {

            const company = await Company.findByPk(id, {include: 'jobs'});
                
                if (company === null) {
                    throw new Error('Empresa não existe');
                }
                
                return {company};
    }
};

export { showCompanyService };

