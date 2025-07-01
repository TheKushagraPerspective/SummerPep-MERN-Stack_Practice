let mysql = require("./connection.js");
let express = require("express");
let bodyParser = require("body-parser");


let app = express();
app.use(bodyParser.json());   // Converts all incoming request bodies into JSON



// ----------------------------------------------------

app.get("/" , (req , res) => {
    res.json("Hello, Kushagra!");
})


// getting data from all tables that we have in mysql "online_quiz" database
// data from master_category
app.get("/api/category" , (req , res) => {
    mysql.query("SELECT id, topic_name, description, is_enable FROM master_category" , (err , result) => {
        if(err) {
            res.status(400).json({msg:"Error in sql"})
        } else {
            res.status(200).json({msg:result})
        }
    })
})

// data from master_sub_category
app.get("/api/sub_category" , (req , res) => {
    mysql.query("SELECT * FROM master_sub_category" , (err , result) => {
        if(err) {
            res.status(400).json({msg:"Error in sql"})
        } else {
            res.status(200).json({msg:result})
        }
    })
})

// data from master_questions
app.get("/api/questions" , (req , res) => {
    mysql.query("SELECT * FROM master_questions" , (err , result) => {
        if(err) {
            res.status(400).json({msg:"Error in sql"})
        } else {
            res.status(200).json({msg:result})
        }
    })
})

// data from master_options
app.get("/api/options" , (req , res) => {
    mysql.query("SELECT * FROM master_options" , (err , result) => {
        if(err) {
            res.status(400).json({msg:"Error in sql"})
        } else {
            res.status(200).json({msg:result})
        }
    })
})

// data from master_ques_complexity
app.get("/api/question_complexity" , (req , res) => {
    mysql.query("SELECT * FROM master_ques_complexity" , (err , result) => {
        if(err) {
            res.status(400).json({msg:"Error in sql"})
        } else {
            res.status(200).json({msg:result})
        }
    })
})


// fetching data from id
// Route: Get category details by ID
app.get("/api/category/:id", (req, res) => {

    // 1. Extract category ID from URL parameters
    let category_id = req.params.id; // Example: if URL is /api/category/5, then category_id = 5

    // 2. SQL query to fetch the category with the given ID
    mysql.query(
        `SELECT id, topic_name, description, is_enable FROM master_category WHERE id = ${category_id}`,
         // Passing category_id safely to prevent SQL injection

        (err, result) => {
            if (err) {
                // 3. If there's a SQL error, respond with status 400 (Bad Request)
                res.status(400).json({ msg: "Error in SQL", error: err });
            } else {
                // 4. If no data is found, send a 404 Not Found response
                if (result.length === 0) {
                    res.status(404).json({ msg: "Category not found" });
                } else {
                    // 5. If data is found, send it back with status 200 (OK)
                    res.status(200).json({ msg: result });
                }
            }
        }
    );
});




// POST Method
app.post("/api/category" , (req , res) => {
    let body = req.body;

    if(!body.topic_name) {
        res.status(404).json({msg : "Mandatory feild is missing"});
    }
    else {
        mysql.query(
            `INSERT INTO master_category (topic_name , description , is_enable) VALUES ('${body.topic_name}' , '${body.description}' , '${body.is_enable}')` , (err , result) => {
                if(err) {
                    res.status(400).json({msg : "Error in SQL"})
                }
                else {
                    res.status(200).json({msg : "One record inserted successfully"})
                }
            });
    }
})




// Delete Method
app.delete("/api/category/:id" , (req , res) => {
    const category_id = req.params.id;

    if(!category_id) {
        return res.status(404).json({msg : "Error: id is missing"});
    }

    mysql.query(`DELETE FROM master_category WHERE id = ${category_id}` , (err , result) => {
        if(err) {
            return res.status(400).json({msg : "Error in SQL"})
        }
        else {
            return res.status(200).json({msg : `The category with id ${category_id} has been deleted successfully`})
        }
    });
})



// we use "put" when we have to update entire row/record in a table and if we want to update any particular attribute then we will use "patch"
//  PUT Method (one way where we pass id in url and topic_name in body)
app.put("/api/category/:id", (req, res) => {
    const category_id = req.params.id;
    // const topic_name = req.body.topic_name;  both line 153 and 154 are same in nature
    const { topic_name , description , is_enable } = req.body;  // Destructure correctly

    if (!category_id) {
        return res.status(404).json({ msg: "Error: id is missing" });
    }

    mysql.query(
        `UPDATE master_category SET topic_name = ? , description = ? , is_enable = ? WHERE id = ?`,
        [topic_name, description, is_enable, category_id],
        (err, result) => {
            if (err) {
                return res.status(400).json({ msg: "Error in SQL" });
            } else {
                if (result.affectedRows === 0) {
                    return res.status(404).json({ msg: "Category not found" });
                } else {
                    return res.status(200).json({ msg: "Category updated successfully" });
                }
            }
        }
    );
});

//  PUT Method (another way where we pass id and other stuff in body)
app.put("/api/category", (req, res) => {
    
    const body = req.body;
    const category_id = body.id;
    const topic_name = body.topic_name;
    const description = body.description;
    const is_enable = body.is_enable;

    if (!category_id || !topic_name) {
        return res.status(404).json({ msg: "Error: category_id/category_name is missing" });
    }

    mysql.query(
        `UPDATE master_category SET topic_name = ? , description = ? , is_enable = ? WHERE id = ?`,
        [topic_name, description, is_enable, category_id],
        (err, result) => {
            if (err) {
                return res.status(400).json({ msg: "Error in SQL" });
            } else {
                if (result.affectedRows === 0) {
                    return res.status(404).json({ msg: "Category not found" });
                } else {
                    return res.status(200).json({ msg: "Category updated successfully" });
                }
            }
        }
    );
});




// task 1 : post email and password and check whether email and password exist or not
app.post("/api/user/login", (req, res) => {
    const { email, password } = req.body;  

    if (!email || !password) {
        return res.status(400).json({ msg: "Mandatory fields are missing" });
    }

    mysql.query(
        `SELECT id FROM users WHERE email = ? AND password = ?`,
        [email, password],
        (err, result) => {
            if (err) {
                return res.status(500).json({ msg: "Error in SQL", error: err });
            } else {
                if (result.length === 0) {
                    return res.status(404).json({ msg: "User not found" });
                } else {
                    return res.status(200).json({ msg: "User exists in DB" });
                }
            }
        }
    );
});

// task 2 : send signup data to server & save it in database
app.post("/api/user/signup", (req, res) => {
    const { email, password, mobile, user_type, user_category, is_enable } = req.body;  

    if (!email || !password || !mobile || !user_type || !user_category || !is_enable) {
        return res.status(400).json({ msg: "Mandatory fields are missing" });
    }

    mysql.query(
        `SELECT id FROM users WHERE email = ?`,
        [email],
        (err, result) => {
            if (err) {
                return res.status(500).json({ msg: "Error in SQL", error: err });
            } else {
                if (result.length === 0) {
                    
                    mysql.query(`INSERT INTO users (email , password , mobile , user_type , user_category , is_enable)
                                 VALUES ('${email}' , '${password}' , '${mobile}' , '${user_type}' , '${user_category}' , '${is_enable}')`, (err , result) => {
                                        if(err) {
                                            return res.status(500).json({ msg: "Error in SQL", error: err });
                                        }
                                        else {
                                            return res.status(200).json({msg : "Successfully registered the user, now You are go to go!"})
                                        }
                                 })

                } else {
                    return res.status(200).json({ msg: "User exists in DB" });
                }
            }
        }
    );
});


// ----------------------------------------------------




app.listen(3000 , () => {
    console.log("Server is running on port 3000");
})