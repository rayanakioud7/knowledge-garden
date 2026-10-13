Date: 2025-11-24
Tags: [[JAVA]], [[OOP]],  [[JFC - Java Collection Framework|JFC]], [[Programming language]]

# ~={red} Notes=~
## ~={green}Overview=~
`Set` interface is a part of the java collection Framework located also in the `java.util` package.
The `Set` interface in Java is defined by one single, unbreakable rule: **No Duplicates Allowed.** 
so only unique elements are represented in it.
If you try to add an item that already exists in a `Set`, the operation simply returns `false` and ignores the request. It effectively models the mathematical concept of a finite set.
- The set interface does not allow duplicate elements.
- It can contain at most one null value except TreeSet implementation which does not allow null.
- The set interface provides efficient search, insertion, and deletion operations.
*Example*
```java
import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        // 1. Create the Set (Using HashSet)
        Set<String> fruits = new HashSet<>();

        // 2. Add elements
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Orange");
        
        // 3. Try to add a DUPLICATE
        boolean isAdded = fruits.add("Apple"); // Returns false because Apple exists

        System.out.println("Was the second Apple added? " + isAdded);

        // 4. Print the Set
        // Note: The order might be random!
        System.out.println("Current Set: " + fruits);

        // 5. Iterate over the Set
        System.out.println("\nList of Fruits:");
        for (String fruit : fruits) {
            System.out.println("- " + fruit);
        }
    }
}
```
*Output*
```text
Was the second Apple added? false
Current Set: [Apple, Orange, Banana]

List of Fruits:
- Apple
- Orange
- Banana
```
### ~={blue}Packages=~
the following packages must be imported before starting to code
```java
// 1. Interfaces (The contracts)
import java.util.Set;
// 2. Implementations (The actual objects)
import java.util.HashSet;
import java.util.TreeSet;
```
or just use
```java
import java.util.*; 
```
---
## Hierarchy of Java Set interface

![[Pasted image 20251124231135.png|center]]
### ~={blue}Classes that implement the Set interface=~
These are the standard implementations used in 99% of Java applications.
#### A. HashSet (The Default Choice)
- **Best for:** General use where you just need uniqueness and speed.
- **Internal logic:** Uses a `HashMap` internally. It calculates the "hash" of your object to find its location instantly.
- **Ordering:** **Chaos.** There is no guarantee of order. If you iterate over it, elements may appear in a completely random sequence.
- **Nulls:** Allows 1 `null` value.
#### B. LinkedHashSet (The "Ordered" Cousin)
- **Best for:** When you need uniqueness but also need to remember the **order of insertion** (e.g., a "History" list where duplicates are removed but time order matters).
- **Internal logic:** It is a `HashSet` + a `LinkedList` running through it connecting the elements.
- **Ordering:** Strictly maintains **Insertion Order**.
- **Performance:** Slightly slower than `HashSet` due to the overhead of maintaining the links.
#### C. TreeSet (The "Sorted" Specialist)
- **Best for:** When you need the data to be **sorted** (e.g., A-Z or 1-100) automatically.
- **Internal logic:** Uses a **Red-Black Tree** (a self-balancing binary search tree).
- **Ordering:** **Sorted** (Natural ordering or a custom `Comparator`).
- **Nulls:** **Forbidden.** Throwing a `null` into a `TreeSet` will usually cause a `NullPointerException` because it can't compare "nothing" to a value to sort it.

|**Feature**|**HashSet**|**LinkedHashSet**|**TreeSet**|
|---|---|---|---|
|**Speed (Add/Remove)**|**Fastest** $O(1)$|Fast $O(1)$|Slow $O(\log n)$|
|**Ordering**|Random|Insertion Order|Sorted (Ascending)|
|**Null Allowed?**|Yes|Yes|**No**|
|**Memory Usage**|Low|Medium (Extra links)|High (Tree nodes)|
|**Underlying Data**|`HashMap`|`LinkedHashMap`|`TreeMap` (Red-Black Tree)|

---
## ~={purple}Java Set - Operations=~

we will use `HashSet` in these examples as its the most common
Since `Set` does not have index access (no `get(0)`), the operations look different from `List`.
### ~={cyan}CRUD Operations (Create, Read, Update, Delete)=~
**Note on Update:** You cannot "update" an item in a Set directly (e.g., `set.replace(old, new)`). You must **remove** the old item and **add** the new one.
```java
import java.util.HashSet;
import java.util.Set;

public class SetCRUD {
    public static void main(String[] args) {
        // --- CREATE ---
        Set<String> skills = new HashSet<>();
        // --- ADD ---
        skills.add("Java");
        skills.add("Python");
        skills.add("SQL");

        // --- READ ---
        // Since there is no get(index), "Reading" means iterating
        System.out.print("Current Skills: ");
        for (String s : skills) {
            System.out.print(s + " ");
        }
        System.out.println(); //Output: Current Skills: Java Python SQL

        // --- UPDATE (Simulated) ---
        // Scenario: Change "Python" to "Advanced Python"
        if (skills.contains("Python")) {
            skills.remove("Python");        // 1. Delete old
            skills.add("Advanced Python");  // 2. Add new
        }

        // --- DELETE ---
        skills.remove("SQL"); // Removes specific object
        
        System.out.println("Final Skills: " + skills);
        //Output: Final Skills: [Java, Advanced Python]
        
        // clear() removes everything
        skills.clear(); 
    }
}
```
### ~={cyan}Search Operations=~
Searching in a `HashSet` is extremely fast ($O(1)$).
```java
import java.util.HashSet;
import java.util.Set;
import java.util.Arrays;

public class SetSearch {
    public static void main(String[] args) {
        Set<Integer> ids = new HashSet<>();
        ids.add(101);
        ids.add(102);
        ids.add(103);

        // 1. Single Item Check
        if (ids.contains(101)) {
            System.out.println("ID 101 found!");
        }

        // 2. Multiple Item Check (Bulk Search)
        // Check if the set contains ALL items from another list
        Set<Integer> requiredIds = new HashSet<>(Arrays.asList(101, 102));
        
        boolean hasAll = ids.containsAll(requiredIds);
        System.out.println("Has all required IDs? " + hasAll);
    }
}
```

### ~={cyan}Sorting Operations=~
Since a `HashSet` is chaotic, you cannot sort it in place. To get a sorted version, you usually transfer the data into a `TreeSet` or a `List`.
```java
import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;
import java.util.ArrayList;
import java.util.Collections;

public class SetSort {
    public static void main(String[] args) {
        Set<String> randomNames = new HashSet<>();
        randomNames.add("Zack");
        randomNames.add("Alice");
        randomNames.add("Bob");

        System.out.println("Unsorted (Random): " + randomNames);

        // Method 1: Convert to TreeSet (Automatic Sorting)
        // Best if you want to keep it as a Set structure
        Set<String> sortedSet = new TreeSet<>(randomNames);
        System.out.println("Sorted (TreeSet): " + sortedSet);

        // Method 2: Convert to List (Manual Sorting)
        // Best if you need to access by index afterwards
        ArrayList<String> nameList = new ArrayList<>(randomNames);
        Collections.sort(nameList);
        System.out.println("Sorted (List): " + nameList);
    }
}
```

### ~={cyan}Mathematical Set Operations (The Power Users)=~
Sets are most powerful when used for Venn Diagram logic: Union, Intersection, and Difference.

![[Pasted image 20251124232953.png|center|400]]

```java
import java.util.HashSet;
import java.util.Set;
import java.util.Arrays;

public class SetMath {
    public static void main(String[] args) {
        Set<Integer> setA = new HashSet<>(Arrays.asList(1, 2, 3, 4));
        Set<Integer> setB = new HashSet<>(Arrays.asList(3, 4, 5, 6));

        // 1. UNION (Combine both, remove duplicates)
        // Logic: A U B
        Set<Integer> union = new HashSet<>(setA);
        union.addAll(setB); 
        System.out.println("Union: " + union); // Output: [1, 2, 3, 4, 5, 6]

        // 2. INTERSECTION (Keep only common elements)
        // Logic: A ∩ B
        Set<Integer> intersection = new HashSet<>(setA);
        intersection.retainAll(setB);
        System.out.println("Intersection: " + intersection); // Output: [3, 4]

        // 3. DIFFERENCE (Remove elements of B from A)
        // Logic: A - B
        Set<Integer> difference = new HashSet<>(setA);
        difference.removeAll(setB);
        System.out.println("Difference (A - B): " + difference); // Output: [1, 2]
    }
}
```

# ~={red}References=~
https://www.geeksforgeeks.org/java/set-in-java/
Gemini 3.0 pro