import { listCandidatesService } from "@services/candidates/ListCandidatesService";
import { Request, Response } from "express";

const listCandidatesController = {
    
    handle: async ( req: Request, res: Response ) => {

        const candidates = await listCandidatesService.execute();

        return res.json(candidates);
    }
}

export { listCandidatesController };

