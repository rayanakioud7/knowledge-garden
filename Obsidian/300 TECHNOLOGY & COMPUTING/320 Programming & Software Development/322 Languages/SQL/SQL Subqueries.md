
Date: 2025-12-13
Tags: [[SQL]], [[Programming language]], [[Database]], 

---

# ~={red} SQL Subqueries =~

## Overview
A **Subquery** (or Inner Query) is a query nested inside another SQL query (Outer Query). It allows for dynamic filtering, aggregation, and data manipulation by using the results of the inner query to drive the execution of the outer query.

![[Pasted image 20260208023710.png|center|500]]

> [!INFO] Execution Flow
> The **Inner Query** executes first, and its result is passed to the **Outer Query**.
> *Exception: Correlated Subqueries execute once for every row of the outer query.*

### Common Uses
* **Filtering**: Filter rows based on calculated results (e.g., finding items above the average price).
* **Aggregation**: Apply functions like `SUM` or `AVG` dynamically.
* **CRUD Operations**: Can be used in `SELECT`, `INSERT`, `UPDATE`, and `DELETE` statements.

---
## Basic Structure
```sql
SELECT column_name
FROM table_name
WHERE column_name operator (
    SELECT column_name 
    FROM table_name 
    WHERE condition
);
```

---

## Types of Subqueries

### 1. Scalar (Single-Row) Subquery

Returns **exactly one value** (one row, one column). It is treated like a constant value.

- **Operators**: `=`, `>`, `<`, `>=`, `<=`, `<>`
    

> [!EXAMPLE]
> 
> _Find students with a score higher than the class average._
> 
> ```sql
> SELECT student_name, score 
> FROM Students
> WHERE Score > (
>     SELECT AVG(Score) FROM Students
> );
> ```

### 2. Multi-Row Subquery

Returns **multiple rows** of data (one column).

- **Operators**: `IN`, `ANY`, `ALL`, `NOT IN`
    

> [!EXAMPLE]
> 
> _Find employees who work in departments located in 'New York'._
> 
> 
> ```sql
> SELECT emp_name 
> FROM Employees
> WHERE department_id IN (
>     SELECT department_id 
>     FROM Departments 
>     WHERE location = 'New York'
> );
> ```

### 3. Correlated Subquery

A subquery that **references a column from the outer query**. It cannot run independently.

- **Performance**: **Slower**, as it executes **once for every row** returned by the outer query.
    

> [!EXAMPLE]
> 
> _Find employees earning more than the average salary **of their own department**._
> 
> ```sql
> SELECT e.emp_name, e.salary, e.dept_id
> FROM Employees e
> WHERE e.salary > (
>     SELECT AVG(salary) 
>     FROM Employees 
>     WHERE dept_id = e.dept_id  -- Linking outer and inner tables
> );
> ```

---

## Subquery Placement

|**Placement**|**Purpose**|**Example Context**|
|---|---|---|
|**WHERE**|Filtering|"Show me users who have logged in recently."|
|**FROM**|Derived Tables|"Treat this result set as a temporary table to query against."|
|**SELECT**|Computed Columns|"For every row, run a calculation."|
|**HAVING**|Filter Aggregates|"Show groups where the count is higher than average."|

### 1. In `FROM` Clause (Derived Tables)

Often called an "Inline View". You **must** give the subquery an alias (e.g., `AS sub`).

```sql
SELECT sub.name, sub.phone_number
FROM (
    SELECT name, phone_number, location 
    FROM Student 
    WHERE location LIKE 'T%'
) AS sub;
```

### 2. In `UPDATE` Statements

Update data using values derived from other tables.

```sql
UPDATE Student_Info
SET status = 'Graduated'
WHERE student_id IN (
    SELECT student_id 
    FROM Marks 
    WHERE total_score > 90
);
```

### 3. In `DELETE` Statements

Delete rows based on dynamic conditions.

```sql
DELETE FROM Student
WHERE roll_no IN (
    SELECT roll_no 
    FROM Student_Archives 
    WHERE archive_date < '2020-01-01'
);
```

---

## Performance: `EXISTS` vs `IN`

When dealing with large datasets, choosing between `IN` and `EXISTS` matters.

- **`IN`**: Best when the subquery results are **small**. The database runs the subquery completely first.
    
- **`EXISTS`**: Best when the subquery results are **large**. The database stops scanning as soon as it finds a match ( "short-circuiting").
    

```sql
-- More efficient if 'Orders' table is huge
SELECT * FROM Customers c
WHERE EXISTS (
    SELECT 1 FROM Orders o 
    WHERE o.customer_id = c.id
);
```

---

# ~={red}References=~

- [GeeksforGeeks - SQL Subquery](https://www.geeksforgeeks.org/sql/sql-subquery/)
    
- [SQLBolt - Subqueries](https://sqlbolt.com/)