/* for a given of numbers, print the square of each value using 
the forEach loio.**/

let arr = [25,24,23,22,21,20];

arr.forEach((arr) =>{
  console.log(arr*arr);  //num**2
})

let num = [67,52,39];

let calSquare = (num) =>{
  console.log(num*num);
};
 num.forEach(calSquare);