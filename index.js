// function isPalindrome(word) {
//   let leftpointer = 0;
//   let rightpointer = word.length -1;
//   let ans = false

//   while(leftpointer < rightpointer) {
//     if(word[leftpointer] === word[rightpointer]){ 
//       ans =true
//       leftpointer += 1;
//       rightpointer-= 1;
//     }
//     else{
//       ans=false
//       return
//     }
//   }
//   return ans
// }
// console.log(isPalindrome ("abba")),
// console.log(isPalindrome("racecar")),
// console.log(isPalindrome("a")),
// console.log(isPalindrome("robot")),
// console.log(isPalindrome("ab"))

  // Write your algorithm here
//   let reversed=word.split("").reversed().join("")
//   console.log(reversed)
//   if(reversed === word){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log isPalindrome("abba")
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
