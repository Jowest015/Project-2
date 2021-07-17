// imports
var pgp = require('pg-promise')();

class dbMaker {
  constructor(){
    this.dbSettings = {user:"postgres", password:"Mr6tBU?RSe",  database: "recipebookdb"};
    this.db = pgp(this.dbSettings);
  }
  async output(){
    return await this.db.query(`SELECT * FROM recipe`)
  }
  input(){
    //insert
  }

  
}

module.exports = dbMaker