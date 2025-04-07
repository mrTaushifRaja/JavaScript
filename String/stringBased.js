/*prompt the user to enter their full name.Generate a username for them based on the output.
start username with @, folloed by their full name and ending with the fullname kength*/

let fullname= prompt("enter your full name without spaces");

let username = "@" + fullname + fullname.length;
console.log(username);


   