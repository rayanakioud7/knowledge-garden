
Date: 2025-10-29
Tags: [[JAVA]], [[Programming language]], [[Array]], [[OOP]]

# ~={red} Notes=~

In Java, an **Array** is an important linear data structure which allows us to store multiple values of the same type *(primitive or objects)*.
- Arrays in Java are objects.
- Arrays have a built-in length property: `array.length`. It returns the number of elements in the array.

## Primitive vs Non-Primitive

- ~={purple}**Primitives (Primitifs):**=~ Ces types de données contiennent la valeur réelle de la variable en mémoire (Stack).
- ~={purple}**Non-Primitives (Reference):**=~ La variable contient l'adresse mémoire (Stack) où l'objet est réellement stocké (Heap).

![[Pasted image 20251029192732.png | center]]

---
  
  ~={yellow}**All Array elements start with index 0:** =~
 If we try to access an array with an index greater than or equal to its size, or with a negative index, the [[JDK, JRE and JVM|JVM]] throws an `ArrayIndexOutOfBoundsException`.

![[Pasted image 20251030113042.png|center]]
 
```java
 int[] nums = {7, 98, 2};
 
 // Printing the first element
 System.out.println(nums[0]);
 
 // Changing the first element 
 nums[0] = 16;
 System.out.println(nums[0]);
```

**~={green}Output:=~** 
```
7

16
```

~={yellow}**Invalid index:**=~
```java
    int[] arr = new int[2];
	arr[0] = 15;
	arr[1] = 12;
    // Error: Index 2 is out of bounds for length 2
	System.out.println(arr[2]); 
```

**~={green}Output:=~** **ERROR**

![[Pasted image 20251030111409.png|center]]

---

## Declaring an Array

#### ~={blue}Method 1 (Preferred Java Style):=~

`int[] arr;`


```java
public class Main {
    public static void main(String[] args) {
        // Initializing array
        int[] nums = {57, 98, 0, 83, 1, 12};
        String[] cars = {"Mustang", "Mercedes", "Dacia"};
        
        System.out.println(nums[3]);
        System.out.println(cars[1]);
    }
}
```

**~={green}Output:=~**

```
83
Mercedes
```

#### ~={blue}Method 2 (C-Style, valid but less common):=~

`int arr[];`

```java
public class Main {
     public static void main(String[] args) {
         // Initializing array
         int nums[] = {5, 9, 87, 65};
         String cars[] = {"Mustang", "Mercedes", "Dacia"};
         
         System.out.println(nums[2]);
         System.out.println(cars[2]);
     }
}
```

**~={green}Output:=~**

```
87
Dacia
```

> [!NOTE] Type Safety
> 
> The element type determines the types of every element in an array. You cannot initialize a primitive array with mixed types (e.g., mixing `int` and `double` without casting).

---

## Initialization of an Array in Java

When an array is declared, only a **reference** is created. We use **`new`** to allocate memory for the array with a specific size.

**Default Values:**

When you use `new`, Java fills the array with default values:

- `int`, `byte`, `short`, `long` -> `0`
- `float`, `double` -> `0.0`
- `boolean` -> `false`
- `Object` (String, etc.) -> `null`


```java
// Creating an array of 6 integers (all set to 0 initially)
int[] arr = new int[6];
```

---

## Array Length

Array lengths are **fixed** once created. You must know the required size beforehand.

- Indices range from `0` to `array.length - 1`.
- Length is a **property** (`arr.length`), not a method (`arr.length()`).

```java
// Getting the length of an array
int n = array.length;
```

---

### Change an Array Element

Just assign a new value to the specific index.

~={red}**Disclaimer:**=~ Since indices begin at 0, the $n$-th element is at index $n-1$.

```java
	int[] array = {2, 6, 5};
	// Changing the first element to 87
	array[0] = 87;
```

---

### Traversing Array (Parcours)

To traverse _(parcourir)_ an array, we use Loops _(les boucles)_.

~={cyan}**For loop:**=~ traversing by index _(accès par indice)_

```java
for (int i = 0; i < array.length; i++) {
	System.out.print(array[i] + "\n");
}
```

~={cyan}**Enhanced for loop (For-Each):**=~ traversing by element _(accès par élément)_

Use this when you don't need to modify the array or know the index.

```java
for (int i : array) {
	System.out.print(i + "\n");
}
```

~={cyan}**The "Pro" Way (Java Util):**=~

Using the `Arrays` class to print instantly.

```java
import java.util.Arrays;
System.out.println(Arrays.toString(array));
```

---

# Arrays of [[OOP| Objects]] in Java

Same concept as arrays of primitives, but the array holds **references** to objects.

~={red}**Warning:**=~ When you do `Student[] arr = new Student[5];`, the array is full of `null` values. You **must** initialize each object individually using `new`, otherwise you get a `NullPointerException`.

**~={pink}1. Creating the Class=~**

```java
class Student {
	public int age;
	public String name;
	
	public Student(int age, String name) {
		this.age = age;
		this.name = name;
	}
}
```

**~={pink}2. Creating and Populating the Array=~**

```java
public class Main {
	public static void main(String[] args) {
		Student[] arr = new Student[3];
		
		// Initialize individual elements
		arr[0] = new Student(12, "Fatine");
		arr[1] = new Student(17, "Rayan");
		arr[2] = new Student(21, "Souad");
		
		for (Student student : arr) {
			System.out.println("Name: " + student.name + ", Age: " + student.age);
		}
	}
}
```

**~={green}Output:=~**

```
Name: Fatine, Age: 12
Name: Rayan, Age: 17
Name: Souad, Age: 21
```

---

## Multidimensional Arrays (Matrices)

Common while using 2D arrays (matrices).

```java
// A 2x3 Matrix (2 rows, 3 columns)
int[][] matrix = {
    {1, 2, 3}, 
    {4, 5, 6}
};

// Accessing the element '5' (Row 1, Column 1)
System.out.println(matrix[1][1]); 
```

---

**~={yellow}Objects:=~**[^1]
```java
public class Developer{}
public class Project { 
	private Developer[] equipe;
	public Project() { 
	this.equipe = new Developer[5]; 
	}
	//return method via object dev
public void ajouterDeveloppeur(Developer dev) { 
	if (nombreDeveloppeurs < TAILLE_MAX_EQUIPE) {
		equipe[nombreDeveloppeurs] = dev; 
		nombreDeveloppeurs++;
		}
	}
```

---

# ~={red}References=~

[Java arrays 🚗](https://www.youtube.com/watch?v=ei_4Nt7XWOw)

[[Chapitre3-Classes et Objets P2.pdf]]

[Arrays in Java](https://www.geeksforgeeks.org/java/arrays-in-java/)

[^1]: [[TP de chapitre 4 - Correction.pdf]] - page 9.