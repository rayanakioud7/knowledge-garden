Date: 2026-05-31
Tags: [[Python]], [[Programming language]]

---

> [!question] $R-1.1$
>  Write a short Python function, `is_multiple(n, m)`, that takes two integer values and returns `True` if $n$ is a multiple of $m$, that is, $n = m\cdot i$ for some integer $i$, and `False` otherwise.
> 

```python
def is_multiple(n, m):
	if n%m == 0:
		return True
	else:
		return False

print(is_multiple(15,5))
```

**more optimized version:**

```python
def is_multiple2(n,m):
	if m == 0:
		return False
	return n%m == 0

print(is_multiple2(15,0))
```

---

> [!question] $R-1.2$ 
> Write a short Python function, `is_even(k)`, that takes an integer value and returns `True` if $k$ is even, and `False` otherwise. However, your function cannot use the *multiplication, modulo, or division* operators.

```python
def is_even(k):
	'''using binary since 2^0=1 that means that the first digit of a number must
	be =1, eg, 3 in binary is 11'''
	return (k & 1) == 0
	
print(is_even(5))
```

>The `(k & 1) == 0` syntax checks if a number is even by using a bitwise AND to isolate its last binary digit (the $2^0$ place), returning `True` if it is `0` and `False` if it is `1`.

---

> [!NOTE] $R-1.3$ 
> Write a short Python function, `minmax(data)` , that takes a sequence of one or more numbers, and returns the smallest and largest numbers, in the form of a tuple of length two. Do not use the built-in functions `min` or `max` in implementing your solution.

```python
def minmax(data):
	current_min = data[0]
	current_max = data[0]
	for val in (data):
		if val < current_min:
			current_min = val
		elif val> current_max:
			current_max = val
	return current_min,current_max
	
data = [2,5,7,1,4,8,3]
print(minmax(data))
```

---

> [!question] $R-1.4$ 
> Write a short Python function that takes a positive integer $n$ and returns the sum of the squares of all the positive integers smaller than $n$.

```python
def sum_of_squares(n):
	total = 0
	for i in range(1,n):
		total += i**2
	return total

print(sum_of_squares(5))
```


**$O(1)$ version using the math formula:**
$$
\sum_{k=1}^n k^2=\frac{n(n+1)(2n+1)}{6}
$$

```python
def sum_math(n):
	k = n-1 # positive integers smaller than n
	if k<=0:
		return 0
	return	(k*(k+1)*(2*k+1))//6 # using `//` to round it to an integer value

print(sum_math(5))
```

---

> [!NOTE] $R-1.5$
>  Give a single command that computes the sum from Exercise $R-1.4$, relying on Python’s comprehension syntax and the built-in `sum` function.
> 

```python
def sum_squares2(n):
	return sum(i**2 for i in range(1,n))

print(sum_squares2(5))
```

---

> [!question] $R-1.6$
>  Write a short Python function that takes a positive integer $n$ and returns the sum of the squares of all the odd positive integers smaller than n.
> 

```python
def odd_squares(n):
	total = 0
	for i in range(1,n):
		if i%2 == 1:
			total += i**2
	return total

print(odd_squares(5))
```

**Optimized version:**
```python
def odd_squres_optimized(n):
	total = 0
	for i in range(1,n,2):
		total += i**2
	return total

print(odd_squres_optimized(10))
```

---

> [!question] $R-1.7$ 
> Give a single command that computes the sum from Exercise $R-1.6$, relying on Python’s comprehension syntax and the built-in sum function
> 

```python
def odd_squares2(n):
	return sum(i**2 for i in range(1,n) if i%2==1)

print(odd_squares2(5))
```

**Optimized version:**

```python
def odd_squares2_optimized(n):
	return sum(i**2 for i in range(1,n,2))

print(odd_squares2_optimized(10))
```

---
## R-1.8 Negative to Positive Index Mapping

If a sequence `s` has length `n`, and a negative index `k` is used (where $-n \le k < 0$), the equivalent positive index `j` (where $j \ge 0$) is given by the formula:

$$j = n + k$$

### Example Verification

```python
name = 'rayan' # length n = 5
k = -2
j = len(name) + k
# Formula check: j = 5 + (-2) = 3
print(name[k]) # Output: 'n'
print(name[j])  # Output: 'n'

```

---

> [!question] $R-1.9$ 
> What parameters should be sent to the range constructor, to produce a range with values 50, 60, 70, 80?

```python
for i in range(50,81,10):
	print(i)
```

---

> [!question] $R-1.10$
>  What parameters should be sent to the range constructor, to produce a range with values 8, 6, 4, 2, 0, −2, −4, −6, −8?

```python
for i in range(8,-9,-2):
	print(i)
```

---

> [!question] $R-1.11$ 
> Demonstrate how to use Python’s list comprehension syntax to produce the list [1, 2, 4, 8, 16, 32, 64, 128, 256].

```python
data = [2**k for k in range(9)]
print(data)
```

---
## R-1.12 Custom Choice Function Using Randrange

**Problem:** Implement a custom version of `random.choice(data)` using only `randrange`.

```python
from random import randrange

def my_choice(data):
    # len(data) creates an exclusive upper bound, safely selecting index 0 to len-1
    i = randrange(len(data))
    return data[i]

# Test Case
data = [k**3 for k in range(8)] 
print(data)
print(my_choice(data))
```


---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 51)


