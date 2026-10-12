
Date: 2025-11-20
Tags: [[JAVA]], [[Programming language]], [[Operators]]

# ~={red} Notes=~

Operators are special symbols that perform specific operations on one, two, or three operands, and then return a result.

## ~={blue}1. Arithmetic Operators=~

These are used to perform common mathematical operations.

| Operator | Name           | Description                        | Example (`x=10`, `y=3`) |
| :------- | :------------- | :--------------------------------- | :---------------------- |
| **`+`**  | Addition       | Adds two values                    | `x + y` → 13            |
| **`-`**  | Subtraction    | Subtracts one value from another   | `x - y` → 7             |
| **`*`**  | Multiplication | Multiplies two values              | `x * y` → 30            |
| **`/`**  | Division       | Divides one value by another       | `x / y` → 3             |
| **`%`**  | Modulo         | Returns the **division remainder** | `x % y` → 1             |

> [!TIP] The Modulo Operator (`%`)
> The modulo operator is incredibly useful in programming. It returns the remainder of a division.
> * `10 % 2` is **0** (10 is even)
> * `10 % 3` is **1** (3 goes into 10 three times, remainder 1)
> * It is often used to check if a number is **Even or Odd** (`n % 2 == 0`).

---

### ~={blue}2. The Tricky Division (/)=~

In Java, the division operator `/` behaves differently depending on the data types of the operands.

**~={orange}Integer Division (The Trap)=~**
If both operands are integers, Java performs **integer division**, meaning it chops off the decimal part (it does NOT round).

```java
int a = 5;
int b = 2;
System.out.println(a / b); // Outputs 2 (Not 2.5)
```

**~={orange}Floating Point Division (The Fix)=~** To get a precise result, at least **one** of the operands must be a floating-point number (`double` or `float`).

```Java
int first = 3;
int second = 2;

// 1. Integer Division (Data Loss)
double result0 = first / second;
System.out.println(result0); // prints 1.0 (The .5 was lost before assignment)

// 2. Casting one operand (Correct)
double result1 = (double) first / second;
System.out.println(result1); // prints 1.5

// 3. Casting the other operand (Correct)
double result2 = first / (double) second;
System.out.println(result2); // prints 1.5

// 4. Casting the RESULT (Incorrect)
double result3 = (double) (first / second);
System.out.println(result3); // prints 1.0 (Too late! Division happened first)
```

**~={green}The "1.0" Trick:=~** A common shortcut to force floating-point division is to multiply by `1.0`.

```java
int dividend = 3;
int divisor = 2;

double result = 1.0 * dividend / divisor;
System.out.println(result); // prints 1.5
```

---

## ~={blue}3. Assignment Operators=~

Used to assign values to variables. You can combine them with arithmetic operators for shorthand.

|Operator|Example|Equivalent To|
|---|---|---|
|**`=`**|`x = 5`|`x = 5`|
|**`+=`**|`x += 3`|`x = x + 3`|
|**`-=`**|`x -= 3`|`x = x - 3`|
|**`*=`**|`x *= 3`|`x = x * 3`|
|**`/=`**|`x /= 3`|`x = x / 3`|

---

## ~={blue}4. Comparison Operators=~

Used to compare two values. These always return a **boolean** (`true` or `false`).

|Operator|Name|Example (`x=5`, `y=3`)|
|---|---|---|
|**`==`**|Equal to|`x == y` → `false`|
|**`!=`**|Not equal|`x != y` → `true`|
|**`>`**|Greater than|`x > y` → `true`|
|**`<`**|Less than|`x < y` → `false`|
|**`>=`**|Greater or equal|`x >= y` → `true`|
|**`<=`**|Less or equal|`x <= y` → `false`|

---

## ~={blue}5. Logical Operators=~

Used to combine multiple boolean expressions (common in `if` statements).

| Operator         | Name    | Description                                       | Example           |
| ---------------- | ------- | ------------------------------------------------- | ----------------- |
| **`&&`**         | **AND** | Returns true if **both** statements are true      | `x < 5 && x < 10` |
| **~={cyan}\|=~** | **OR**  | Returns true if **one** of the statements is true | `x < 5 \| x < 4`  |
| **`!`**          | **NOT** | Reverses the result (true becomes false)          | `!(x < 5)`        |

![[Pasted image 20260208005622.png]]

---

## ~={blue}6. Unary Operators (Increment/Decrement)=~

These operators increase or decrease a variable's value by exactly **1**.

- `++` : Increment (add 1)
    
- `--` : Decrement (subtract 1)
    

**~={red}Prefix vs Postfix (Important!)=~**

|Type|Syntax|Description|
|---|---|---|
|**Post-Increment**|`x++`|Use the value first, **then** increment.|
|**Pre-Increment**|`++x`|Increment first, **then** use the value.|

```java
int x = 5;
int y = x++; // y gets 5, then x becomes 6
System.out.println("x:" + x + " y:" + y); // x:6 y:5

int a = 5;
int b = ++a; // a becomes 6, then b gets 6
System.out.println("a:" + a + " b:" + b); // a:6 b:6
```

# ~={red}References=~

https://java-programming.mooc.fi/part-1/5-calculating https://www.geeksforgeeks.org/operators-in-java/