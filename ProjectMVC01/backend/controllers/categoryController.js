const categoryModel = require("../models/categoryModel");

const getCategoryList = async (req, resp) => {
    try {
      let categoryData = await categoryModel.categoryList();
      // console.log(categoryData);
      if(!categoryData){
          return resp.status(401).json({
              success:false,
              message: "Data doesn't exist in table"
          })
      }else{
          return resp.status(200).json({
              success: true,
              message: categoryData
          })
      }
    } catch (error) {
      throw error;
    }
};


const insertNewCategory = async (req , res) => {
    const {topic_name , description , is_enable} = req.body;

    if (!topic_name || !description || is_enable === undefined) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const result = await categoryModel.insertCategory(topic_name , description , is_enable);
        res.status(201).json({ message: "Category inserted", categoryId: result.insertId });
    } catch (error) {
        console.error("Error inserting category:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

}

module.exports = {
  getCategoryList,
  insertNewCategory
};
