Date: 2025-11-25
Tags:  [[JAVA]], [[JFC - Java Collection Framework|JFC]], [[Programming language]], [[OOP]]

# ~={red} Notes=~

## ~={green}Overview=~ 

A **Map** is an object that maps **keys** to **values**. It is part of the Java Collections Framework (`java.util`), but unlike `List` or `Set`, it does **not** extend the `Collection` interface.
**Key Characteristics**
- **Key-Value Pairs:** Data is stored as an `Entry<Key, Value>`.
- **Unique Keys:** A Map cannot contain duplicate keys. If you add a key that already exists, the old value is overwritten.
- **One Value per Key:** Each key maps to at most one value.

### Declaration of the Map interface
`public interface Map<K, V>`
- K -> Type of keys maintained by the map
- V -> Type of mapped values

*Example*
```java
import java.util.HashMap;
import java.util.Map;

public class SimpleHashMapExample {
    public static void main(String[] args) {
        // 1. Create a HashMap (Key: Fruit Name, Value: Price)
        Map<String, Double> fruitPrices = new HashMap<>();

        // 2. Add items using put()
        fruitPrices.put("Apple", 0.99);
        fruitPrices.put("Banana", 0.50);
        fruitPrices.put("Cherry", 2.50);

        System.out.println("1. Initial Map: " + fruitPrices);

        // 3. Access a value using get()
        double bananaPrice = fruitPrices.get("Banana");
        System.out.println("2. Price of Banana: " + bananaPrice);

        // 4. Overwrite a value (Duplicate keys are NOT allowed)
        // We put "Apple" again with a new price. The old 0.99 is replaced.
        fruitPrices.put("Apple", 1.20); 
        System.out.println("3. After updating Apple: " + fruitPrices);

        // 5. Remove an item
        fruitPrices.remove("Cherry");
        System.out.println("4. After removing Cherry: " + fruitPrices);

        // 6. Check size
        System.out.println("5. Total items: " + fruitPrices.size());
    }
}
```
*Output*
```text
1. Initial Map: {Apple=0.99, Cherry=2.50, Banana=0.5}
2. Price of Banana: 0.5
3. After updating Apple: {Apple=1.2, Cherry=2.50, Banana=0.5}
4. After removing Cherry: {Apple=1.2, Banana=0.5}
5. Total items: 2
```

### ~={blue}Packages=~
the following packages must be imported before starting to code
```java
// 1. Interfaces (The contracts)
import java.util.Map;
// 2. Implementations (The actual objects)
import java.util.HashMap;
import java.util.TreeMap;
```
or just use
```java
import java.util.*; 
```

## Hierarchy of Map

![[Pasted image 20251125210507.png]]
### ~={purple}The common implementation classes of the Set interface are=~

#### A. HashMap (The Default Choice)
- **Structure:** Uses a Hash Table.
- **Order:** **No guarantee.** The order can change over time.
- **Nulls:** Allows **one** `null` key and multiple `null` values.
- **Performance:** Extremely fast ($O(1)$) for basic operations like `get` and `put`.
- **Use case:** When you don't care about the order of items, just speed.
#### B. LinkedHashMap (The "Ordered" One)
- **Structure:** Hash Table + Linked List.
- **Order:** Maintains **Insertion Order** (the order you added them).
- **Nulls:** Allows one `null` key and multiple `null` values.
- **Performance:** Slightly slower than `HashMap` (because it has to maintain the links), but still $O(1)$.
- **Use case:** When you need a cache or need to display items in the order they were added.
#### C. TreeMap (The "Sorted" One)
- **Structure:** Red-Black Tree (a self-balancing binary search tree).
- **Order:** **Sorted** according to the "natural ordering" of its keys (e.g., A-Z, 1-10) or a custom `Comparator`.
- **Nulls:** **Does NOT** allow `null` keys (will throw exception), but allows `null` values.
- **Performance:** Slower ($O(\log n)$) because it sorts every time you insert.
- **Use case:** When you need a dictionary or a phone book sorted alphabetically.

---

## ~={purple}Java Map - Operations=~
Using a **Student Gradebook** (`Map<String, Integer>`) for all examples to easily follow the logic.
### ~={cyan}CRUD Operations (Create, Read, Update, Delete)=~
These are the fundamental methods every Map supports.
```java
//Declare
Map<String, Integer> grades = new HashMap<>();

// CREATE: put(Key, Value)
grades.put("Alice", 85);
grades.put("Bob", 90);

// UPDATE: put(Key, Value) 
// If the key exists, the old value is overwritten.
grades.put("Alice", 95); 

// READ: get(Key)
Integer aliceScore = grades.get("Alice"); 
Integer daveScore = grades.get("Dave"); // Returns null if missing

// DELETE: remove(Key)
grades.remove("Bob"); 

System.out.println("Alice's Score: " + aliceScore); // Prints 95
System.out.println("Dave's Score: " + daveScore);   // Prints null
System.out.println("Map: " + grades);               // Prints {Alice=95}
```

### ~={cyan}"Safe" Operations (Defensive Coding)=~
to avoid fucking up and overwriting some important elements
```java
Map<String, Integer> grades = new HashMap<>();
grades.put("Alice", 85);

// SAFE READ: getOrDefault(Key, DefaultValue)
// Used when you aren't sure if the key exists.
Integer score = grades.getOrDefault("Charlie", 0); 
System.out.println("Charlie's Score: " + score); // Prints 0 (not null!)

// SAFE INSERT: putIfAbsent(Key, Value)
// Only puts the value if the key is NOT in the map.
grades.putIfAbsent("Alice", 100); // Alice exists, so this is IGNORED
grades.putIfAbsent("Bob", 70);    // Bob is new, so this is ADDED

System.out.println(grades); 
// Output: {Alice=85, Bob=70} (Alice kept her old score)
```

### ~={cyan}The "Views" (Iteration & Loops)=~
Maps cannot be iterated directly (you can't do `for (x : map)`). You must convert them into a **View** (Set or Collection) first.
```java
Map<String, Integer> grades = new HashMap<>();
grades.put("Alice", 85);
grades.put("Bob", 90);

// OPTION A: Iterating Keys (keySet)
// Use when you only need names, or want to look up values manually.
System.out.print("Students: ");
for (String name : grades.keySet()) {
    System.out.print(name + " ");
}
// Output: Students: Alice Bob 

// OPTION B: Iterating Values (values)
// Use when you want to calculate an average and don't care who got what score.
int sum = 0;
for (Integer s : grades.values()) {
    sum += s;
}
System.out.println("\nTotal Sum: " + sum); // Output: 175

//## OPTION C: Iterating Entries (entrySet) - **MOST IMPORTANT** ##
// Use when you need BOTH the name and the score. most efficient.
for (Map.Entry<String, Integer> entry : grades.entrySet()) {
    String k = entry.getKey();
    Integer v = entry.getValue();
    System.out.println(k + " scored " + v);
}
```
##### `entrySet()`, the most powerful part of the Map interface.
**`getKey()` and `getValue()` are absolutely necessary** when you use `entrySet()`.
*What `entrySet()` actually returns*
When you call `map.entrySet()`, Java does not give you the keys or the values directly. Instead, it gives you a **Set** of **Entry objects**.
Think of a `Map` like a wall of P.O. Boxes.
- **`keySet()`** gives you a list of just the box numbers (101, 102, 103...).
- **`values()`** gives you a pile of the mail found inside the boxes.
- **`entrySet()`** gives you the actual **drawers** themselves. Each drawer is a single object that physically holds _both_ the number (Key) and the mail (Value) welded together.
In Java, this "drawer" is called `Map.Entry`.

### ~={cyan}Bulk Operations=~
These operations affect the entire map at once.
```java
Map<String, Integer> classA = new HashMap<>();
classA.put("Alice", 85);

Map<String, Integer> classB = new HashMap<>();
classB.put("Bob", 90);
classB.put("Charlie", 88);

// MERGE: putAll(Map)
// Copies all mappings from classB into classA
classA.putAll(classB); 

System.out.println("Merged Class: " + classA);
// Output: {Alice=85, Bob=90, Charlie=88}

// CLEAR: clear()
// Removes everything.
classA.clear();

// CHECK EMPTY: isEmpty()
System.out.println("Is empty? " + classA.isEmpty()); // true
```

### ~={cyan}Checking for Existence=~
Simple boolean checks. like `contains` in List
```java
Map<String, Integer> grades = new HashMap<>();
grades.put("Alice", 85);

// CONTAINS KEY: O(1) - Very Fast
if (grades.containsKey("Alice")) {
    System.out.println("Alice is present.");
}

// CONTAINS VALUE: O(n) - Slower (Must check every student)
if (grades.containsValue(100)) {
    System.out.println("Someone got a perfect score.");
} else {
    System.out.println("No perfect scores.");
}
```

### ~={pink}Most common Operations for Map=~

| **Category** | **Method**           | **Return Type**     | **Description**                      |
| ------------ | -------------------- | ------------------- | ------------------------------------ |
| **CRUD**     | `put(K, V)`          | `V` (old value)     | Adds pair. Overwrites if key exists. |
| **CRUD**     | `get(K)`             | `V`                 | Returns value or `null`.             |
| **CRUD**     | `remove(K)`          | `V` (removed value) | Deletes the pair.                    |
| **Safety**   | `getOrDefault(K, D)` | `V`                 | Returns `D` if key is missing.       |
| **Safety**   | `putIfAbsent(K, V)`  | `V`                 | Adds pair only if key is missing.    |
| **Views**    | `keySet()`           | `Set<K>`            | Returns all keys (unique).           |
| **Views**    | `values()`           | `Collection<V>`     | Returns all values (can repeat).     |
| **Views**    | `entrySet()`         | `Set<Entry<K,V>>`   | Returns all pairs.                   |

# ~={red}References=~
