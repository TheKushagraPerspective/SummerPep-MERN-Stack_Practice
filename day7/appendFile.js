let fs = require("fs");
let readLineSync = require("readline-sync");

var content = readLineSync.question("Enter content to append: ");

// 🔹 Blocking code
function appendFileSync() {
    console.log("Start (Sync)");
    fs.appendFileSync("./data/content1.txt", "\n" + content);
    console.log("Appended (Sync):", content);
    console.log("End (Sync)");
}

appendFileSync();

console.log("--------------------------------------------------");

// 🔹 Non-blocking code
function appendFileAsync() {
    console.log("Start (Async)");
    fs.appendFile("./data/content1.txt", "\n" + content, (error) => {
        if (error) {
            console.log("Error in appending the content into the file:", error);
        } else {
            console.log("Appended (Async):", content);
        }
    });
    console.log("End (Async)");
}

appendFileAsync();
