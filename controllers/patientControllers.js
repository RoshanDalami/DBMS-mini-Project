const { request } = require('express');
const Patients = require('../model/Patients');

exports.getAllPatients = async (request,response,next)=>{
    try {
        const[patients,_] = await Patients.findAllPatient();
        response.status(200).json({patients})
        
    } catch (error) {
        next(error)
    }
};

exports.createNewPatient = async(request,response,next)=>{
    try {
        let {name,med_condition,blood_group} = request.body;
        let patient = new Patients(name,med_condition,blood_group);
        patient = await patient.save();
        response.status(200).json({message : 'new patient created'})
    } catch (error) {
        next(error)
    }
}

exports.getById = async (request,response,next)=>{
    try {
        let patient_id = request.params.id;
        let [patient,_] = await Patients.findById(patient_id);
        response.status(200).json({patient:patient[0]})
    } catch (error) {
        next(error);
    }
}