Date: 2025-11-14
Tags: [[Datawarehouse]], [[Business Intelligence]], [[Database]]

# ~={red} Notes=~
### Overview
##### ~={orange}~={blue}What is dimensional modeling?=~=~
Methods, techniques and concepts of organizing Data in a Data Warehouse.
In a dimensional model all of our data is organized either in **~={yellow}Facts=~** ~={yellow}*(Measurement)* -table de Fait in french=~- or **~={green}Dimensions *(Context) -table de Dimension in french*=~**. 
 - ~={yellow}**Facts**=~ are typically (but not always) numeric values that can be aggregated.
 - **~={green}Dimensions=~** are groups of hierarchies and descriptors that define the facts.
##### ~={blue}Why dimensional modeling?=~
 - The goal of dimensional modeling is Fast data retrieval and it is oriented around performance and usability 
 - Understandability. Compared to normalized model, the dimensional model is easier to understand and more intuitive, by grouping information into coherent business categories.
 - Extensibility. Existing tables can be changed in place by adding new data rows into the table, with old queries continuing toto run without yielding different results.
 
---
##### ~={blue}Facts=~



### Design 
The dimensional modeling is built on a **~={cyan}~={pink}Star=~=~**-schema or **~={cyan}Snowflake=~**-schema, with dimensions surrounding the fact table.


# ~={red}References=~
[[4 - Course-slides-Data-Warehouse-The-Ultimate-Guide.pdf]]
https://publish.obsidian.md/kaas-published/0-Slipbox/Dimensional+Modeling
[[Business intelligence concepts - MDSI SDID 1.pdf]]