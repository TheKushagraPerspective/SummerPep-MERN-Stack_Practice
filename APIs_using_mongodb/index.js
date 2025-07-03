let express = require("express");
let mongoose = require("mongoose");

let app = express();

mongoose.connect("mongodb://localhost:27017/employee1")
.then(() => console.log("Database connected successfully"))
.catch(() => console.log("Error in connecting the Database"))




// All APIs will be there inside this block
// ----------------------------------------------------------------


app.get("/" , (req , res) => {
    res.send("Hello, Kushagra!");
})


// defining schema for user table so that we can perform CRUD operation on user table
const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name is required"],
        trim : true
    },
    description : {
        type : String,
    },
    is_enable : {
        type: String,
    }
} , { timestamps : true });

// defining model of category schema
const Category = mongoose.model("category" , categorySchema);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get("/get/category" , async (req , res) => {
    const categoryList = await Category.find({});

    if(!categoryList) {
        return res.status(400).json({ msg : "Error in Server" });
    }

    return res.status(200).json({ msg : categoryList })
})

app.post("/post/category" , async (req , res) => {
    const { categoryName , description , is_enable } = req.body;

    if(!categoryName || !description || !is_enable) {
        return res.status(400).json({ msg : "Mandatory foelds are missing" })
    }

    try {
        const category = new Category({
            name : categoryName,
            description : description,
            is_enable : is_enable
        });

        await category.save();

        res.status(200).json({msg: "Category created successfully", category});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error saving category", error });
    }
})




app.get("/api/category/:id" , async (req , res) => {
    const id = req.params.id;
    const category = await Category.findById(id);

    if(!category) {
        return res.status(400).json({ msg : "Error in Server" })
    }

    return res.status(200).json({ msg : category })
})


app.patch("/api/category/:id", async (req, res) => {
    const id = req.params.id;
    const { newDescription } = req.body;

    // Check if newDescription is provided
    if (!newDescription) {
        return res.status(400).json({ msg: "Mandatory fields are missing" });
    }

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { description: newDescription }
        );

        if (!updatedCategory) {
            return res.status(404).json({ msg: "Category not found" });
        }

        return res.status(200).json({
            msg: "One Record Modified Successfully",
            data: updatedCategory
        });
    } catch (error) {
        console.error("Error while updating category:", error);
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
});



app.delete("/api/category/:id" , async (req, res) => {
    const id = req.params.id;
    
    try {
        const deleteCategory = await Category.findByIdAndDelete(id);

        if (!deleteCategory) {
            return res.status(404).json({ msg: "Category not found" });
        }

        return res.status(200).json({
            msg: "One Record Deleted Successfully",
            data: updatedCategory
        });
    } catch (error) {
        console.error("Error while Deleting category:", error);
        return res.status(500).json({ msg: "Server Error", error: error.message });
    }
})



// ----------------------------------------------------------------




let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})