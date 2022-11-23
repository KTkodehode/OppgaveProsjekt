document.body.style="margin:0;background-repeat: no-repeat; background-size: cover; background-image: url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80);height: 100vh; display: flex;";
// Shopping list
document.querySelector(".top-container").style = "margin-top: 130px; position: relative;"
document.querySelector(".second-container").style = "margin: -50px 0px 10px 130px; position: relative; display: block;"
document.querySelector("h1").textContent ="Shopping List";
// Image Randomizer
document.querySelector("h2").textContent ="Image Randomizer";
document.querySelector("h2").style= "margin: 100px 130px 0 130px;"
// Vertical Text
document.querySelector("h3").textContent ="Whats this Sorcery";
document.querySelector("h3").style= "writing-mode: vertical-rl; margin: 50px 0 0 200px; text-orientation: upright;"
// Randomizer button
document.getElementById("img-btn").style= "margin: 20px 0 0 175px;"
// Mouse over Events
document.getElementById("top-title").onmouseover = function() { onmouseOver() };
document.getElementById("top-title").onmouseleave = function() { onmouseLeave() };
function onmouseOver(){
    document.getElementById("top-title").style = "color: white; text-align: left;"
}
function onmouseLeave(){
    document.getElementById("top-title").style = "color: black; text-align: left;"
}
// Shopping list Adding Function
function pushData() {
	let newItem = document.createElement("li"); // Creates List elements
	let inputText = document.getElementById("inputText").value; // returns value from input id
	let node = document.createTextNode(inputText); // create a text "node" and append it to the document
	newItem.appendChild(node); // List inserts user's input text
	view.appendChild(newItem); // Targets output and lists it in the new created element (list)

  document.getElementById("view").style="list-style-type: none; font-size: 30px; margin-top: 10px; text-align:left;" 
}
// Clear Shopping-list
function clearList() {
    document.getElementById("view").innerText = "";
}
// Add Image Function
function showImage() {
  let images = [
    {
        link: "./images/manlooking.jpg",
    width: "340",
    height: "480"},
    {   link: "./images/marshmellow.jpg",
    width: "340",
    height: "480"},
    {   link: "./images/skyscrapers.jpg",
    width: "340",
    height: "480"},
    {   link: "./images/statue.jpg",
    width: "340",
    height: "480",}
];
  
  let random = Math.floor(Math.random() * images.length); // Randomize Array
  let image = document.createElement("img"); // Creates a random Img Element from the array and sets attributes 
  image.src = images[random].link;
  image.width = images[random].width;
  image.height = images[random].height;
  let Imgs = document.getElementsByTagName("img"); // stores tag created to variable
  // document.getElementsByTagName("img").style="border: 10px solid black;";
  
  if (Imgs.length > 0) {   // If array is bigger than 0, replace image at index 0, if not append one
    document.body.replaceChild(image, Imgs[0]);
  } else {
    document.body.appendChild(image);
  }
}
// Dice Roller
document.getElementById("looper").style= "font-size: 30px; border-radius: 10px; width: 202px; margin: 140px 0 0 -90px;";
document.getElementById("dices").style ="margin: -200px -40px -115px -40px; color: yellow; font-size: 100px;"

let btn = document.getElementById("looper");
let result = document.getElementById("dices");
// Randomize Roller
function tfun (){
    return Math.floor(Math.random() * 100);
  }
// Lets roller button keep randomizing
function clicker (){
    result.textContent = tfun();
} 



// Enter key on Input
// Loop
// Ternary
// Switch