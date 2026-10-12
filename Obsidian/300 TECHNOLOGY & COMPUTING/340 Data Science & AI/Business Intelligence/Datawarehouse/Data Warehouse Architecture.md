Date: 2025-11-07
Tags: [[Datawarehouse]], [[Business Intelligence]], [[Database]]

# ~={red} Notes=~
## Layers of a Data Warehouse

Using ~={purple}**ETL**=~ we extract data from different sources as tables and this layer is called **~={yellow}STAGING=~**, which leads to appending and combining small tables into more meaningful tables. more works can be done for example integrating the data *(restructuring :cleaning, sorting, unifying...).*
Doing all this leads to **~={yellow}Core=~**/data warehouse which can be perceived by all users and creating reporting or predictive analytics with it.
Some other times when having a large data warehouse we can build **~={yellow}Data Marts=~** on top of this core layer which comes in handy since it increases the user-friendliness and do not overwhelm users with so many tables.
an optional Layer is **~={yellow}Cleansing=~**, which can be included if the data is very raw.
~={blue}So what is actually the Data Warehouse in all of this layers?=~ from the end users it can be the **~={yellow}Core=~**. but actually it consists of~={red} all these layers=~, even though the core or data marts are perceived as the data warehouse.

### Staging area

The purpose of the **~={yellow}STAGING=~** area is to Etl (extract) the data from the sources, not at all of wasting time just *quickly* pull the data and put it safely in nice tables. After that with our eTL tools we load it into the **~={yellow}Core=~** layer of the data warehouse.
Extracting the data from the turning the wheel systems and apply transformations and move it into relational database.
SO basically:
- Staging Layer is the landing zone extracted data 
- As little "touching" as possible
- Data in tables and on a separate database
- We don't charge the source systems
- Temporary or Persistant Staging Layers
##### Setting up the Staging area in PostgreSQL
start by creating a data warehouse bu right-clicking on databases on postgre -> create an additional ~={red}schema=~ and call it Staging.

### Data Marts

A data mart is nothing but a subset of a datawarehouse which are in a dimensional model, so ~={yellow}fact=~ tables *(faits)* and ~={yellow}dimensional=~ tables *(dimension)* around it. ~={purple}Data marts are built for a specific use-case so we can further aggregate the data.=~
##### What are the real benefits of a data mart
- Increases usability since it focuses on just the relevant data.
- Increase performance : in-memory databases that have very fast query performance.

### Relational Database

We use SQL to manipulate the tables *(Relations)* in the database. we can use keys to put these tables into relations.
**~={purple}Primary key=~** : to uniquely identify every single row in our table usually its the first column that dont have nay duplicates or any null values.
~={purple}**Foreign keys**=~ : the purpose of these keys is to reference another table

![[Pasted image 20251108223004.png|center]]

Relational database management system (RDMS) :
 - Oracle 
 - Microsoft SQL Server 
 - PostgreSQL 
 - MySQL 
 - Amazon Relational Database Service (RDS) 
 - Azure SQL databases 
 - (Snowflake) 

### In-memory Databases

- Highly optimized for query performance 
- Usually used for data marts
- Good for Analytics / High query volume
- Relational and non-relational 
##### Traditional vs In-memory Databases
in Traditional databases, the data is stored in hard disc and when it needs to be processed we load the data in memory. With In-memory data bases we dont need to store data in dics since all of the data is stored in memory.
##### Setbacks of In-memory Databases
Even though its much faster, these in-memory databases comes with a price. when the database is disconnected from power or if it is reset the information is completely lost.
![[Pasted image 20251108230128.png|center]]

### OLAP Cubes

Alternative method to further increase the performance of data marts.
in Cubes the data is not organized in tables like traditional data warehouse, but in a non-relational way and into dimensions.  Data is organized in a Multidimensional dataset with array instead of tables. 

![[Pasted image 20251109003924.png|center]]

### ODS (Operational Data Storage)

An ODS is very similar to a data warehouse since we also have different sources but we want to integrate it into one database. the key difference is that and ODS is used for operational decision making. 
 - No need for long history.
 - Needs to be very current or real-time.
ODS uses a different type of ETL
![[Pasted image 20251109005900.png|center]]

we can also use ODS as our **Staging** layer for the data warehouse
![[Pasted image 20251109010021.png]]
ODS are getting less relevant nowadays since we get a better performance with new technologies for ETL/DBs.

# ~={red}Summary=~
### Data warehouse layers

![[Pasted image 20251109010520.png|center]]

### The different Layer

![[Pasted image 20251109010603.png|center]]


# ~={red}References=~
[[Business intelligence concepts - MDSI SDID 1.pdf]]
[[4 - Course-slides-Data-Warehouse-The-Ultimate-Guide.pdf]]]]