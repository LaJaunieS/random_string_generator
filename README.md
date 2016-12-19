# random_string_generator
A random string generator script- right now only works in the console.

The random string generated will be pulled from separate arrays of lower case letters, upper case letters, numbers, and a specific set of symbols. The string will be a set length (right now not set programmatically, but that will be added later). 

A regex test runs to check if all the required characters are included in the string. If the test is false, characters are pulled randomly from the above arrays, combined into a single array and then converted to a string. The regex test is run again- if still false, the loop runs again. If the test is true, it prints the string and exits the loop.
