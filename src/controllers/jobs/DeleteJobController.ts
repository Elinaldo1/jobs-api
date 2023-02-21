import { deleteJobService } from "@services/jobs/DeleteJobService";
import { Request, Response } from "express";

const deleteJobController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params;

        await deleteJobService.execute(id);

        return res.status(204).send();
    }
}

export { deleteJobController };

