// push() , pop() , tostring()
 fooditems = ["potato","lichhi","tomato","apple"];
fooditems.push("banana","paneer");
console.log(fooditems);
//fooditems.length();
let deleteditem=fooditems.pop();
console.log("deleted",deleteditem);
console.log(fooditems.tostring());

// concat() join multple array & return result;
let marvellheroes = ["thor","ironman","batman"];
let dcheroes=["superman","batman"];

let heroes = marvellheroes.concat(dcheroes);
dconsole.log(heroes);

// shift() delete from start & unshift() add to start
marvellheroes.unshift("hulk");
marvellheroes.shift();

