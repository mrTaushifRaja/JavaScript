/* create a <p> tag in html, give it a class & some styling.
now create a new class in css and try this to the class to the
<p> element.
did you notice, how to overwrite the clas name when you did a new one
 Solve this problem using classList*/

let para = document.querySelector("p");

para.getAttribute("class");
para.setAttribute("class","newClass");