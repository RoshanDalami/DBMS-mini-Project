CREATE DATABASE DBMSminiProject;

CREATE TABLE ADMIN(
    username VARCHAR(30),
    password VARCHAR(20)
);
CREATE TABLE `DBMSminiProject`.`PLAYERS` (  
    `id` INT(11) NOT NULL AUTO_INCREMENT , 
    `player_id` INT(7) NOT NULL , 
    `player_name` VARCHAR(30) NOT NULL ,
     `age` INT(2) NOT NULL , 
     `overall_rating` 
     INT(2) NOT NULL , `
     nationality` VARCHAR(30) NOT NULL , 
     PRIMARY KEY (`id`, `player_id`, `player_name`)
     ) ENGINE = InnoDB;

CREATE TABLE `DBMSminiProject`.`STATS` ( `id` INT(3) NOT NULL AUTO_INCREMENT ,
 `player_id` INT(7) NOT NULL , 
 `acceleration` INT(2) NOT NULL , 
 `balance` INT(2) NOT NULL , 
 `ball_control` INT(2) NOT NULL , `crossing` INT(2) NOT NULL , `curve` INT(2) NOT NULL , 
 `dribbling` INT(2) NOT NULL , 
 `finishing` INT(2) NOT NULL , 
 `gk_kicking` INT(2) NOT NULL ,
  `gk_positioning` INT(2) NOT NULL ,
   `penalties` INT(2) NOT NULL , 
   `short_pass` INT(2) NOT NULL , 
   `stamina` INT(2) NOT NULL , 
   `strength` INT(2) NOT NULL , 
   PRIMARY KEY (`id`)
   ) ENGINE = InnoDB;