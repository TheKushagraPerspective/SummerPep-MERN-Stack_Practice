let mysql=require("mysql2");

let connectionString = ({
    host:"localhost",
    user:"root",
    password:"@Kussu321",
    database:"online_quiz"
});
let connection = mysql.createConnection(connectionString);

connection.connect((err)=>{
    if(err){
        console.log("Error : ",err);
    }else{
        console.log("Database connected Successfully!");
    }
});

module.exports = connection;