import { saveJobService } from "@services/jobs/SaveJobService";
import { Request, Response } from "express";
import { JobRequest } from "../../models/job";

const saveJobController = {
    handle: async(req: Request, res: Response) => {

        const { title, description, limitDate, companyId }: JobRequest = req.body;
        
        const job = await saveJobService.execute({
            title,
            description,
            limitDate,
            companyId
        });

        return res.status(201).json(job);
    }
}

export { saveJobController };

