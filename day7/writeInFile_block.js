let fs = require("fs"); // System package
var readLineSync = require('readline-sync'); // External package

let content = readLineSync.question("Enter Content :- ");


// synchronous function
function writeInFileSync() {
    console.log("Start");
    fs.writeFileSync("./data/content1.txt" , content);
    console.log("End");
}


// asynchronous function
function writeInFileAsync(){
    console.log("Start");
    fs.writeFile("./data/content1.txt",content,(error,result)=>{
        if(error){
            console.log("Error in writing",error);
        }else{
            console.log("Successfully Written");
        }
    });
    console.log("End"); 
}



writeInFileSync();
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
writeInFileAsync();