Date: 2026-03-23
Tags: [[Python]], [[Data Science]], [[Array]], [[Cheat sheet]], [[Mathematics]], [[Linear Algebra]], [[Machine Learning]]

# NumPy — Numerical Python

> [!info] Overview
> NumPy (**Numerical Python**) is the foundational open-source library for scientific computing in Python. It provides a high-performance **multidimensional array object** (`ndarray`) and a comprehensive collection of tools for working with arrays, linear algebra, Fourier transforms, random number generation, and matrices.
>
> NumPy arrays are:
> - **Homogeneous** — every element must be of the same data type.
> - **Fixed-size at creation** — changing the size creates a new array and deletes the original.
> - **Stored in contiguous memory** — enabling cache-efficient, vectorized operations.
> - **10–100× faster** than standard Python lists for numerical operations due to pre-compiled C code under the hood.

> [!question]- Why use NumPy over Python lists?
> | Feature | Python List | NumPy Array |
> |---|---|---|
> | Data types | Heterogeneous (mixed) | Homogeneous (single type) |
> | Speed | Slow (interpreted loops) | Fast (vectorized C loops) |
> | Memory | Higher overhead per element | Compact, contiguous memory |
> | Broadcasting | Not supported | Fully supported |
> | Linear algebra | Manual implementation | Built-in (`np.dot`, `np.linalg`) |
> | Element-wise ops | Requires loops | Native operator overloading |

---

```python
import sys
print(sys.version)
```

## 1. Importing NumPy

```python
import numpy as np
```

> [!tip] Convention
> NumPy is **always** imported with the alias `np`. This is a universal convention across the entire data science ecosystem ([[Pandas]], [[Matplotlib]], [[Scikit-Learn]], etc.).

### Asking for Help

```python
np.info(np.ndarray.dtype)   # Get help on a specific NumPy function or attribute
np.lookfor('create array')  # Search the NumPy docstrings for a keyword
help(np.array)              # Standard Python help
```

---

## 2. Creating Arrays

### 2.1 From Python Sequences

```python
# 1D array from a list
a = np.array([1, 2, 3])

# 2D array from a nested list (each inner list = one row)
b = np.array([(1.5, 2, 3), 
			  (4, 5, 6)], dtype=float)

# 3D array
c = np.array([[(1.5, 2, 3), (4, 5, 6)],
              [(3, 2, 1), (4, 5, 6)]], dtype=float)
print(a)
```

### 2.2 Initial Placeholders (Built-in Constructors)

These functions create arrays pre-filled with specific values — essential for initializing weight matrices, accumulators, and buffers.

```python
np.zeros((3, 4))                    # 3×4 array of zeros (float64 by default)
np.ones((2, 3, 4), dtype=np.int16)  # 2×3×4 array of ones (int16)
np.full((2, 2), 7)                  # 2×2 array filled with the constant 7
np.eye(2)                           # 2×2 identity matrix (1s on diagonal)
np.empty((3, 2))                    # 3×2 uninitialized array (garbage values — faster)
```

> [!warning] `np.empty` does **not** initialize values
> The values are whatever happens to be in that memory location. Never assume they are zero. Use `np.zeros` when you need guaranteed initialization.

### 2.3 Sequences and Ranges

```python
# Evenly spaced values with a STEP size
d = np.arange(10, 25, 5)        # array([10, 15, 20])  — excludes stop value

# Evenly spaced values with a specified NUMBER of samples
np.linspace(0, 2, 9)            # 9 evenly spaced values from 0 to 2 (inclusive)

# Logarithmically spaced values
np.logspace(0, 3, 4)            # array([1, 10, 100, 1000]) — 10^0 to 10^3
```

> [!example] `np.linspace` for Plotting
```python
x = np.linspace(-2 * np.pi, 2 * np.pi, num=100)
y = np.sin(x)
# 'x' and 'y' are now ready to be passed to matplotlib
```

### 2.4 Random Arrays

```python
np.random.random((2, 2))        # Uniform distribution over [0, 1)
np.random.rand(3, 3)            # Same — uniform [0, 1), shape as positional args
np.random.randn(3, 3)           # Standard normal distribution (mean=0, std=1)
np.random.randint(0, 10, (3,3)) # Random integers in [0, 10)
np.random.seed(42)              # Set seed for reproducibility
```

---

## 3. Data Types (`dtype`)

Every NumPy array has a single, fixed data type for all elements. This is how NumPy achieves its memory efficiency and speed.

| `dtype` | Description | Typical Size |
|---|---|---|
| `np.int64` | Signed 64-bit integer | 8 bytes |
| `np.int32` | Signed 32-bit integer | 4 bytes |
| `np.float32` | Single-precision float | 4 bytes |
| `np.float64` | Double-precision float (default) | 8 bytes |
| `np.complex128` | Complex number (two 64-bit floats) | 16 bytes |
| `np.bool_` | Boolean (`True` / `False`) | 1 byte |
| `np.object_` | Python object type | varies |
| `np.string_` | Fixed-length byte string | varies |
| `np.unicode_` | Fixed-length unicode string | varies |

```python
# Specifying dtype at creation
a = np.array([1, 2, 3], dtype=np.float32)

# Checking dtype
a.dtype        # dtype('float32')
a.dtype.name   # 'float32'

# Converting (casting) to a different type — returns a NEW array
b = a.astype(int)
```

> [!tip] Memory Optimization
> For large datasets, using `float32` instead of the default `float64` halves memory usage with minimal precision loss — critical in [[Deep Learning]] and [[Machine Learning]] pipelines.

---

## 4. Inspecting Arrays

Understanding the structure of your array before performing operations prevents bugs and shape mismatches.

```python
a = np.array([[1, 2, 3],
              [4, 5, 6]])

print("shape: ",a.shape)       # (2, 3) — 2 rows, 3 columns
print("dimension: ", a.ndim)        # 2 — number of dimensions (axes)
print("size: ",a.size)        # 6 — total number of elements
print("type: ", a.dtype)       # dtype('int64') — data type of elements
print("type name:", a.dtype.name)  # 'int64' — string name of the data type
print('item size: ', a.itemsize)    # 8 — size in bytes of each element
print("total bytes consumed: ",a.nbytes)      # 48 — total memory consumed (size × itemsize)
print('number of rows: ', len(a))        # 2 — length of the first axis (number of rows)
```

> [!abstract] Attribute Summary
> | Attribute | Returns | Example (2×3 array) |
> |---|---|---|
> | `.shape` | Tuple of dimension sizes | `(2, 3)` |
> | `.ndim` | Number of dimensions | `2` |
> | `.size` | Total element count | `6` |
> | `.dtype` | Element data type | `int64` |
> | `.itemsize` | Bytes per element | `8` |
> | `.nbytes` | Total bytes | `48` |

---

## 5. Indexing, Slicing, and Selecting

### 5.1 Basic Indexing (1D)

NumPy uses **0-based indexing**. Negative indices count from the end.

```python
a = np.array([1, 2, 3, 4, 5])

a[0]     # 1 — first element
a[-1]    # 5 — last element
a[2]     # 3 — third element
a[0] = 100  # Reassign the first element
```

### 5.2 Basic Indexing (2D)

```python
b = np.array([[1.5, 2, 3],
              [4,   5, 6]])

b[1, 2]   # 6.0 — row 1, column 2 (preferred NumPy syntax)
b[1][2]   # 6.0 — equivalent but less efficient (creates intermediate array)
```

### 5.3 Slicing `[start:stop:step]`

Slicing extracts a **view** (not a copy) of the array — modifications to the slice affect the original array.

#### 1D Slicing

```python
a = np.array([1, 2, 3, 4, 5, 6, 7])

a[0:2]     # array([1, 2]) — index 0 and 1
a[1:5:2]   # array([2, 4]) — index 1 to 4, step 2
a[4:]      # array([5, 6, 7]) — index 4 to end
a[:4]      # array([1, 2, 3, 4]) — start to index 3
a[::-1]    # array([7, 6, 5, 4, 3, 2, 1]) — reversed array
```

#### 2D Slicing

```python
b = np.array([[1.5, 2, 3],
              [4,   5, 6]])

b[0:2, 1]    # array([2., 5.]) — rows 0–1, column 1
b[:1]        # array([[1.5, 2., 3.]]) — all of row 0 (equiv. to b[0:1, :])
b[0, 0:2]   # array([1.5, 2.]) — row 0, columns 0–1
b[0:2, 0:2] # 2×2 block from top-left corner
```

> [!danger] Slices are Views, Not Copies!
> ```python
> original = np.array([1, 2, 3, 4, 5])
> sliced = original[1:4]
> sliced[0] = 999
> print(original)  # array([1, 999, 3, 4, 5]) — original is modified!
> ```
> Use `.copy()` when you need an independent copy: `safe = original[1:4].copy()`

### 5.4 Boolean Indexing

Select elements based on a condition. Returns a **copy** (not a view).

```python
a = np.array([1, 2, 3, 4, 5])

a[a < 3]       # array([1, 2]) — elements where condition is True
a[a > 2]       # array([3, 4, 5])
a[a % 2 == 0]  # array([2, 4]) — even numbers only

# The condition creates a boolean mask:
mask = a < 3   # array([True, True, False, False, False])
a[mask]        # array([1, 2])
```

### 5.5 Fancy Indexing

Use arrays of indices to select specific elements in an arbitrary order. Returns a **copy**.

```python
a = np.array([10, 20, 30, 40, 50])
indices = [0, 3, 4]
a[indices]  # array([10, 40, 50])

# 2D fancy indexing
b = np.array([[1.5, 2, 3],
              [4,   5, 6]])

b[[1, 0, 1, 0], [0, 1, 2, 0]]  # Elements at (1,0), (0,1), (1,2), (0,0)
                                 # array([4., 2., 6., 1.5])

# Select a subset of rows and columns
b[[1, 0, 1, 0]][:, [0, 1, 2, 0]]  # Reordered rows and columns
```

### 5.6 Assigning Values with Indices

```python
a = np.array([0, 1, 2, 3, 4])

# Single assignment
a[0] = 100

# Multiple assignment with a list of indices
select = [0, 2, 3]
a[select] = 999  # Elements at indices 0, 2, 3 all become 999

# Conditional assignment
a[a < 500] = 0   # All elements less than 500 become 0
```

---

## 6. Arithmetic Operations (Element-wise)

Standard arithmetic operators are **element-wise** (not matrix algebra) and require arrays of compatible shapes.

### 6.1 Basic Arithmetic

```python
a = np.array([1, 2, 3])
b = np.array([1.5, 2, 3])

# Subtraction
g = a - b               # array([-0.5, 0., 0.])
g = np.subtract(a, b)   # Equivalent

# Addition
z = b + a               # array([2.5, 4., 6.])
z = np.add(b, a)        # Equivalent

# Multiplication (element-wise, NOT matrix multiplication)
z = a * b               # array([1.5, 4., 9.])
z = np.multiply(a, b)   # Equivalent

# Division
z = a / b               # array([0.667, 1., 1.])
z = np.divide(a, b)     # Equivalent
```

### 6.2 Scalar Operations (Broadcasting)

When operating on an array and a scalar, NumPy **broadcasts** the scalar to every element.

```python
a = np.array([1, 2, 3, -1])

a + 1    # array([2, 3, 4, 0])
a * 2    # array([2, 4, 6, -2])
a ** 2   # array([1, 4, 9, 1])
a / 2    # array([0.5, 1.0, 1.5, -0.5])
```

### 6.3 Hadamard Product vs. Matrix Multiplication

> [!important] Critical Distinction
> - **`*` operator** → Element-wise (Hadamard) product
> - **`np.dot()` or `@` operator** → True linear algebra matrix multiplication

```python
X = np.array([[1, 0], [0, 1]])
Y = np.array([[2, 1], [1, 2]])

# Hadamard Product (element-wise)
Z = X * Y    # array([[2, 0], [0, 2]])

# Matrix Multiplication (dot product)
Z = np.dot(X, Y)  # array([[2, 1], [1, 2]])
Z = X @ Y         # Equivalent (Python 3.5+)
```

### 6.4 Dot Product (Vectors)

For 1D arrays, `np.dot` computes the **inner product** (sum of element-wise products).

```python
x = np.array([1, 2])
y = np.array([3, 2])

np.dot(x, y)  # (1×3) + (2×2) = 7
```

---

## 7. Universal Mathematical Functions (`ufuncs`)

NumPy provides **universal functions** that operate element-wise on arrays, executing optimized C-level loops.

### 7.1 Trigonometric and Transcendental

```python
a = np.array([0, np.pi/2, np.pi])

np.sin(a)     # array([0., 1., 0.])     — sine
np.cos(a)     # array([1., 0., -1.])    — cosine
np.tan(a)     # tangent
np.arcsin(a)  # inverse sine
```

### 7.2 Exponential and Logarithmic

```python
b = np.array([1, 2, 3])

np.exp(b)      # e^x for each element → array([2.718, 7.389, 20.086])
np.log(b)      # Natural logarithm (ln)
np.log2(b)     # Base-2 logarithm
np.log10(b)    # Base-10 logarithm
np.sqrt(b)     # Square root → array([1., 1.414, 1.732])
np.power(b, 3) # Element-wise power → array([1, 8, 27])
```

### 7.3 Rounding

```python
a = np.array([1.7, 2.3, 3.5])

np.floor(a)    # array([1., 2., 3.])  — round down
np.ceil(a)     # array([2., 3., 4.])  — round up
np.round(a)    # array([2., 2., 4.])  — round to nearest even
np.abs(a)      # Absolute value
```

### 7.4 Constants

```python
np.pi       # 3.141592653589793
np.e        # 2.718281828459045
np.inf      # Infinity
np.nan      # Not a Number
np.newaxis  # Used to increase array dimensions (broadcasting trick)
```

---

## 8. Aggregate / Statistical Functions

These functions reduce an array (or an axis) to a single summary value.

```python
a = np.array([[1, 2, 3],
              [4, 5, 6]])

# Global aggregates (entire array)
a.sum()         # 21 — sum of all elements
a.min()         # 1
a.max()         # 6
a.mean()        # 3.5
np.median(a)    # 3.5
a.std()         # Standard deviation
a.var()         # Variance
a.cumsum()      # Cumulative sum → array([1, 3, 6, 10, 15, 21])
a.cumprod()     # Cumulative product
np.corrcoef(a)  # Correlation coefficient matrix

# Aggregates along an axis
a.sum(axis=0)   # array([5, 7, 9]) — sum down each column
a.sum(axis=1)   # array([6, 15])   — sum across each row
a.max(axis=0)   # array([4, 5, 6]) — max of each column
a.min(axis=1)   # array([1, 4])    — min of each row
```

> [!abstract] Axis Reference
> ```
> axis 0 → rows    (operates DOWN ↓ each column)
> axis 1 → columns (operates ACROSS → each row)
> ```
> Think of it as: **the axis that gets collapsed/reduced**.

| Function | Description |
|---|---|
| `a.sum()` | Sum of all elements |
| `a.min()` | Minimum value |
| `a.max()` | Maximum value |
| `a.mean()` | Arithmetic mean |
| `np.median(a)` | Median value |
| `a.std()` | Standard deviation |
| `a.var()` | Variance |
| `a.cumsum()` | Cumulative sum |
| `a.cumprod()` | Cumulative product |
| `np.corrcoef(a)` | Correlation coefficient matrix |
| `np.argmax(a)` | Index of maximum value |
| `np.argmin(a)` | Index of minimum value |

---

## 9. Comparison Operators

Comparisons on NumPy arrays return **boolean arrays**, enabling powerful filtering.

```python
a = np.array([1, 2, 3])
b = np.array([3, 2, 1])

# Element-wise comparison
a == b                  # array([False, True, False])
a < 2                   # array([True, False, False])
a > b                   # array([False, False, True])
a != b                  # array([True, False, True])

# Array-wise comparison (single boolean result)
np.array_equal(a, b)    # False — checks if ALL elements are identical
```

---

## 10. Broadcasting

> [!info] Broadcasting Rules
> Broadcasting allows NumPy to perform operations on arrays of **different shapes** by automatically expanding the smaller array. The rules are:
> 1. If arrays differ in number of dimensions, the shape of the smaller is **padded with 1s on the left**.
> 2. Arrays with size 1 along a particular dimension act as if they had the size of the array with the largest shape along that dimension.
> 3. If sizes disagree and neither is 1 → **error**.

```python
# Scalar broadcast
a = np.array([[1, 2, 3],
              [4, 5, 6]])
a + 10  # Adds 10 to every element

# Column vector broadcast
col = np.array([[100], [200]])  # Shape (2, 1)
a + col  # array([[101, 102, 103],
         #        [204, 205, 206]])

# Row vector broadcast
row = np.array([10, 20, 30])    # Shape (3,) → treated as (1, 3)
a + row  # array([[11, 22, 33],
         #        [14, 25, 36]])
```

---

## 11. Array Manipulation

### 11.1 Changing Shape

```python
b = np.array([[1.5, 2, 3],
              [4,   5, 6]])

b.ravel()          # Flatten to 1D → array([1.5, 2., 3., 4., 5., 6.])
b.flatten()        # Flatten to 1D (returns a COPY, unlike ravel which returns a view)
b.reshape(3, 2)    # Reshape to 3×2 (total elements must remain the same)
b.reshape(6, -1)   # -1 lets NumPy auto-calculate that dimension
b.reshape(-1)      # Flatten (equivalent to ravel)

# Resize modifies the array IN-PLACE (can change total size)
b.resize((2, 6))   # Pads with zeros if new size is larger
```

> [!tip] `reshape` vs `resize`
> - **`reshape`** returns a new view with the same data; total size must stay the same.
> - **`resize`** modifies the array in place and can change the total number of elements (padding with zeros or truncating).

### 11.2 Transposing

Swaps rows and columns. For a matrix with shape `(m, n)`, the transpose has shape `(n, m)`.

```python
C = np.array([[1, 1],
              [2, 2],
              [3, 3]])  # Shape (3, 2)

C.T                     # Shape (2, 3)
np.transpose(C)         # Equivalent
```

### 11.3 Adding and Removing Elements

```python
a = np.array([1, 2, 3])

np.append(a, [7, 8])        # array([1, 2, 3, 7, 8]) — returns NEW array
np.insert(a, 1, 5)          # array([1, 5, 2, 3]) — insert 5 at index 1
np.delete(a, [1])            # array([1, 3]) — delete element at index 1
```

> [!warning] Performance Note
> `np.append`, `np.insert`, and `np.delete` all return **new arrays** (they do not modify in place). Calling them repeatedly in a loop is very slow — build a Python list first, then convert to an array.

### 11.4 Combining Arrays

```python
a = np.array([1, 2, 3])
d = np.array([10, 15, 20])

# Concatenate along an existing axis
np.concatenate((a, d), axis=0)    # array([1, 2, 3, 10, 15, 20])

# Vertical stack (row-wise — adds rows)
e = np.array([[7, 7], [7, 7]])
f = np.array([[1, 0], [0, 1]])
np.vstack((a.reshape(1,-1), d.reshape(1,-1)))  # Stack as rows
np.r_[e, f]                                     # Shorthand for vstack

# Horizontal stack (column-wise — adds columns)
np.hstack((e, f))
# array([[7, 7, 1, 0],
#        [7, 7, 0, 1]])

# Column stack
np.column_stack((a, d))
# array([[ 1, 10],
#        [ 2, 15],
#        [ 3, 20]])
np.c_[a, d]  # Shorthand equivalent
```

### 11.5 Splitting Arrays

```python
a = np.array([1, 2, 3])
c = np.array([[(1.5, 2, 1), (4, 5, 6)],
              [(3, 2, 3),   (4, 5, 6)]])

np.hsplit(a, 3)    # Split horizontally into 3 equal parts
                   # [array([1]), array([2]), array([3])]

np.vsplit(c, 2)    # Split vertically into 2 equal parts

np.array_split(a, 2)  # Split into 2 parts (handles uneven splits)
```

---

## 12. Copying Arrays

> [!danger] Understanding Views vs. Copies
> This is one of the most common sources of bugs in NumPy code.

```python
a = np.array([1, 2, 3, 4, 5])

# VIEW — shares the same data buffer (changes propagate!)
h = a.view()
h[0] = 999
print(a[0])       # 999 — original is affected!

# SHALLOW COPY — same behavior as view for simple arrays
j = a

# DEEP COPY — completely independent array
k = a.copy()      # Equivalent: np.copy(a)
k[0] = 0
print(a[0])       # 999 — original is NOT affected
```

| Method | Same Data? | Changes Propagate? |
|---|---|---|
| `b = a` | Yes (same object) | ✅ Yes |
| `b = a.view()` | Yes (shared buffer) | ✅ Yes |
| `b = a[1:4]` | Yes (slice = view) | ✅ Yes |
| `b = a.copy()` | No (independent) | ❌ No |
| `b = a[[0,1,2]]` | No (fancy = copy) | ❌ No |

---

## 13. Sorting

```python
a = np.array([3, 1, 4, 1, 5, 9])

np.sort(a)            # Returns a sorted COPY → array([1, 1, 3, 4, 5, 9])
a.sort()              # Sorts IN-PLACE (modifies a)

# 2D sorting
c = np.array([[3, 1], [2, 4]])
c.sort(axis=0)        # Sort along columns (down each column)
c.sort(axis=1)        # Sort along rows (across each row)

# Argsort — returns INDICES that would sort the array
np.argsort(a)         # Useful for sorting one array based on another
```

---

## 14. I/O — Saving and Loading

### 14.1 Binary Format (`.npy` / `.npz`)

```python
# Save single array
np.save('my_array', a)            # Saves as my_array.npy
np.load('my_array.npy')           # Load it back

# Save multiple arrays
np.savez('arrays.npz', a=a, b=b)  # Named arrays in a single file
data = np.load('arrays.npz')
data['a']                          # Access by name

# Compressed save
np.savez_compressed('arrays.npz', a=a, b=b)
```

### 14.2 Text Format (`.txt` / `.csv`)

```python
np.savetxt("myarray.txt", a, delimiter=" ")
np.savetxt("myarray.csv", a, delimiter=",")

np.loadtxt("myfile.txt")
np.genfromtxt("my_file.csv", delimiter=',')  # Handles missing values
```

---

## 15. Linear Algebra (`np.linalg`)

NumPy includes a dedicated linear algebra submodule for common matrix operations.

```python
A = np.array([[1, 2],
              [3, 4]])

np.linalg.inv(A)         # Matrix inverse
np.linalg.det(A)         # Determinant → -2.0
np.linalg.eig(A)         # Eigenvalues and eigenvectors
np.linalg.norm(A)        # Frobenius norm (default)
np.linalg.matrix_rank(A) # Rank of the matrix
np.linalg.solve(A, b)    # Solve Ax = b for x
np.trace(A)              # Sum of diagonal elements → 5
```

---

## 16. 2D Arrays — Complete Workflow

> [!note] Overview
> While 1D arrays represent vectors, 2D arrays represent **matrices** or **tabular data** with rows and columns. They are foundational for data manipulation, image processing, and linear algebra.

### 16.1 Creation and Attributes

```python
a = [[11, 12, 13],
     [21, 22, 23],
     [31, 32, 33]]

A = np.array(a)

A.ndim    # 2
A.shape   # (3, 3)
A.size    # 9
```

### 16.2 Matrix Arithmetic Summary

```python
X = np.array([[1, 0], [0, 1]])
Y = np.array([[2, 1], [1, 2]])

Z = X + Y       # Element-wise addition
Z = X - Y       # Element-wise subtraction
Z = 2 * Y       # Scalar multiplication (broadcasting)
Z = X * Y       # Hadamard product (element-wise multiplication)
Z = np.dot(X, Y) # Matrix multiplication
Z = X @ Y        # Matrix multiplication (Python 3.5+)
```

### 16.3 Applying Universal Functions to 2D Arrays

```python
Z = np.array([[0, 1], [1, 0]])

np.sin(Z)    # Sine of every element
np.exp(Z)    # e^x for every element
np.sqrt(Z)   # Square root of every element
```

---

## 17. Quick Reference Cheat Sheet

> [!summary] Most Used Operations

```python
import numpy as np

# ── CREATION ──
np.array([1,2,3])           # From list
np.zeros((r,c))             # Zeros
np.ones((r,c))              # Ones
np.eye(n)                   # Identity
np.arange(start,stop,step)  # Range
np.linspace(start,stop,num) # Evenly spaced
np.random.rand(r,c)         # Random uniform

# ── INSPECTION ──
a.shape, a.ndim, a.size, a.dtype

# ── INDEXING ──
a[i]          # 1D
a[r, c]       # 2D
a[start:stop] # Slice
a[a > 5]      # Boolean
a[[1,3,5]]    # Fancy

# ── MATH ──
a + b, a - b, a * b, a / b  # Element-wise
np.dot(a, b)  # Dot product / matrix mult
a @ b         # Matrix mult (3.5+)

# ── STATS ──
a.sum(), a.mean(), a.std(), a.min(), a.max()

# ── SHAPE ──
a.reshape(r,c), a.ravel(), a.T

# ── COMBINE / SPLIT ──
np.concatenate, np.vstack, np.hstack
np.hsplit, np.vsplit

# ── COPY ──
a.copy()  # Deep copy (safe)
```

---

# Using `()` vs `[]` in NumPy

As your professor, I need to give you a nuanced answer: **It depends entirely on _where_ you are using them.**

---

### 1. Creating Arrays: **YES** (But lists are standard)

When you call `np.array()`, you are passing a "sequence-like" object. Python accepts both **Lists** `[]` and **Tuples** `()` as sequences.

Both of these result in the **exact same** NumPy array:

```python
import numpy as np

# OPTION A: Using a List (Standard Convention)
# Most data scientists use this because data is often mutable before becoming an array.
a = np.array([1, 2, 3]) 

# OPTION B: Using a Tuple (Perfectly Valid)
# This works fine. 
b = np.array((1, 2, 3)) 
```

> [!tip] Professor's Advice
> While `np.array((1, 2, 3))` works, I recommend using **brackets (lists)** for defining the data inside the array. It is the visual standard in the industry. It makes it easier to read nested arrays (matrices) like `[[1,2], [3,4]]` rather than `((1,2), (3,4))`.

---

### 2. Defining Shapes: **YES** (Tuples are actually preferred)

When you use functions like `np.zeros`, `np.ones`, or `reshape`, you need to tell NumPy the dimensions (shape).

*   **Tuples `()`** are the **standard** for shapes because shapes are immutable (they shouldn't change).
*   **Lists `[]`** are accepted but less "Pythonic" for this specific use case.

```python
# PREFERRED: Using a Tuple for shape
z = np.zeros((3, 4)) 

# ACCEPTABLE: Using a List for shape
z = np.zeros([3, 4]) 
```

> [!warning] Common Beginner Mistake
> You cannot forget the inner container!
> *   ❌ **Wrong:** `np.zeros(3, 4)` -> NumPy thinks '3' is the shape and '4' is the data type.
> *   ✅ **Right:** `np.zeros((3, 4))` -> The tuple `(3, 4)` is the single argument for shape.

---

### 3. Indexing / Slicing: **NO** (Strictly Forbidden)

This is where you **cannot** use parentheses. In Python, parentheses `()` are used to **call functions**. Square brackets `[]` are used to **access elements**.

If you try to access an array element using `()`, Python thinks you are trying to "execute" the array like a function, and it will crash.

```python
a = np.array([10, 20, 30])

# ✅ CORRECT: Accessing via Index
val = a[0] 

# ❌ WRONG: Raises 'TypeError: 'numpy.ndarray' object is not callable'
val = a(0) 
```

### Summary Cheat Sheet

| Operation | Syntax | Allowed? | Best Practice |
| :--- | :--- | :--- | :--- |
| **Input Data** | `np.array((1, 2))` | ✅ Yes | Use `[]` (Lists) |
| **Shape Args** | `np.zeros((2, 2))` | ✅ Yes | Use `()` (Tuples) |
| **Indexing** | `a(0)` | ❌ **NO** | Must use `[]` |
| **Slicing** | `a(0:5)` | ❌ **NO** | Must use `[]` |

---

## ~={red}References=~

- ![[PY0101EN-5-2-Numpy2D.ipynb]]
- ![[PY0101EN-5-1-Numpy1D.ipynb]]
- [NumPy Cheat Sheet — DataQuest](https://www.dataquest.io/cheat-sheet/numpy-cheat-sheet/)
- [NumPy Cheat Sheet — DataCamp (PDF)](https://www.datacamp.com/cheat-sheet/numpy-cheat-sheet-data-analysis-in-python)
- [Official NumPy Documentation](https://numpy.org/doc/stable/)

---

> [!quote] 
> *"NumPy is the foundation upon which nearly all of the power of Python's data science toolkit is built."*
> — Jake VanderPlas, *Python Data Science Handbook*