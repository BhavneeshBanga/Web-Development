

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the sigma collection.
db.getCollection('sigma').insertMany(
    [
  {
    "name": "bhavi",
    "age": 20,
    "instructor": "Bhavneesh"
  },
  {
    "name": "rahul",
    "age": 22,
    "instructor": "Bhavneesh"
  },
  {
    "name": "aman",
    "age": 21,
    "instructor": "Bhavneesh"
  },
  {
    "name": "priya",
    "age": 19,
    "instructor": "Bhavneesh"
  },
  {
    "name": "rohit",
    "age": 23,
    "instructor": "Bhavneesh"
  },
  {
    "name": "simran",
    "age": 20,
    "instructor": "Bhavneesh"
  },
  {
    "name": "karan",
    "age": 24,
    "instructor": "Bhavneesh"
  },
  {
    "name": "neha",
    "age": 22,
    "instructor": "Bhavneesh"
  },
  {
    "name": "arjun",
    "age": 25,
    "instructor": "Bhavneesh"
  },
  {
    "name": "riya",
    "age": 21,
    "instructor": "Bhavneesh"
  }
]

);

// Run a find command to view items sold on April 4th, 2014.
const salesOnApril4th = db.getCollection('sigma').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Print a message to the output window.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.
db.getCollection('sigma').aggregate([
  // Find all of the sales that occurred in 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } } 
]);
