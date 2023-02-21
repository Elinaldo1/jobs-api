import { deleteCandidateService } from "@services/candidates/DeleteCandidateService";
import { Request, Response } from "express";

const deleteCandidateController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params;

        await deleteCandidateService.execute(id);

        return res.status(204).send();

    }
};

export { deleteCandidateController };

