
Date: 2025-12-10
Tags: [[SQL]], [[Programming language]], [[Database]], [[Cheat sheet]] 
 
---

# ~={red} SQL Master Note=~

## Types of SQL Commands

![[Pasted image 20251210191721.png|center]]

> [!INFO] Command Categories
> * **DDL (Data Definition)**: `CREATE`, `ALTER`, `DROP` (Defines the structure)
> * **DML (Data Manipulation)**: `INSERT`, `UPDATE`, `DELETE` (Manipulates the data)
> * **DQL (Data Query)**: `SELECT` (Queries the data)
> * **DCL (Data Control)**: `GRANT`, `REVOKE` (Permissions)
> * **TCL (Transaction Control)**: `COMMIT`, `ROLLBACK`

---

## SQL Command Structure (Syntax)

The logical order of a standard query:

1.  **~={blue}SELECT=~** column1, column2...
2.  **~={blue}FROM=~** table_name
3.  **~={blue}WHERE=~** condition1, condition2...
4.  **~={blue}GROUP BY=~** column1, column2...
5.  **~={blue}HAVING=~** condition1, condition2...
6.  **~={blue}ORDER BY=~** column1, column2...

> [!IMPORTANT] Order of Execution
> SQL is *written* in the order above, but the database *executes* it in this order:
> `FROM/JOIN` $\rightarrow$ `WHERE` $\rightarrow$ `GROUP BY` $\rightarrow$ `HAVING` $\rightarrow$ `SELECT` $\rightarrow$ `ORDER BY` $\rightarrow$ `LIMIT`

---

## SQL Data Types & Nulls

![[Pasted image 20251210192038.png|center]]

### Handling NULL Values
**NULL** represents missing or undefined data. It is not zero, and it is not an empty string.

> [!TIP] Best Practice
> Minimize `NULL` values where possible. Use **default values** (e.g., `0` for integers, `''` for text) to avoid skewing analysis.

*~={blue}Select query with constraints on NULL values=~*:
```sql
SELECT column, another_column
FROM mytable 
WHERE column IS NOT NULL 
  AND another_condition = 'value';
```

---

## SQL Operators

![[Pasted image 20251210192131.png|center]]

---

## **SQL BASICS (CRUD Operations)**

### Database Management

- `SHOW DATABASES;` - List all databases.
    
- `USE database_name;` - Select a database to work on.
    
- `SHOW TABLES;` - List tables in the selected database.
    
- `DESCRIBE table_name;` - Show columns and data types of a table.
    

### **CREATE DATABASE AND TABLES**

**1. Create Database**

```sql
CREATE DATABASE myDatabase;
USE myDatabase;
```

**2. Create Table**


```sql
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2),
    hire_date DATE,
    dept_id INT,
    manager_id INT
);
```

> [!NOTE] Schema Visualization
> 
> ![[Pasted image 20251210205437.png|center]]
> 
> _Mermaid representation:_
> 
>
> ```mermaid
> classDiagram
>     class employees {
>         INT emp_id
>         VARCHAR emp_name
>         DECIMAL salary
>         DATE hire_date
>         INT dept_id
>         INT manager_id
>     }
> ```

**3. Inserting Data**

```sql
INSERT INTO employees (emp_name, salary, hire_date, dept_id, manager_id) VALUES
('John CEO', 100000, '2018-01-15', 1, NULL),
('Alice Manager', 85000, '2019-03-20', 1, 1),
('Bob Developer', 75000, '2020-06-10', 2, 2);
```

### **Scalar & Utility Queries**

**Arithmetic & Dates**

```sql
-- Arithmetic
SELECT (10 - 20) AS subtract; -- Returns -10

-- Date Functions
SELECT CURDATE();       -- Returns 'YYYY-MM-DD'
SELECT DAY(CURDATE());  -- Returns day number of the month
SELECT NOW();           -- Returns date and time
```

**String Functions**

```sql
-- LENGTH: Return number of characters
SELECT LENGTH('India') AS total_len; 

-- REPEAT: Repeat string n times
SELECT REPEAT('@', 10);

-- CASE: Change case
SELECT UPPER("India");   -- INDIA
SELECT LOWER("MOROCCO"); -- morocco

-- CONCAT: Merge strings
SELECT CONCAT(emp_name, " earns ", salary) FROM employees;

-- TRIM: Remove whitespace
SELECT TRIM("   rayan   ");  -- "rayan"
SELECT LTRIM("   rayan");    -- "rayan"

-- SUBSTRING & POSITION
SELECT SUBSTRING('Hello', 2, 3); -- 'ell' (Starts at index 2, length 3)
SELECT INSTR('Hello world', 'world'); -- Returns 7 (Position index)
```

---

## ~={purple}Filtering and Querying (SELECT)=~

### Basic Selects

```sql
-- Specific columns
SELECT column1, column2 FROM mytable;

-- All columns
SELECT * FROM mytable;
```

### ~={purple}The WHERE Clause=~

Used to filter rows _before_ grouping.

```sql
SELECT * FROM mytable 
WHERE condition1 AND/OR condition2;
```

| **Operator**     | **Description**       | **Example**                      |
| ---------------- | --------------------- | -------------------------------- |
| `=`, `!=`, `<>`  | Equality/Inequality   | `dept_id != 4`                   |
| `BETWEEN .. AND` | Inclusive Range       | `price BETWEEN 10 AND 20`        |
| `IN (...)`       | Matches any in list   | `city IN ('Paris', 'London')`    |
| `LIKE`           | Pattern Matching      | `name LIKE 'A%'` (Starts with A) |
| `%`              | Wildcard (Many chars) | `LIKE '%ABC%'`                   |
| `_`              | Wildcard (One char)   | `LIKE 'A_C'`                     |

### ~={purple}Sorting and Limiting=~

**DISTINCT**: Removes duplicate rows from the result.

```sql
SELECT DISTINCT dept_id FROM employees;
```

**ORDER BY**: Sorts results.

```sql
SELECT name, salary FROM employees
ORDER BY salary DESC; -- ASC is default
```

**LIMIT & OFFSET**: Pagination.

```sql
SELECT * FROM employees
ORDER BY hire_date DESC
LIMIT 5 OFFSET 0; -- Top 5 newest employees
```

---

## **Multi-table queries with JOINs**

Joins allow us to combine data from normalized tables linked by keys (Primary Key & Foreign Key).

### ~={blue}INNER JOIN=~

Returns records that have matching values in **both** tables.

![[Pasted image 20251211193346.png|center]]

```sql
SELECT employees.emp_name, departments.dept_name
FROM employees
INNER JOIN departments 
    ON employees.dept_id = departments.id;
```

### ~={blue}OUTER JOINs=~

Used when you want to keep data from one table even if the other table has no match (fills with `NULL`).

![[Pasted image 20251211192127.png]] ![[Pasted image 20251211192137.png]]

#### 1. LEFT JOIN

Returns **all** rows from the left table, and matching rows from the right table.

```sql
SELECT e.emp_name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
```

_Result:_ If an employee has no department, they still appear, but `dept_name` will be NULL.

#### 2. RIGHT JOIN

Returns **all** rows from the right table, and matching rows from the left table.

```sql
SELECT e.emp_name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.id;
```

_Result:_ If a department has no employees, the department still appears, but `emp_name` will be NULL.

#### 3. FULL JOIN

Returns rows when there is a match in **either** one of the tables.

```sql
SELECT e.emp_name, d.dept_name
FROM employees e
FULL JOIN departments d ON e.dept_id = d.id;
```

> [!SUMMARY] Join Cheat Sheet
> 
> - **INNER**: Intersection only (A ∩ B)
>     
> - **LEFT**: All of Left + Intersection (A)
>     
> - **RIGHT**: All of Right + Intersection (B)
>     
> - **FULL**: Everything (A ∪ B)
>     

---

## **Self-Join**

A self-join is a regular join, but the table is joined with itself. This is useful for hierarchical data (e.g., Employees and Managers in the same table).

```sql
SELECT 
    CONCAT(m.emp_name) AS Manager,
    CONCAT(e.emp_name) AS Employee
FROM employees AS e
INNER JOIN employees AS m 
    ON e.manager_id = m.emp_id
ORDER BY Manager;
```

_Logic:_ We treat the `employees` table as two separate tables: `e` (the worker) and `m` (the boss). We match the worker's `manager_id` to the boss's `emp_id`.

---

## **Aggregation: GROUP BY & HAVING**

### ~={purple}GROUP BY=~

Groups rows that have the same values into summary rows. Often used with `COUNT`, `MAX`, `MIN`, `SUM`, `AVG`.

![[Pasted image 20251211200945.png|center]]

**Example**: Count employees per department.

```sql
SELECT dept_id, COUNT(emp_id) AS num_emp 
FROM employees 
GROUP BY dept_id 
ORDER BY num_emp ASC;
```

### ~={purple}HAVING=~

The `WHERE` keyword cannot be used with aggregate functions. `HAVING` was added to SQL for this purpose.

> [!WARNING] WHERE vs HAVING
> 
> - **WHERE**: Filters rows _before_ grouping.
>     
> - **HAVING**: Filters groups _after_ grouping.
>     

**Example**: Show departments with an average salary > 60,000.

```sql
SELECT dept_id, AVG(salary) AS avg_sal
FROM employees
GROUP BY dept_id
HAVING avg_sal > 60000;
```

---

# ~={red}References=~

- [Simplilearn SQL Course](https://lms.simplilearn.com/courses/4309/Introduction-to-SQL/syllabus)
    
- [SQLBolt - Constraints](https://sqlbolt.com/lesson/select_queries_with_constraints)
    
- [GeeksForGeeks - Outer Joins](https://www.geeksforgeeks.org/sql/sql-outer-join/)