import { showJobService } from "@services/jobs/ShowJobService";
import { Request, Response } from "express";

const showJobController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params
        const job = await showJobService.execute(id);

        return res.status(200).json(job);
    }
}

export { showJobController };

