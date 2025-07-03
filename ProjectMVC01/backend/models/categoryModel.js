const connection = require("../config/connection");

class categoryModel{
    
    static categoryList(){
            return new Promise((resolve, reject) => {
                connection.query("SELECT * FROM master_category", (error, rows) => {
                    if (error) {
                            reject(error);
                    } else {
                            resolve(rows);
                    }
                    });
            });
    }//function


    static insertCategory(topic_name, description, is_enable) {
        return new Promise((resolve, reject) => {
                
                const query = `INSERT INTO master_category (topic_name, description, is_enable) VALUES (?, ?, ?)`;
                connection.query(query, [topic_name, description, is_enable], (error, result) => {
                if (error) {
                        reject(error);
                } else {
                        resolve(result);
                }
                });
        });
        }//function


}// class end

module.exports = categoryModel;
