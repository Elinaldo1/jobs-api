import { updateCandidateService } from "@services/candidates/UpdateCandidateService";
import { Request, Response } from "express";
import { CandidatesRequest } from "../../models/candidates";

const updateCandidateController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params;
        const { name, bio, email, phone, openToWork }: CandidatesRequest = req.body;

        const updateCandidate = await updateCandidateService.execute(id, {
            name, bio, email, phone, openToWork
        });

        return res.status(200).json(updateCandidate);
    }
};

export { updateCandidateController };

