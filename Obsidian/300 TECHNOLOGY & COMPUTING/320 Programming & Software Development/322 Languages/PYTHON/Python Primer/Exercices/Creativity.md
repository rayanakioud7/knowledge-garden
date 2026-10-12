Date: 2026-05-31
Tags: [[Python]], [[Programming language]]

---

> [!question] $C-1.13$
> Write a pseudo-code description of a function that reverses a list of n integers, so that the numbers are listed in the opposite order than they were before, and compare this method to an equivalent Python function for doing the same thing.

```python
def my_reverse(data):
	n = len(data)
	reversed_data = [0]*n
	for k in range(n):
		reversed_data[k] = data [n-k-1]
		
	return reversed_data

data = [1,2,3,4,5]
print(my_reverse(data))
```

---

> [!question] $C-1.14$ 
> Write a short Python function that takes a sequence of integer values and determines if there is a distinct pair of numbers in the sequence whose product is odd.

```python
def is_odd(data):
	odds = []
	for i in range(len(data)):
		for j in range(i+1,len(data)):
			if (data[i]*data[j]) % 2 == 1:
				odds.append((data[i],data[j]))
				return True, (data[i], data[j])
	return False, None
	
print(is_odd([2, 4, 3, 8, 5]))
```

**Optimized solution:**

```python
def has_odd_product_pair(data):
    # Use a set to track DISTINCT odd numbers
    distinct_odds = set()
    
    for num in data:
        if num % 2 != 0:       # Check if the actual number is odd
            distinct_odds.add(num)
            
        # The moment we find 2 distinct odd numbers, we are guaranteed an odd product
        if len(distinct_odds) >= 2:
            return True
            
    return False

# --- Testing the code ---
print(has_odd_product_pair([2, 4, 3, 8, 5]))  # True  (3 * 5 = 15, which is odd)
print(has_odd_product_pair([2, 4, 3, 8, 3]))  # False (3 and 3 are not distinct numbers)
print(has_odd_product_pair([2, 4, 6, 8]))     # False (No odd numbers at all)
```

---

> [!question] $C-1.15$
> Write a Python function that takes a sequence of numbers and determines if all the numbers are different from each other (that is, they are distinct).

```python
def is_diff(data):
	for i in range(len(data)):
		for j in range(i+1, len(data)):
			if data[i] == data[j]:
				return False
				
	return True
	
data = [1,2,3,4,5,2]
print(is_diff(data))
```

**Set version - Pythonic way**

```python
def is_diff_fast(data):
    # If the length doesn't change when converted to a set, 
    # there were no duplicates.
    return len(data) == len(set(data))

# Test
print(is_diff_fast([1, 2, 3, 4, 5]))    # True
print(is_diff_fast([1, 2, 3, 4, 5, 2])) # False
```

---

> [!question] $C-1.17$
> Had we implemented the scale function (page 25) as follows, does it work properly?  Explain why or why not.

```python
def scale(data, factor): 
	for val in data: 
		val *= factor
``` 

**Answer:**
> **No, it does not work.** 
> 
> Because numbers are immutable in Python, the loop variable `val` is just a local name pointing to the element. The operation `val *= factor` simply rebinds `val` to a new number in memory, leaving the original elements inside `data` unchanged. To fix it, you must modify the list directly using index tracking:

```python
for i in range(len(data)):
    data[i] *= factor
```

---

> [!question] $C-1.18$ 
> Demonstrate how to use Python’s list comprehension syntax to produce the list [0, 2, 6, 12, 20, 30, 42, 56, 72, 90]

$$a_n = a_{n-1} + 2n$$
```python
data = [i * (i + 1) for i in range(10)]
print(data)
```

---

> [!question] $C-1.19$
> Demonstrate how to use Python’s list comprehension syntax to produce the list [ a , b , c , ..., z ], but without having to type all 26 such characters literally.

```python
letters = [chr(ord('a')+i) for i in range(26)]
print(letters)
```

---

## C-1.20 Custom List Shuffle Implementation

**Problem:** Implement a custom version of `shuffle(data)` that reorders a list in-place with equal probability, using *only* the `randint(a, b)` function.

```python
from random import randint

def my_shuffle(data):
    """Shuffles a list in-place using the Fisher-Yates algorithm."""
    n = len(data)
    # Loop backwards from the last element down to the second element
    for i in range(n - 1, 0, -1):
        # Pick a random index from 0 to i (inclusive)
        # Note: randint(a, b) includes both endpoints, so we use i, not n
        j = randint(0, i)
        
        # Swap elements at index i and j
        data[i], data[j] = data[j], data[i]

# Example usage:
if __name__ == "__main__":
    data = [2 * k for k in range(10)]
    print(f"Original: {data}")
    
    my_shuffle(data)
    print(f"Shuffled: {data}")
```

---

> [!question] $C-1.21$
> Write a Python program that repeatedly reads lines from standard input until an `EOFError` is raised, and then outputs those lines in reverse order (a user can indicate end of input by typing `ctrl-D`).

```python
def read_lines():
	lines = []
	while True:
		try:
			line = input('write something')
			lines.append(line)
		except EOFError:
			break
	lines.reverse()
	return lines

print(read_lines)
```

---

> [!question] $C-1.22$
> Write a short Python program that takes two arrays $a$ and $b$ of length $n$ storing int values, and returns the dot product of $a$ and $b$. That is, it returns an array $c$ of length $n$ such that $c[i] = a[i] · b[i], \text{ for}\quad i = 0, . . . , n − 1$.

```python
def dotproduct(a,b):
	if len(a)==len(b):
		c = [0]*len(a)
		for i in range(len(a)):
			c[i] = a[i]*b[i]
		return c
	else:
		raise ValueError("Arrays a and b must be of the same length n")
a = [2,3,4,5,6]
b = [2,3,4,5,2]
print(dotproduct(a,b))
```

---

> [!question] $C-1.24$
> Write a short Python function that counts the number of vowels in a given character string.

```python
import re
from collections import Counter

text = 'Life is too short to burden yourself with it'
pattern = r"[aeiouAEIOU]"
vowels = re.findall(pattern, text)

result = Counter(vowels)
print(result)
```

**the function**

```python
import re

def count_vowels(text):
	pattern = r"[aeiouAEIOU]"
	vowels = re.findall(pattern, text)
	return len(vowels)

text = 'Life is too short to not burden yourself with it'
print(count_vowels(text))
```

**Another approach without regex library**

```python

def countvowels(text):
	vowels = 'aeiouAEIOU'
	count = 0 
	for char in text:
		if char in vowels:
			count +=1
	return count

text = 'Life is too short to not burden yourself with it'
print(countvowels(text))
```

----

> [!question]
> $C-1.26$ 
> Write a short program that takes as input three integers, $a$, $b$, and $c$, from the console and determines if they can be used in a correct arithmetic formula (in the given order), like “$a + b = c$,” “$a = b − c$,” or “$a ∗ b = c$.”

```python
def check_operations(a,b,c):
	if a+b == c:
		return True
	elif a == b-c:
		return True
	elif a*b == c:
		return True
	else:
		return False
		
print(check_operations(2,3,5))
```

**Better Alternative:**

```python
def check_ops(a,b,c):
	return (a+b==c) or (a == b-c ) or (a*b == c)

print(check_ops(10,15,5))
```

---
C-1.27 In Section 1.8, we provided three different implementations of a generator that computes factors of a given integer. The third of those implementa- tions, from page 41, was the most efficient, but we noted that it did not yield the factors in increasing order. Modify the generator so that it reports factors in increasing order, while maintaining its general performance ad- vantages.

```python
def factors(n):
    k = 1
    larger_factors = []
    
    # Phase 1: Find and yield smaller factors, store larger ones
    while k * k < n:
        if n % k == 0:
            yield k
            larger_factors.append(n // k)
        k += 1
        
    # Phase 2: Handle perfect square case (e.g., k*k == 100)
    if k * k == n:
        yield k
        
    # Phase 3: Yield the larger factors in increasing order
    # Since they were appended from largest to smallest, 
    # reading the list backward gives them in increasing order.
    for factor in reversed(larger_factors):
        yield factor
```

---

> [!question] $C-1.28$
> The *p-norm* of a vector $v = (v_1, v_2, . . . , v_n)$ in $n$-dimensional space is de- fined as 
> $$||v||=\sqrt[p]{v_1^p+v_2^p+...+v_n^p}$$
> For the special case of $p = 2$, this results in the traditional Euclidean norm, which represents the length of the vector. For example, the *Euclidean* norm of a two-dimensional vector with coordinates $(4, 3)$ has a Euclidean norm of 
> $$\sqrt{4^2+3^2}=5$$
> Give an implementation of a function named norm such that `norm(v, p)` returns the *p-norm* value of v and norm(v) returns the Euclidean norm of v. You may assume that v is a list of numbers.

```python
def norm(v,p=2):
	p_norm = 0
	for element in v:
		p_norm += element**p
	return p_norm**(1/p)
	
data = [4,3] 
print(norm(data))
```


---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 52)