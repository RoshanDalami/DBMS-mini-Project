const Donor = require('../model/Donor');


exports.getAllDonor = async (request,response,next)=>{
   try {
       const[donors,_] = await Donor.findAllDonor();
       response.status(200).json({donors})

   } catch (error) {
       next(error)
       
   }
};
exports.createNewDonor = async(request,response,next)=>{
    try {
        let {name,med_report,contact_number,blood_grp} = request.body
        let donor = new Donor(name,med_report,contact_number,blood_grp)

        donor = await donor.save();
        response.status(200).json({message:"new Donor created"})
    } catch (error) {
        next(error);
        
    }
}
exports.getById = async(request,response,next)=>{
    try {
        let donorId = request.params.id;
        let[donors,_] = await Donor.findById(donorId);
        response.status(200).json({donor:donors[0]})
    } catch (error) {
        next(error)
        
    }
}