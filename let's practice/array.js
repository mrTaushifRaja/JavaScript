
/* for the given array with marks of student ->[85,97,44,37,76,60]
find the average marks of thr entire class */
let marks=[85,97,44,37,76,60];
 
sum=0;

for(let val of marks){
  sum+=val;
}

let avg = sum/marks.length;
console.log(`avg marks of the class =,${avg}`);

/* for a given array with prices of 5 item->[250,645,300,900,50]
all items have an often of 10% OFF on them. change ther array
to store final price after applying after  */

let items=[250,645,300,900,50];

let i=0;

for(let val of items){
 console.log(`value at price ${i}=${val}`);
 let offer=val/10;
 items[i]=items[i]-offer;
 console.log(`final price of items after applying offer = ${items[i]}`);
 i++;
}


//let (let i=0; i<item.length; i++);
