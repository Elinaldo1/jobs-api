import { addCandidateService } from "@services/jobs/AddCandidateService";
import { Request, Response } from "express";

const addCandidateController = {
    handle: async(req: Request, res: Response) => {

        const { id: jobId } = req.params;
        const { candidateId } = req.body

        await addCandidateService.execute(jobId, candidateId);

        return res.status(201).send();
    }
}

export { addCandidateController };
