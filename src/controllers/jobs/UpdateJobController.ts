import { updateJobService } from "@services/jobs/UpdateJobService";
import { Request, Response } from "express";
import { JobRequest } from "../../models/job";

const updateJobController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params;
        const { title, description, limitDate, companyId }: JobRequest = req.body

        if (!title && !description && !limitDate && !companyId) {
            throw new Error("É preciso informar pelo menos um campo para atualizar");
            
        }

        const job = await updateJobService.execute(id, {
            title,
            description,
            limitDate,
            companyId
        });

        return res.status(200).json(job)
    }
};

export { updateJobController };

