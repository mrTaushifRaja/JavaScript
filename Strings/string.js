//strings
let str = "Md Taushif Raja";
let str2 = 'Makhdum A  li';
console.log(str[0],str.toUpperCase()); //string method
console.log(str[0],str.toLowerCase());
console.log(str[0],str.trim());

//template literals
let obj = {
  item:"pen",
  price:10
};
let output = `the cost of ${obj.item} is\n ${obj.price} rupees`;
console.log(output);

console.log("the cost is",obj.item,"is",obj.price);


let specialString = "this is a template literals";
console.log(typeof specialString);