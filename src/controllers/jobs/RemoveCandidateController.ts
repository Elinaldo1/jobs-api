import { removeCandidateService } from "@services/jobs/RemoveCandidateService";
import { Request, Response } from "express";

const removeCandidateController = {
    handle: async(req: Request, res: Response) => {
       
        const { id: jobId } = req.params;
        const { candidateId } = req.body; 

        await removeCandidateService.execute(jobId, candidateId);

        return res.status(204).send();

    }
}
export { removeCandidateController };
