
 
 const db = require('./db')

 
const Query = {
   //resolver function for students returns list
   department:() => db.department.list(),
   test: () => 'Test Query works the GraphQL server is running '
}

const Department = {
    brandhouse:(root) => {
      return db.brandhouse.get(root.brandId);
   }
}

 
 
module.exports = {Query,Department}