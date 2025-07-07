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


    static signUp(email , password , mobile , user_type , user_category) {
        return new Promise((resolve , reject) => {
            connection.query(`INSERT INTO users (email , password , mobile , user_type , user_category) VALUES (? , ? , ? , ? , ?)` , [email , password , mobile , user_type , user_category] , (err ,result) => {
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