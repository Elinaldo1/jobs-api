import { showCompanyService } from "@services/companies/ShowCompanyService";
import { Request, Response } from "express";

const showCompanyController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params
        const company = await showCompanyService.execute(id);

        return res.status(200).json(company);
    }
}

export { showCompanyController };

