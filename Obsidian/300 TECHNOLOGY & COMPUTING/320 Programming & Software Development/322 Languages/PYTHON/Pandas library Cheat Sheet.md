
---
title: "Pandas — Data Wrangling and Analysis"
date: 2026-03-04
tags: [[Python]], [[Data Science]], [[Business Intelligence]], [[Cheat sheet]]

 aliases: [Pandas, pandas, DataFrame, Data Wrangling]


# Pandas — Data Wrangling and Analysis

> [!info] Overview
> **Pandas** is the core Python library for structured data manipulation and analysis. Built on top of [[NumPy]], it introduces two primary data structures — the **Series** (1D) and the **DataFrame** (2D) — that provide fast, flexible, and expressive tools for working with relational and labeled data. Pandas is the backbone of virtually every data science, business intelligence, and machine learning pipeline in Python.

> [!tip] Tidy Data and Method Chaining
> - **Tidy Data:** Each variable forms a column, each observation forms a row, and each type of observational unit forms a table. This structure aligns perfectly with pandas' vectorized, column-oriented operations.
> - **Method Chaining:** Most pandas methods return a new DataFrame or Series, enabling fluent, readable pipelines. Wrap multi-line chains in parentheses for clean formatting.

```python
# Clean chaining example
df = (
    df
    .melt()
    .rename(columns={'variable': 'var', 'value': 'val'})
    .query('val >= 200')
    .reset_index(drop=True)
)
```

---

## 1. Importing Pandas

```python
import pandas as pd
import numpy as np
```

> [!abstract] Convention
> Pandas is universally imported with the alias `pd`. NumPy (`np`) is almost always imported alongside it, as the two libraries are deeply integrated.

---

## 2. Core Data Structures — Series vs. DataFrame

Before performing any operation, it is essential to understand the two fundamental objects in pandas.

### 2.1 Series (1D Labeled Array)

A **Series** is a one-dimensional array with an associated index. It is analogous to a single column in a spreadsheet or a single variable in a dataset.

```python
# Creating a Series
s = pd.Series([10, 20, 30], index=['a', 'b', 'c'], name='values')

s['a']       # Access by label → 10
s.iloc[0]    # Access by integer position → 10
s.values     # Underlying NumPy array → array([10, 20, 30])
s.index      # Index object → Index(['a', 'b', 'c'], dtype='object')
```

### 2.2 DataFrame (2D Labeled Table)

A **DataFrame** is a two-dimensional, size-mutable, tabular structure with labeled axes (rows and columns). It is the primary object you will interact with in pandas. Think of it as a dictionary of Series objects sharing the same index.

```python
# Creating a DataFrame from a dictionary (columns defined)
df = pd.DataFrame(
    {'a': [4, 5, 6],
     'b': [7, 8, 9]},
    index=[1, 2, 3]
)

# Creating a DataFrame from a list of lists (rows defined)
df = pd.DataFrame(
    [[4, 7],
     [5, 8],
     [6, 9]],
    columns=['a', 'b'],
    index=[1, 2, 3]
)

# Creating a DataFrame from a NumPy array
df = pd.DataFrame(
    np.random.randn(5, 3),
    columns=list('ABC')
)
```

| Feature | Series | DataFrame |
|---|---|---|
| Dimensions | 1D | 2D |
| Analogy | A single column | An entire spreadsheet/table |
| Access | `df['col']` returns a Series | `df[['col1','col2']]` returns a DataFrame |
| Has columns? | No (has a `name`) | Yes (`.columns` attribute) |
| Has index? | Yes | Yes |

---

## 3. Inspecting a DataFrame

Before any analysis, you must understand the shape, types, and content of your data. These methods provide a rapid diagnostic overview.

```python
df.head(10)                    # First 10 rows (default is 5)
df.tail(5)                     # Last 5 rows
df.shape                       # Tuple: (num_rows, num_columns)
df.columns                     # Column names (Index object)
df.index                       # Row index
df.dtypes                      # Data type of each column
df.info()                      # Concise summary: dtypes, non-null counts, memory
df.describe()                  # Summary statistics for numeric columns
df.describe(include='all')     # Summary statistics for ALL column types
df.memory_usage(deep=True)     # Memory consumption per column (in bytes)
df.nunique()                   # Number of distinct values per column
df.value_counts('col')         # Frequency table for a column
```

> [!tip] Display Options

```python
pd.options.display.max_columns = 50    # Show more columns in output
pd.options.display.max_rows = 100      # Show more rows
pd.set_option('display.precision', 2)  # Float display precision
pd.set_option('display.float_format', '{:.2f}'.format)  # Global float format
```

---
## 4. Data Input / Output (I/O)

Pandas provides a unified interface for reading from and writing to a wide variety of file formats and data sources.

### 4.1 Reading Data

```python
# CSV (most common flat file format)
df = pd.read_csv('file.csv', parse_dates=['date_col'])

# Excel
df = pd.read_excel('file.xlsx', sheet_name='Sheet1')

# Parquet (efficient columnar binary format — preferred for large data)
df = pd.read_parquet('file.parquet')

# SQL Database
df = pd.read_sql('SELECT * FROM table', con=connection)

# JSON
df = pd.read_json('file.json')

# Clipboard (useful for quick ad-hoc analysis)
df = pd.read_clipboard()
```

### 4.2 Writing Data

```python
# CSV
df.to_csv('file.csv', index=False)

# Excel
df.to_excel('file.xlsx', sheet_name='Sheet1', index=False)

# Parquet (with compression — highly recommended for intermediate storage)
df.to_parquet('file.parquet', compression='snappy')

# Feather (fast, language-agnostic binary format)
df.to_feather('file.ftr')

# Pickle (Python-native serialization)
df.to_pickle('file.pkl')
```

> [!important] CSV vs. Parquet
> | Feature | CSV | Parquet |
> |---|---|---|
> | Format | Plain text | Binary columnar |
> | Speed | Slow (parsed line-by-line) | Fast (columnar reads) |
> | File size | Large | Small (compressed) |
> | Data types preserved? | No (everything becomes string on disk) | Yes |
> | Best for | Sharing, small files, interop | Large datasets, pipelines, analytics |
>
> **Rule of thumb:** Use CSV for sharing and human readability. Use Parquet for everything else.

---

## 5. Subsetting Data — Selecting Rows and Columns

Subsetting is the most frequent operation in any data workflow. Pandas provides multiple mechanisms, each suited to different use cases.

### 5.1 Column Selection

```python
# Single column → returns a Series
df['col']

# Multiple columns → returns a DataFrame
df[['col1', 'col3']]

# Columns matching a regex pattern
df.filter(regex='pattern')

# Drop specific columns (returns a new DataFrame)
df.drop(columns=['col2', 'col4'])
```

### 5.2 Row Selection (Filtering)

```python
# Boolean indexing (most common method)
df[df['col'] > 5]

# Multiple conditions (use & for AND, | for OR; wrap each condition in parentheses)
df[(df['col'] > 5) & (df['col2'] == 'x')]

# Query language (cleaner syntax for complex filters)
df.query('col > 5 and col2 == "x"')

# Random sample
df.sample(frac=0.2)           # 20% of rows
df.sample(n=100)              # Exactly 100 rows

# Top / Bottom N by column value
df.nlargest(10, 'value')
df.nsmallest(5, 'value')

# Remove duplicate rows
df.drop_duplicates(subset=['col'])

# First / Last rows
df.head(10)
df.tail(5)
```

### 5.3 Label-Based Indexing with `.loc[]`

**`.loc[]`** selects data by **label** (row and column names). Both the start and stop of a label-based slice are **inclusive**.

```python
# Syntax: df.loc[row_labels, column_labels]

df.loc[10:20, 'col1':'col3']      # Rows labeled 10 through 20, columns col1 through col3
df.loc[:, 'col1']                  # All rows, single column
df.loc[df['col'] > 5, 'col1']     # Conditional row selection with column selection
df.at[5, 'col']                    # Fast scalar access by label (single value)
```

### 5.4 Position-Based Indexing with `.iloc[]`

**`.iloc[]`** selects data by **integer position** (like NumPy indexing). The stop value is **exclusive**, following standard Python convention.

```python
# Syntax: df.iloc[row_positions, column_positions]

df.iloc[10:21, [0, 2, 4]]         # Rows at positions 10–20, columns at positions 0, 2, 4
df.iloc[:, 0]                      # All rows, first column
df.iloc[0:5, :]                    # First 5 rows, all columns
df.iat[5, 2]                       # Fast scalar access by position (single value)
```

> [!warning] `.loc` vs `.iloc` — Critical Distinction
> | Feature | `.loc[]` | `.iloc[]` |
> |---|---|---|
> | Selection basis | **Labels** (names) | **Integer positions** |
> | Slice end | **Inclusive** | **Exclusive** |
> | Accepts booleans? | Yes | Yes |
> | Scalar access | `.at[row, col]` | `.iat[row, col]` |
> | Use when | You know column/row **names** | You know **positions** |
>
> Mixing them up is one of the most common sources of off-by-one errors in pandas code.

---

## 6. Reshaping Data

Reshaping transforms the layout of your DataFrame without changing the underlying data — essential for preparing data for visualization, modeling, or reporting.

```python
# Wide → Long (unpivot): each value gets its own row
pd.melt(df, id_vars=['id'], value_vars=['val1', 'val2'])

# Long → Wide (pivot): spread values into columns
df.pivot(index='id', columns='variable', values='value')

# Concatenate DataFrames
pd.concat([df1, df2], axis=0)          # Stack rows (vertically)
pd.concat([df1, df2], axis=1)          # Join columns (horizontally)

# Rename columns
df.rename(columns={'old': 'new'}, inplace=True)

# Set a column as the index
df.set_index('col')

# Reset the index back to a column
df.reset_index(drop=False)
```

> [!abstract] Melt vs. Pivot
> ```
> WIDE FORMAT (Pivot)          LONG FORMAT (Melt)
> ┌────┬──────┬──────┐         ┌────┬──────────┬───────┐
> │ id │ val1 │ val2 │         │ id │ variable │ value │
> ├────┼──────┼──────┤   →     ├────┼──────────┼───────┤
> │  1 │  10  │  20  │  melt   │  1 │  val1    │  10   │
> │  2 │  30  │  40  │   →     │  1 │  val2    │  20   │
> └────┴──────┴──────┘         │  2 │  val1    │  30   │
>                    ←  pivot  │  2 │  val2    │  40   │
>                              └────┴──────────┴───────┘
> ```

---

## 7. Data Cleaning and Transformation

Real-world data is never clean. This section covers the essential operations for handling missing values, correcting data types, and transforming strings and dates.

### 7.1 Handling Missing Data

```python
# Detect missing values
df.isna().sum()                                    # Count nulls per column
df.isna().mean()                                   # Proportion of nulls per column

# Remove rows/columns with missing values
df.dropna(how='any', subset=['col1', 'col2'])      # Drop rows with ANY null in subset
df.dropna(how='all')                                # Drop rows where ALL values are null

# Fill missing values
df.fillna(0)                                        # Fill with a scalar
df.fillna({'col1': 0, 'col2': 'missing'})           # Per-column fill values

# Interpolation (for time series or ordered data)
df.interpolate(method='linear')

# Forward fill / Backward fill
df.ffill()                                          # Propagate last valid value forward
df.bfill()                                          # Propagate next valid value backward
```

### 7.2 Data Type Conversion

Correct data types are essential for memory efficiency, correct computations, and preventing subtle bugs.

```python
# Check current types
df.dtypes

# Convert column type
df['col'] = df['col'].astype('float32')

# Convert to datetime
df['date'] = pd.to_datetime(df['date_str'])

# Force numeric conversion (coerce errors to NaN)
df['numeric'] = pd.to_numeric(df['string_col'], errors='coerce')

# Convert to categorical (memory-efficient for low-cardinality string columns)
df['category'] = df['cat_col'].astype('category')
```

### 7.3 String Operations (`Series.str`)

The `.str` accessor exposes vectorized string methods on Series containing text data.

```python
# Case transformation
df['col'].str.lower()
df['col'].str.upper()
df['col'].str.title()

# Pattern matching (returns boolean mask)
df['col'].str.contains('pattern', case=False)

# Regex extraction
df['col'].str.extract(r'(\d+)')

# Replacement
df['col'].str.replace('old', 'new')

# Whitespace handling and splitting
df['col'].str.strip()
df['col'].str.split(',')
```

### 7.4 Date and Time Operations (`Series.dt`)

The `.dt` accessor provides datetime-specific methods, analogous to `.str` for strings.

```python
# Extracting components
df['date'].dt.year
df['date'].dt.month
df['date'].dt.day
df['date'].dt.weekday        # Monday=0, Sunday=6
df['date'].dt.day_name()     # 'Monday', 'Tuesday', etc.

# Convert to period
df['date'].dt.to_period('M')                        # Monthly period

# Resampling (requires a DatetimeIndex)
df.set_index('date').resample('W').mean()            # Weekly mean
df.set_index('date').resample('M').sum()             # Monthly sum
```

### 7.5 Apply, Map, and Vectorized Operations

Understanding when to use each transformation method is critical for both code clarity and performance.

```python
# BEST: Vectorized operations (fastest — uses NumPy under the hood)
df['new'] = df['a'] * 2 + df['b']

# Vectorized conditional (fast if-else)
df['new'] = np.where(df['col'] > 0, 'pos', 'neg')

# Map: apply a dictionary or function to a Series (element-wise)
df['cat_code'] = df['cat'].map({'low': 1, 'medium': 2, 'high': 3})

# Apply: row-wise or column-wise custom functions (slower — use as last resort)
df['new'] = df.apply(lambda row: row['a'] + row['b'], axis=1)    # Row-wise
df[['a', 'b']].apply(np.sum, axis=0)                              # Column-wise
```

> [!warning] Performance Hierarchy
> Always prefer the fastest available method:
>
> | Rank | Method | Speed | Use When |
> |---|---|---|---|
> | 1 | Vectorized operations (`df['a'] + df['b']`) | Fastest | Arithmetic, comparisons |
> | 2 | `np.where()` / `np.select()` | Fast | Conditional logic |
> | 3 | `.map()` | Moderate | Dictionary lookups, simple transforms |
> | 4 | `.apply()` | Slow | Complex row-wise logic (last resort) |
> | 5 | Python `for` loop | Slowest | Never use on DataFrames |

---

## 8. Grouping and Aggregation (`groupby`)

The **split-apply-combine** paradigm is one of the most powerful patterns in data analysis. `groupby` splits the DataFrame into groups based on one or more keys, applies a function to each group independently, and then combines the results back into a single DataFrame.

```python
# Create a grouped object
grouped = df.groupby('category')

# Multiple aggregations on a single column
grouped['value'].agg(['sum', 'mean', 'count'])

# Different aggregation functions per column
grouped.agg({'value': 'sum', 'qty': 'mean'})

# Named aggregation (clean column names in output — recommended)
grouped.agg(
    total_value=('value', 'sum'),
    avg_qty=('qty', 'mean'),
    n_records=('value', 'count')
)
```

### Common GroupBy Methods

```python
grouped.size()                  # Number of rows per group
grouped.nunique()               # Distinct count per group
grouped.describe()              # Summary statistics per group
grouped.first()                 # First row per group
grouped.last()                  # Last row per group
```

### Transform and Filter Within Groups

```python
# Transform: returns a Series with the SAME shape as the input
# Useful for creating normalized values, group-level z-scores, etc.
df['value_norm'] = df.groupby('cat')['value'].transform(lambda x: x / x.sum())

# Filter: removes entire groups that do not meet a condition
df_filtered = df.groupby('cat').filter(lambda g: g['value'].sum() > 100)
```

### Aggregation Functions Reference

| Function | Description |
|---|---|
| `sum` | Sum of values |
| `mean` | Arithmetic mean |
| `median` | Median |
| `min` / `max` | Minimum / Maximum |
| `count` | Non-null count |
| `nunique` | Number of distinct values |
| `first` / `last` | First / Last value in group |
| `std` / `var` | Standard deviation / Variance |
| `quantile` | Sample quantile (e.g., `.quantile(0.75)`) |

---

## 9. Merging and Joining

Combining data from multiple sources is a fundamental operation in both data engineering and analysis. Pandas provides SQL-style join semantics.

### 9.1 SQL-Style Merges with `pd.merge()`

```python
# Inner join (only matching keys in BOTH DataFrames)
pd.merge(left_df, right_df, how='inner', on='key')

# Left join (all rows from left, matching from right)
pd.merge(left_df, right_df, how='left', left_on='lkey', right_on='rkey')

# Right join (all rows from right, matching from left)
pd.merge(left_df, right_df, how='right', on='key')

# Full outer join (all rows from both, NaN where no match)
pd.merge(left_df, right_df, how='outer', on=['key1', 'key2'])
```

### 9.2 Index-Based Joins and Concatenation

```python
# Join on index
df1.join(df2, how='inner')

# Concatenate rows (vertical stacking)
pd.concat([df1, df2], axis=0, join='inner')

# Concatenate columns (horizontal stacking)
pd.concat([df1, df2], axis=1)
```

### 9.3 Filtering Joins (Semi-Join and Anti-Join)

These are not built-in methods but are common patterns for filtering one DataFrame based on the keys present (or absent) in another.

```python
# Semi-join: keep rows in df1 where key EXISTS in df2
df1[df1['key'].isin(df2['key'])]

# Anti-join: keep rows in df1 where key DOES NOT EXIST in df2
df1[~df1['key'].isin(df2['key'])]
```

> [!abstract] Join Types Visual Reference
> ```
> LEFT JOIN:      All from LEFT,  matched from RIGHT  → NaN if no match on right
> RIGHT JOIN:     All from RIGHT, matched from LEFT   → NaN if no match on left
> INNER JOIN:     Only rows with keys in BOTH tables
> OUTER JOIN:     All rows from BOTH tables            → NaN where no match
> SEMI-JOIN:      Rows from LEFT where key exists in RIGHT (no columns added)
> ANTI-JOIN:      Rows from LEFT where key is ABSENT from RIGHT
> ```

---

## 10. Visualization (Matplotlib Backend)

Pandas integrates directly with [[Matplotlib]] for quick exploratory plots. Every `.plot()` call returns a Matplotlib `Axes` object for further customization.

```python
# Line plot (index as x-axis by default)
df.plot()

# Scatter plot
df.plot.scatter(x='col1', y='col2', alpha=0.5)

# Histogram
df['col'].plot.hist(bins=30)

# Box plot (by category)
df.boxplot(column='value', by='category')

# Bar plot (stacked)
df.plot(kind='bar', stacked=True)

# Subplots
df.plot(subplots=True, layout=(2, 2), figsize=(10, 8))
```

> [!note] Display in Scripts
> In Jupyter notebooks, plots render automatically. In standalone Python scripts, you must call `plt.show()` after creating the plot:
> ```python
> import matplotlib.pyplot as plt
> df.plot()
> plt.show()
> ```

---

## 11. Performance Tips

Writing efficient pandas code is essential when working with datasets that exceed trivial sizes. The following guidelines will prevent common performance pitfalls.

| Tip                           | Details                                                                             |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| **Use vectorized operations** | Avoid Python loops; prefer `df['c'] = df['a'] + df['b']` over `.apply()`.           |
| **Category dtype**            | Convert low-cardinality string columns to `category` to reduce memory by 90%+.      |
| **Downcast numerics**         | Use `pd.to_numeric(df['col'], downcast='float')` to shrink float64 to float32.      |
| Use `.query()`                | Can be faster than boolean masking for large DataFrames and is more readable.       |
| Use `.eval()`                 | `pd.eval()` and `df.eval()` accelerate complex arithmetic on large DataFrames.      |
| **Parquet over CSV**          | Use Parquet or Feather for intermediate storage — faster I/O and smaller files.     |
| Avoid `inplace=True`          | Method chaining is generally clearer; `inplace` does not save memory in most cases. |
| Avoid `.append()` in loops    | Build a list of DataFrames first, then call `pd.concat()` once at the end.          |

---

## 12. Quick Reference Cheat Sheet

> [!summary] Most Used Operations

```python
import pandas as pd

# ── I/O ──
df = pd.read_csv('file.csv')
df.to_csv('file.csv', index=False)

# ── INSPECT ──
df.head(), df.tail(), df.shape, df.info(), df.describe()
df.dtypes, df.columns, df.nunique()

# ── SELECT ──
df['col']                        # Single column (Series)
df[['col1', 'col2']]            # Multiple columns (DataFrame)
df.loc[row_label, col_label]     # By label
df.iloc[row_pos, col_pos]        # By position

# ── FILTER ──
df[df['col'] > 5]               # Boolean
df.query('col > 5')             # Query string

# ── CLEAN ──
df.isna().sum()                  # Count nulls
df.dropna()                      # Drop nulls
df.fillna(0)                     # Fill nulls
df.astype('float32')             # Cast type

# ── TRANSFORM ──
df['new'] = df['a'] + df['b']   # Vectorized
df.groupby('cat')['val'].sum()   # Group + aggregate
df.sort_values('col')            # Sort

# ── COMBINE ──
pd.merge(df1, df2, on='key')    # Join
pd.concat([df1, df2])           # Stack

# ── RESHAPE ──
pd.melt(df)                     # Wide → Long
df.pivot()                       # Long → Wide
```

> [!note]
> This reference assumes pandas version 1.5 or later. For deprecated methods such as `DataFrame.append()`, use `pd.concat()` instead.
