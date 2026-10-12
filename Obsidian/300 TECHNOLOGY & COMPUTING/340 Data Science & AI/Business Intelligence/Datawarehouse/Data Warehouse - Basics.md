Date: 2025-11-04
Tags: [[Datawarehouse]], [[Business Intelligence]], [[Database]]

# ~={red} Notes=~

### Why do wee need a Data Warehouse?
Data Warehouse is in for 2 purposes
##### 1. Operational data keeping
**OLTP** = Online Transactional Processing
 - Receive orders
 - React to complaints
 - Fill up stock  
~={yellow} -> keep the wheel turning=~
**Requirement** :
 -  One record at a time
 -  Data input
 -  No long history
##### 2. Analytical decision making
**OLAP** = Online Analytical Processing
answering common company's questions:
 - what's the best category?
 - how many sales compared to last month?
 - what can be improved?
~={yellow} -> Evaluates performance  *(watch the wheel)*=~
**Requirement** :
 -  Thousands of records at a time
 -  Fast query performance
 -  Historical context
 -  Usability

Basically, a datawarehouse is used for reporting and data analysis ~address those analytical data needs.
 
### What is a Data Warehouse
Data Warehouse is a database used and optimized for analytical purposes
 - user friendly
 - Fast query performance
 - Enabling data analysis

The most important process and 80% of the time when creating a datawarehouse goes to **ETL**.
![[Pasted image 20251107212651.png|center]]

To summarize, the goal of a data warehouse is :
- Centralized and consistent location for data which is extracted from different data sources.
- Retrieving results quickly to access data we need query performance.
- User-friendly and easy to understand.
- ETL process to load data consistently and repeatedly.
- Building reporting and visualisation on top of a data warehouse.

### Business Intelligence
*~={purple}Definition :=~* The strategies, technologies and infrastructures that transform raw data into meaningful insights.
Data warehouse is an important component of business intelligence since it's used as a data storage where the data can be analyzed and then visualized when reporting the **Data analysis**.

![[Pasted image 20251107220426.png|center]]


### Data Lake vs Data Warehouse 
BOTH used as centralized data storage

![[Pasted image 20251107220859.png|center]]

They are not mutually exclusive which means they are very different and have to use both. we can use the ETL process to get data out of a Data Lake and build a user-friendly Data warehouse on top of it.

### Remarque
- Pentaho is the tool to use ETL process you need to open it via spoon which is the ide of Penatho
- PostgreSQL is where you can manipulate the Data warehouse
 

# ~={red}References=~
[[4 - Course-slides-Data-Warehouse-The-Ultimate-Guide 1.pdf]]
https://github.com/ambientelivre/legacy-pentaho-ce?tab=readme-ov-file