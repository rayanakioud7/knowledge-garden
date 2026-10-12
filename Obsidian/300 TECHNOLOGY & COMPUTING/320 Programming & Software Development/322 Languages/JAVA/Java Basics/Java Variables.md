
Date: 2025-11-17
Tags: [[JAVA]], [[Programming language]], [[Variables]]

# ~={red} Notes=~

![[Pasted image 20251117200202.png|center]]

## Overview
In Java, variables are containers used to store data in memory. Variables define how data is stored, accessed, and manipulated.
- **~={purple}Data types=~**: Defines the kind of data stored *(e.g. int, double, String, boolean...)*.
- **~={purple}Variable Name=~**: A unique identifier following Java naming rules.
- **~={purple}Value=~**: The actual data assigned to the variable.

![[Pasted image 20251117203432.png|center]]

#### ~={blue}How to declare a Java variable=~
A variable is declared by stating its **type** first, followed by its **name**.
E.g., `String job;`

#### ~={blue}How to initialize a Java variable=~
Initialization assigns a value to the variable. It can be done at the time of declaration or later.
![[Pasted image 20251117201427.png|center]]

```java
class Variables {
    public static void main(String[] args) {
        // Declaring and initializing variables
        
        // Integer type (whole numbers)
        int age = 21; 
        int note = 17;
        
        // String type (sequence of characters)
        String name = "Fatine"; 
        
        // Double type (floating point numbers with high precision)
        double salary = 57865.8678; 
        
        // Character type (single letter/symbol)
        char var = 'h';   
    }
}
```

### Rules for Naming Java Variables

- Variable names must start with a **letter** ~={orange}(a-z, A-Z)=~, a **dollar sign** ~={green}$=~, or an **underscore** `_`.
    
- **No keywords**: You cannot use reserved Java keywords (e.g., `int`, `class`, `public`, `void`).
    
- **Case sensitive**: `name` and `Name` are two completely different variables.
    
- **Meaningful names**: Choose descriptive names (e.g., ~={purple}pi=~ for 3.14, `studentAge` instead of `x`).
    
- **No spaces**: Variable names cannot contain spaces.
    
- **CamelCase**: Use camelCase for multi-word names (e.g., `totalMarks`, `firstName`).
    

```java
int 7variable = 4; // ERROR: Cannot start with a number
int variable7 = 4; // Allowed, but not descriptive

int camelCase = 2;
int camelCase = 5; // ERROR: Variable name 'camelCase' is already defined

// Invalid Names
int last day = 20; // ERROR: Space not allowed
int 1day = 1952;   // ERROR: Starts with digit
int class = 10;    // ERROR: 'class' is a keyword
```

---

## ~={pink}Types of Java Variables=~

Java variables are categorized into 3 types based on their scope, lifetime, and usage.

![[Pasted image 20251117232611.png|center]]
### 1. ~={purple}Local Variables=~

Defined within a **block**, **method**, or **constructor**.

- Created when the block is entered and destroyed when the block is exited.
    
- **Scope:** Limited to the block `{}` where they are declared.
    
- **Initialization:** MANDATORY. You must initialize a local variable before using it.
    

**~={green}Example=~**:

```java
public class Main {
    public static void main(String[] args) {
        // Local variable
        int x = 10;
        String message = "Hello, world!";

        System.out.println("x = " + x);

        if (x > 5) {
            // Block-level local variable
            String result = "x is greater than 5";
            System.out.println(result);
        }
        
        // System.out.println(result); // ERROR: 'result' does not exist here
    }
}
```

### 2. ~={purple}Instance Variables (Fields)=~

Declared **inside a class** but **outside any method**.

- Created when an object is created (`new`) and destroyed when the object is destroyed.
    
- **Initialization:** Optional. They have **default values** (`0`, `null`, `false`).
    
- Accessed via the object (e.g., `obj.name`).
    

**~={green}Example=~**:

```java
class Student {
    // Instance Variables
    public String name;
    public int age;
    
    // Constructor
    public Student(String name) {
        this.name = name; // 'this.name' refers to the instance variable
    }
}
```

### 3. ~={purple}Static Variables=~

Declared with the `static` keyword inside a class.

- **Shared** among all objects of that class. There is only **one copy** in memory.
    
- Created when the program starts.
    
- Accessed via the **Class Name** (e.g., `Student.schoolName`).
    

**~={green}Example=~**:

```java
class Student {
    // Static variable (Shared by all students)
    static String school = "FST Mohammedia";
  
    public static void main(String[] args) {
        System.out.println("School: " + Student.school);
    }
}
```

![[Pasted image 20251117234929.png|center]]

---

## ~={pink}Scope of Variables in Java=~

Scope refers to the region of the program where a variable is accessible.

|**Scope Type**|**Keyword/Location**|**Visibility**|
|---|---|---|
|**Member Scope**|Class level|Accessible anywhere inside the class.|
|**Method Scope**|Inside a method|Accessible only inside that specific method.|
|**Block Scope**|Inside `{ }` (if, for, while)|Accessible only inside those specific curly braces.|

---

## ~={pink}Type Casting (Type Conversion)=~

Java is a strongly typed language. This means you cannot simply assign a value of one type to another variable of a different type without following rules.

### ~={cyan}1. Widening Casting (Automatic)=~

Converting a **smaller** type to a **larger** type size. Java does this automatically because there is no risk of losing data.

`byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`

```java
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double

System.out.println(myDouble); // Outputs 9.0
```

### ~={cyan}2. Narrowing Casting (Manual)=~

Converting a **larger** type to a **smaller** size type. You must do this manually because you might **lose data**.

```java
double myDouble = 9.78d;
int myInt = (int) myDouble; // Manual casting: double to int

System.out.println(myInt); // Outputs 9 (The .78 is lost!)
```

---

## Convert Strings to Numbers

Since inputs from users often come as Strings, we need to parse them.

#### ~={cyan}String to Integer=~

Use `Integer.valueOf()` or `Integer.parseInt()`.

```java
String valueAsString = "42";
int value = Integer.valueOf(valueAsString);
System.out.println(value); // Output: 42
```

#### ~={cyan}String to Double=~

Use `Double.valueOf()` or `Double.parseDouble()`.

```java
String valueAsString = "42.42";
double value = Double.valueOf(valueAsString);
```

#### ~={cyan}String to Boolean=~

Use `Boolean.valueOf()`. It is case-insensitive.

- "True", "TRUE", "true" -> `true`
    
- Anything else -> `false`
    

```java
boolean b1 = Boolean.valueOf("TRUE"); // true
boolean b2 = Boolean.valueOf("pizza"); // false
```
##### Exemple

```java
import java.util.Scanner;

public class program {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Write a boolean ");
        boolean value = Boolean.valueOf(scanner.nextLine());
        System.out.println("You wrote " + value);
    }
}
```

~={green}**Output**=~
```
Write a boolean 
I wont'!
You wrote false
Write a boolean 
TRUE 
You wrote true
Write a boolean 
true
 You wrote true
```

# ~={red}References=~

[Java Variables - GeeksForGeeks](https://www.geeksforgeeks.org/variables-in-java/)

[W3Schools Java Casting](https://www.w3schools.com/java/java_type_casting.asp)