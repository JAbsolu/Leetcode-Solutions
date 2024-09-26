
const partition = (s) => {
  const result = new Array();
  
  //Check if a given string is a palindrome
  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
      if (str[left] !== str[right]) return false;
    
      left += 1;
      right -= 1;
    }
    
    return true;
  }
  

  const backtrack = (start, memory) => {
    
    // If start is the string's length, add items of memory to an array, and add it result
    if (start === s.length){
      result.push([...memory]);
    }
    
    // endpoint is where we need to stop, when getting the substring
    for (let endPoint = start + 1; endPoint <= s.length; endPoint++){
      //get the substring starting at start (given from the backtrack function), stop at endPoint
      const substr = s.substring(start, endPoint);
      
      /**
       * Check if the substring is a palindrome, if it is add the substring to the memory
       * Recursively call backtrack, pass the endPoint as the new starting point, pass memory with its items
       * Once we've recursively call the backtrack function up to str.length, empty the stock, pop each item
       * out of the stack. until the memory array is empty.
       */
      if (isPalindrome(substr)){
        memory.push(substr);

        // console.log(`\nMemory after adding substr: memo: ${memory}, endPoint: ${endPoint}, start: ${start}`);
        // console.log('memory =>',memory, '\n')

        backtrack(endPoint, memory)
        // console.log(`After recursively calling backtrack. EndPoint: ${endPoint}, memory: ${memory}`);

        memory.pop();

        // console.log(`After removing item in memory. EndPoint: ${endPoint}, memory: ${memory}, start: ${start}`)
        // console.log('memory =>',memory, '\n');
      }
    }
    
  }
  
  // Invoke backtrack and return result at the end
  backtrack(0, new Array());
  return result;
};


partition('aab');