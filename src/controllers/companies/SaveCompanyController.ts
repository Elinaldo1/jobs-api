import { saveCompanyService } from "@services/companies/SaveCompanyService";
import { Request, Response } from "express";
import { CompanyRequest } from "../../models/company";

const saveCompanyController = {
    handle: async(req: Request, res: Response) => {

        const { name, email, bio, website }: CompanyRequest = req.body;
        
        const company = await saveCompanyService.execute({
            name,
            bio,
            email,
            website
        });

        return res.status(201).json(company);
    }
}

export { saveCompanyController };

