let fs = require("fs");

// 🔹 Blocking code (Synchronous)
function readFileSync() {
    console.log("Start");
    let content = fs.readFileSync("./data/content1.txt", "utf-8");
    console.log("Content:", content);
    console.log("End");
}

readFileSync();

console.log("------------------------------------------------");

// 🔹 Non-blocking code (Asynchronous)
function readFileAsync() {
    console.log("Start");
    fs.readFile("./data/content1.txt", "utf-8", (error, result) => {
        if (error) {
            console.log("Error in reading file:", error);
        } else {
            console.log("Content:", result);
        }
    });
    console.log("End");
}

readFileAsync();
