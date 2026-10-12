Date: 2025-12-24
Tags: [[JAVA]], [[Programming language]], [[Cheat sheet]]

# ~={red}Java Ultimate Cheat Sheet (2026 Edition)=~

## Quick Navigation

- **[[#Getting Started]]** - **[[#Java Fundamentals]]** - **[[#OOP & Classes]]**
    
- **[[#Collections Framework]]** - **[[#Advanced Features]]** - **[[#Tools & Best Practices]]**

---

## Getting Started

### ava Characteristics

```java

// Java is: Platform-independent (JVM), Object-oriented, Statically-typed
// Compiled to bytecode (.class files), Runs on JRE (Java Runtime Environment)
```
### The Main Method Signature

```java

public class MainClass {
    // Entry point - JVM looks for this exact signature
    public static void main(String[] args) { 
        System.out.println("Hello Java " + Runtime.version());
    }
}
```

**Key Modifiers:**

- `public` → Accessible from anywhere
- `static` → Called without object instantiation
- `void` → Returns nothing
- `String[] args` → Command-line arguments


### Compilation & Execution

```bash
# Compile to bytecode
javac -d ./out -cp "./libs/*" Main.java

# Run with JVM options
java -Xmx512m -cp "./out:./libs/*" Main arg1 arg2

# Create executable JAR
jar cfe app.jar MainClass *.class
```
---

## Java Fundamentals

### Data Types Overview

| **Type**  | **Size** | **Range/Default**  | **Literal**       |
| --------- | -------- | ------------------ | ----------------- |
| `byte`    | 1 byte   | -128 to 127        | `(byte)10`        |
| `short`   | 2 bytes  | -32,768 to 32,767  | `(short)100`      |
| `int`     | 4 bytes  | ±2.1 billion       | `42`              |
| `long`    | 8 bytes  | ±9.2×10¹⁸          | `100L`            |
| `float`   | 4 bytes  | 6-7 decimal digits | `3.14f`           |
| `double`  | 8 bytes  | 15-16 digits       | `3.14` or `3.14d` |
| `char`    | 2 bytes  | Unicode (0-65535)  | `'A'`, `'\u0041'` |
| `boolean` | 1 bit*   | `true`/`false`     | `true`            |

_*Size is JVM-dependent_

### Type Conversion & Casting

```java

// Widening (Implicit - Safe)
int small = 100;
long large = small;  // Auto-conversion

// Narrowing (Explicit - May lose data)
double pi = 3.14159;
int approx = (int) pi;  // 3 (truncation)

// String Conversions
int num = Integer.parseInt("123");
String str = String.valueOf(456);
double d = Double.parseDouble("3.14");

// Binary/Hex Literals (Java 7+)
int binary = 0b1010;    // 10
int hex = 0xFF;         // 255
int underscore = 1_000_000; // Readability
```
### Strings & Text Processing

```java

// String Creation
String s1 = "Hello";                     // String Pool
String s2 = new String("Hello");         // Heap
char[] chars = {'H','i'};
String s3 = new String(chars);

// Important Methods
"Java".length();                         // 4
"Java".charAt(0);                        // 'J'
"Java".substring(1, 3);                  // "av"
"Java".contains("av");                   // true
"Java".replace('a', 'o');                // "Jovo"
"a,b,c".split(",");                      // ["a","b","c"]
"  trim  ".trim();                       // "trim"
"Java".toUpperCase();                    // "JAVA"
String.join("-", "A", "B", "C");         // "A-B-C"

// StringBuilder (Mutable, Thread-unsafe)
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" ").append("World");
String result = sb.toString();           // "Hello World"

// StringBuffer (Thread-safe, slower)
StringBuffer sbf = new StringBuffer();
```

**~={red}CRITICAL:=~ Always use `.equals()` for string comparison, NOT `==`!**

---

## Control Flow & Operators

### Conditional Statements

```java
// Traditional if-else
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}

// Ternary Operator (Inline if)
String status = (age >= 18) ? "Adult" : "Minor";

// Switch Expressions (Java 14+)
String dayType = switch(day) {
    case "Mon", "Tue", "Wed", "Thu", "Fri" -> "Weekday";
    case "Sat", "Sun" -> {
        System.out.println("Yay!");
        yield "Weekend";  // yield returns value
    }
    default -> throw new IllegalArgumentException("Invalid day");
};

// Pattern Matching (Java 21+ Preview)
Object obj = "Hello";
if (obj instanceof String s && s.length() > 3) {
    System.out.println(s.toUpperCase());  // s is automatically cast
}
```
### Loops & Iteration

```java
// Traditional for loop
for (int i = 0; i < 10; i++) { }

// Enhanced for-each
int[] numbers = {1, 2, 3};
for (int num : numbers) { }

// While loop
while (condition) { }

// Do-while (executes at least once)
do { } while (condition);

// Break and Continue with Labels
outerLoop: 
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (i * j > 10) break outerLoop;
        if (j % 2 == 0) continue;
    }
}
```
### Operators Reference

|**Type**|**Operators**|**Example**|
|---|---|---|
|Arithmetic|`+ - * / % ++ --`|`a % b` (modulo)|
|Assignment|`= += -= *= /= %=`|`a += 5` (a = a + 5)|
|Comparison|`== != > < >= <=`|`a != b`|
|Logical|`&& \| !`|`!(a && b)`|
|Bitwise|`& \| ^ ~ << >> >>>`|`a << 2` (left shift)|
|Ternary|`? :`|`a > b ? a : b`|

---

## Arrays & Varargs

### Array Declaration & Usage

```java

// Declaration styles
int[] arr1 = new int[5];           // All zeros
int[] arr2 = {1, 2, 3, 4, 5};      // Initialize
int[] arr3 = new int[]{1, 2, 3};   // Anonymous array

// Multi-dimensional
int[][] matrix = new int[3][3];
int[][] jagged = {{1,2}, {3,4,5}}; // Jagged array

// Important Properties/Methods
int length = arr1.length;          // Property, not method!
Arrays.sort(arr2);                 // Quick sort
Arrays.fill(arr1, -1);             // Fill with value
Arrays.copyOf(arr2, 10);           // Copy & resize
Arrays.equals(arr1, arr2);         // Deep equality check
Arrays.binarySearch(arr2, 3);      // Must be sorted

// Convert to String/List
String str = Arrays.toString(arr2);
List<Integer> list = Arrays.asList(1, 2, 3); // Fixed-size!
```
### Variable Arguments (Varargs)

```java
public static int sum(int... numbers) {  // Accepts 0+ arguments
    int total = 0;
    for (int n : numbers) total += n;
    return total;
}
// Usage: sum(1, 2, 3) or sum() or sum(arr)
```
---

## OOP & Classes

### The Four Pillars

|**Pillar**|**Concept**|**Implementation**|
|---|---|---|
|**Encapsulation**|Hide data, expose behavior|`private` fields + getters/setters|
|**Inheritance**|IS-A relationship|`extends` keyword|
|**Polymorphism**|Many forms|Method overriding + interfaces|
|**Abstraction**|Hide complexity|Abstract classes + interfaces|

### Class Structure Template

```java
// File: Employee.java
package com.company.model;

import java.time.LocalDate;

public class Employee extends Person implements Workable {
    
    // Static/Class variable
    private static int employeeCount = 0;
    
    // Instance variables (Encapsulated)
    private final String id;          // final = immutable after init
    private String department;
    protected double salary;          // Accessible to subclasses
    LocalDate hireDate;               // Package-private
    
    // Static initializer
    static {
        System.out.println("Employee class loaded");
    }
    
    // Constructors (Overloaded)
    public Employee(String name, String id) {
        super(name);                  // Call parent constructor
        this.id = id;                 // this differentiates variable
        employeeCount++;
    }
    
    public Employee(String name, String id, String dept) {
        this(name, id);               // Constructor chaining
        this.department = dept;
    }
    
    // Instance methods
    @Override
    public void work() {
        System.out.println(getName() + " is working");
    }
    
    public void promote(double raise) {
        this.salary += raise;
    }
    
    // Static method
    public static int getEmployeeCount() {
        return employeeCount;
    }
    
    // Getter/Setter (Java Bean pattern)
    public String getDepartment() { return department; }
    public void setDepartment(String dept) { this.department = dept; }
    
    // equals() and hashCode() for object comparison
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee emp = (Employee) o;
        return id.equals(emp.id);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
    
    // toString() for readable output
    @Override
    public String toString() {
        return String.format("Employee[id=%s, name=%s]", id, getName());
    }
}
```
### Access Modifiers Deep Dive

|**Modifier**|**Class**|**Package**|**Subclass**|**World**|**Use Case**|
|---|---|---|---|---|---|
|`private`|✅|❌|❌|❌|Internal implementation|
|`default`|✅|✅|❌|❌|Package-private utilities|
|`protected`|✅|✅|✅|❌|Framework extension points|
|`public`|✅|✅|✅|✅|API contracts|

### Inheritance & Polymorphism

```java
// Abstract class (Cannot be instantiated)
abstract class Shape {
    protected String color;
    
    public abstract double area();  // Abstract method
    
    public void setColor(String color) {
        this.color = color;
    }
}

// Concrete subclass
class Circle extends Shape {
    private double radius;
    
    @Override  // Compiler checks signature
    public double area() {
        return Math.PI * radius * radius;
    }
    
    // Covariant return type (Java 5+)
    @Override
    public Circle clone() {
        return new Circle(this.radius);
    }
}

// Runtime polymorphism
Shape shape = new Circle(5.0);
shape.area();  // Calls Circle's implementation
shape.setColor("Red");

// instanceof pattern matching (Java 16+)
if (shape instanceof Circle c) {
    System.out.println("Radius: " + c.getRadius());
}
```
### Interfaces (Java 8+)

```java

// Modern interface with multiple capabilities
interface Payment {
    // Constant (implicitly public static final)
    double MIN_AMOUNT = 1.0;
    
    // Abstract method
    void process(double amount);
    
    // Default method (Java 8+)
    default void refund(double amount) {
        System.out.println("Refunding: " + amount);
    }
    
    // Static method (Java 8+)
    static boolean isValidAmount(double amt) {
        return amt >= MIN_AMOUNT;
    }
    
    // Private method (Java 9+)
    private void log(String msg) {
        System.out.println("LOG: " + msg);
    }
}

// Functional interface (Single Abstract Method)
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
    // Can have multiple default/static methods
}

// Record (Java 16+) - Immutable data carrier
record Point(int x, int y) {
    // Compact constructor for validation
    public Point {
        if (x < 0 || y < 0) {
            throw new IllegalArgumentException("Coordinates must be positive");
        }
    }
    
    // Additional methods allowed
    public double distanceToOrigin() {
        return Math.sqrt(x*x + y*y);
    }
}
// Auto-generated: constructor, equals(), hashCode(), toString()
```
### Enums (Type-safe constants)

```java

enum Status {
    PENDING("P"), 
    ACTIVE("A"), 
    INACTIVE("I");  // Semicolon required if more follows
    
    private final String code;
    
    // Constructor (private by default)
    Status(String code) { this.code = code; }
    
    public String getCode() { return code; }
    
    // Switch works beautifully with enums
    public boolean isActive() {
        return switch(this) {
            case ACTIVE -> true;
            case PENDING, INACTIVE -> false;
        };
    }
}

// Usage
Status s = Status.ACTIVE;
if (s == Status.ACTIVE) { ... }
String code = Status.ACTIVE.getCode();
```

---

## Collections Framework

### Collection Hierarchy Overview

```text

Iterable (interface)
    ↓
Collection (interface)
    ├── List (ordered, indexed, duplicates OK)
    │    ├── ArrayList (resizable array, fast random access)
    │    ├── LinkedList (doubly linked, fast insert/delete)
    │    └── Vector (thread-safe, legacy)
    │
    ├── Set (unique elements)
    │    ├── HashSet (hash table, O(1), unordered)
    │    ├── LinkedHashSet (insertion-order)
    │    └── TreeSet (sorted, Red-Black tree, O(log n))
    │
    └── Queue (FIFO/LIFO)
         ├── PriorityQueue (priority heap)
         └── Deque (Double-ended queue)
              ├── ArrayDeque (array-based)
              └── LinkedList (also implements List)

Map (interface, not a Collection)
    ├── HashMap (hash table, O(1), unordered)
    ├── LinkedHashMap (insertion/access order)
    ├── TreeMap (sorted keys, O(log n))
    └── ConcurrentHashMap (thread-safe)
```
### List Implementations

```java

// ArrayList (Most common)
List<String> arrayList = new ArrayList<>();
arrayList.add("Apple");
arrayList.add(0, "Banana");  // Insert at index
arrayList.get(0);            // "Banana"
arrayList.set(1, "Orange");  // Replace
arrayList.remove(0);         // Remove by index
arrayList.remove("Orange");  // Remove by object
boolean hasApple = arrayList.contains("Apple");
int size = arrayList.size();
Collections.sort(arrayList); // Natural order
Collections.reverse(arrayList);

// LinkedList (When frequent insertions/deletions)
List<String> linkedList = new LinkedList<>();
linkedList.addFirst("First");
linkedList.addLast("Last");
String first = linkedList.removeFirst();

// Convert between array and list
String[] array = {"A", "B", "C"};
List<String> list = Arrays.asList(array);  // Fixed-size!
List<String> modifiable = new ArrayList<>(Arrays.asList(array));

// List iteration
for (String item : list) { }                      // Enhanced for
list.forEach(item -> System.out.println(item));   // Lambda
list.forEach(System.out::println);                // Method reference
```

### Set Implementations

```java

// HashSet (Fastest, no order)
Set<String> hashSet = new HashSet<>();
hashSet.add("Apple");
hashSet.add("Apple");  // Duplicate ignored
hashSet.contains("Apple");  // true
hashSet.remove("Apple");

// LinkedHashSet (Insertion order)
Set<String> linkedHashSet = new LinkedHashSet<>();

// TreeSet (Sorted)
Set<String> treeSet = new TreeSet<>();
treeSet.add("Banana");
treeSet.add("Apple");  // Sorted to ["Apple", "Banana"]
treeSet.first();  // "Apple"
treeSet.last();   // "Banana"

// Set operations
Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3));
Set<Integer> set2 = new HashSet<>(Arrays.asList(3, 4, 5));
set1.addAll(set2);      // Union: [1, 2, 3, 4, 5]
set1.retainAll(set2);   // Intersection: [3]
set1.removeAll(set2);   // Difference: [1, 2]
```

### Map Implementations

```java

// HashMap (Most common)
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("Apple", 1);
hashMap.put("Banana", 2);
hashMap.putIfAbsent("Apple", 3);  // Won't replace
hashMap.get("Apple");             // 1
hashMap.getOrDefault("Orange", 0); // 0 (not found)
hashMap.containsKey("Apple");     // true
hashMap.containsValue(2);         // true
hashMap.remove("Banana");         // Returns 2
hashMap.replace("Apple", 10);     // Returns old value

// TreeMap (Sorted by keys)
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Zebra", 1);
treeMap.put("Apple", 2);  // Sorted: {"Apple":2, "Zebra":1}
treeMap.firstKey();       // "Apple"
treeMap.lastKey();        // "Zebra"

// Map iteration
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
map.forEach((k, v) -> System.out.println(k + ": " + v));
for (String key : map.keySet()) { }
for (Integer value : map.values()) { }
```
### Queue & Deque

```java

// Queue (FIFO)
Queue<String> queue = new LinkedList<>();
queue.offer("First");    // Add to end (returns false if full)
queue.add("Second");     // Throws exception if full
queue.peek();            // View head ("First")
queue.poll();            // Remove head ("First")
queue.remove();          // Throws exception if empty

// PriorityQueue (Natural ordering or Comparator)
Queue<Integer> pq = new PriorityQueue<>();
pq.offer(5);
pq.offer(1);
pq.offer(3);
pq.poll();  // 1 (smallest first)

// Deque (Double-ended queue)
Deque<String> deque = new ArrayDeque<>();
deque.addFirst("Front");
deque.addLast("End");
deque.removeFirst();
deque.removeLast();
deque.peekFirst();
```

### Utility Classes

```java

// Collections class (static methods)
Collections.sort(list);
Collections.reverse(list);
Collections.shuffle(list);
Collections.binarySearch(list, key);  // List must be sorted
Collections.max(collection);
Collections.min(collection);
Collections.frequency(list, item);
Collections.disjoint(list1, list2);   // No common elements

// Arrays class
Arrays.sort(array);
Arrays.binarySearch(array, key);
Arrays.fill(array, value);
Arrays.copyOf(array, newLength);
Arrays.equals(array1, array2);
Arrays.deepEquals(multi1, multi2);    // For nested arrays

// Objects class (null-safe operations)
Objects.equals(obj1, obj2);           // Null-safe equals
Objects.requireNonNull(obj, "message"); // Throw if null
Objects.hash(field1, field2, ...);    // For hashCode()
```

---

## Advanced Features

### Generics (Type Safety)

```java

// Generic class
class Box<T> {
    private T content;
    
    public void set(T content) { this.content = content; }
    public T get() { return content; }
    
    // Generic method
    public <U> void inspect(U item) {
        System.out.println("T: " + content.getClass().getName());
        System.out.println("U: " + item.getClass().getName());
    }
}

// Bounded type parameters
class NumberBox<T extends Number> {
    private T number;
    public double square() {
        return number.doubleValue() * number.doubleValue();
    }
}

// Wildcards
List<?> unknownList;           // Any type
List<? extends Number> numbers; // Number or subclass (producer)
List<? super Integer> integers; // Integer or superclass (consumer)

// Type erasure: Generics exist only at compile time!
```

### Streams API (Java 8+)

```java

List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

// Intermediate operations (return new stream)
Stream<String> stream = names.stream()
    .filter(name -> name.length() > 3)      // Keep long names
    .map(String::toUpperCase)               // Transform
    .sorted()                               // Natural order
    .distinct();                            // Remove duplicates

// Terminal operations (produce result)
List<String> result = stream.collect(Collectors.toList());
long count = names.stream().count();
Optional<String> first = names.stream().findFirst();
boolean anyMatch = names.stream().anyMatch(n -> n.startsWith("A"));
String joined = names.stream().collect(Collectors.joining(", "));

// Numeric streams
IntStream.range(1, 10).sum();              // 1-9 sum = 45
DoubleStream.of(1.0, 2.0).average();       // OptionalDouble

// Grouping and partitioning
Map<Integer, List<String>> byLength = 
    names.stream().collect(Collectors.groupingBy(String::length));
Map<Boolean, List<String>> partitioned =
    names.stream().collect(Collectors.partitioningBy(n -> n.length() > 4));

// Parallel streams (use with caution!)
List<String> parallelResult = names.parallelStream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

### Functional Interfaces & Lambdas

```java

// Built-in functional interfaces
Function<String, Integer> lengthFunc = String::length;  // T -> R
Consumer<String> printer = System.out::println;         // T -> void
Supplier<String> generator = () -> "Hello";             // () -> T
Predicate<String> validator = s -> s.length() > 3;      // T -> boolean
UnaryOperator<String> doubler = s -> s + s;            // T -> T
BinaryOperator<Integer> adder = Integer::sum;          // (T,T) -> T

// Lambda syntax
Runnable r1 = () -> System.out.println("No params");
Comparator<String> c1 = (a, b) -> a.compareTo(b);
Comparator<String> c2 = (a, b) -> {  // Multi-line
    System.out.println("Comparing");
    return a.compareTo(b);
};

// Method references
list.forEach(System.out::println);          // Instance method
Arrays.sort(strings, String::compareTo);    // Instance method of parameter
Supplier<List<String>> listSupplier = ArrayList::new; // Constructor
```

### Exception Handling

```java

// Checked (must be declared or caught)
try {
    Files.readString(Path.of("file.txt"));
} catch (IOException e) {        // More specific first
    System.out.println("File error: " + e.getMessage());
    e.printStackTrace();
} catch (Exception e) {          // More general
    System.out.println("Unexpected error");
} finally {
    System.out.println("Always executes");
}

// Unchecked (RuntimeException - optional to catch)
try {
    int result = 10 / 0;
} catch (ArithmeticException | NullPointerException e) {  // Multi-catch
    System.out.println("Math or null error");
}

// Try-with-resources (AutoCloseable)
try (FileReader fr = new FileReader("file.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String line = br.readLine();
}  // Resources automatically closed

// Custom exception
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: $" + amount);
    }
}

// Throw vs Throws
public void riskyMethod() throws IOException {
    if (error) throw new IOException("Something went wrong");
}
```
### Modern File I/O (NIO.2 - Java 7+)

```java

import java.nio.file.*;
import java.nio.charset.StandardCharsets;

// Path creation
Path path = Paths.get("folder", "file.txt");
Path absolute = Path.of("/absolute/path/file.txt");

// File operations
Files.exists(path);
Files.createFile(path);
Files.createDirectories(path.getParent());  // Create parent dirs
Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
Files.move(source, target);
Files.deleteIfExists(path);
long size = Files.size(path);

// Reading files
String content = Files.readString(path, StandardCharsets.UTF_8);
List<String> lines = Files.readAllLines(path);
byte[] bytes = Files.readAllBytes(path);

// Writing files
Files.writeString(path, "Hello World", StandardCharsets.UTF_8);
Files.write(path, lines, StandardOpenOption.APPEND);
Files.write(path, bytes, StandardOpenOption.CREATE);

// Directory walking
try (Stream<Path> walk = Files.walk(Paths.get("."))) {
    walk.filter(Files::isRegularFile)
        .filter(p -> p.toString().endsWith(".java"))
        .forEach(System.out::println);
}
```
### Date & Time API (Java 8+)

```java

import java.time.*;

// Current dates/times
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
LocalDateTime current = LocalDateTime.now();
ZonedDateTime zonedNow = ZonedDateTime.now(ZoneId.of("UTC"));

// Creating specific dates
LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 15);
LocalTime meeting = LocalTime.of(14, 30);  // 2:30 PM
LocalDateTime event = LocalDateTime.of(birthday, meeting);

// Manipulation
LocalDate tomorrow = today.plusDays(1);
LocalDate nextWeek = today.plusWeeks(1);
LocalDate lastMonth = today.minusMonths(1);

// Extraction
int year = today.getYear();
Month month = today.getMonth();
int day = today.getDayOfMonth();
DayOfWeek dow = today.getDayOfWeek();

// Formatting/parsing
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
String formatted = today.format(formatter);
LocalDate parsed = LocalDate.parse("2024-12-25", formatter);

// Duration and Period
Duration duration = Duration.between(startTime, endTime);
Period period = Period.between(startDate, endDate);
```
### Optional (Avoid NullPointerException)

```java

Optional<String> optional = Optional.ofNullable(getNullableString());

// Safe value retrieval
String value = optional.orElse("default");
String value2 = optional.orElseGet(() -> generateDefault());
String value3 = optional.orElseThrow(() -> new IllegalArgumentException());

// Conditional execution
optional.ifPresent(val -> System.out.println("Found: " + val));
optional.ifPresentOrElse(
    val -> System.out.println("Found: " + val),
    () -> System.out.println("Not found")
);

// Transformations
Optional<Integer> length = optional.map(String::length);
Optional<String> filtered = optional.filter(s -> s.length() > 3);
Optional<String> flat = optional.flatMap(s -> Optional.of(s.toUpperCase()));

// Best practice: Don't use Optional for method parameters or fields
```

### Concurrency Basics

```java

// Thread creation
Thread thread1 = new Thread(() -> {
    System.out.println("Running in thread");
});
thread1.start();
thread1.join();  // Wait for completion

// ExecutorService (Preferred over raw threads)
ExecutorService executor = Executors.newFixedThreadPool(4);
Future<String> future = executor.submit(() -> {
    Thread.sleep(1000);
    return "Result";
});
String result = future.get(2, TimeUnit.SECONDS);  // Timeout
executor.shutdown();

// Synchronization
class Counter {
    private int count = 0;
    private final Object lock = new Object();
    
    public void increment() {
        synchronized(lock) {  // Or synchronized method
            count++;
        }
    }
    
    // Atomic classes (java.util.concurrent.atomic)
    private AtomicInteger atomicCount = new AtomicInteger(0);
    public void atomicIncrement() {
        atomicCount.incrementAndGet();
    }
}

// Concurrent collections
ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
CopyOnWriteArrayList<String> threadSafeList = new CopyOnWriteArrayList<>();
BlockingQueue<String> queue = new LinkedBlockingQueue<>();
```

---

## Tools & Best Practices

### Build Tools & Project Structure

```text

my-project/
├── src/main/java/      # Application source code
│   └── com/example/
│       ├── Main.java
│       ├── model/      # Data classes
│       ├── service/    # Business logic
│       └── util/       # Utilities
├── src/test/java/      # Test code
├── resources/          # Configuration files
├── lib/                # External libraries
├── target/             # Compiled output
├── pom.xml             # Maven configuration
└── build.gradle        # Gradle configuration
```
### Unit Testing (JUnit 5)

```java

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    
    @BeforeAll
    static void setupAll() {
        // Runs once before all tests
    }
    
    @BeforeEach
    void setup() {
        // Runs before each test
    }
    
    @Test
    @DisplayName("Test addition")
    void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(5, calc.add(2, 3));
        assertNotEquals(0, calc.add(1, 1));
    }
    
    @Test
    @Disabled("Not implemented yet")
    void testSubtract() {
        // This test is skipped
    }
    
    @Test
    void testException() {
        Calculator calc = new Calculator();
        assertThrows(IllegalArgumentException.class, 
            () -> calc.divide(1, 0));
    }
    
    @AfterEach
    void cleanup() {
        // Runs after each test
    }
    
    @AfterAll
    static void cleanupAll() {
        // Runs once after all tests
    }
}
```
### Debugging & Profiling

```java

// Logging (SLF4J + Logback recommended)
import org.slf4j.*;
Logger log = LoggerFactory.getLogger(MyClass.class);
log.trace("Detailed debug");
log.debug("Debug info");
log.info("Application event");
log.warn("Warning message");
log.error("Error occurred", exception);

// Assertions (Disabled by default, enable with -ea VM option)
assert x > 0 : "x must be positive: " + x;

// JVM Monitoring
Runtime runtime = Runtime.getRuntime();
runtime.totalMemory();    // Total allocated memory
runtime.freeMemory();     // Free memory
runtime.maxMemory();      // Maximum memory available

// Thread dumps (for deadlocks)
// Command line: jstack <pid>
// Or in code: Thread.getAllStackTraces();
```
### Performance Tips

```java

// 1. Use StringBuilder for string concatenation in loops
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);  // Much faster than s += i
}

// 2. Prefer primitive types when possible
// 3. Initialize collections with expected size
List<String> list = new ArrayList<>(1000);  // Avoids resizing

// 4. Use enhanced for loops for readability
for (String item : collection) { }  // Cleaner than iterator

// 5. Cache expensive operations
private static final Pattern PATTERN = Pattern.compile("regex");

// 6. Use EnumSet/EnumMap for enum collections
EnumSet<DayOfWeek> weekend = EnumSet.of(DayOfWeek.SATURDAY, DayOfWeek.SUNDAY);

// 7. Lazy initialization for heavy objects
private HeavyObject heavy;
public HeavyObject getHeavy() {
    if (heavy == null) {
        heavy = new HeavyObject();
    }
    return heavy;
}
```

### Java Version Features

|**Version**|**Year**|**Key Features**|
|---|---|---|
|Java 8 (LTS)|2014|Lambdas, Streams, Optional, Date/Time API|
|Java 11 (LTS)|2018|Local-Variable Type Inference (var), HTTP Client|
|Java 17 (LTS)|2021|Sealed classes, Pattern matching, Records|
|Java 21 (LTS)|2023|Virtual threads, Sequenced collections, String templates|
|Java 23|2024|Stream gatherers, Structured concurrency|

---

## Quick Reference

### Common Terminology

- **JVM**: Java Virtual Machine (executes bytecode)
    
- **JRE**: Java Runtime Environment (JVM + libraries)
    
- **JDK**: Java Development Kit (JRE + compiler/tools)
    
- **JIT**: Just-In-Time compiler (optimizes bytecode at runtime)
    
- **GC**: Garbage Collector (automated memory management)
    
- **POJO**: Plain Old Java Object (simple data class)
    
- **Bean**: JavaBean (POJO with getters/setters and no-arg constructor)
    

### Common Pitfalls & Solutions

```java

// 1. String comparison
if (str1.equals(str2)) { }   // CORRECT
if (str1 == str2) { }        // WRONG (compares references)

// 2. Integer caching (-128 to 127)
Integer a = 127, b = 127;
System.out.println(a == b);  // true (cached)
Integer c = 128, d = 128;
System.out.println(c == d);  // false (not cached)

// 3. Floating point precision
System.out.println(0.1 + 0.2 == 0.3);  // false!
System.out.println(Math.abs(0.1 + 0.2 - 0.3) < 0.0001);  // true

// 4. Concurrent modification
List<String> list = new ArrayList<>(Arrays.asList("A", "B"));
for (String s : list) {
    if (s.equals("A")) {
        list.remove(s);  // Throws ConcurrentModificationException
    }
}
// Use iterator.remove() or copy the list first

// 5. Resource leaks
try (Connection conn = DriverManager.getConnection(url)) {
    // Auto-closed
}  // CORRECT

Connection conn = DriverManager.getConnection(url);
try {
    // Use connection
} finally {
    conn.close();  // Also correct, but verbose
}
```

### Common Compiler Errors

```text

'cannot find symbol'        → Missing import or typo
'incompatible types'        → Wrong type assignment
'unreported exception'      → Checked exception not handled
'missing return statement'  → Not all paths return a value
'non-static method cannot be referenced from static context' → Need object instance
'variable might not have been initialized' → Local variable not initialized
```

---

## Pro Tips & Best Practices

### Code Style Guide

```java

// Naming conventions
class CustomerService {           // PascalCase for classes
    private int orderCount;       // camelCase for variables
    private static final int MAX_RETRIES = 3;  // UPPER_SNAKE_CASE for constants
    
    public void processOrder() {  // camelCase for methods
        // ...
    }
}

// One class per file (except nested classes)
// Keep methods short (< 20 lines)
// Use meaningful names (avoid abbreviations)
// Add Javadoc for public APIs
/**
 * Calculates the total price including tax.
 * @param basePrice the price before tax
 * @param taxRate the tax rate as decimal (e.g., 0.08 for 8%)
 * @return the total price including tax
 */
public double calculateTotal(double basePrice, double taxRate) {
    return basePrice * (1 + taxRate);
}
```
### Design Principles

1. **DRY** (Don't Repeat Yourself) - Avoid code duplication
    
2. **KISS** (Keep It Simple, Stupid) - Simple solutions are better
    
3. **YAGNI** (You Ain't Gonna Need It) - Don't add features until needed
    
4. **SOLID Principles**:
    
    - **S**ingle Responsibility - One class, one purpose
        
    - **O**pen/Closed - Open for extension, closed for modification
        
    - **L**iskov Substitution - Subtypes must be substitutable
        
    - **I**nterface Segregation - Many specific interfaces > one general
        
    - **D**ependency Inversion - Depend on abstractions, not concretions
        

### Memory Management

```java

// Objects are created on the heap
// References are on the stack (for local variables)

// Garbage Collection roots:
// 1. Local variables in active methods
// 2. Active threads
// 3. Static variables
// 4. JNI references

// Memory leaks can occur from:
// - Static collections holding objects
// - Unclosed resources (files, connections)
// - Listeners not removed
// - Inner classes holding outer class references

// Monitoring tools:
// - jvisualvm (Visual VM)
// - jconsole (JMX console)
// - jmap (heap dumps)
// - jstat (GC statistics)
```

---

## Resources & Next Steps

### Official Documentation

- [Oracle Java Documentation](https://docs.oracle.com/en/java/)
    
- [Java API Specification](https://docs.oracle.com/en/java/javase/17/docs/api/)
    
- [Java Language Specification](https://docs.oracle.com/javase/specs/)
    

### Essential Tools

- **Build Tools**: Maven, Gradle
    
- **IDEs**: IntelliJ IDEA, Eclipse, VS Code
    
- **Version Control**: Git
    
- **CI/CD**: Jenkins, GitHub Actions
    
- **Testing**: JUnit, Mockito, TestNG
    
- **Code Quality**: SonarQube, Checkstyle, PMD
    

### Learning Path

1. **Beginner**: Core Java syntax, OOP basics, simple programs
    
2. **Intermediate**: Collections, exceptions, file I/O, basic multithreading
    
3. **Advanced**: Design patterns, performance tuning, JVM internals
    
4. **Expert**: Distributed systems, microservices, reactive programming
    

### Keep Learning

- Follow Java enhancement proposals (JEPs)
    
- Read `Effective Java` by Joshua Bloch (3rd edition)
    
- Practice on coding platforms (LeetCode, HackerRank)
    
- Contribute to open-source Java projects
    
- Attend Java conferences (JavaOne, Devoxx)