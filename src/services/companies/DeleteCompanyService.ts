import { Company } from "../../models";

const deleteCompanyService = {
    execute: async(id: string) => {
        
        const company = await Company.destroy({
            where: {
                id
            }
        });
        
        if (company === 0) {
            throw new Error('Empresa não existe');
        }
        return company;
    }
};

export { deleteCompanyService };

