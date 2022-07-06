// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// create associations
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// *** MAKE THIS WORK! ***
// Product.belongsToMany(ProductTag, {
//   foreignKey: 'product_id'
// });

// ProductTag.belongsTo(Tag, {
//   foreignKey: 'tag_id'
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.hasMany(ProductTag, {
//   foreignKey: 'tag_id'
// });

// ProductTag.hasMany(Product, {
//   foreignKey: 'product_id'
// });

// *** END OF MAKE  THIS WORK ***** 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
