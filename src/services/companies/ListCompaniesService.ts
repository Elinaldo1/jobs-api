import { Company } from "../../models";

const listCompaniesService = {
    execute: async() => {
        const companies = await Company.findAll();

        return {companies};
    }
};

export { listCompaniesService };

