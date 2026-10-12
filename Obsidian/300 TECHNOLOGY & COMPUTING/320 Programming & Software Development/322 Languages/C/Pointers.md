
Date: 2026-09-26
Tags: [[C_Programming]], [[Pointers]], [[Memory_Management]], [[Systems_Engineering]]



---

## 1. Pointer Fundamentals

At the machine level, main memory is divided into bytes (8 bits of information). Every byte has a unique numerical address. An executable C program consists of code (instructions) and data (variables), where each variable occupies one or more bytes of memory. The address of the first byte occupied by a variable is considered the address of that variable.

> [!info] Definition: Pointer Variable
> While ordinary variables store data values, a **pointer variable** is a special variable that stores a memory address. When a pointer variable $p$ stores the address of a variable $i$, we say that "$p$ points to $i$".
> 
> 

![[Pasted image 20260926152321.png]]

### Declaring Pointers

To declare a pointer, the variable name is preceded by an asterisk (`*`):

```c
int *p;    /* points only to integers */
double *q; /* points only to doubles */
char *r;   /* points only to characters */

```

C requires that every pointer point only to objects of a particular, declared type (the *referenced type*).

---

## 2. The Address (`&`) and Indirection (`*`) Operators

C uses a specific pair of operators to handle pointers.

### The Address Operator (`&`)

To find the memory address of a variable, use the `&` operator. If `x` is a variable, `&x` is the address of `x` in memory.

```c
int i, *p;
p = &i;  // p now holds the address of i

```

### The Indirection Operator (`*`)

Once a pointer points to an object, the `*` (indirection or dereference) operator is used to access the actual data stored at that memory address.

```c
int i = 1;
int *p = &i;
printf("%d", *p); // Prints 1, not the address of i

```

> [!abstract] Mathematical Relationship
> The `*` operator acts as the mathematical inverse of the `&` operator. Applying `&` to a variable produces a pointer to it; applying `*` to that pointer takes you back to the original variable: `j = *&i;` is equivalent to `j = i;`.
> 
> 

> [!warning] Uninitialized Pointer Pitfall
> Never apply the indirection operator `*` to an uninitialized pointer variable. If `p` is uninitialized, executing `*p = 1;` will attempt to write data to a random memory address, which causes undefined behavior and will likely crash the program (Segmentation Fault).
> 
> 

---

## 3. Pointer Assignment

C allows the assignment operator to copy pointers, provided they have the same referenced type.

```c
int i, j, *p, *q;
p = &i; // p points to i
q = p;  // q now ALSO points to i

```

![[Pasted image 20260926152412.png]]

In this scenario, `p`, `q`, and `&i` all hold the exact same memory address. Modifying the data through one pointer affects the original object:

```c
*p = 1; // i is now 1
*q = 2; // i is now 2

```

![[Pasted image 20260926152355.png]]

---

## 4. Pointers as Function Arguments

In C, arguments are passed to functions **by value** (a copy is made). Therefore, a function cannot modify the original variable passed to it. Pointers solve this problem: instead of passing the variable `x`, we pass a pointer to `x` (`&x`).

When the function receives the address, it can use the `*` operator to create an alias for `x` and modify the original data directly.

### Example: Finding Min and Max in an Array

This function uses pointers to return multiple values (both the largest and smallest elements) from a single function call.

```c
#include 

void max_min(int a[], int n, int *max, int *min) {
    int i;
    *max = *min = a[0];
    for (i = 1; i < n; i++) {
        if (a[i] > *max)
            *max = a[i];
        else if (a[i] < *min)
            *min = a[i];
    }
}

int main(void) {
    int b[10] = {34, 82, 49, 102, 7, 94, 23, 11, 50, 31};
    int big, small;
    
    // We pass the ADDRESSES of big and small
    max_min(b, 10, &big, &small);
    
    printf("Largest: %d\n", big);
    printf("Smallest: %d\n", small);
    return 0;
}

```

> [!abstract] Using `const` to Protect Arguments
> If you pass a pointer to a function merely for efficiency (avoiding copying a large object) and do not want the function to alter it, use the `const` keyword:
> `void f(const int *p)`
> The compiler will now throw an error if the function attempts to modify `*p`.
> 
> 

---

## 5. Pointers as Return Values

Functions can also return pointers.

```c
int *max(int *a, int *b) {
    if (*a > *b)
        return a;
    else
        return b;
}
// Usage: int *p = max(&i, &j);

```

> [!warning] Dangling Pointer Pitfall
> **Never return a pointer to an automatic local variable.**
> 
> ```c
> int *f(void) {
>     int i = 5;
>     return &i; /* WRONG */
> }
> 
> ```
> 
> 
> The variable `i` only exists inside the stack frame of function `f`. Once `f` returns, its memory is destroyed. The returned pointer will point to invalid, garbage memory.
> 
> 

---

# ~={red}References=~

*C Programming: A Modern Approach (Chapter 11)* (p. 241-252)

