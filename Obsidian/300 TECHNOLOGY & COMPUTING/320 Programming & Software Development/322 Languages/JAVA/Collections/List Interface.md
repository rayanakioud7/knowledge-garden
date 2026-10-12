Date: 2025-11-24
Tags: [[JAVA]], [[JFC - Java Collection Framework|JFC]], [[Programming language]], [[OOP]]

# ~={red} Notes=~

## ~={green}Overview=~

The **`List` interface** is one of the most commonly used interfaces in the Java Collections Framework. It extends the `Collection` interface and represents an **~={pink}ordered=~ sequence of elements** where **~={pink}Duplicates=~** are allowed and elements can accessed by their index.
**Key characteristics**
- Maintain insertion order, If you insert "A" then "B", iterating through the list will always yield "A" then "B". 
- Allows duplicate elements, (e.g., `[10, 20, 10]` or `[Fatine, Rayan, Rayan, Fatine]` are valid).
- Supports null elements. `list.add(null);`
- access elements by index (like `list.get(0)`) , starts with 0.
- Supports bidirectional traversal using `ListIteratore`.
- Since Every class has `Object` as a superclass, if its the chosen type of the list every element can be inserted in the list.

*Example*
```java 
List<Object> myList = new ArrayList<>();
		myList.add("1");
		myList.add("4");
		myList.add("3");
		myList.add(2);
		myList.add("3");
		myList.add(9.77);
		myList.add(null);
		System.out.println(myList);
```
*Output*
```
[1, 4, 3, 2, 3, 9.77, null]
//we can also obvserve the maintenance of insertion and allowance of duplicates and null
```
### ~={blue}Packages=~
the following packages must be imported before starting to code
```java
// 1. Interfaces (The contracts)
import java.util.List;
// 2. Implementations (The actual objects)
import java.util.ArrayList;
import java.util.LinkedList;
```
or just use
```java
import java.util.*; 
```
---
## Hierarchy of Java List interface
### ~={purple}The common implementation classes of the List interface are=~

![[Pasted image 20251124180302.png|center]]

#### ArrayList (The Default Choice)
- **Under the hood:** A resizable dynamic array.
- **Best for:** Random access. If you need to frequently call `.get(index)`.
- **Worst for:** Inserting or removing items at the _start_ or _middle_ (because it has to shift all other items in memory).
#### LinkedList
- **Under the hood:** A chain of nodes (doubly linked).
- **Best for:** Adding/removing items frequently, especially at the beginning or middle.
- **Worst for:** Random access (`.get(index)`), because it has to traverse the chain from the start to find the item.
#### Vector (Legacy)
- **Under the hood:** Like ArrayList, but **Synchronized** (Thread-Safe).
- **Usage:** Rarely used in modern Java. If you need thread safety, programmers now prefer `CopyOnWriteArrayList` or `Collections.synchronizedList()`.
#### Stack (Legacy)
- **Under the hood:** Extends `Vector`. Represents Last-In-First-Out (LIFO).
- **Usage:** Generally replaced by the `Deque` interface (using `ArrayDeque`).
- --
## ~={purple}Java List - Operations=~
we will use `ArrayList` in these examples as its the most common
### ~={cyan}CRUD Operations (Create, Read, Update, Delete)=~
#### Declaration of Java List Interface
to use List an implementation class must be initiated with it for example ArrayList or LinkedList
```java
// 1. Create (Initialize)
List<String> myList = new ArrayList<>();
List<Integer> maList = new LinkedList<>();
```
#### ✦ Adding Elements
using `add(Object o)` 
```java
//Append to the end of the list.
myList.add("Mercury"); 
myList.add("Earth"); 
myList.add("Mars");
```
#### ✦ Insert Elements
using `add(int index, Object o)`
```java
//Insert -Add at a specific index.
    // This shifts "Earth" and "Mars" to the right.
    myList.add(1, "Venus");
```
#### ✦ Accessing Elements
using `get(int index)` which return element at the specified index.
```java
//Read (Get by index)
    String secondPlanet = myList.get(1); 
    System.out.println("Planet at index 1: " + secondPlanet); 
        // Output: Planet at index 1: Venus
```
#### ✦ Updating Elements
using `set(int index, Object o)`
```java
// Update (Set/Replace)
    // Replaces "Mars" (index 3) with "Jupiter". Returns the OLD value.
    myList.set(3, "Jupiter");
```
#### ✦ Removing Elements
using either:
- `remove(Object o)` to remove the first occurred  specified object from the list
- `remove(int index)` to remove a specific element at an index *(placement)* in list
```java
// Delete (Remove)
    // You can remove by Index OR by Object
    myList.remove(0);         // Removes "Mercury"
	myList.remove("Earth");   // Removes the first occurrence of "Earth"
```


### ~={cyan}Search and Status Operations=~

#### ✦ Check if list is empty
using `isEmpty()`
```java
//returns a boolean type if the list is empty its true if it got any elems then return fals
boolean check = myList.isEmpty();
System.out.println(check); 
// Output: false, since list is full of planets
```
#### ✦ Size
using `size()` you can know how many elements are in the list by returning an integer
```java
int size = myList.size();
System.out.println("the size of the list is :"+ size);
```
####  ✦ Check if element is present or not
using `contains(Object o)` to check existence and return a boolean type either true if the element exits or false if it doesn't
```java
boolean isIt = programming.contains("Earth");
System.out.println("is Earth in list? " +isIt);
//Output : is Earth in list? false
```
#### ✦ Searching elements
either by using:
- `indexOf(Objec o)` which return the index *(Integer)* of the first occurrence of the specified element in list or -1 if it dosent. 
- `lastIndexOf(Object o)` that return the index of the last occurrence of the specified element or -1 if the element isn't found
so basically either check from start till it find it or checking from the end going backwards till it find it.
```java
int firstIndex = myList.indexOf("Venus"); // Output: 0
int lastIndex = myList.lastIndexOf("Jupiter"); // Output: 1
int missingIndex = myList.indexOf("Earth");  // Output: -1 (Not found)
```
### ~={cyan}Slicing and Bulk Operations=~
These methods allow you to work with groups of elements or sections of the list.
```java
import java.util.ArrayList;
import java.util.Arrays; // Helper to create lists quickly
import java.util.List;

public class ListBulkExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        numbers.add(50);
        
        // 1. subList (Create a "View" of a range)
        // Syntax: subList(start, end) -> includes Start, excludes End
        List<Integer> middle = numbers.subList(1, 4); 
        System.out.println(middle); // Output: [20, 30, 40]
        
        // WARNING: subList is a "Window". 
        // Modifying 'middle' modifies 'numbers'!
        middle.set(0, 999); 
        System.out.println(numbers); // Output: [10, 999, 30, 40, 50]
        
        // 2. addAll (Merge lists)
        List<Integer> moreNumbers = Arrays.asList(60, 70);
        numbers.addAll(moreNumbers); 
        
        // 3. removeAll (Bulk delete)
        // Removes anything found in the provided list
        numbers.removeAll(Arrays.asList(999, 50));
    }
}
```

### ~={cyan}Sorting and Converting=~
makes life easier to find methods that sorts lists for you instead of creating your algorithm
```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Comparator;

public class ListSortExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Charlie");
        names.add("Alice");
        names.add("Bob");

        // 1. Sort Naturally (A-Z)
        names.sort(null); 
        Collections.sort(names);
        System.out.println(names); // [Alice, Bob, Charlie]

        // 2. Sort Custom (Reverse Z-A)
        names.sort(Comparator.reverseOrder());
        System.out.println(names); // [Charlie, Bob, Alice]

        // 3. Convert List to Array
        // We pass 'new String[0]' to tell Java the type of array we want.
        String[] nameArray = names.toArray(new String[0]);
    }
}
```

---
## ~={pink}ArrayList=~
### Hierarchy of ArrayList
It implements [List Interface](https://www.geeksforgeeks.org/java/list-interface-java-examples/) which is a sub-interface of [Collection Interface](https://www.geeksforgeeks.org/java/collection-interface-in-java-with-examples/).
![[Pasted image 20251124220939.png|center]]
### ArrayList Constructors in Java
Java provides multiple constructors to create an ArrayList based on different requirements:
#### 1. ArrayList()
Creates an empty ArrayList with default initial capacity.
```java
ArrayList<Integer> arr = new ArrayList<>();
```
#### 2. ArrayList(Collection`<? extends E>` c)
Creates an ArrayList initialized with elements from the specified collection.
```java
ArrayList<String> arr = new ArrayList<>(collection);
```
#### 3. ArrayList(int initialCapacity)
This constructor is used to build an array list with the initial capacity being specified.
```java
ArrayList<Double> arr = new ArrayList<>(20);
```

### Specific ArrayList Methods
|**Method**|**Purpose**|**Unique to ArrayList?**|**Best Use Case**|
|---|---|---|---|
|**`ensureCapacity(int)`**|Pre-allocates memory|**Yes**|Before adding massive amounts of data.|
|**`trimToSize()`**|Releases unused memory|**Yes**|After deleting many items to save RAM.|
|**`removeIf(Predicate)`**|Conditional removal|No (but optimized)|Removing items based on logic (e.g., "remove all nulls").|
|**`replaceAll(Operator)`**|In-place modification|No (but optimized)|Applying a math operation or formatting to every item.|
### Time and Space Complexity

| ~={blue}Operation=~                  | ~={blue}Time Complexity=~ | ~={blue}Space Complexity=~ |
| ------------------------------------ | ------------------------- | -------------------------- |
| **Inserting Element in ArrayList**   | O(1)                      | O(N)                       |
| **Removing Element from ArrayList**  | O(N)                      | O(1)                       |
| **Traversing Elements in ArrayList** | O(N)                      | O(N)                       |
| **Replacing Elements in ArrayList**  | O(1)                      | O(1)                       |

## ~={pink}LinkedList=~
LinkedList nodes cannot be accessed directly by index; elements must be accessed by traversing from the head.
- **Dynamic Size:** LinkedList grows or shrinks dynamically at runtime.
-  **Efficient Insertion/Deletion:** Adding or removing elements at the beginning or middle is faster compared to ArrayList.
### Hierarchy of ArrayList
It implements the [List](https://www.geeksforgeeks.org/java/list-interface-java-examples/) and [Deque interfaces](https://www.geeksforgeeks.org/java/deque-interface-java-example/), both of which are sub-interfaces of the [Collection Interface](https://www.geeksforgeeks.org/java/collection-interface-in-java-with-examples/).

![[Pasted image 20251124222512.png|center]]

### Constructors of LinkedList
#### 1. LinkedList()
This constructor is used to create an empty linked list. If we wish to create an empty LinkedList with the name list, then it can be created as: 
```java
LinkedList<Object> list = new LinkedList<>();  
```
#### 2. LinkedList(Collection C)
This constructor is used to create an ordered list that contains all the elements of a specified collection, as returned by the collection's iterator. If we wish to create a LinkedList with the name list, then, it can be created as: 
```java
LinkedList<Object> list = new LinkedList<>(C);
```

### Specific ArrayList Methods

| **Method Type**            | **Method Name**        | **Description**                                                         | **Safety Note**                    |
| -------------------------- | ---------------------- | ----------------------------------------------------------------------- | ---------------------------------- |
| **~={red}Adding=~**        | `addFirst(E e)`        | Adds element to index 0.                                                |                                    |
|                            | `addLast(E e)`         | Adds element to the very end.                                           | Same as `add()`                    |
|                            | `push(E e)`            | Pushes an element onto the stack (adds to front).                       | **Stack terminology**              |
| **~={orange}Retrieving=~** | `getFirst()`           | Gets the first element.                                                 | Throws Exception if empty          |
|                            | `getLast()`            | Gets the last element.                                                  | Throws Exception if empty          |
|                            | `peekFirst()`          | Gets the first element.                                                 | **Returns `null` if empty** (Safe) |
|                            | `peekLast()`           | Gets the last element.                                                  | **Returns `null` if empty** (Safe) |
| **~={yellow}Removing=~**   | `removeFirst()`        | Removes and returns the first element.                                  | Throws Exception if empty          |
|                            | `removeLast()`         | Removes and returns the last element.                                   | Throws Exception if empty          |
|                            | `pollFirst()`          | Removes and returns the first element.                                  | **Returns `null` if empty** (Safe) |
|                            | `pollLast()`           | Removes and returns the last element.                                   | **Returns `null` if empty** (Safe) |
|                            | `pop()`                | Removes the first element (Stack pop).                                  | Throws Exception if empty          |
| **~={green}Iterating=~**   | `descendingIterator()` | Returns an iterator that walks **backwards** (Tail $\rightarrow$ Head). | Unique to LinkedList               |
|                            |                        |                                                                         |                                    |

--- 
## ArrayList vs LinkedList
![[Pasted image 20251124223307.png|center]]
## Time and Space Complexity
#### Time Complexity

| **Operation**             | **LinkedList**  | **ArrayList**   | **Why?**                                                                                  |
| ------------------------- | --------------- | --------------- | ----------------------------------------------------------------------------------------- |
| **Get by Index** `get(i)` | **O(n)** (Slow) | **O(1)** (Fast) | `LinkedList` must walk from the start to find index 1000. `ArrayList` jumps instantly.    |
| **Add/Remove at Start**   | **O(1)** (Fast) | **O(n)** (Slow) | `LinkedList` just updates a pointer. `ArrayList` must shift _every_ element to the right. |
| **Add/Remove at End**     | **O(1)**        | **O(1)**        | Both are efficient here.                                                                  |
| **Add/Remove in Middle**  | **O(n)**        | **O(n)**        | `LinkedList` takes O(n) to _find_ the spot. `ArrayList` takes O(n) to _shift_ elements.   |
| **Search** `contains()`   | **O(n)**        | **O(n)**        | Both must check every item one by one.                                                    |
#### Space Complexity

| **Structure**  | **Complexity** | **Memory Overhead Detail**                                                                                                                                                                                                        |
| -------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **LinkedList** | **High**       | **Heavy.** Every single item is wrapped in a "Node" object. Each node stores:<br>  <br>1. The Data<br><br>2. Reference to Next<br>  <br>3. Reference to Previous<br><br>**Result:** Uses ~4x more memory per item than ArrayList. |
| **ArrayList**  | **Low**        | **Light.** Stores data in a compact array. The only wasted memory is the "buffer" space at the end (capacity minus size).                                                                                                         |
# ~={red}References=~
https://www.youtube.com/watch?v=GdAon80-0KA
https://www.geeksforgeeks.org/java/list-interface-java-examples/
Gemini 3.0 pro