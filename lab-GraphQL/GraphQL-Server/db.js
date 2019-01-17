const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
   department:store.collection('department'),
   brandhouse:store.collection('brandhouse'),
  };