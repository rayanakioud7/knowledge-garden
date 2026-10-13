
Date: 2025-12-07
Tags: [[JAVA]], [[Programming language]], [[Control Flow]]

# ~={red} Notes=~

Loops in programming allow a set of instructions to run multiple times based on a condition. In Java, there are three main types of Loops:

## ~={blue}1. For Loop=~

The `for` loop is used when we know the **exact number of iterations** (we know how many times we want to repeat a task). The for statement includes the initialization, condition, and increment/decrement in one line.

![[Pasted image 20260208001706.png|center|500]]

> [!NOTE] **Syntax:**
> ```java
> for (initialization; condition; increment/decrement) {
>     // code to be executed
> }
> ```

```java
// Java program to demonstrate the working of for loop
class Main {
    public static void main(String[] args) {
        for (int i = 0; i <= 10; i++) {
            System.out.print(i + " ");
        }
    }
}
```

**~={pink}Output:=~**

```text
0 1 2 3 4 5 6 7 8 9 10
```

- **Initialization:** Marks the start. Usually declares a counter variable (e.g., `int i = 0`).
- **Testing Condition:** Checked **before** every iteration. If `true`, the loop runs. If `false`, the loop stops. (Entry Control).
- **Statement execution:** The code inside the `{}`.
- **Increment/Decrement:** Updates the counter after the code runs (e.g., `i++`).

### ~={orange}Enhanced For Loop (For-Each)=~

This loop is used to iterate over **Arrays** or **Collections** cleanly.

> [!NOTE] **Syntax:**
> 
> > `for (dataType variable : arrayOrCollection) { ... }`
> 

~={pink}_Example_=~

```java
class Main {
    public static void main(String[] args) {
        String[] names = { "Sweta", "Gudly", "Amiya" };
        
        for (String name : names) {
            System.out.println("Name: " + name);
        }
    }
}
```

_~={pink}Output=~_:

```text
Name: Sweta
Name: Gudly
Name: Amiya
```

---

## ~={blue}2. While Loop=~

A `while` loop is used when we want to repeat code as long as a condition is true, but we **don't know** how many times it needs to run beforehand.

![Image de while loop flowchart in Java](https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTH45DN8192jvaGwl3ivTk8D4Q9sJLUAMlbAMeoDAwvjG8NhljSEy6T_X1c51TetC7_gfyFHIk4p9oYKAbiZvWUBQu1PFauaMUIaUb279p5q9gEoMY)

```java
while (condition) {
    // Code to execute
}
```

```java
int i = 0;
while (i <= 10) {
    System.out.print(i + " ");
    i++;
}
```

- **Entry Control:** The condition is checked **before** the code executes. If the condition is false initially, the loop **never** runs.


---

## ~={blue}3. Do-While Loop=~

The `do-while` loop ensures that the code block executes **at least once** before checking the condition.

![Image de do-while loop flowchart in Java](https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTslHGRCp8opyLVZUPIXduAUNbDmYme3-2wo1wi6RlNfxwMOEyNlwRMMLO7XEhq8_EAvAxg55kJPaiWAOyPHR8ysyR-XxYNJLKJlqpS9zEvDKpSgRM)


> [!NOTE]
> **Syntax:**
> 
> > ```java
> > do {
> >     // code to be executed
> > } while (condition);
> > ```
> 

_~={pink}Example:=~_

```java
class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            System.out.print(i + " ");
            i++;
        } while (i <= 10);
    }
}
```

- **Exit Control:** The condition is checked **after** the code executes.
- **Use Case:** Useful for menus where you want to show the options at least once before asking the user to choose again.

---

## **Control Statements**

### ~={red}Break=~

The `break` command **terminates** the loop immediately. The program moves to the code after the loop block.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        while(true) {
            System.out.println("Shall we carry on?");
            String input = scanner.nextLine();
            
            if(input.equals("no")) {
                break; // Exits the loop completely
            } 
        } 
        System.out.println("Loop ended."); 
    }
}
```

### ~={red}Continue=~

The `continue` command **skips the current iteration** and jumps back to the start of the loop (or the update condition) for the next round.

_~={pink}Example:=~_

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Insert positive integers (0 or negative to skip):");
            int number = Integer.valueOf(scanner.nextLine());

            if (number <= 0) {
                System.out.println("Unfit number! Skipping...");
                continue; // Jumps back to the start of 'while'
            }

            System.out.println("Your input was " + number);
        }
    }
}
```

---

# ~={red}References=~

https://java-programming.mooc.fi/part-2/2-repeating 
https://www.geeksforgeeks.org/java/loops-in-java/