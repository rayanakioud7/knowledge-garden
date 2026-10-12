Date: 2025-10-29
Tags: [[JAVA - Introduction]], [[01.OOP]]

# ~={red}Notes=~

A Constructor is a special method that initializes an object.
Constructors in java are what give you the access to assign variables / parameters to a certain object of a class when its created.
it can be done by using the `new` keyword:

```java
Stduent stu = new Student();

//Student: Class name
//stu: Object name
```

- Constructors should have the same name as the class name.
- Constructors doesn't have a return type, not even void.
- Constructors can have arguments (*paramètres*).
- `this` keyword should be used to make the code more readable.
---
## Types of Constructors
#### ~={blue}Default Constructors (Constructeur par défaut)=~
Also called ~={cyan}No-Argument Contractor=~

```java
public Personne() {
	nom= "Inconnu";  //Argumet type String 
	age = 0; //Argument type int
	//Or
	this("Inconnu",0);
}
```

**~={green}Output:=~** 

```
Inconnu, 0
```

These arguments can't be changed when creating a ~={yellow}**new**=~ object and when running the code through the `main` function it will keep showing `Inconnu, 0 `  unless you use [[Getters and Setters]].

When there is no Constructor created in the class, **[[JDK, JRE and JVM|JAVAC]]** ( *java's compiler*) will create a default one automatically.

---
#### ~={blue}Parameterized Constructor (Constructeur surchargé)=~

```java
public Personne(String nom, int age) {
	this.nom=nom;
	this.age=age;
}
```

You can initialize an Object using parameters and change with whatever info you'd like instead of a fixed one like the default constructor

---
###### ~={pink}      **We cant create 2 Constructors with the same amount and types of parameters**=~

---

#### ~={blue}Utilization=~
In this example we can see also a Constructor overloading where there is both a default constructor and and parameterized one. It allows for creating either default or specified values.

```java
public static void main(String[] args){

	//Default Constructors
	Personne p1 = new Personne(); 
	//Parameterized Constructors
	Personne p2 = new Personne("Fatine", 21);
	
	//Default
	System.out.println("p1-> Name: "+p1.name+", Age: "+p1.age);
	//Parameterized
	System.out.println("p2-> Name: "+p2.name+", Age: "+p12.age);
}
```

**~={green}Output:=~** ![[Pasted image 20251029140840.png | center]]

---

## '~={yellow}This=~' keyword

in Java, `this` is a reference variable that refers to the current object or field.
Used to:
- Call curent class methods and fields.
- Differentiate between the local and instance variables.
- Reduce naming conflicts.
- Pass an instance of current class as a parameter.
- It can be useful for [[Getters and Setters]].
- it's not that big of a deal but it's better to be used just for clarity

```java
public class Person{
	 String name;
     int age;
    
	Person(String name, int age)
    {
        this.name = name;
        this.age = age;
    }
    //Getter for name
    public String getName() { 
	    return name; 
    }
    // Setter for name
    public void setName(String name)
    {
        this.name = name;
    }
    
	public void printDetails()
    {
        System.out.println("Name: " + this.name);
        System.out.println("Age: " + this.age);
        System.out.println();
    }
    // main function
    public static void main(String[] args)
    {
        // Objects Declared
        Person first = new Person("ABC", 18);
        Person second = new Person("XYZ", 22);
		//Details outpot
        first.printDetails();
        second.printDetails();
}
```

~={green}**Output**: =~

```
Name: ABC
Age: 18

Name: XYZ
Age: 22
```









# ~={red}References=~

[Java Constructors - Full Tutorial](https://www.youtube.com/watch?v=pgBk8HC7jbU)
[[Chapitre2-Classes et Objets.pdf]]
[This Keyword in Java Full Tutorial - How to Use "this"](https://www.youtube.com/watch?v=ETLHbHenW44&t=298s)

