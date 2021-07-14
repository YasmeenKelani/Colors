var name = prompt("what is your name?")

alert("Hello, Wlecome to my Website " + name )

var favColor = prompt("What is your fav typye of Color?")


if(favColor =="Acrylic"){
document.write(
  "<div" + "<h4>" + favColor+"</h4>"
+ "<img  src='https://anandhastationery.in/wp-content/uploads/2018/10/MSCH1836.jpg' width='300' height='200'/>" + "</div>")
 document.write("Acrylic paint is a fast-drying paint made of pigment suspended in acrylic polymer emulsion and plasticizers, silicon oils, defoamers, stabilizers, or metal soaps. Most acrylic paints are water-based, but become water-resistant when dry.")
 console.log("Acrylic")
}
else if (favColor =="Water Color"){
document.write(
  "<div>" + "<h4>" + favColor+"</h4>"
+ "<img  src='https://images-na.ssl-images-amazon.com/images/I/71ir0woqhQL._SL1478_.jpg' width='300' height='200'/>" + "</div>")
document.write("Water Color paint is a translucent art medium. Water Color is basically a colored pigment in a water-soluble binder. The paint dissolves when you add water allowing the pigment to spread with a brush.")
console.log("Water Color")
}
else if(favColor =="oil Color"){
document.write(
  "<div>" + "<h4>" + favColor+"</h4>"
+ "<img  src='https://images-na.ssl-images-amazon.com/images/I/71T1aKR2dLL._SL1324_.jpg' width='300' height='200'/>" + "</div>")
document.write("Oil paint is a type of slow-drying paint that consists of particles of pigment suspended in a drying oil, commonly linseed oil. The viscosity of the paint may be modified by the addition of a solvent such as turpentine or white spirit, and varnish may be added to increase the glossiness of the dried oil paint film.")
console.log("oil Color")

}
else{
  alert('Sorry we dont have that color')
  console.log("No Color")
}
