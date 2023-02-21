import { deleteCompanyService } from "@services/companies/DeleteCompanyService";
import { Request, Response } from "express";

const deleteCompanyController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params;

        await deleteCompanyService.execute(id);

        return res.status(204).send();
    }
}

export { deleteCompanyController };

