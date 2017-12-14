const mongoose = require('mongoose');
const CategorySchema = require('../schemas/category');
const Category = mongoose.model("category", CategorySchema);

module.exports = Category;