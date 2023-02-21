import { Job } from "../../models";
import { JobRequest } from "../../models/job";

const updateJobService = {
    execute: async(id: string, { title, description, limitDate, companyId}: JobRequest) => {

        // ao usar "returning:true" será retornado um array com 2 índices
        // ´ndice 1 são as linhas afetadas e o 2 os registros atualizados
        
        const [affectedRows, jobs] = await Job.update(
            {
                title,
                description,
                limitDate,
                companyId
            },{
                where: {
                    id
                },
                 returning: true //retorna linhas afetadas funciona apenas para postgres
            }
        );

        if (jobs[0] === null) {
            throw new Error('Vaga não existe');
        }

        return {company: jobs[0]}
    }
};

export { updateJobService };

