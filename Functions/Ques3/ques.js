/* we are given array of marks of students. filter out of the marks of 
student that score 90+.*/

let arr = [85,56,98,89,91,96,87,66,78,45,31,94,99];

let marksArr = arr.filter((val)=>{
  return val>90;
});
console.log(marksArr);