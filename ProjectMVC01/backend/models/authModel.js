const connection = require("../config/connection");

class authModel {

    static login(email , password) {
        return new Promise((resolve , reject) => {
            connection.query(`SELECT * FROM users WHERE email = '${email}' AND password = '${password}'` , (err , result) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            })
        })
    }//function


    static signUp(name , email , password) {
        return new Promise((resolve , reject) => {
            connection.query(`INSERT INTO users (name , email , password) VALUES (? , ? , ?)` , [name , email , password] , (err ,result) => {
                if(err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            })
        })
    }//function

}//class


module.exports = authModel;