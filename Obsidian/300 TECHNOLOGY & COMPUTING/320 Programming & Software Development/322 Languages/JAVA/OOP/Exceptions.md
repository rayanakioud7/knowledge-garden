Date: 2025-12-01
Tags: [[JAVA]], [[OOP]], [[Programming language]]

# ~={red} Notes=~
## Overview 
An exception is an event that occurs during the execution of a program (*Runtime*) that disrupts the normal flow of instructions. It is Java's way of saying, "Something unexpected happened, and i don't know how to proceed"
**Intuition** :
![[Pasted image 20251201144039.png|left]] ![[Pasted image 20251201144107.png|right]]














## Java Exception Hierarchy

![[Pasted image 20251201145223.png]]
In Java, all exceptions and errors are subclasses of the `Throwable` class. They are organized into a strict family tree. Understanding this tree is the key to knowing _what_ to catch and _what_ to fix. It has two main branches: 
- **Error**
- **Exception**

#### **A. The Fatal Branch: `Error`**
- **Definition:** Severe problems related to the Java Virtual Machine (JVM) or system resources.
- **Examples:** `OutOfMemoryError` (RAM full), `StackOverflowError` (infinite recursion).
- **Rule:** **Never catch these.** They indicate the application is in an unstable state and should crash .
*~={pink}Example=~*
```java
// DON'T DO THIS
public void recursiveDoom() {
    recursiveDoom(); // Calls itself forever
}
// Result: Exception in thread "main" java.lang.StackOverflowError
```

#### **B. The Recoverable Branch: `Exception`**
##### ~={blue}The "Bug" Branch: `RuntimeException` (~={red}Unchecked=~)=~
These exceptions are checked at runtime and do not require explicit handling at compile time.
- **Concept:** These represent **programming errors**. They are your fault.
- **Rule:** Do not fix these with `try-catch`. Fix the code logic instead. These are "Unchecked" because the compiler does not force you to handle them.
*~={pink}Example=~:*
```java
int result = 10 / 0; // CRASH! ArithmeticException
```
- **The Wrong Fix:** Using `try-catch` to hide the crash.
- **The Right Fix:** validating the input: `if (divisor != 0) ...`
##### ~={blue}The "External" Branch: ~={red}Checked Exceptions=~=~
These exceptions are checked at compile time, forcing the programmer to handle them explicitly.
- **Concept:** These represent valid, anticipated problems that happen outside your program's control (e.g., File not found, Network timeout).
- **Rule:** You **MUST** handle these. The compiler will give you an error if you ignore them (`Unhandled exception type...`) .
- **Example:** Trying to read a file that might not exist.
##### ~={blue}Summary=~

| **Category** | **Unchecked Exceptions**     (exceptions non vérifiées ) | **Checked Exceptions**                 (exceptions vérifiées)            |
| ------------ | -------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Class**    | Subclasses of `RuntimeException`.                        | All other subclasses of `Exception`.                                     |
| **Cause**    | **Programming Logic Errors** (Bugs).                     | **External Factors** (Environment).                                      |
| **Examples** | `NullPointerException`, `ArithmeticException`.           | `IOException`, `SQLException`.                                           |
| **Rule**     | **Fix the code.** Do not use `try-catch`.                | **Must Handle.** The compiler forces you to use `try-catch` or `throws`. |
## The Defense Mechanism: `try`, `catch`, `finally`
This trio allows you to handle errors gracefully without crashing the program.
- The try block contains code that might throw an exception,
- The catch block handles the exception if it occurs.
### try-catch
*~={pink}Example=~*
```java
class Artithmetic{
    public static void main(String[] args) {
        
        int n = 10;
        int m = 0;

        try {
            int ans = n / m;
            System.out.println("Answer: " + ans);
        } catch (ArithmeticException e){
            System.out.println("Error: Division by 0!");
        } 
    }
}
```
*~={pink}Output=~*
```text
Error: Division by 0!
```

On peut déclarer plusieurs blocs ``catch``, mais ils doivent être organisés du cas le plus spécifique au cas le plus général. 
```java
public class TestException{
	public static void main(String[] args) {
		try{
			int[] numbers = { 1, 2, 3 }; 
			System.out.println(numbers[3]);
		}catch(Exception ex){
			System.err.println(ex.getMessage());
		}catch(ArrayIndexOutOfBoundsException e){ //jamais appelé
			System.err.println(e.getMessage()); } } }
```
### finally
Le bloc ``finally`` est utilisé pour contenir du code qui sera exécuté quel que soit le résultat de la tentative (try) et de la gestion d'exception (catch). Seul l'appel de ``System.exit()`` 
*~={pink}An Example with finally=~*
```java
public class InputExample {
    public static void main(String[] args) {
        String userInput = "ABC"; // Bad input
        
        try {
            // THE DANGER ZONE
            // We attempt code that might fail.
            int number = Integer.parseInt(userInput); 
            System.out.println("Converted number: " + number); // Skipped if error
            
        } catch (NumberFormatException e) {
            // THE SAFETY NET
            // This runs ONLY if the specific exception occurs.
            System.out.println("Error: '" + userInput + "' is not a valid number.");
            
            // Helpful debugging tools mentioned in the course [cite: 1475-1476]:
            // e.getMessage(); // Returns "For input string: \"ABC\""
            // e.printStackTrace(); // Prints the full error trace to console
            
        } finally {
            // THE CLEANUP CREW
            // This runs ALWAYS (Success or Failure).
            // Used for closing files, databases, or saying goodbye.
            System.out.println("End of operation."); 
        }
    }
}
```

## The Active Control: `throw` vs `throws`
- **`throw` (Verb):** You explicitly **cause** an error. You are holding the grenade and pulling the pin.
```java
class Demo {
    static void checkAge(int age) {
        
        if (age < 18) {
            throw new ArithmeticException("Age must be 18 or above");
        }
    }
    public static void main(String[] args) {
        checkAge(15);
    }
}
```

- **`throws` (Declaration):** You **warn** others. You put a sign on your method saying "Danger: Calling this might cause an explosion."
	 Le mot-clé throws est utilisé dans la déclaration d'une méthode pour indiquer que la méthode peut lancer certaines exceptions.
```java
import java.io.*;
class Demo {
    static void readFile(String fileName) throws IOException {
        FileReader file = new FileReader(fileName);
    }
    public static void main(String[] args){
        try {
            readFile("test.txt");
        } catch (IOException e){
            
            System.out.println("File not found: " + e.getMessage());
        }
    }
}
```

*~={pink}Example=~*
We will create a method `checkAge` that validates if a user can enter a club.
**The Exception**:
```java
// A simple custom checked exception
class UnderAgeException extends Exception {
    public UnderAgeException(String msg) { 
    super(msg);
    }
}
```

**The Logic (`throw` and `throws`):**
```java
class Club {
    // 1. 'throws': The Warning Sign.
    // We tell the compiler: "This method MIGHT fail with UnderAgeException"
    public void enterClub(int age) throws UnderAgeException {
        
        if (age < 18) {
            // 2. 'throw': The Action.
            // The condition is met, so we stop everything and trigger the error.
            throw new UnderAgeException("Sorry, you must be 18+.");
        }
        
        System.out.println("Welcome to the club!");
    }
}
```

**The Usage (Handling the Warning):**
```java
public class Main {
    public static void main(String[] args) {
        Club myClub = new Club();
        
        try {
            // Because 'enterClub' has 'throws', we are FORCED to use try-catch
            myClub.enterClub(16); 
        } catch (UnderAgeException e) {
	        //e.getMessage() retrieves the string passed to the constructor: 
	        //"Sorry, you must be 18".
            System.out.println("Access Denied: " + e.getMessage());
        }
    }
}
```

*~={pink}Output=~*
```text
Access Denied: Sorry, you must be 18+.
```

|**Keyword**|**Role**|**Analogy**|**Course Context**|
|---|---|---|---|
|**`try`**|Defines the block of code to **monitor** for errors.|The "Danger Zone".|"Bloc d'instructions à protéger" 5.|
|**`catch`**|Defines the block that **handles** a specific exception type.|The "Safety Net".|"Traitement de l'exception" 6.|
|**`finally`**|Code that runs **always**, regardless of success or failure.|The "Cleanup Crew".|"Exécuté systématiquement" 7.|
|**`throw`**|Manually **triggers** an exception instance.|Pulling the "Fire Alarm".|"Lever une exception" 8.|
|**`throws`**|**Declares** that a method might fail.|The "Warning Sign".|"Propager une exception" 9.|
## Methods to Print the Exception Information
- [**printStackTrace()**](https://www.geeksforgeeks.org/java/throwable-printstacktrace-method-in-java-with-examples/)****:**** Prints the full stack trace of the exception, including the name, message and location of the error.
- [**toString()**](https://www.geeksforgeeks.org/java/throwable-tostring-method-in-java-with-examples/)****:**** Prints exception information in the format of the Name of the exception.
- [**getMessage()**](https://www.geeksforgeeks.org/java/throwable-getmessage-method-in-java-with-examples/) ****:**** Prints the description of the exception
## Nested try-catch
In Java, you can place one try-catch block inside another to handle exceptions at multiple levels.
```java
public class NestedTryExample {
    public static void main(String[] args) {
        try {
            System.out.println("Outer try block");
            try {
                int a = 10 / 0; // This causes ArithmeticException
            } catch (ArithmeticException e) {
                System.out.println("Inner catch: " + e);
            }
            String str = null;
            System.out.println(str.length()); // This causes NullPointerException
        } catch (NullPointerException e) {
            System.out.println("Outer catch: " + e);
        }
    }
}
```

In depth Example
```java
package com.exception.exo5;
import java.util.Scanner;

public class Calculatrice {
    public double division(int a, int b){
        if (b == 0) {
            // On lance manuellement l'exception car Java ne le fait pas pour les doubles
            throw new ArithmeticException("Division par zéro impossible");
        }
        return (double)a/b;
    }
    public double racineCaree(double x){
        if(x<0){
            throw new IllegalArgumentException("Impossible de claculer racine carre d'un nombre negatife");
        }
        return Math.sqrt(x);
    }
}

public class TestCalcuatrice {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        Calculatrice calc = new Calculatrice();

        try{
            System.out.println("Donner deux nombre");
            int a = scan.nextInt();
            int b = scan.nextInt();
            try{
                double resultDiv = calc.division(a, b);
                System.out.println("Reuslta de division est: "+resultDiv);

            }catch(ArithmeticException e){
                System.out.println(e.getMessage());
            }

            try{
                double resultRacine = calc.racineCaree(a);
                System.out.println("RAcine carre de "+a+" est : "+resultRacine);
            }catch(IllegalArgumentException e){
                System.out.println(e.getMessage());
            }
            scan.close();
        }catch(Exception e){
            System.out.println("Valeur saisie invalide");
        }finally{
            System.out.println("thank you for your participation");
        }
    }
}

```

*~={pink}Output=~*
```text
Donner deux nombre
-9
0
Division par zéro impossible
Impossible de claculer racine carre d'un nombre negatife
thank you for your participation
```
## Difference Between Exception and Error

|Feature|Exception|Error|
|---|---|---|
|Definition|An event that occurs during program execution, disrupting normal flow, which can be handled using try-catch.|A serious problem that occurs in the JVM, generally cannot be handled by the application.|
|Package|java.lang.Exception|java.lang.Error|
|Recoverable|Yes, can be caught and handled.|No, usually not recoverable.|
|Examples|IOException, SQLException, ArithmeticException|OutOfMemoryError, StackOverflowError|
# ~={red}References=~
https://www.geeksforgeeks.org/java/exceptions-in-java/
[[polymorphisme exceptions interfaces.pdf]]