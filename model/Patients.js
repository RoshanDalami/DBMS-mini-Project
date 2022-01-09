const db = require('../config/db');

class Patients{
    constructor(name,med_condition,blood_group){
        this.name = name;
        this.med_condition = med_condition;
        this.blood_group = blood_group;
    }
    save(){
        let sql = `INSERT INTO PATIENTS(name,med_condition,blood_group)VALUES(
            '${this.name}',
            '${this.med_condition}',
            '${this.blood_group}',
        )`;
        return db.execute(sql);

    }
    static findAllPatient(){
        let sql = 'SELECT * FROM PATIENTS';
        return db.execute(sql);
    }
    static findById(id){
        let sql = `SELECT * FROM PATIENTS WHERE id = ${id}`;
        return db.execute(sql);
    }
}

module.exports = Patients;