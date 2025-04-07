//create document _ let el = documentt.createElement("div")
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

/*let div = document.querySelector("div");
div.append(newBtn); //adds at the end of node (inside)*/

/*let div = document.querySelector("div");
div.prepend(newBtn);*/ //adds before the node (outside)

/*let div = document.querySelector("div");
div.before(newBtn);*/ //adds before the node (outside)

let div = document.querySelector("div");
div.after(newBtn);//add after the node(outside)

let p = document.querySelector("p");
p.after(newBtn);  //adds the paragraph after the node*/

let para = document.querySelector("p");
para.remove();

