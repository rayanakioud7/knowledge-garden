Date: 2025-11-30
Tags: [[JAVA]], [[OOP]], [[Programming language]]

# ~={red} Notes=~
## Overview
**~={purple}Definition=~** : Polymorphism Derived from Greek -*~={cyan}many forms=~*-. in Java it allows a single variable (Reference) to point to Objects of different types at different ties, modifying the program's behavior based on the *actual* object in memory, not reference type.
**~={purple}Key Mechanism=~** : it is primarily realized through Inheritance (`extends`) and Interfaces (`implements`).
**~={purple}The Golden Rule of Executions=~** :
- **Compile Time** : the compiler checks if the method exists in the *Reference Type* (e.g. `Animal`) 
- **Runtime** : The [[JDK, JRE and JVM|JVM]] executes the method version found in the *Actual Object Type* (e.g. `Dog`)
### Features of polymorphism:
- **Multiple Behaviors**: The same method can behave differently depending on the object that calls this method.
- **Method Overriding**: A child class can redefine a method of its parent class.
- **Method Overloading**: We can define multiple methods with the same name but different parameters.
- **Runtime Decision:** At runtime, Java determines which method to call depending on the object's actual class.

*Example*

```java
// Base class Person
class Person {
    // Method that displays the 
    // role of a person
    void role() {
        System.out.println("I am a person.");
    }
}

// Derived class Father that 
// overrides the role method
class Father extends Person {
  
    // Overridden method to show 
    // the role of a father
    @Override
    void role() {
        System.out.println("I am a father.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating a reference of type Person 
        // but initializing it with Father class object
        Person p = new Father();
        
        // Calling the role method. It calls the 
        // overridden version in Father class
        p.role();  
    }
}
```
*Output*
```text
I am a father.
```

### Why Use Polymorphism
- **Code Reusability**: Polymorphism allows the same method  or class to be used with different types of Objects, which makes the code more reusable.
- **Flexibility**: Polymorphism enables object of different classes to be treated as objects of a common superclass, which provides flexibility in method execution and object interaction.
- **Abstraction**: it allows the use of abstract classes or interfaces, enabling you to work with general types (like a superclass or interface) instead of concrete types (like specific subclasses), thus simplifying the interaction with objects.
### Method Overriding
Method Overriding in Java means when a subclass provides a specific implementation of a method that is already defined in its superclass.
*Example*
```java
// Class 1
class Parent {
    // Method of parent class
    void print() { 
        System.out.println("parent class");
    }
}

// Class 2
class Subclass1 extends Parent {
    // Improvement: @Override 
    @Override
    void print() { 
        System.out.println("subclass1"); 
    }
}

// Class 3
class Subclass2 extends Parent {
    // Improvement: @Override annotation added
    @Override
    void print() {
        System.out.println("subclass2");
    }
}

// Class 4
class Geeks {
    public static void main(String[] args) {
        // Creating reference of type Parent
        Parent a;

        // 1. Upcasting to Subclass1
        a = new Subclass1();
        a.print(); // Output: subclass1

        // 2. Upcasting to Subclass2
        a = new Subclass2();
        a.print(); // Output: subclass2
    }
}
```
*Output*
```text
subclass1
subclass2
```
#### What is `@Override`?
It ensures you are actually overriding a method and not accidentally creating a new one. It is optional but **highly recommended** as a best practice.
~={pink}*Example*=~
**The Parent Class:**
```java
class Animal {
    public void talk() {
        System.out.println("Je suis un animal!");
    }
}
```

**The Child Class (Correct Usage):**
```java
class Cat extends Animal {
    // We explicitly state we are overriding the 'talk' method from Animal
    @Override 
    public void talk() {
        System.out.println("Meow!");
    }
}
```
**What happens here:**
1. The compiler looks at `Cat`.
2. It sees `@Override` on `talk()`.
3. It checks `Animal`: "Does `Animal` have a method called `talk()` with no parameters?"
4. **Yes:** Compilation succeeds.

*~={pink}Countre-Example=~*
Imagine you make a small typo or get the parameters wrong. Without `@Override`, Java treats it as a **new method**, breaking polymorphism.

**The "Silent Failure" Scenario (Without `@Override`):**
```java
class Dog extends Animal {
    // TYPO: 'talks' instead of 'talk'
    public void talks() { 
        System.out.println("Woof!");
    }
}
// Usage
Animal myDog = new Dog();
myDog.talk(); 
// OUTPUT: "Je suis un animal!" (The parent method runs, NOT "Woof!")
```
- **Result:** The bug is hard to find because the code compiles perfectly, but the dog doesn't bark.

**The Safety Scenario (With `@Override`):**
```java
class Dog extends Animal {
    @Override
    public void talks() { // Compiler Error Here! (talks type instead of talk)
        System.out.println("Woof!");
    }
}
```
- **Result:** The compiler stops you: _"Error: Method talks() of type Dog does not override or implement a method from a supertype."_ You fix the typo immediately.

## Type Casting (Transtypage) Hierarchy
In Java, Objects are manipulated via references. Changing the type of this reference is called (Transtypage.)
### ~={blue}Upcasting=~
- **Definition:** Assigning an object of a Subclass to a reference of a Superclass.
- **Safety:** Always safe and done **implicitly**.
- **Logic:** A `Dog` _is_ an `Animal`.
- **Constraint:** You lose access to methods specific to the subclass (e.g., `bark()`) unless you cast back down
*~={pink}Example=~*
```java
// Parent Class
class Animal {
    void talk() {
        System.out.println("Animal sound");
    }
}

// Child Class
class Dog extends Animal {
    @Override
    void talk() {
        System.out.println("Woof!");
    }
    // Unique method: Only Dogs can do this
    void bark() {
        System.out.println("BARK BARK!");
    }
}
public class Main {
    public static void main(String[] args) {
        // UPCAST: We create a Dog, but the reference 'a' is type Animal
        Animal chien = new Dog(); 
        // 1. Polymorphism works:
        // The compiler sees talk() in Animal. The JVM runs talk() in Dog.
        chien.talk(); // Output: "Woof!"
        // 2. Upcast Limitation (The Error):
        // The compiler checks the reference type 'Animal'.
        // Does 'Animal' have a method called 'bark'? NO.
        chien.bark(); // COMPILER ERROR: "Cannot find symbol method bark()"
    }
}
```
##### How to fix errors of the constraint
As the previous example shows its not possible to access the `bark()` method but there is fix, to access the `bark()` method, you must tell the compiler to treat the reference as a `Dog` again. This is **Downcasting**.
```java
// Solution: Explicit Downcast
if (a instanceof Dog) {     // Safety check first!
    Dog d = (Dog) a;        // Swap the 'Animal' remote for a 'Dog' remote
    d.bark();               // Now it works! Output: "BARK BARK!"
}
```

> Upcast is always implicit, even though you can do it explicitly but it is rarely used and cause redundancy.
### ~={blue}Downcasting=~
- **Definition:** Assigning a reference of a Superclass to a variable of a Subclass.
- **Safety:** **Risky**. Must be done **explicitly**.
- **Logic:** An `Animal` _might_ be a `Dog`, but it might also be a `Cat`.
- **Risk:** If the object in memory is not actually that subclass, the program crashes with a `ClassCastException`.
*~={pink}Example=~*
```java
// 1. Parent Class
class Animal {
    void talk() {
        System.out.println("Animal sound");
    }
}

// 2. Subclass
class Dog extends Animal {
    @Override
    void talk() {
        System.out.println("Woof!");
    }

    // Specific method: Only Dogs can attack
    void attack() {
        System.out.println("The dog attacks!");
    }
}

public class DowncastingDemo {
    public static void main(String[] args) {
        // --- STEP 1: UPCAST (Implicit) ---
        // We create a Dog, but view it as a generic Animal.
        // Useful for lists: List<Animal> zoo = ...
        Animal myPet = new Dog(); 

        // Polymorphism works fine for shared methods:
        myPet.talk(); // Output: "Woof!" (Dynamic Binding)

        // --- STEP 2: THE LIMITATION ---
        // Compiler Error! The 'Animal' reference doesn't know about 'attack'.
        // myPet.attack(); // UNCOMMENTING THIS CAUSES A COMPILE ERROR

        // --- STEP 3: DOWNCAST (Explicit) ---
        // We assume responsibility and tell the compiler: 
        // "I know this is a Dog. Convert the reference."
        if (myPet instanceof Dog) {
           /***/ Dog myDog = (Dog) myPet; // <--- THE DOWNCAST /***/
            myDog.attack(); // Success! Output: "The dog attacks!"
        }
        
        // --- STEP 4: REAL WORLD USE CASE (Looping) ---
        // Imagine a mixed list of animals
        Animal[] zoo = { new Dog(), new Animal() }; 
        for (Animal a : zoo) {
            if (a instanceof Dog) {
                // Safe Downcast
                Dog d = (Dog) a;
                d.attack();
            } else {
                System.out.println("This animal cannot attack.");
            }
        }
    }
}
```

**Why do we need it?** When you store a `Dog` in an `Animal` variable, you lose access to `Dog`-specific methods like `attack()` because the `Animal` class doesn't know them. You must Downcast to regain access.
Implicit Downcasting is Forbidden and cause compilation error it should always be done explicitly.

## The Safety Guard: `instanceof`
**Concept:** To prevent your program from crashing during a Downcast, you must check the object's true identity first using the `instanceof` operator
*~={pink}Example=~*
```java
class Animal {
    void makeSound() { System.out.println("Generic sound"); }
}

class Dog extends Animal {
    @Override
    void makeSound() { System.out.println("Bark"); }
    void chaseTail() { System.out.println("Chasing tail!"); }
}

class Cat extends Animal {
    @Override
    void makeSound() { System.out.println("Meow"); }
    void scratch() { System.out.println("Scratching!"); }
}

public class Main {
    public static void main(String[] args) {
        // 1. Upcasting (Polymorphism in action)
        Animal[] zoo = { new Dog(), new Cat() };

        for (Animal a : zoo) {
            // Polymorphic call: "a" is type Animal, but runs Dog/Cat method
            a.makeSound(); 

            // 2. instanceof Check
            if (a instanceof Dog) {
                // 3. Safe Downcast
                Dog d = (Dog) a; 
                d.chaseTail();
            } 
            else if (a instanceof Cat) {
                // Java 16+ Pattern Matching (Simplified Downcast) [cite: 2700]
                ((Cat) a).scratch();
            }
        }
    }
}
```
**Common Pitfall (The Static Trap):** **Static methods** do not follow polymorphism. They are bound at **compile time** based on the Reference type, not the Object type. This is called "Hiding," not "Overriding".
- If `Animal` has `static void run()` and `Dog` has `static void run()`:
    - `Animal a = new Dog();`
    - `a.run();` -> Runs **Animal's** method.
# ~={red}References=~
https://www.geeksforgeeks.org/java/polymorphism-in-java/
[[polymorphisme exceptions interfaces.pdf]]