import { showCandidateService } from "@services/candidates/ShowCandidateService";
import { Request, Response } from "express";

const showCanditateController = {
    handle: async(req: Request, res: Response) => {
        const { id } = req.params;

        console.log('id',id)
        const candidates = await showCandidateService.execute(id);

        return res.status(200).json(candidates)
    }
};

export { showCanditateController };

