import { saveCandidateService } from "@services/candidates/SaveCandidateService";
import { Request, Response } from "express";
import { CandidatesRequest } from "../../models/candidates";

const saveCandidateController = {
    handle: async(req: Request, res: Response) => {

        const { name, bio, email, phone, openToWork }: CandidatesRequest = req.body

        console.log('body => ', req.body)

        const candidate = await saveCandidateService.execute({
            name,
            bio,
            email,
            phone,
            openToWork
        })

        return res.status(201).json(candidate);
    }
};

export { saveCandidateController };

