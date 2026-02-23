print ('coming back to python') 


# BASIC PYTHON DATA TYPES 

# integers (whole numbers) = 1, 2, 3, 4, 5
# floats (decimal numbers) = 1.5, 2.5, 3.5
# strings (text) = 'hello', "world", '1234'
# lists (ordered collections) = [1, 2, 3], ['a', 'b', 'c'], [1, 'a', 2.5]
# dictionaries (key-value pairs) = {'name': 'Alice', 'age': 30, 'city': 'New York'}
# tuples (ordered, immutable collections) = (1, 2, 3), ('a', 'b', 'c'), (1, 'a', 2.5)
# sets (unordered collections of unique elements) = {1, 2, 3}, {'a', 'b', 'c'}, {1, 'a', 2.5}
# boolean (True or False) = True, False


#  BASIC MATHEMATICAL OPERATIONS

1 + 1 # addition
2 - 1 # subtraction
3 * 4 # multiplication
10 / 2 # division
10 // 3 # floor division (returns the integer part of the division)
10 % 3 # modulus (returns the remainder of the division)
2 ** 3 # exponentiation (2 raised to the power of 3)
2 ** 0.5 # square root of 2
2 + 10 * 3 # order of operations (multiplication before addition)
(2 + 10) * 3 # parentheses to change order of operations


# VARIABLES

x = 10 # assigning the value 10 to the variable x
y = 5 # assigning the value 5 to the variable y
z = x + y # assigning the sum of x and y to the variable z
print(z) # printing the value of z (should output 15)

name = 'Alice' # assigning the string 'Alice' to the variable name
age = 30 # assigning the value 30 to the variable age
print(name) # printing the value of name (should output 'Alice')
print(age) # printing the value of age (should output 30)

# STRINGS

greeting = 'Hello, ' + name + '!' # concatenating strings
print(greeting) # printing the greeting (should output 'Hello, Alice!')
len(greeting) # getting the length of the greeting (should output 13)
greeting.upper() # converting the greeting to uppercase (should output 'HELLO, ALICE
greeting.lower() # converting the greeting to lowercase (should output 'hello, alice!')
greeting.replace('Alice', 'Bob') # replacing 'Alice' with 'Bob' in the greeting (should output 'Hello, Bob!')

# INDEXING AND SLICING

first_letter = name[0] # getting the first letter of the name (should output 'A')
last_letter = name[-1] # getting the last letter of the name (should output 'e')
substring = name[1:4] # getting a substring of the name (should output 'lic')
reversed_name = name[::-1] # reversing the name (should output 'ecilA')
every_other_letter = name[::2] # getting every other letter of the name (should output 'Alc')







