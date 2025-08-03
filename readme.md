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

| ID  | Name     | Price | Brand     | Branch    | Location    |
| --- | -------- | ----- | --------- | --------- | ----------- |
| 1   | Pen      | 20.5  | National  | Main      | New York    |
| 2   | Pencil   | 10.5  | National  | Secondary | Los Angeles |
| 3   | Notebook | 40.0  | Classmate | Main      | Chicago     |
| 4   | Eraser   | 10.5  | National  | Main      | Houston     |
| 5   | Marker   | 60.0  | National  | Secondary | Phoenix     |

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
