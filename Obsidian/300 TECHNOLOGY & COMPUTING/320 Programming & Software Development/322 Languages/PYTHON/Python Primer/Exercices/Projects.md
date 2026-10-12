
Date: 2026-06-24
Tags: [[Programming language]], [[Python]]

---

> [!question] $P-1.29$
> Write a Python program that outputs all possible strings formed by using the characters `c , a , t , d , o , and g ` exactly once.

```python
import itertools

def generate_strings():
    # Define the characters to be used
    chars = ['c', 'a', 't', 'd', 'o', 'g']
    
    # Generate all unique permutations of length 6
    all_permutations = itertools.permutations(chars)
    
    # Convert the tuples of characters back into strings and print them
    for perm in all_permutations:
        print(''.join(perm))

# Execute the function
if __name__ == "__main__":
    generate_strings()
```

---

> [!question] $P-1.30$
> Write a Python program that can take a positive integer greater than 2 as input and write out the number of times one must repeatedly divide this number by 2 before getting a value less than 2.

```python
def division_2(n):
	count = 0
	if(n<2):
		return 0
	while n>=2:
		n = n/2
		count+=1
	
	return count

print(division_2(16))
```

---

> [!question] $P-1.32$ 
> Write a Python program that can simulate a simple calculator, using the console as the exclusive input and output device. That is, each input to the calculator, be it a number, like 12.34 or 1034, or an operator, like + or =, can be done on a separate line. After each such input, you should output to the Python console what would be displayed on your calculator.

```python
def calculator():
    print("--- Simple Console Calculator ---")
    print("Enter a number, an operator (+, -, *, /), or '=' to reset.")
    print("Type 'quit' to exit.")
    print("---------------------------------")

    current_value = 0.0
    current_op = None
    is_start_of_calculation = True

    while True:
        user_input = input("> ").strip().lower()

        if user_input == 'quit':
            print("Goodbye!")
            break

        # Check if the input is an operator
        if user_input in ['+', '-', '*', '/', '=']:
            if user_input == '=':
                # Reset the calculator state but keep the display
                current_op = None
                is_start_of_calculation = True
                print(f"Display: {current_value}")
            else:
                current_op = user_input
                print(f"Display: {current_value} (operator set to {current_op})")
            continue

        # Otherwise, try to treat the input as a number
        try:
            num = float(user_input)
            
            # If this is the very first number typed, it becomes our baseline
            if is_start_of_calculation:
                current_value = num
                is_start_of_calculation = False
            else:
                # If we have a pending operator, apply it to the total
                match current_op:
                    case '+':
                        current_value += num
                    case '-':
                        current_value -= num
                    case '*':
                        current_value *= num
                    case '/':
                        if num == 0:
                            print("Error: Cannot divide by zero.")
                        else:
                            current_value /= num
                    case _:
                        # User typed a second number without an operator
                        print("Please enter an operator first.")

            print(f"Display: {current_value}")

        except ValueError:
            print("Invalid input. Please enter a number, operator, or 'quit'.")

if __name__ == "__main__":
    calculator()
```

---
A common punishment for school children is to write out a sentence multiple times. Write a Python stand-alone program that will write out the following sentence one hundred times: “I will never spam my friends again.” Your program should number each of the sentences and it should make eight different random-looking typos.

```python
import random

def punishment():
    base_sentence = "I will never spam my friends again."
    
    # Pre-select exactly 8 unique random line numbers between 1 and 100 to have typos
    typo_lines = set(random.sample(range(1, 101), 8))
    
    # A list of realistic typos
    typo_variations = [
        "I will neever spam my friends again.",       # Double letter
        "I will never spam my fiends again.",        # Missing letter
        "I will never spammy friends again.",         # Missing space
        "I wil never spam my friends again.",         # Missing letter
        "I will never spam my friends agian.",        # Swapped letters (ai -> ia)
        "I will never sapm my friends again.",        # Swapped letters (ap -> pa)
        "I will never spam my friends again!",        # Wrong punctuation
        "I will never spam my friendz again."         # Wrong letter (s -> z)
    ]
    
    # Shuffle the typos so they appear in a random order
    random.shuffle(typo_variations)
    typo_iterator = iter(typo_variations)

    for i in range(1, 101):
        # If the current line is one of our 8 chosen typo lines
        if i in typo_lines:
            # Grab the next unique typo from our shuffled list
            sentence = next(typo_iterator)
        else:
            sentence = base_sentence
            
        print(f"{i}: {sentence}")

if __name__ == "__main__":
    punishment()
```

---

> [!question] $P-1,36$
> 
> Write a Python program that inputs a list of words, separated by white- space, and outputs how many times each word appears in the list

```python
from collections import Counter

def count_words(text_input):
	words = text_input.split()
	
	cleaned_words = [word.strip(".,!?;:()\"'") for word in words]
	word_counts = Counter(cleaned_words)
	print("\nWord Counts:")
	for word, count in word_counts.items():
		print(f"{word}: {count}")
	
user_input = "cat dog cat bird dog cat" 
count_words(user_input)
```

---
# ~={red}References=~
[[Data Structures and Algorithms in Python (Michael T. Goodrich) (z-library.sk, 1lib.sk, z-lib.sk).pdf]] (p. 52)
