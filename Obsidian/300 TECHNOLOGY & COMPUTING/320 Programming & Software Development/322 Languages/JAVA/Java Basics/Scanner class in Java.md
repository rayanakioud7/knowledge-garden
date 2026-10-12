
Date: 2025-11-13
Tags: [[JAVA]], [[Programming language]], [[Input/Output]]

# ~={red} Notes=~

The **Scanner** class (in the `java.util` package) is the standard way to read input from the user (keyboard) or from files. It breaks the input into tokens (separated by whitespace).

### Steps to Use Scanner

1. **Import the class**:
   You must import it before the `public class` definition.
   `import java.util.Scanner;`

2. **Create the Scanner Object**:
   Connect it to the standard input stream (`System.in`).
```java
   Scanner scanner = new Scanner(System.in);
```

3. **Read Data**: Use methods like `nextInt()` or `nextLine()` to store input in variables.
    
    ```java
    System.out.println("Enter age:");
    int age = scanner.nextInt();
    ```
    
4. **Close the Scanner**: Always close the scanner when finished to prevent **memory leaks**.
    
```java
    scanner.close();
```
    

---

### Java Scanner Input Methods

|**~={green}Method=~**|**~={yellow}Description=~**|
|---|---|
|`nextBoolean()`|Reads a `true` or `false` value.|
|`nextByte()`|Reads a byte value.|
|`nextDouble()`|Reads a double value.|
|`nextInt()`|Reads an integer value.|
|`nextLine()`|Reads the **entire line** of text (including spaces) until the Enter key.|
|`next()`|Reads the **next word** only (stops at whitespace).|
|`next().charAt(0)`|_Trick:_ Reads a String and picks the first character (since `nextChar()` doesn't exist).|

#### ~={green}Basic Example=~

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter name:");
        String name = sc.nextLine(); // Reads "Rayan"

        System.out.println("Enter age:");
        int age = sc.nextInt();      // Reads 21

        System.out.println("Enter GPA:");
        double gpa = sc.nextDouble(); // Reads 17.5

        System.out.println("Name: " + name);
        System.out.println("Age: " + age); 
        System.out.println("GPA: " + gpa);
        
        sc.close();
    }
}
```

---

### ~={red}CRITICAL: The "Newline" Trap=~

This is the most common error beginners encounter.

**The Problem:** If you call `nextInt()` (or `nextDouble`, `nextFloat`) and then immediately call `nextLine()`, the `nextLine()` will appear to be skipped.

**Why?**

1. User types `21` and hits **Enter**.
    
2. `nextInt()` consumes the `21` but **leaves the Enter key (`\n`)** in the input buffer.
    
3. `nextLine()` sees the leftover `\n` and thinks "Oh, an empty line!" and finishes immediately.
    

**The Fix:** Add an extra `nextLine()` call to "consume" the leftover enter key.

```java
System.out.print("Enter Age: ");
int age = sc.nextInt();

// FIX: Consume the leftover newlin
sc.nextLine(); 

System.out.print("Enter Name: ");
String name = sc.nextLine(); // Now this works correctly!
```

---

### ~={blue}Input Validation (hasNext)=~

You can check if the user actually typed the correct data type before trying to read it. This prevents your program from crashing with an `InputMismatchException`.

- `hasNextInt()`: Returns `true` if the next token is a valid integer.
    
- `hasNextLine()`: Returns `true` if there is another line of input.
    

#### ~={green}Robust Example=~

```java
import java.util.Scanner;

public class Validator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int number = 0;

        System.out.println("Please enter a number:");

        // While the next input is NOT an integer...
        while (!sc.hasNextInt()) {
            System.out.println("That's not a number! Try again:");
            sc.next(); // Discard the bad input (trash it)
        }

        // Safe to read now
        number = sc.nextInt();
        System.out.println("Thanks! You entered: " + number);
        
        sc.close();
    }
}
```

---

### Important Notes

- **System.in**: Represents the standard input stream (keyboard).
    
- **Locales**: Be careful with `nextDouble()`. In some countries (like France/Morocco), users might type `17,5` (comma) instead of `17.5` (dot). Scanner uses the computer's default locale unless you set `sc.useLocale(Locale.US);`.
    
- **Closing**: Once you close `System.in` (via `scanner.close()`), you cannot open it again in the same program. Only close it at the very end.
    

# ~={red}References=~

https://www.geeksforgeeks.org/java/scanner-class-in-java/