var iconImg; 
var luganoimg;
var londonimg;
var istimg;
var pictures = [ "louvre", "paris-tours","paris2" ];

var descriptions = [ "Paris-Louvre","Paris","paris" ];

var pictures1 = [ "lugano1", "lugano2","lugano3" ];

var descriptions1 = [ "Lugano","Lugano","Lugano" ];

var pictures2 = [ "london1", "london2","london3" ];

var descriptions2 = [ "London","London","London" ];

var pictures3 = [ "istanbul1", "istanbul2","istanbul3" ];

var descriptions3 = [ "istanbul","istanbul","istanbul" ];
 
function pickImage()
{
   var index = Math.floor( Math.random() * 3 );
   iconImg.setAttribute( "src", pictures[ index ] + ".jpg" );
   iconImg.setAttribute( "alt", descriptions[ index ] );
   iconImg.setAttribute("height",200)
   iconImg.setAttribute("width",200)
} 
function pickImage1()
{
   var index = Math.floor( Math.random() * 3 );
   luganoimg.setAttribute( "src", pictures1[ index ] + ".jpg" );
   luganoimg.setAttribute( "alt", descriptions1[ index ] );
   luganoimg.setAttribute("height",200)
   luganoimg.setAttribute("width",200)
} 
function pickImage2()
{
   var index = Math.floor( Math.random() * 3 );
   londonimg.setAttribute( "src", pictures2[ index ] + ".jpg" );
   londonimg.setAttribute( "alt", descriptions2[ index ] );
   londonimg.setAttribute("height",200)
   londonimg.setAttribute("width",200)
} 
function pickImage3()
{
   var index = Math.floor( Math.random() * 3 );
   istimg.setAttribute( "src", pictures3[ index ] + ".jpg" );
   istimg.setAttribute( "alt", descriptions3[ index ] );
   istimg.setAttribute("height",200)
   istimg.setAttribute("width",200)
} 

function start()
{
   iconImg = document.getElementById( "paris" );
   iconImg.addEventListener( "click", pickImage, false );
   luganoimg = document.getElementById( "lugano" );
   luganoimg.addEventListener( "click", pickImage1, false );
   londonimg = document.getElementById( "london" );
   londonimg.addEventListener( "click", pickImage2, false );
   istimg = document.getElementById( "istanbul" );
   istimg.addEventListener( "click", pickImage3, false );
} 

window.addEventListener( "load", start, false );
