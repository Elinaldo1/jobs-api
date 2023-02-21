import { Company } from "../../models";
import { CompanyRequest } from "../../models/company";

const saveCompanyService = {
    execute: async({ name, bio, email, website }: CompanyRequest) => {
        
            const company = await Company.create({
                name,
                bio,
                email,
                website
            });

            return { company }
    }
};

export { saveCompanyService };

