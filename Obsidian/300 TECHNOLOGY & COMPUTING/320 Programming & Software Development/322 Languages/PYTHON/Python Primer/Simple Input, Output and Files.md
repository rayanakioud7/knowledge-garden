Date: 2026-05-23
Tags: [[Python]], [[Programming language]]

---

# Simple Input and Output

This section covers the basics of communicating with the user via the console (standard input and output) and handling text files.

## The `print` Function

The built-in `print` function generates standard output to the console.

> [!info] Basic Behavior
> *   **Arguments:** Accepts an arbitrary sequence of objects.
> *   **Conversion:** Non-string arguments are automatically converted to strings using `str(x)`.
> *   **Empty Call:** `print()` with no arguments outputs a single newline character.

By default, `print` separates multiple arguments with a **space** and ends the line with a **newline character** (`\n`).

---

## Customizing Output

The `print` function accepts specific **keyword parameters** to change its default behavior.

| Parameter | Default Value | Function |
| :--- | :--- | :--- |
| `sep` | `' '` (space) | String inserted **between** each pair of arguments. |
| `end` | `'\n'` (newline) | String appended **after** the last argument. |
| `file` | `sys.stdout` | Destination stream. By default, output goes to the console. Can be changed to a file stream. |

### Separator (`sep`)
You can replace the default space with any string.
*   Example: `print(a, b, c, sep=':')` → `a:b:c`
*   Example: `print(a, b, c, sep='')` → `abc` (concatenated)

### Trailing String (`end`)
You can replace the default newline with any string, or suppress it entirely.
*   Example: `print(x, end='')` → Prints `x` but keeps the cursor on the same line.

---

## Implementation Example

The following code demonstrates how `sep` and `end` modify the output format.

```python
a = 5
b = 7
c = 9

# Custom separator: '<'
print(a, b, c, sep='<')

# Custom end: empty string (no newline)
print(a, b, c, end='')

# Default behavior: spaces between, newline at end
print(a, b, c)
```

*(Note: In the third line, the cursor remains on the same line after printing because `end=''` was used.)*

---

# The `input` Function

The primary mechanism for acquiring information from the user console is the built-in `input` function.

> [!info] Function Behavior
> *   **Prompt:** Displays an optional string prompt to the user.
> *   **Wait:** Pauses execution until the user types a sequence of characters and presses the **Return** key.
> *   **Return Value:** Returns a **string** containing the characters entered. The newline character from the Return key is **not** included in the string.

## Handling Numeric Input

Since `input()` always returns a string, you must explicitly convert the result to a numeric type (like `int` or `float`) to perform mathematical operations.

| Operation         | Syntax Example           | Result Type |
| :---------------- | :----------------------- | :---------- |
| **String Input**  | `response = input()`     | `str`       |
| **Integer Input** | `year = int(input())`    | `int`       |
| **Float Input**   | `price = float(input())` | `float`     |

It is common to nest the function calls to handle conversion in a single line:

```python
year = int(input('In what year were you born? '))
```

## Handling Multiple Inputs

If a user enters multiple values on a single line (separated by spaces), you can use the string method `.split()` to break the input into a list of strings.

```python
reply = input('Enter x and y, separated by spaces: ')
pieces = reply.split()  # Returns a list of strings
x = float(pieces[0])
y = float(pieces[1])
```

---
## Implementation Examples

The following examples demonstrate reading a string directly and converting input to an integer.

```python
# Example 1: Reading a string
name = input('enter your name')
print(name)

# Example 2: Reading and converting to integer
age = int(input('input your age'))
print(age)
```

**Console Interaction:**
```text
enter your name Alice
Alice
input your age 25
25
```

---
# File Handling

Files are accessed in Python using the built-in `open` function, which returns a **proxy object** (file handle) for interacting with the underlying file.

## Opening Files

```python
fp = open('filename', 'mode')
```

The `open` function accepts an optional second parameter that determines the access mode.

| Mode   | Description                                                       |
| :----- | :---------------------------------------------------------------- |
| `'r'`  | Read-only (default). Position starts at byte 0.                   |
| `'w'`  | Writing. **Overwrites** existing file. Position starts at byte 0. |
| `'a'`  | Appending. Adds to end of existing file. Position starts at end.  |
| `'rb'` | Read binary.                                                      |
| `'wb'` | Write binary.                                                     |

> [!info] File Position
> The proxy maintains a **current position** within the file, measured as a byte offset from the beginning. This position advances automatically as you read or write.

**Closing Files:**
```python
fp.close()
```
This ensures any written contents are saved to disk.

---

## Reading from a File

The most basic command for reading is the `read` method.

| Method | Description |
| :--- | :--- |
| `fp.read()` | Returns remaining contents of file as a string. |
| `fp.read(k)` | Returns next $k$ bytes as a string. |
| `fp.readline()` | Returns remainder of current line as a string. |
| `fp.readlines()` | Returns all remaining lines as a **list of strings**. |
| `for line in fp:` | Iterates through file line by line. |

### Reading Patterns

**Read entire file:**
```python
content = fp.read()
```

**Read specific number of bytes:**
```python
chunk = fp.read(100)  # Read next 100 bytes
```

**Read line by line (memory efficient):**
```python
for line in fp:
    process(line)
```


---

## Writing to a File

When a file proxy is writable (mode `'w'` or `'a'`), text can be written using methods.

| Method | Description |
| :--- | :--- |
| `fp.write(string)` | Writes single string at current position. |
| `fp.writelines(seq)` | Writes each string in sequence at current position. |
| `print(..., file=fp)` | Redirects `print` output to file. |

> [!warning] No Automatic Newline
> The `write` method does **not** explicitly add a trailing newline. You must embed `\n` directly in the string parameter.

### Writing Patterns

**Write a single line:**
```python
fp.write('Hello World.\n')  # Must include \n explicitly
```

**Write multiple lines:**
```python
lines = ['line1\n', 'line2\n', 'line3\n']
fp.writelines(lines)
```

**Redirect print to file:**
```python
print('Hello', 'World', file=fp)  # Automatically adds newline
```

---

## File Position Control

| Method | Description |
| :--- | :--- |
| `fp.seek(k)` | Change current position to $k^{th}$ byte of file. |
| `fp.tell()` | Return current position as byte-offset from start. |

---

## Complete Reference Table

| Calling Syntax | Description |
| :--- | :--- |
| `fp.read()` | Return (remaining) contents as string |
| `fp.read(k)` | Return next $k$ bytes as string |
| `fp.readline()` | Return current line as string |
| `fp.readlines()` | Return all remaining lines as list of strings |
| `for line in fp:` | Iterate all remaining lines |
| `fp.seek(k)` | Change position to $k^{th}$ byte |
| `fp.tell()` | Return current byte offset |
| `fp.write(string)` | Write string at current position |
| `fp.writelines(seq)` | Write sequence of strings (no auto newlines) |
| `print(..., file=fp)` | Redirect print output to file |

## Simple Example

![[Pasted image 20260525024223.png|center]]

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 30)