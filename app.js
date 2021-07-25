var name = prompt("what is your name?")

alert("Hello, Wlecome to my Website " + name )

var favColor = prompt("What is your fav typye of Color?")

while( favColor != "Acrylic" && favColor != "Water Color" && favColor != "oil color"){

 favColor = prompt("What is your fav typye of Color?, please choose one of these Colors: Acrylic, Water Color, oil Color") }


var numofpic = prompt("how many picture you would like to see?")

while(numofpic > 10 ){
  numofpic = prompt("how many picture you would like to see?, the number should be less that 10.")
}

if(favColor =="Acrylic"){
for(var i = 0; i<numofpic; i++)

{document.write(
  "<div" + "<h5>" + favColor+"</h5>"
+ "<img  src='https://anandhastationery.in/wp-content/uploads/2018/10/MSCH1836.jpg' width='300' height='200'/>" + "</div>")
 document.write("Acrylic paint is a fast-drying paint made of pigment suspended in acrylic polymer emulsion and plasticizers, silicon oils, defoamers, stabilizers, or metal soaps. Most acrylic paints are water-based, but become water-resistant when dry.")
 console.log("Acrylic")}
}
else if (favColor =="Water Color"){
  for(var i = 0; i<numofpic; i++)
{document.write(
  "<div>" + "<h5>" + favColor+"</h5>"
+ "<img  src='https://images-na.ssl-images-amazon.com/images/I/71ir0woqhQL._SL1478_.jpg' width='300' height='200'/>" + "</div>")
document.write("Water Color paint is a translucent art medium. Water Color is basically a colored pigment in a water-soluble binder. The paint dissolves when you add water allowing the pigment to spread with a brush.")
console.log("Water Color")}
}
else if(favColor =="oil Color"){
  for(var i = 0; i<numofpic; i++)
{document.write(
  "<div>" + "<h5>" + favColor+"</h5>"
+ "<img  src='https://images-na.ssl-images-amazon.com/images/I/71T1aKR2dLL._SL1324_.jpg' width='300' height='200'/>" + "</div>")
document.write("Oil paint is a type of slow-drying paint that consists of particles of pigment suspended in a drying oil, commonly linseed oil. The viscosity of the paint may be modified by the addition of a solvent such as turpentine or white spirit, and varnish may be added to increase the glossiness of the dried oil paint film.")
console.log("oil Color")}
}

else{
  alert('Sorry we dont have your color but we might have colors you will like')
  console.log("No Color")
}
