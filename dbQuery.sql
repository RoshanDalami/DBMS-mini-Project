CREATE TABLE `DBMSminiProject`.`PLAYERS` ( `player_id` INT NOT NULL AUTO_INCREMENT , `player_name` VARCHAR(30) NOT NULL , `age` INT(2) NOT NULL , `overall_rating` INT NOT NULL , `nationality` VARCHAR(30) NOT NULL , `in-contract` INT(10) NOT NULL , PRIMARY KEY (`player_id`)) ENGINE = InnoDB;