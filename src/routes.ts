import * as candidates from "@controllers/candidates";
import * as companies from "@controllers/companies";
import * as jobs from "@controllers/jobs";
import { Request, Response, Router } from "express";


const router = Router();

router.get('/', (req: Request, res: Response) => {

    console.log('rota root')
    return res.json({apiJobs: 'Hello World'})
});


// CANDIDATE ROUTERS

// return all candidates
router.get('/candidates', candidates.listCandidatesController.handle)

// create candidates
router.post('/candidates', candidates.saveCandidateController.handle)

// return unique candidate
router.get('/candidates/:id', candidates.showCanditateController.handle);

// update candidate
router.put('/candidates/:id', candidates.updateCandidateController.handle);

// delete candidate
router.delete('/candidates/:id', candidates.deleteCandidateController.handle);


// COMPANY ROUTERS

// return all companies
router.get('/companies', companies.listCompaniesController.handle)

// create company
router.post('/companies', companies.saveCompanyController.handle)

// return unique company
router.get('/companies/:id', companies.showCompanyController.handle);

// update company
router.put('/companies/:id', companies.updateCompanyController.handle);

// delete company
router.delete('/companies/:id', companies.deleteCompanyController.handle);



// JOBS ROUTERS

// list all jobs
router.get('/jobs', jobs.listJobsController.handle);

// list unique job
router.get('/jobs/:id', jobs.showJobController.handle);

// create job
router.post('/jobs', jobs.saveJobController.handle);

// update job
router.put('/jobs/:id', jobs.updateJobController.handle);

// delete job
router.delete('/jobs/:id', jobs.deleteJobController.handle);

// add candidate at job
router.post('/jobs/:id/addCandidate', jobs.addCandidateController.handle)

// remove candidate of job
router.post('/jobs/:id/removeCandidate', jobs.removeCandidateController.handle)

export { router };

