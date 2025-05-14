function indexOfIgnoreCase(str: string, subStr: string): number {
  // Check for null or undefined inputs
  if (str == null || subStr == null) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf on the lowercase version
  return lowerStr.indexOf(lowerSubStr);
}

// Test cases
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // 2
console.log(indexOfIgnoreCase("banana", "Na"));         // 2
console.log(indexOfIgnoreCase("Test", "xyz"));          // -1
