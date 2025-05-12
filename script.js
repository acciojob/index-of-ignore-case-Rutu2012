function indexOfIgnoreCase(str: string, subStr: string): number {
    if (subStr === "") return 0; 

    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    return lowerStr.indexOf(lowerSubStr);
}
console.log(indexOfIgnoreCase("Hello World","World"));
console.log(indexOfIgnoreCase("apple","Pie"));
console.log(indexOfIgnoreCase("test","aaa"));
