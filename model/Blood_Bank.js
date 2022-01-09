const db = require('../config/db');

class BloodBank{
    constructor(name,no_of_staff,open_time,close_time,address){
        this.name = name;
        this.no_of_staff = no_of_staff;
        this.open_time = open_time;
        this.close_time = close_time;
        this.address = address;
    }
    save(){
        let sql = `INSERT INTO BLOODBANK(name,no_of_staff,	open_time,close_time,address)VALUES(
            '${this.name}',
            '${this.no_of_staff}',
            '${this.open_time}',
            '${this.close_time}',
            '${this.address}',
        )`;
        return db.execute(sql);

    }
    static findAllBloodBank(){
        let sql = 'SELECT * FROM BLOODBANK';
        return db.execute(sql);
    }
   
}

module.exports = BloodBank;