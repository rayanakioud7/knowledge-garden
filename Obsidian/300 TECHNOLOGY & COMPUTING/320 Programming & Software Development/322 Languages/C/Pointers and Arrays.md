
---

Date: 2026-09-26
Tags: [[C_Programming]], [[Pointers]], [[Array]], [[Memory_Management]]

---

## 1. Pointer Arithmetic

When a pointer points to an array element, C allows you to perform pointer arithmetic (also called *address arithmetic*) to access other elements of the same array. C supports exactly three forms of pointer arithmetic.

### Adding an Integer to a Pointer

If a pointer $p$ points to the array element $a[i]$, then adding an integer $j$ yields a pointer $p + j$ that points to the element $a[i+j]$.

```c
int a[10], *p, *q;
p = &a[2];
q = p + 3; // q now points to a[5]
p += 6;    // p now points to a[8]

```

### Subtracting an Integer from a Pointer

Similarly, if $p$ points to $a[i]$, subtracting an integer $j$ yields $p - j$, which points to $a[i-j]$.

```c
p = &a[8];
q = p - 3; // q now points to a[5]

```

### Subtracting One Pointer from Another

When one pointer is subtracted from another, the result is the distance (measured in array elements, not bytes) between the two pointers. If $p$ points to $a[i]$ and $q$ points to $a[j]$, then $p - q$ is equal to $i - j$.

```c
p = &a[5];
q = &a[1];
int i = p - q; // i is 4
int j = q - p; // j is -4

```

> [!warning] Undefined Behavior in Arithmetic
> Performing arithmetic on a pointer that does not point to an array element causes undefined behavior. Furthermore, subtracting one pointer from another is undefined unless both pointers point to elements of the **same array**.
> 
> 

### Comparing Pointers

Pointers can be compared using relational operators (`<`, `<=`, `>`, `>=`) and equality operators (`==`, `!=`). This is only meaningful if both pointers point to elements of the same array; the outcome depends on their relative positions. If $p = \&a[5]$ and $q = \&a[1]$, then $p \le q$ is 0 (false), and $p \ge q$ is 1 (true).

---

## 2. Using Pointers for Array Processing

Pointer arithmetic allows us to visit the elements of an array by repeatedly incrementing a pointer variable.

### The Pointer Loop Idiom

Instead of using a standard `for` loop with an integer index `i`, we can use a pointer `p` to step through the array memory directly:

```c
#define N 10
int a[N], sum, *p;

sum = 0;
for (p = &a[0]; p < &a[N]; p++) {
    sum += *p;
}

```

> [!abstract] Pointer Out-of-Bounds Exception
> In the condition `p < &a[N]`, the address `&a[N]` points to one element *past* the end of the array. Applying the address operator to a non-existent element in this specific loop-bound fashion is perfectly legal and safe in C, as the loop terminates before attempting to examine its value.
> 
> 

### Combining the `*` and `++` Operators

C programmers heavily use the idiom `*p++` (or `*p++ = j`) to process an array element and immediately advance to the next one.

Because the postfix `++` operator takes precedence over the indirection `*` operator, the expression `*p++` means "return the value pointed to by $p$, then increment $p$ itself".

| Expression | Meaning |  |
| --- | --- | --- |
| `*p++` or `*(p++)` | Value of expression is `*p` before increment; increment `p` later |  |
| `(*p)++` | Value of expression is `*p` before increment; increment `*p` later |  |
| `*++p` or `*(++p)` | Increment `p` first; value of expression is `*p` after increment |  |
| `++*p` or `++(*p)` | Increment `*p` first; value of expression is `*p` after increment |  |

---

## 3. Using an Array Name as a Pointer

The name of an array can be used as a pointer to the first element in the array. If we declare `int a[10];`, then `a` is completely equivalent to `&a[0]`.

> [!info] The Pointer-Array Equivalence Formula
> For any array `a` and index `i`, the expression `a + i` is equivalent to `&a[i]`.
> Consequently, applying indirection yields the fundamental C equivalence:
> 
> 

$$*(a + i) \equiv a[i]$$

This simplifies pointer loops:

```c
for (p = a; p < a + N; p++) {
    sum += *p;
}

```

> [!warning] Array Names are NOT Variables
> While an array name can be *used* as a pointer, it is not possible to assign it a new value. `a = p;` or `a++;` will cause a compiler error.
> 
> 

### Array Arguments (Revisited)

When an array name is passed to a function, C always treats it as a pointer. The array itself is never copied; only the address of the first element is copied. This has two major consequences:

1. A function can modify the elements of the original array passed to it.


2. The time required to pass an array to a function is constant and does not depend on the size of the array.



Because of this, an array parameter can be declared directly as a pointer:

```c
// These two prototypes are identical to the compiler:
int find_largest(int a[], int n);
int find_largest(int *a, int n);

```

This also allows us to pass "slices" of arrays to functions. To process elements 5 through 14, we pass `&b[5]` as the start pointer and `10` as the length: `find_largest(&b[5], 10);`.

---

## 4. Pointers and Multidimensional Arrays

Just as pointers can iterate through one-dimensional arrays, they can process multidimensional arrays.

### Row-Major Layout

C stores two-dimensional arrays in **row-major order** (elements of row 0 come first, followed immediately by elements of row 1, etc.).

```c
int a[NUM_ROWS][NUM_COLS];
int *p;

```

Because of this continuous memory layout, we can view the entire 2D matrix as a flat 1D array and initialize it with a single loop:

```c
for (p = &a[0][0]; p <= &a[NUM_ROWS-1][NUM_COLS-1]; p++) {
    *p = 0;
}

```

### Processing Single Rows and Columns

* **Rows:** The expression `a[i]` is a pointer to the first element in row `i`. To clear row `i`:


```c
for (p = a[i]; p < a[i] + NUM_COLS; p++) *p = 0;
```




* **Columns:** Processing a column requires stepping forward by the length of an entire row (`NUM_COLS`):


```c
for (p = &a[0][i]; p < &a[NUM_ROWS][i]; p += NUM_COLS) *p = 0;
```
 (Note: `(*p)[i]` requires parenthesis because `[]` has higher precedence than `*`).





---

# ~={red}References=~

*C Programming: A Modern Approach (Chapter 12)* (p. 257-271)

