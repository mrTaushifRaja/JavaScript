/* create a function using the "function" keyword that takes a
string as an argument & return the number of vowels in the string*/

//function of vowels 
 function countVowels(str){
  let count = 0;
  for( const char of str){
    if(char ==="a" || char ==="e" || char === "i" || char==="o" || char==="u"){
      count++;
    }
   }
   return count;
 }


 //i am using  Arrow function for the VowelCount
 const arrowVow = (str)=>{
  function countVowels(str){
    count=0;
    for(let char of str){
      if( char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        count++;
      }
    }
    return count;
  }
 }