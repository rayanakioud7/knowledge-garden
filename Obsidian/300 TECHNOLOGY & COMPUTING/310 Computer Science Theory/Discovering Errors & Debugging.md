Date: 2025-12-24
Tags: [[JAVA]], [[Programming language]], [[Debugging]]

# ~={red} Notes=~
## 1. Perceptual Blindness

**~={purple}Definition=~:** The brain's tendency to filter out information it deems "irrelevant" while focusing on a specific task.

- **In Programming:** When focusing on a specific complex part of code (e.g., a loop structure), you may become "blind" to obvious errors in simpler parts (e.g., print statements or variable logic).
    
- **The Danger:** You fixate on where you _think_ the error is, ignoring where it _actually_ is.
    
- **Mitigation:**
    
    - **Practice:** Experience helps distinguish essential from non-essential info.
        
    - **Breaks:** Step away to reset your focus; this requires starting work early.
        
    - **Tools:** Use comments, proper naming, and print debugging.
        

---

## 2. Readability: Comments vs. Naming

The goal of source code is to be **Self-Documenting**.
### Code Comments

- **Purpose:** To explain _how_ code works to yourself or others.
    
- **Pitfall:** Elaborate comments often compensate for bad code structure. They can become outdated or clutter the screen.
    

### Self-Documenting Code

Instead of writing a comment explaining what a loop does, encapsulate that loop in a descriptive method.

**~={pink}Example=~: Evolution of Readability**

**Level 1: Heavily Commented (Cluttered)**

```java
// Iterate while value is greater than zero
while (value > 0) {
    System.out.println(value); 
    value = value - 1; // decrement
}
```

**Level 2: Descriptive Method Naming (Preferred)**

```java
public static void printValuesFromTenToOne() {
    int value = 10;
    while (value > 0) {
        System.out.println(value);
        value = value - 1;
    }
}
```

_Note: The functionality should be evident from the names of classes, methods, and variables._

---

## 3. Print Debugging

One of the most essential skills for finding errors is tracing the execution flow by printing values to the console.

**~={blue}Technique=~:**

1. Add `System.out.println()` statements at key points.
    
2. Print the **state** (variable values).
    
3. Print the **flow** (entry/exit of loops or conditionals).
    

**~={pink}Example=~: Debugging a Loop**

```java
System.out.println("-- Loop started, sum: " + sum); // Debug print

while (true) {
    // ... input logic ...
    
    if (value < 0) {
        System.out.println("-- Negative value found, breaking loop"); // Trace flow
        break;
    }
    
    values = values + 1;
    sum = sum + value;
    System.out.println("-- Updated sum: " + sum); // Trace state change
}
```

---

## 4. Testing & Corner Cases

Errors often hide in "exceptional" circumstances. You must test beyond standard inputs.

**Corner Cases to Test:**

- **Zeros:** What if the input is 0? (Risk of division by zero).
    
- **Empty Input:** What if the user enters nothing?
    
- **Extremes:** Very large numbers or negative numbers.
    
- **Boundary Conditions:** If logic changes at 1000, test 999, 1000, and 1001.
    

### ~={pink}Example=~: Logic Ordering Bug

_From the "Burger Chain" scenario:_ If you have overlapping conditions (e.g., every 25th customer vs. every 2000th customer), the order of `if/else if` statements matters.

- **Rule:** Always check the most specific/strict condition _before_ the general condition

# ~={red}References=~
https://java-programming.mooc.fi/part-3/1-discovering-errors