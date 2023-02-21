import { listJobsService } from "@services/jobs/ListJobsService";
import { Request, Response } from "express";

const listJobsController = {
    handle: async(req: Request, res: Response) => {

        const jobs = await listJobsService.execute();

        return res.status(200).json(jobs)
    }
}

export { listJobsController };

