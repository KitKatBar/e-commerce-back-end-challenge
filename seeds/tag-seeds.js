// Import Tag model
const { Tag } = require('../models');

// Initialize sample data to be seeded into our database table
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Seed our data in bulk
const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
