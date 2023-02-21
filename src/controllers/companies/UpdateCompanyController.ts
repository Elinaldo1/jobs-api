import { updateCompanyService } from "@services/companies/UpdateCompanyService";
import { Request, Response } from "express";
import { CompanyRequest } from "../../models/company";

const updateCompanyController = {
    handle: async(req: Request, res: Response) => {

        const { id } = req.params;
        const {name, email, bio, website}: CompanyRequest = req.body

        if (!name && !email && !bio && !website) {
            throw new Error("É preciso informar pelo menos um campo para atualizar");
            
        }

        const company = await updateCompanyService.execute(id, {
            name,
            email,
            bio,
            website
        });

        return res.status(200).json(company)
    }
};

export { updateCompanyController };

