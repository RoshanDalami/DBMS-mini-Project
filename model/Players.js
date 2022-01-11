const db = require('../config/db');

class Players{
    constructor(player_id,player_name,age,overall_rating,nationality){
        this.player_id = player_id;
        this.player_name = player_name;
        this.age  = age;
        this.overall_rating = overall_rating;
        this.nationality = nationality;
        
    }
    save(){
        let sql = `
        INSERT INTO DONOR(player_id,player_name,age,overall_rating,nationality) VALUES(
            '${this.player_id}',
            '${this.player_name}',
            '${this.age}',
            '${this.overall_rating}',
            '${this.nationality}',
            
        )
        `;
        return db.execute(sql);
    }
    static findAllPlayers(){
        let sql = 'SELECT * FROM PLAYERS;'
        return db.execute(sql);
    }
    static findById(id){
        let sql = `SELECT * FROM PLAYERS WHERE player_id = ${id};`
        return db.execute(sql);
    }
}

module.exports = Players;