import { Company } from "../../models";
import { CompanyRequest } from "../../models/company";

const updateCompanyService = {
    execute: async(id: string, { name, email, bio, website }: CompanyRequest) => {

        // ao usar "returning:true" será retornado um array com 2 índices
        // ´ndice 1 são as linhas afetadas e o 2 os registros atualizados
        
        const [affectedRows, company] = await Company.update(
            {
                name,
                email,
                bio,
                website
            },{
                where: {
                    id
                },
                 returning: true //retorna linhas afetadas funciona apenas para postgres
            }
        );

        if (company[0] === null) {
            throw new Error('Empresa não existe');
        }

        return {company: company[0]}
    }
};

export { updateCompanyService };

