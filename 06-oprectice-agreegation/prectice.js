[
    {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "age": 28,
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zipcode": "10001"
      },
      "favorites": {
        "color": "blue",
        "food": "pizza",
        "movie": "The Shawshank Redemption"
      },
      "friends": [
        {
          "name": "Jane Smith",
          "email": "janesmith@example.com"
        },
        {
          "name": "Mike Johnson",
          "email": "mikejohnson@example.com"
        }
      ]
    },
    {
      "name": "Alice Williams",
      "email": "alicewilliams@example.com",
      "age": 35,
      "address": {
        "street": "456 Elm St",
        "city": "San Francisco",
        "state": "CA",
        "zipcode": "94101"
      },
      "favorites": {
        "color": "green",
        "food": "sushi",
        "movie": "The Godfather"
      },
      "friends": [
        {
          "name": "Bob Anderson",
          "email": "bobanderson@example.com"
        },
        {
          "name": "Emily Davis",
          "email": "emilydavis@example.com"
        }
      ]
    }
  ]


//   Task 1: Find all users who are located in New York.
db.agreegationPrectice.find({"address.city" : "New York" })
// Task 2: Find the user(s) with the email "johndoe@example.com" and retrieve their favorite movie.
db.agreegationPrectice.find({"email" : "johndoe@example.com" }).project({"favorites.movie" : 1})
// Task 3: Find all users with "pizza" as their favorite food and sort them according to age.
db.agreegationPrectice.aggregate([ {$match: {"favorites.food" : "pizza"}},{$sort: {age : -1}}])
// Task 4: Find all users over 30 whose favorite color is "green".
db.agreegationPrectice.find({age : {$gt: 30},"favorites.color" : "green"})
// Task 5: Count the number of users whose favorite movie is "The Shawshank Redemption."
db.agreegationPrectice.find({"favorites.movie" : "The Shawshank Redemption"}).count()
// Task 6: Update the zipcode of the user with the email "johndoe@example.com" to "10002".
db.agreegationPrectice.update({"email" : "johndoe@example.com"},{$set: {"address.zipcode" : "10002"}})
// Task 7: Delete the user with the email "alicewilliams@example.com" from the user data.
db.agreegationPrectice.remove({"email" : "alicewilliams@example.com"})
// Task 8: Group users by their favorite movie and retrieve the average age in each movie group.
db.agreegationPrectice.aggregate([{$group: {_id: "$favorites.movie",averageAge: { $avg: "$age" }}}])
// Task 9: Calculate the average age of users with a favorite " pizza " food.
db.agreegationPrectice.aggregate( [{$match: {"favorites.food" : "pizza"}},{$group: { _id: "$age", avarageAge : {$avg: "$age"}} }])
// Task 10: Perform a lookup aggregation to retrieve the orders data along with the customer details for each order.
db.orders.aggregate([{
        $lookup: {
               from: "customers",
               localField: "customer_id",
               foreignField: "_id",
               as: "customer"
             }}])

             // orders
[
    {
      "_id": 1,
      "order_number": "ORD-001",
      "customer_id": 1,
      "total_amount": 100.0
    },
    {
      "_id": 2,
      "order_number": "ORD-002",
      "customer_id": 2,
      "total_amount": 150.0
    },
    {
      "_id": 3,
      "order_number": "ORD-003",
      "customer_id": 1,
      "total_amount": 200.0
    }
  ]
  
  // customers
  [
    {
      "_id": 1,
      "name": "Alice Williams",
      "email": "alice@example.com"
    },
    {
      "_id": 2,
      "name": "Bob Anderson",
      "email": "bob@example.com"
    },
    {
      "_id": 3,
      "name": "Emily Davis",
      "email": "emily@example.com"
    }
  ]
  


//  More Tasks on Aggregation
//  Task 1: Group users by their favorite color and retrieve the count of users in each color group.
db.agreegationPrectice.aggregate([
  {
    $group: {
      _id: "$favorites.color",
      count: { $sum: 1 }
    }
  }
])

// Task 2: Find the user(s) with the highest age.
db.agreegationPrectice.aggregate([
  {
    $group: {
      _id : "$_id",
      maxAge: { $max: "$age"}
    }
  }
])

db.agreegationPrectice.aggregate([
  {
  $sort: { age: -1 }
},
{
  $limit: 1
}
  ])



// Task 3: Find the most common favorite food among all users.

// Task 4: Calculate the total count of friends across all users.

// Task 5: Find the user(s) with the longest name.

// Task 6: Calculate each state's total number of users in the address field.

// Task 7: Find the user(s) with the highest number of friends.

// These tasks involve using various aggregation operators such as $group, $avg, $max, $sum, and $project to perform complex calculations and data transformations. You can write MongoDB aggregation queries to accomplish each task based on user data. Adjust the queries according to your specific implementation and requirements.