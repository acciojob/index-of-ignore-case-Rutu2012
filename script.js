function indexOfIgnoreCase(str: string, subStr: string): number {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf on the lowercase version
  return lowerStr.indexOf(lowerSubStr);
}
console.log(indexOfIgnoreCase("Hello World","world"));
console.log(indexOfIgnoreCase("apple","Ple"));