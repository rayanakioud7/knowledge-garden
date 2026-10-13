
Date: 2025-12-07
Tags: [[JAVA]], [[Programming language]], [[Control Flow]]

# ~={red} Notes=~

We often want certain blocks of code to execute only when specific conditions are met. In Java, this is achieved using decision-making statements that control the flow of execution.

![[Pasted image 20251207151129.png|center]]

### Java `if` Statement
A conditional statement starts with an `if` keyword followed by an expression in parentheses. The expression evaluates to either `true` or `false`. If it evaluates to true, the block inside the curly brackets `{}` is executed.

```java
class Main {
    public static void main(String args[]) {
        int i = 10;
         
        if (i < 15) {
            System.out.println("Condition is True");
        }
    }
}
```

_~={pink}Output=~_

```text
Condition is True
```

> [!NOTE] Scope Warning If curly braces `{}` are omitted, only the **immediate next line** is considered part of the `if` block.
> 
> 
> ```java
> if (value > 5) 
>     return true; // Part of the if
>     System.out.println("This runs always"); // NOT part of the if
> ```

![[Pasted image 20251207152042.png|center]]

### Java `if-else` Statement

The [if-else](https://www.geeksforgeeks.org/java/java-if-else-statement-with-examples/) statement allows you to execute one block if the condition is `true` and a different block if it is `false`.

```java
int value = 15;
if (value > 42) {
    System.out.println("ok");
} else {
    System.out.println("not ok");
}
```

_~={pink}Output=~_

```text
not ok
```

![[Pasted image 20251207152318.png|center]]

### Java **Nested-if Statement**

A [nested-if](https://www.geeksforgeeks.org/java/nested-if-in-java/) is an `if` statement inside another `if` statement. It is useful when a second condition depends on the first one being true.

```java
class Main {
    public static void main(String args[]) {
        int i = 10;

        // Outer if statement
        if (i < 15) {
            System.out.println("i is smaller than 15");

            // Nested if statement
            if (i == 10) {
                System.out.println("i is exactly 10");
            }
        }
    }
}
```

_~={pink}Output=~_

```text
i is smaller than 15
i is exactly 10
```

![[Pasted image 20251207152450.png|center]]

### Java `if-else-if` Ladder

Used to chain together multiple conditions. The ladder checks conditions in order from top to bottom. As soon as one condition is true, its block executes, and the rest are **skipped**.

```java
class Main {
    public static void main(String args[]) {
        int i = 20;

        if (i == 10) {
            System.out.println("i is 10");
        } else if (i == 15) {
            System.out.println("i is 15");
        } else if (i == 20) {
            System.out.println("i is 20");
        } else {
            System.out.println("i is not present");
        }
    }
}
```

_~={pink}Output=~_

```text
i is 20
```

![[Pasted image 20251207152819.png|center]]

---

### Java Switch Case (Classic)

The [switch](https://www.geeksforgeeks.org/java/switch-statement-in-java/) statement is a multiway branch statement. It dispatches execution to different parts of code based on the exact value of an expression (int, String, char, or Enum).


```java
class Main {
    public static void main(String[] args) {
        int num = 20;
        
        switch (num) {
            case 5:
                System.out.println("It is 5");
                break;
            case 10:
                System.out.println("It is 10");
                break;
            case 20:
                System.out.println("It is 20");
                break;
            default:
                System.out.println("Not present");
        }
    }
}
```

_~={pink}Output=~_

```text
It is 20
```

![[Pasted image 20251207155811.png|center]]

~={red}**Important Rules:**=~

1. **No Duplicates:** Duplicate case values are not allowed.
2. **Break is Key:** Without the `break` keyword, code **falls through** to the next case (executes the next case's code even if it doesn't match).
3. **Default:** The `default` statement is optional but recommended.


### ~={cyan}Java Enhanced Switch (Modern - Java 14+)=~

In modern Java, we use the `->` syntax. It is cleaner and **does not fall through**, so you don't need `break`.

```java
int num = 20;
switch (num) {
    case 5  -> System.out.println("It is 5");
    case 10 -> System.out.println("It is 10");
    case 20 -> System.out.println("It is 20");
    default -> System.out.println("Not present");
}
```

---

### Ternary Operator (`? :`)

The ternary operator is a shorthand for simple `if-else` statements.

> [!info] **Syntax:**
> 
> > `condition ? expression_if_true : expression_if_false;`
> 

```java
class Main {
    public static void main(String args[]) {
        int a = 10, b = 20;
        
        // If a > b, max = a. Otherwise, max = b.
        int max = (a > b) ? a : b;

        System.out.println("Maximum is " + max);
    }
}
```

_~={pink}Output=~_

```text
Maximum is 20
```

---

### ~={yellow}Switch vs If-Else=~

**`switch` is for equality matching.** It is not designed for ranges (e.g., `x > 5`). **`if-else` is for boolean logic.** It handles complex ranges and multiple variables.

| Features        | if-else                                | switch-case                            |
| --------------- | -------------------------------------- | -------------------------------------- |
| **Use Case**    | Complex conditions & Ranges            | Exact value matching                   |
| **Data Types**  | Boolean expressions                    | int, char, String, Enum                |
| **Flexibility** | Supports ranges and complex conditions | Only supports exact matches of values  |
| **Performance** | Can be slower if many checks           | Optimized (Jump Tables) for many cases |

# ~={red}References=~

https://www.geeksforgeeks.org/java/decision-making-javaif-else-switch-break-continue-jump/