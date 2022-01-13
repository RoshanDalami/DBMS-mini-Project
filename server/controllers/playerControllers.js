const { request } = require('express');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
//connect to database


exports.view = (request,response)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err; //if error
        console.log('connected to database...')

        //user connection
        connection.query('SELECT * FROM PLAYERS',(err,rows)=>{
            //when done with connection release it
            connection.release();
            if(!err){
                response.render('index',{rows});
            }else{
                console.log(err)
            }
            console.log("the data from player:\n",rows)
        });
    });
};
//find user by search
exports.find = (request,response)=>{
    pool.getConnection((err,connection)=>{
        if(err) throw err; //if error
        console.log('connected to database...')
        let searchTerm = request.body.search;
        //user connection
        connection.query('SELECT * FROM PLAYERS WHERE player_name LIKE ? OR player_id LIKE ?',['%'+searchTerm+'%','%'+searchTerm+'%'],(err,rows)=>{
            //when done with connection release it
            connection.release();
            if(!err){
                response.render('index',{rows});
            }else{
                console.log(err)
            }
            console.log("the data from player:\n",rows)
        });
    });

};
exports.player =(request,response)=>{
    response.render('addplayer')
}
//add player
exports.addplayer =(request,response)=>{
//  response.render('addplayer')
    const {player_name,age,overall_rating,nationality,in_contract,position}=request.body;
    pool.getConnection((err,connection)=>{
        if(err) throw err; //if error
        console.log('connected to database...')
       
        //user connection
        connection.query('INSERT INTO PLAYERS SET player_name = ?,age = ?,overall_rating = ?,nationality=?,in_contract=?,position=?',[player_name,age,overall_rating,nationality,in_contract,position],(err,rows)=>{
            //when done with connection release it
            connection.release();
            if(!err){
                response.render('addplayer',{alert:'Player added Sucessfully'});
            }else{
                console.log(err)
            }
            console.log("the data from player:\n",rows)
        });
    });
};

exports.editplayer =(request,response)=>{
    // response.render('editplayer')
    const player_id = request.params.player_id
    pool.getConnection((err,connection)=>{
        if(err) throw err; //if error
        console.log('connected to database...')

        //user connection
        connection.query('SELECT * FROM PLAYERS WHERE player_id=?',[player_id],(err,rows)=>{
            //when done with connection release it
            connection.release();
            if(!err){
                response.render('editplayer',{rows});
            }else{
                console.log(err)
            }
            console.log("the data from player:\n",rows)
        });
    });

}
//update Player
exports.update =(request,response)=>{
    // response.render('editplayer')
    const {player_name,age,overall_rating,nationality,in_contract,position}=request.body;
    pool.getConnection((err,connection)=>{
        if(err) throw err; //if error
        console.log('connected to database...')

        //user connection
        connection.query('UPDATE PLAYERS SET player_name=?,age=?,overall_rating=?,nationality=?,in_contract=?,position=? WHERE player_id=?',[player_name,age,overall_rating,nationality,in_contract,position,request.params.player_id],(err,rows)=>{
            //when done with connection release it
            connection.release();
            if(!err){
                response.render('editplayer',{rows});
            }else{
                console.log(err)
            }
            console.log("the data from player:\n",rows)
        });
    });

}