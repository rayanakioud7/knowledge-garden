Date: 2025-11-23
Tags: [[JAVA]], [[Programming language]], [[OOP]], [[JFC - Java Collection Framework|JFC]] 
# ~={red} Notes=~

![[Pasted image 20251123220140.png|center]]

JFC is a set of classes and interfaces that provide ready-made data structures to store and multiplate groups of objects efficiently.
- Java provides built-in collection classes like Lis, Set, Map and Queue so developers don't need to write their own data management algorithms.
- it helps with making the code more reusable and faster and also more optimized which is something that we dont see a lot nowadays.
## Core Interfaces

The foundation of the Collections Framework is built on interfaces like Collection, List, Set, Queue, Deque and Map. They define the behavior of different collection types and serve as a blueprint for implementations.
- [[Collection Interface]]
- [[List Interface]]
- [[Set Interface]]
- [[Map Interface]]
- [[Queue Interface]]
- [[Deque Interface]]


**Which implementation to choose**

| **~={blue}Interface=~** | **~={blue}Implementation=~** | **~={blue}Ordering=~** | **~={blue}Access/Search=~** | **~={blue}Add/Remove=~** | **~={blue}Best Use Case=~**                                                         |
| ----------------------- | ---------------------------- | ---------------------- | --------------------------- | ------------------------ | ----------------------------------------------------------------------------------- |
| **List**                | **`ArrayList`**              | Insertion              | **Fast** $O(1)$             | Slow $O(n)$              | **Default choice.** Fast reading and access by index, good for fixed/growing lists. |
| **List**                | `LinkedList`                 | Insertion              | Slow $O(n)$                 | **Fast** $O(1)$          | **Specific scenarios only.** Frequent inserts/deletes _at ends_ (Queue/Stack).      |
| **Set**                 | **`HashSet`**                | Random                 | **Fast** $O(1)$             | **Fast** $O(1)$          | **Default Set.** Fastest for checking uniqueness. No order guarantee.               |
| **Set**                 | `TreeSet`                    | Sorted                 | Medium $O(\log n)$          | Medium $O(\log n)$       | When you need unique items **sorted** (e.g., A-Z, 1-100).                           |
| **Set**                 | `LinkedHashSet`              | Insertion              | **Fast** $O(1)$             | **Fast** $O(1)$          | Unique items, but keep them in the **order they were added**.                       |
| **Map**                 | **`HashMap`**                | Random                 | **Fast** $O(1)$             | **Fast** $O(1)$          | **Default Map.** Key-Value pairs. Fastest lookup.                                   |
| **Map**                 | `TreeMap`                    | Sorted Keys            | Medium $O(\log n)$          | Medium $O(\log n)$       | When you need Keys **sorted** (e.g., Dictionary).                                   |
| **Map**                 | `LinkedHashMap`              | Insertion              | **Fast** $O(1)$             | **Fast** $O(1)$          | Keys + Values, but keep **insertion order** (e.g., Caching).                        |
| **Queue**               | `PriorityQueue`              | Priority               | Top is $O(1)$               | Medium $O(\log n)$       | Process tasks by **importance**, not arrival time.                                  |
| **Deque**               | `ArrayDeque`                 | Insertion              | **Fast** $O(1)$             | **Fast** $O(1)$          | **Modern Stack/Queue.** Faster than LinkedList for stacks/queues.                   |

##### The "Pro" Cheat Sheet for Imports
Before Starting to code make sure to import `java.util` for each interface 
for example the interface ArrayList needs the package `java.util.ArrayList;`
```java
// 1. Interfaces (The contracts)
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.Queue;
import java.util.Deque;

// 2. Implementations (The actual objects)
import java.util.ArrayList;
import java.util.LinkedList; // or java.util.ArrayDeque (preferred)
import java.util.HashSet;
import java.util.HashMap;
import java.util.TreeMap;     // If sorting needed
import java.util.PriorityQueue;

// 3. Utilities (Helper methods like sort, shuffle)
import java.util.Collections;
import java.util.Objects;     // For hash() and equals() logic
import java.util.Arrays;      // For Arrays.asList()
```

**OR** you can just use- * - which covers 95% of the standard Collections framework:
```java
import java.util.*; // Imports List, ArrayList, Map, HashMap, Collections, etc.
```


### ~={red}To not break the code always @Override ~={green}equals=~(), ~={green}hashCode=~() and ~={green}toString=~()=~

```java
import java.util.Objects;

public class YourClassName {

    // Your fields (e.g., id, email, username)
    private String significantField1;
    private int significantField2;

    @Override
    public boolean equals(Object o) {
        // 1. Optimization: Check if they are the exact same object in memory
        if (this == o) return true;
        
        // 2. Null & Type Check: Ensure the other object is not null and is the same Class
        if (o == null || getClass() != o.getClass()) return false;
        
        // 3. Casting: Convert the generic 'Object' to 'YourClassName'
        YourClassName that = (YourClassName) o;
        
        // 4. Comparison: Check actual data values
        // Use Objects.equals() for objects (Strings, Lists) to handle nulls safely
        // Use == for primitives (int, double, boolean)
        return significantField2 == that.significantField2 &&
               Objects.equals(significantField1, that.significantField1);
    }

    @Override
    public int hashCode() {
        // 5. Hash: Must use the EXACT SAME fields as equals()
        return Objects.hash(significantField1, significantField2);
    }
	    
    @Override
	public String toString() {
	    return "User{username='" + significantField1 + "', score=" + significantField2 + "}";
	}
}
```


## ~={red}Comparable and Comparator=~
These interfaces are strictly required for any collection that promises to keep things **Sorted** or organized by **Priority**. and if you want to use the method `Collections.sort()` it's must to redefine it in the class first. you can ignore these interfaces in the HASHED groupe (`hashSet`, `hashMap`) since they only need `equals()` and `hashCode()` 

| **Collection Type**    | **How it uses Comparator/Comparable**                                                                                                       |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **`List` (ArrayList)** | **Optional.** Used only when you explicitly call `.sort()`. It rearranges the existing list.                                                |
| **`TreeSet`**          | **MANDATORY.** It sorts items _automatically_ as you `.add()` them. It uses the comparison logic to decide where the item sits in the tree. |
| **`TreeMap`**          | **MANDATORY.** Similar to `TreeSet`, but it sorts the **Keys**.                                                                             |
| **`PriorityQueue`**    | **MANDATORY.** Uses it to decide which item is "VIP" and should be at the front of the line.                                                |
### Comparator vs Comparable
| **Feature**            | **Comparable (Internal)**                                 | **Comparator (External)**                                                   |
| ---------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Who implements it?** | The class itself (`class Product implements Comparable`). | A separate class (`class PriceJudge implements Comparator`).                |
| **Method**             | `compareTo(Object other)`                                 | `compare(Object a, Object b)`                                               |
| **Use case**           | The "Natural" default order (e.g., Dates, Numbers).       | "Custom" order (e.g., Sort by Price, then by Rating).                       |
| **Flexibility**        | Rigid. You only get one implementation per class.         | Flexible. You can make 10 different comparators for 10 different scenarios. |
### Template for Comparator
```java
Collections.sort(shop, new Comparator<Product>() {
    @Override
    public int compare(Product p1, Product p2) {
        // Use String's built-in compareTo method
        return p1.name.compareTo(p2.name);
    }
});
    //OR
public interface Comparator<T> {
		int compare(T o1, T o2);
}
```
### ~={yellow}Template for Integers (Sorting by ID, Score, Age)=~

**astuce** : do not use subtraction (e.g., `this.id - other.id`). If the numbers are large negative/positive, this causes an "Integer Overflow" error. Always use the helper `Integer.compare()`.
```java
public class Student implements Comparable<Student> {
    private int id; 
    private String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    // --- COMPARE TO (INTEGERS) ---
    @Override
    public int compareTo(Student other) {
        // "Natural Order": Low IDs first (1, 2, 3...)
        return Integer.compare(this.id, other.id);

        // If you want REVERSE order (High IDs first):
        return Integer.compare(other.id, this.id);
    }
}
```

### ~={yellow} Template for Strings (Sorting by Name, Email, City)=~
You don't need to write the alphabet logic yourself! The Java `String` class already knows how to sort itself. You just "delegate" the work to the string field.
```java
public class Member implements Comparable<Member> {
    private String username;
    private int points;

    public Member(String username, int points) {
        this.username = username;
        this.points = points;
    }

    // --- COMPARE TO (STRINGS) ---
    @Override
    public int compareTo(Member other) {
        // "Natural Order": Alphabetical (A -> Z)
	    // We simply ask our username string to compare itself to the other                   username
        return this.username.compareTo(other.username);
        
        // If you want REVERSE Alphabetical (Z -> A):
        return other.username.compareTo(this.username);
    }
}
```

### ~={yellow}A Combo template=~
if you want to sort with both integers and Strings if you got for example the same name then you sort by age.
```java
@Override
public int compareTo(User other) {
    // 1. Primary Sort: Compare Strings
    int nameCheck = this.username.compareTo(other.username);
    
    // 2. If names are NOT equal, return that result immediately
    if (nameCheck != 0) {
        return nameCheck;
    }
    
    // 3. If names ARE equal (result was 0), fall back to ID
    return Integer.compare(this.id, other.id);
}
```
#### Summary of the Rules
1. **Class Header:** Must include `implements Comparable<YourClassName>`.
2. **Integer Fields:** Use `Integer.compare(this.val, other.val)`.
3. **String Fields:** Use `this.str.compareTo(other.str)`.
4. **Double Fields:** Use `Double.compare(this.val, other.val)`.
## Collection Interface
En Java, une collection est une structure de données qui permet de
stocker et de manipuler un groupe d'objets.
Les collections en java sont un ensemble de classes et d'interfaces qui
aident à manipuler les données efficacement.

Il existe de nombreuses implémentations de collections :
- Certaines collections acceptent les doublons, d'autres pas.
- Certaines sont ordonnées, d'autres pas.
- Certaines collections émettent quelques restrictions, comme le type ou l'interdiction de la valeur null.
### Collection vs Array (Tableau)

![[Pasted image 20251123221409.png|center]]

**Arrays Limitations:**
 1. Arrays are fixed in size.
 2. Can store only homogenous data elements.
```java
Student[] student = new Student[10];
student[0] = new Student();
student[1] = new Student();
student[2] = new Book(); //will generate an error because arrays cant store different elements

//you can get around this by using the Object class, since Object is the super class of all objects
Object[] objects = new Object[10];
objects[0] = new Student();
objects[1] = new Student();
objects[2] = new Book(); // no error will be generated but its not an optimal way

```
3. ready made APIs support is not available in array.

- **Use an Array when:**
    
    - You know the exact number of elements ahead of time.
        
    - You are working with small, fixed-size data sets.
        
    - Maximum execution speed and memory efficiency are critical (e.g., low-level systems programming or image processing).
        
- **Use Collections when:**
    
    - You do not know how much data you will have.
        
    - You need to frequently add or remove items.
        
    - You need complex data structures (like Maps or Sets) or advanced manipulation (sorting/searching) without writing code from scratch
### Methods of Collection Interface

| ~={blue}Method=~                                                                                                     | ~={blue}Description=~                                |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`add(E e)`](https://www.geeksforgeeks.org/java/list-adde-ele-method-in-java-with-examples/)                         | Adds an element to the collection (optional).        |
| [`addAll(Collection<? extends E> c)`](https://www.geeksforgeeks.org/java/set-addall-method-in-java-with-examples/)   | Adds all elements from another collection.           |
| [`clear()`](https://www.geeksforgeeks.org/java/list-clear-method-in-java-with-examples/)                             | Removes all elements.                                |
| [`contains(Object o)`](https://www.geeksforgeeks.org/java/collection-contains-method-in-java-with-examples/)         | Checks if an element exists.                         |
| [`containsAll(Collection<?> c)`](https://www.geeksforgeeks.org/java/list-containsall-method-in-java-with-examples/)  | Checks if all elements exist.                        |
| [`remove(Object o)`](https://www.geeksforgeeks.org/java/list-removeobject-obj-method-in-java-with-examples/)         | Removes a single instance of the specified element.  |
| [`removeAll(Collection<?> c)`](https://www.geeksforgeeks.org/java/arraylist-removeall-method-in-java-with-examples/) | Removes all elements present in another collection.  |
| [`retainAll(Collection<?> c)`](https://www.geeksforgeeks.org/java/arraylist-retainall-method-in-java/)               | Retains only elements present in another collection. |
| [`removeIf(Predicate<? super E> filter)`](https://www.geeksforgeeks.org/java/arraylist-removeif-method-in-java/)     | Removes elements satisfying a predicate.             |
| [`size()`](https://www.geeksforgeeks.org/java/list-size-method-in-java-with-examples/)                               | Returns the number of elements.                      |
| [`isEmpty()`](https://www.geeksforgeeks.org/java/java-string-isempty-method-example/)                                | Checks if the collection is empty.                   |
| [`iterator()`](https://www.geeksforgeeks.org/java/iterators-in-java/)                                                | Returns an iterator over the elements.               |
| [`stream()`](https://www.geeksforgeeks.org/java/stream-in-java/)                                                     | Returns a sequential stream.                         |
| [`parallelStream()`](https://www.geeksforgeeks.org/java/what-is-java-parallel-streams/)                              | Returns a parallel stream.                           |
| [`toArray()`](https://www.geeksforgeeks.org/java/arraylist-toarray-method-in-java-with-examples/)                    | Converts the collection to an array.                 |
| [`equals(Object o)`](https://www.geeksforgeeks.org/java/overriding-equals-method-in-java/)                           | Compares this collection with another object.        |
| [`hashCode()`](https://www.geeksforgeeks.org/java/method-class-hashcode-method-in-java/)                             | Returns hash code of the collection.                 |
| [`spliterator()`](https://www.geeksforgeeks.org/java/java-util-interface-spliterator-java8/)                         | Returns a Spliterator for elements.                  |
**~={green}Example=~**
```java
import java.util.ArrayList;
import java.util.Collection;

public class CollectionDemo {

	public static void main(String[] args) {
		
		//Initiliazing a Collection with ArrayList
		Collection<String> namesCollection = new ArrayList<>();
		
		//Adding element to collection
		namesCollection.add("Rayan");
		namesCollection.add("Fatine");
		namesCollection.add("Akioud");
		
		//printing COllection
		System.out.println(namesCollection);
		
		//remove an element from collection
		namesCollection.remove("Akioud");
		System.out.println(namesCollection);
		
		//checking if an element exists
		boolean e = namesCollection.contains("Fatine");
		System.out.println("does Fatine exist in list? " +e);
		
		//Checking if the list is empty
		boolean f = namesCollection.isEmpty();
		System.out.println("is the List empty? " +f);
		
		
		namesCollection.add("Riyad");
		
		//printing each element one by one
		namesCollection.forEach((element)->{
			System.out.println(element);
		});
		
		int size = namesCollection.size();
		System.out.println("the Size of the list is : " +size);
		
		//Clear the list from all elements
		namesCollection.clear();
		System.out.println("is the list Empty: "+ namesCollection.isEmpty());
		
	}
}

```

**~={green}Output=~**
```
[Rayan, Fatine, Akioud]

[Rayan, Fatine]

does Fatine exist in list? true

is the List empty? false

Rayan
Fatine
Riyad

the Size of the list is : 3

is the list Empty: true
```

### What will you lose by using only Collection Interface

``Collection`` is the parent interface of ``List``, ``Set``, ``Queue`` so a variable of type ``Collection`` can hold any of those implementations.
```java
// All of these are valid!
Collection<String> c1 = new ArrayList<>();
Collection<String> c2 = new LinkedList<>();
Collection<String> c3 = new HashSet<>();
Collection<String> c4 = new PriorityQueue<>();
```

and they can all use the Methods of `Collection` since its the parent of all the children interfaces.

**~={red}BUT=~** doing this will prevent the  access to the specific method of each child types. for example the `get()` method -a very handy method to get a specific item and bring it up- can't be used since it's specified for ArrayList and not generalized for all of Collection interfaces.

| **~={blue}If you declare variable as..=~.** | **~={blue}You can hold...=~**                               | **~={blue}But you can ONLY call methods like...=~**        |
| ------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| **`ArrayList<String> list`**                | Only `ArrayList`                                            | Everything! (`get`, `add`, `remove`, `trimToSize`...)      |
| **`List<String> list`**                     | `ArrayList`, `LinkedList`, `Vector`, `Stack`                | List stuff (`get`, `set`, `indexOf`..) + Collection stuff  |
| **`Collection<String> col`**                | `ArrayList`, `LinkedList`, `HashSet`, `TreeSet`, `Queue`... | **Only basic stuff** (`add`, `remove`, `size`, `clear`...) |

# ~={red}References=~
https://www.geeksforgeeks.org/java/java-collection-tutorial/
https://www.youtube.com/watch?v=GdAon80-0KA