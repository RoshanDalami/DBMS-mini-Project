const BloodBank = require('../model/Blood_Bank');


exports.getAllBloodBank = async (request,response,next)=>{
   try {
       const[banks,_] = await BloodBank.findAllBloodBank();
       response.status(200).json({banks})

   } catch (error) {
       next(error)
       
   }
};
exports.createNewBloodBank = async(request,response,next)=>{
    try {
        let {name,no_of_staff,open_time,close_time,address} = request.body
        let bank = new BloodBank(name,no_of_staff,open_time,close_time,address)

        bank = await bank.save();
        response.status(200).json({message:"new Bank created"})
    } catch (error) {
        next(error);
        
    }
}
