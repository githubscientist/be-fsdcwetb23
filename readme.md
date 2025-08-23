# Databases

- Databases are collection of data.
- Data can be structured or unstructured.
- Databases are non-volatile storage.

## Database Management Systems (DBMS)

- DBMS is software that interacts with databases.
- It allows users to create, read, update, and delete data.
- Examples include MySQL, PostgreSQL, MongoDB, and SQLite.

## Types of Databases

- **Relational Databases**: Use tables to store data and SQL for queries. Examples: MySQL, PostgreSQL.
- **NoSQL Databases**: Use various data models like key-value, document, or graph. Examples: MongoDB, Cassandra.

## MySQL

- MySQL is a popular open-source relational database management system.
- It uses SQL (Structured Query Language) for database operations.
- MySQL is widely used for web applications and data warehousing.

### MySQL Queries

To check the version of MySQL:

```sql
SELECT VERSION();
```

To check the current date and time:

```sql
SELECT NOW();
```

To show all databases:

```sql
SHOW DATABASES;
```

To create a new database:

```sql
CREATE DATABASE my_database;
```

Example:

```sql
create database fsdcwetb23;
```

To drop a database:

```sql
DROP DATABASE my_database;
```

To show which database is currently in use:

```sql
SELECT DATABASE();
```

To select a database to use:

```sql
USE my_database;
```

To show all tables in the current database:

```sql
SHOW TABLES;
```

Example Tables:

Products Table:

| ID  | Name        | Price | Brand     | Branch    | Location    |
| --- | ----------- | ----- | --------- | --------- | ----------- |
| 1   | Pen         | 20.5  | National  | Main      | New York    |
| 2   | Pencil      | 10.5  | National  | Secondary | Los Angeles |
| 3   | Notebook    | 40.0  | Classmate | Main      | Chicago     |
| 4   | Eraser      | 10.5  | National  | Main      | Houston     |
| 5   | Marker      | 60.0  | National  | Secondary | Phoenix     |
| 6   | Sharpener   | 15.0  | Monami    | Main      | New York    |
| 7   | Ruler       | 25.0  | National  | Secondary | Los Angeles |
| 8   | Highlighter | 30.0  | National  | Main      | Chicago     |
| 9   | Glue        | 20.0  | National  | Main      | Houston     |
| 10  | Tape        | 15.0  | National  | Secondary | Phoenix     |

To create a table:

```sql
CREATE TABLE products (
    id INT,
    name char(50),
    price DECIMAL(10, 2),
    brand VARCHAR(20),
    branch VARCHAR(20),
    location VARCHAR(20)
);
```

To get the structure of a table:

```sql
DESCRIBE products;
```

or

```sql
desc products;
```

To insert records into a table:

```sql
insert into products values
(1, 'Pen', 20.5, 'National', 'Main', 'New York'),
(2, 'Pencil', 10.5, 'National', 'Secondary', 'Los Angeles'),
(3, 'Notebook', 40.0, 'Classmate', 'Main', 'Chicago'),
(4, 'Eraser', 10.5, 'National', 'Main', 'Houston'),
(5, 'Marker', 60.0, 'National', 'Secondary', 'Phoenix'),
(6, 'Sharpener', 15.0, 'Monami', 'Main', 'New York'),
(7, 'Ruler', 25.0, 'National', 'Secondary', 'Los Angeles'),
(8, 'Highlighter', 30.0, 'National', 'Main', 'Chicago'),
(9, 'Glue', 20.0, 'National', 'Main', 'Houston'),
(10, 'Tape', 15.0, 'National', 'Secondary', 'Phoenix');
```

To add a new column to a table:

```sql
alter table Products add column category varchar(20);
```

To rename a column in a table:

```sql
alter table Products change category type varchar(20);
```

To modify a column type in a table:

```sql
alter table Products modify type varchar(50);
```

To drop a column from a table:

```sql
alter table Products drop column type;
```

To view all records in a table:

```sql
SELECT * FROM products;
```

To view specific columns:

```sql
select name, price, location from products;
```

To filter records based on conditions:

```sql
SELECT * FROM products where branch = 'Main';
```

To update a specific record:

```sql
UPDATE products SET brand='Classmate' where id=6;
```

Operators in SQL:

To filter records with price. greater than 25:

```sql
SELECT * FROM products WHERE price > 25;
```

To filter records with price greater than or equal to 25:

```sql
SELECT * FROM products WHERE price >= 25;
```

To filter records with price range between 25 (inclusive) and 50 (inclusive):

```sql
SELECT * FROM products WHERE price BETWEEN 25 AND 50;
```

or

```sql
SELECT * FROM products WHERE price >= 25 AND price <= 50;
```

To filter records with price greater than 25 or branch as 'Main':

```sql
SELECT * FROM products WHERE price > 25 OR branch = 'Main';
```

To filter records with locatin as either 'New York' or 'Phoenix':

```sql
SELECT * FROM products WHERE location IN ('New York', 'Phoenix');
```

or

```sql
SELECT * FROM products WHERE location = 'New York' OR location = 'Phoenix';
```

To filter records with location not in 'New York' or 'Phoenix':

```sql
SELECT * FROM products WHERE location NOT IN ('New York', 'Phoenix');
```

Aggregation Functions in SQL:

To find the minimum price of products:

```sql
SELECT MIN(price) FROM products;
```

To find the maximum price of products:

```sql
SELECT MAX(price) FROM products;
```

To filter records with min(price), max(price), sum(price), avg(price with aliases):

```sql
SELECT MIN(price) AS min_price, MAX(price) AS max_price, SUM(price) AS total_price, AVG(price) AS avg_price FROM products;
```

To find the total price of products branch wise:

```sql
SELECT branch, SUM(price) AS total_price FROM products GROUP BY branch;
```

To order the records by price in ascending order:

```sql
SELECT * FROM products ORDER BY price ASC;
```

To order the records by price in descending order:

```sql
SELECT * FROM products ORDER BY price DESC;
```

To limit the number of records returned:

```sql
SELECT * FROM products LIMIT 5;
```

To skip the first 5 records and return the next 2:

```sql
SELECT * FROM products LIMIT 2 OFFSET 5;

```

Relational Databases:

Relational databases use tables to store data and establish relationships between them. Each table has a primary key that uniquely identifies each record.

To insert a new record into the products table:

```sql
INSERT INTO products (id, name, price, brand, branch, location) VALUES (11, 'Stapler', 35.0, 'National', 'Main', 'San Francisco');
```

Constraints in SQL:

Constraints are rules applied to columns in a table to ensure data integrity. Common constraints include:

- **NOT NULL**: Ensures that a column cannot have a NULL value.
- **UNIQUE**: Ensures that all values in a column are unique.
- **PRIMARY KEY**: Uniquely identifies each record in a table.
- **FOREIGN KEY**: Establishes a relationship between two tables.

Normalization:

Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It involves dividing a database into multiple tables and defining relationships between them.

To create Orders table with a foreign key reference to Products:

```sql
create table Orders (
    order_id int primary key,
    product_id int,
    quantity int,
    customer_name varchar(50),
    foreign key (product_id) references products(id)
)
```

+----+-------------+-------+----------------+
| order_id | product_id | quantity | customer_name
+----+-------------+-------+----------------+
| 101 | 1 | 10 | XYZ |
| 102 | 1 | 20 | ABC |
| 103 | 2 | 15 | XYZ |

```sql
insert into Orders values
(101, 1, 10, 'XYZ'),
(102, 1, 20, 'ABC'),
(103, 2, 15, 'XYZ');
```

Question:

Find the product name ordered by customer 'ABC'.

```sql
select product_id from orders where customer_name = 'ABC';
```

```sql
select name from products where id = 1;
```

or

```sql
select name from products where id = (select product_id from orders where customer_name = 'ABC');
```

Answer: Joins

Joins are used to combine records from two or more tables based on a related column between them.

Joins Types:

- Inner Join: Combines records that have matching values in both tables.
- Outer Join
  - Left Outer Join: Returns all records from the left table and matched records from the right table. If there is no match, NULL values are returned for columns from the right table.
  - Right Outer Join: Returns all records from the right table and matched records from the left table. If there is no match, NULL values are returned for columns from the left table.
  - Full Outer Join: Returns all records when there is a match in either left or right table records. If there is no match, NULL values are returned for columns from the table without a match.

+----------+------------+----------+---------------+
| order_id | product_id | quantity | customer_name |
+----------+------------+----------+---------------+
| 101 | 1 | 10 | XYZ |
| 102 | 1 | 20 | ABC |
| 103 | 2 | 15 | XYZ |
+----------+------------+----------+---------------+

+----+-------------+-------+-----------+-----------+-------------+
| id | name | Price | Brand | branch | location |
+----+-------------+-------+-----------+-----------+-------------+
| 1 | Pen | 20.50 | National | Main | New York |
| 2 | Pencil | 10.50 | National | Secondary | Los Angeles |
| 3 | Notebook | 40.00 | Classmate | Main | Chicago |
| 4 | Eraser | 10.50 | National | Main | Houston |
| 5 | Marker | 60.00 | National | Secondary | Phoenix |
| 6 | Sharpener | 15.00 | Classmate | Main | New York |
| 7 | Ruler | 25.00 | National | Secondary | Los Angeles |
| 8 | Highlighter | 30.00 | National | Main | Chicago |
| 9 | Glue | 20.00 | National | Main | Houston |
| 10 | Tape | 15.00 | National | Secondary | Phoenix |
| 11 | Stapler | 35.00 | National | Main | New York |
+----+-------------+-------+-----------+-----------+-------------+

Pen 20.50 10 410.00 XYZ
Pen 20.50 20 205.00 ABC
Pencil 10.50 15 157.50 XYZ

Inner Join Example:

```sql
select products.name, products.price, orders.quantity, orders.quantity * products.price as totalAmount, orders.customer_name  from products inner join orders on products.id = orders.product_id order by totalAmount desc limit 1;
```

Left Outer Join Example:

```sql
select p.name, p.price, o.quantity, o.quantity * p.price as totalAmount, o.customefrom products as p left join orders as o on p.id = o.product_id order by totalAmount desc;
```

Right Outer Join Example:

```sql
select p.name, p.price, o.quantity, o.quantity * p.price as totalAmount, o.customer_name from products as p right join orders as o on p.id = o.product_id order by totalAmount desc;
```

Full Outer Join Example using UNION:

```sql
select p.name, p.price, o.quantity, o.quantity * p.price as totalAmount, o.customer_name from products as p left join orders as o on p.id = o.product_id order
union
select p.name, p.price, o.quantity, o.quantity * p.price as totalAmount, o.customer_name from products as p right join orders as o on p.id = o.product_id;
```

without alias:

```sql
select products.name, products.price, orders.quantity, orders.quantity * products.price as totalAmount, orders.customer_name from
products left join orders on products.id = orders.product_id
union
select products.name, products.price, orders.quantity, orders.quantity * products.price as totalAmount, orders.customer_name from products right join orders on products.id = orders.product_id;
```

MongoDB:

- NoSQL database that stores data in JSON-like documents.
- It is schema-less, allowing for flexible data structures.
- MongoDB is designed for scalability and high performance.

### MongoDB Queries

To list all the databases:

```javascript
show dbs;
```

or

```javascript
show databases;
```

To see the current database:

```javascript
db;
```

To create a new database:

```javascript
use fsdcwetb23;
```

To list all collections in the current database:

```javascript
show collections;
```

To create a new collection:

```javascript
db.createCollection("products");
```

To insert a document into a collection:

```javascript
db.products.insertOne({
  name: "Pen",
  price: 20.5,
  brand: "National",
  branch: "Main",
  location: "New York",
});
```

To insert multiple documents into a collection:

```javascript
db.products.insertMany([
  {
    name: "Pencil",
    price: 10.5,
    brand: "National",
    branch: "Secondary",
    location: "Los Angeles",
  },
  {
    name: "Notebook",
    price: 40.0,
    brand: "Classmate",
    branch: "Main",
    location: "Chicago",
  },
  {
    name: "Eraser",
    price: 10.5,
    brand: "National",
    branch: "Main",
    location: "Houston",
  },
  {
    name: "Marker",
    price: 60.0,
    brand: "National",
    branch: "Secondary",
    location: "Phoenix",
  },
  {
    name: "Sharpener",
    price: 15.0,
    brand: "Monami",
    branch: "Main",
    location: "New York",
  },
  {
    name: "Ruler",
    price: 25.0,
    brand: "National",
    branch: "Secondary",
    location: "Los Angeles",
  },
  {
    name: "Highlighter",
    price: 30.0,
    brand: "National",
    branch: "Main",
    location: "Chicago",
  },
  {
    name: "Glue",
    price: 20.0,
    brand: "National",
    branch: "Main",
    location: "Houston",
  },
  {
    name: "Tape",
    price: 15.0,
    brand: "National",
    branch: "Secondary",
    location: "Phoenix",
  },
]);
```

To select particular fields from a collection:

```javascript
db.products.find(
  {},
  {
    _id: 0,
    name: 1,
    price: 1,
  }
);
```

To filter documents based on conditions:

```javascript
db.products.find(
  { branch: "Main" },
  {
    _id: 0,
    name: 1,
    price: 1,
  }
);
```

To select documents with price greater than 30:

```javascript
db.products.find(
  {
    price: {
      $gte: 30,
    },
  },
  {
    _id: 0,
    name: 1,
    price: 1,
  }
);
```

List of Operators in MongoDB:

- `$eq`: Equal to
- `$ne`: Not equal to
- `$gt`: Greater than
- `$gte`: Greater than or equal to
- `$lt`: Less than
- `$lte`: Less than or equal to
- `$in`: Matches any value in an array
- `$nin`: Not in an array
- `$and`: Logical AND
- `$or`: Logical OR
- `$not`: Logical NOT

```javascript
db.products.find(
  {
    $and: [
      {
        price: {
          $gte: 25,
        },
        price: {
          $lte: 50,
        },
      },
    ],
  },
  {
    _id: 0,
    name: 1,
    price: 1,
  }
);
```

```
db.products.updateOne(
  {
    branch: 'Main'
  },
  {
    $set: {
      price: 35.0
    }
  }
)
```

Aggregation and Pipelines in MongoDB:

To find the count of documents in a collection:

```javascript
db.products.countDocuments();
```

or

```javascript
db.products.aggregate([
  {
    $count: "total_count",
  },
]);
```

To find the total price of all products:

```javascript
db.products.aggregate([
  {
    $group: {
      _id: null,
      total_price: {
        $sum: "$price",
      },
    },
  },
]);
```

To find the total price of products branch wise:

```javascript
db.products.aggregate([
  {
    $group: {
      _id: "$branch",
      total_price: {
        $sum: "$price",
      },
    },
  },
]);
```

To sort documents by price in ascending order after grouping with sum based on location:

```javascript
db.products.aggregate([
  {
    $group: {
      _id: "$location",
      totalPrice: {
        $sum: "$price",
      },
      avgPrice: {
        $avg: "$price",
      },
      min_price: {
        $min: "$price",
      },
    },
  },
  {
    $sort: {
      totalPrice: -1,
    },
  },
  {
    $limit: 3,
  },
]);
```
