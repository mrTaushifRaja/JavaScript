conspole.log("hello");
alert("hello");

console.dir(window.document);
console.log(document.body);
console.log(document.head);


let heading = document.getElementById("header");
console.dir(heading);

let heading2 = document.getElementsByClassName("heading2");
console.dir(heading2);

let tag = document.getElementsByTagName("p");
console.dir(tag);


let elements = document.querySelector("h1");
console.log(elements);  //return first element

let nodelist = document.querySelectorAll("p");
console.log(nodelist);  // reutrn a NodeList

let div = document.querySelector("div");
console.log(div);  // i using in console innerText ;
                  //and again using innerHTML ;