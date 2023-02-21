import { listCompaniesService } from "@services/companies/ListCompaniesService";
import { Request, Response } from "express";

const listCompaniesController = {
    handle: async(req: Request, res: Response) => {
        const companies = await listCompaniesService.execute();

        return res.status(200).json(companies)
    }
};

export { listCompaniesController };

