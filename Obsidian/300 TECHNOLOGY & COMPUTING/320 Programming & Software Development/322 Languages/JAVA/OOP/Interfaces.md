Date: 2025-12-01
Tags: [[JAVA]], [[OOP]], [[Programming language]]

# ~={red} Notes=~
## Overview
An interface in Java is a collection of **abstract methods** (methods without a body) and **constants**.
- It functions as a **contract**: Any class implementing the interface guarantees it will provide the functionality defined by the interface.
- It specifies **what** must be done, without defining **how** it is done.

![[Pasted image 20251201235335.png|center]]
## Syntax and "Invisible" Modifiers

When declaring an interface, Java implicitly applies specific modifiers to members even if you do not type them.
- **Attributes:** Are always `public`, `static`, and `final` (constants).
- **Methods:** Always `public` and `abstract` by nature (unless declared `static` or `default`)

*~={pink}Example=~*
```java
interface MyInterface {
    // Implicitly: public static final float PI = 3.14f;
    float PI = 3.14f; 
    // Implicitly: public abstract void meth1();
    void meth1(); 
}
```

## Implementation Rules

A class uses the `implements` keyword to use an interface.
1. **Concrete Class:** Must provide an implementation (body) for **all** methods defined in the interface.
2. **Abstract Class:** If a class does not implement all methods of the interface, it must be declared `abstract`.
## Inheritance and Polymorphism

- **Multiple Inheritance:** Java classes cannot extend multiple classes, but they can *implement ~={yellow}multiple=~ interfaces*.
- **Interface Inheritance:** An interface can inherit from one or more other interfaces using the `extends` keyword
*~={pink}Example=~*
```java
class MyClass implements Math1, Math2 {
    // Must implement methods from both Math1 and Math2
}
```

## Abstract Class vs. Interface

|**Feature**|**Abstract Class**|**Interface**|
|---|---|---|
|**Visibility**|No restrictions (can use private, protected, etc.).|All constants and methods are `public`.|
|**Constructors**|Can have constructors.|Cannot have constructors.|
|**Methods**|Can have concrete methods.|Can have `default` or `static` methods.|
|**Inheritance**|Single inheritance (`extends`).|Multiple implementation (`implements`).|

*~={pink}Example=~*
```java
import java.io.*;

// Interface Declared
interface testInterface {
  
    // public, static and final
    final int a = 10;

    // public and abstract
    void display();
}

// Class implementing interface
class TestClass implements testInterface {
  
    // Implementing the capabilities of Interface
    public void display(){ 
      System.out.println("Geek"); 
    }
}
class Geeks{ 
    public static void main(String[] args){
        
        TestClass t = new TestClass();
        t.display();
        System.out.println(t.a);
    }
}
```
*~={pink}Output=~*
```text
Geek
10
```


# ~={red}References=~
https://www.geeksforgeeks.org/java/interfaces-in-java/