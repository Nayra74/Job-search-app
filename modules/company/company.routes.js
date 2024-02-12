import { authorize } from "../../middleware/authorize.js"
import express from express
import { addCompany, companySearch, deleteCompany, getApplications, getCompanyData, updateCampany } from "./company.controller.js"
export const companyRouter=express.Router()
companyRouter.post('/companies',authorize('admin'),addCompany)
companyRouter.put('/companies/:companyId',authorize('admin'),updateCampany)
companyRouter.delete('/companies/:companyId',authorize('admin'),deleteCompany)
companyRouter.get('/companies/:companyId',authorize('admin'),getCompanyData)
companyRouter.get('/companies',authorize(["user","admin"]), companySearch)
companyRouter.get('/applications/:jobId',authorize,getApplications)
export default companyRouter