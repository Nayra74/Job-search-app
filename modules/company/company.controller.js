import { companyModel } from "../../../Databases/models/company.model.js"
import { jobModel } from "../../../Databases/models/job.model.js"
import { applicationModel } from "../../../Databases/models/app.model.js"

export const addCompany=async(req,res,next)=>{
    const {companyName,industry,address}=req.body
    const company=new companyModel({companyName,industry,address})
    await company.save()
    res.json({message:"Company add Successfully"})
}
export const updateCampany=async(req,res,next)=>{
    const companyId=req.params
    const  {companyName,industry,address}=req.body
    const userId=req.params.id
    const company=await  companyModel.findById(companyId.id)
    if(!company)
    return res.json({message:"Company  not found"})
if(!company.companyHr.equals(userId))
return res.json({message:"Forbidden - Only the company owner can update the data"})
company.companyName=companyName||company.companyName
company.industry=industry||company.industry
company.address=address||company.address
res.json({message:"Company Data Updated Successfully"})
}
export const deleteCompany= async (req,res,next)=> {
    const companyId = req.params.id;
    const userId =req.user.id
    const company = await companyModel.findByIdAndDelete(companyId);
    if (!company)
    return res.json({message:"Company  not found"})
    if(!company.companyHr.equals(userId))
    return res.json({message:"Forbidden - Only the company owner can update the data"})
  await company.remove();
res.json({ message: `Deleted Company with id ${companyId}` });
}
export const getCompanyData=async(req,res,next)=>{
    const companyId=req.params.id
    const company=await companyModel.findById(companyId)
    if (!company)
    return res.json({message:"Company  not found"})
   const jobs=await company.getJob(companyId)
   res.json({company,jobs})

}
export const companySearch=async(req,res,next)=>{
    const name=req.query
    const companies = await companyModel.find({ name: new RegExp(companyName, 'i') });
   res.json(companies)
}
export const getApplications =async(req,res,next)=>{
    const jobId=req.params
    const job= await jobModel.findById(jobId.id)
    if(!job){
        return res.json({message:'No Job Found'})
    }
    if (!job.companyId.equals(req.user.id)){
        return res.json({message:"Forbidden - You can only view applications for your own jobs"})
    }
    const applications = await applicationModel.find({ jobId }).populate('userId', 'username');

    res.json({ applications });

}