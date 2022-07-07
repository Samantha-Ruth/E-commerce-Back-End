// import models
const Product = require('./Product');
const Category = require('./Category');
const ProductTag = require('./ProductTag');
const Tag = require('./Tag');


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
Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_tag',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'tag_product',
  foreignKey: 'tag_id'
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});
  

// *** END OF MAKE  THIS WORK ***** 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
