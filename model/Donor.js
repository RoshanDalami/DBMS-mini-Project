const db = require('../config/db');

class Donor{
    constructor(name,blood_group,med_report,contact_number){
        this.name = name;
        this.blood_grp = blood_group;
        this.med_report = med_report;
        this.contact_number = contact_number;
        
    }
    save(){
        let sql = `
        INSERT INTO DONOR(name,blood_group,med_report,contact_number) VALUES(
            '${this.name}',
            '${this.blood_group}',
            '${this.med_report}',
            '${this.contact_number}',
            
        )
        `;
        return db.execute(sql);
    }
    static findAllDonor(){
        let sql = 'SELECT * FROM DONOR;'
        return db.execute(sql);
    }
    static findById(id){
        let sql = `SELECT * FROM DONOR WHERE id = ${id};`
        return db.execute(sql);
    }
}

module.exports = Donor;