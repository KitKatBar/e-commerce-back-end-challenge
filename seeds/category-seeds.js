// Import Category model
const { Category } = require('../models');

// Initialize sample data to be seeded into our database table
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Seed our data in bulk
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
