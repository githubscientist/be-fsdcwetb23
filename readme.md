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
