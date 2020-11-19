function start()
{

    var button1 = document.getElementById("likebutton1");
    var button2 = document.getElementById("likebutton2");
    var button3 = document.getElementById("likebutton3");
    var button4 = document.getElementById("likebutton4");
    var button5 = document.getElementById("likebutton5");
    var button6 = document.getElementById("likebutton6");
    
    button1.addEventListener( "click",myFunction1,false )
    button2.addEventListener( "click",myFunction2,false )
    button3.addEventListener( "click",myFunction3,false )
    button4.addEventListener( "click",myFunction4,false )
    button5.addEventListener( "click",myFunction5,false )
    button6.addEventListener( "click",myFunction6,false )

}
var clicks1 = 0;
var clicks2 = 0;
var clicks3 = 0;
var clicks4 = 0;
var clicks5 = 0;
var clicks6 = 0;

function myFunction1() {

    clicks1 += 1;

    document.getElementById("output1").innerHTML = "Total likes:"+clicks1;


}
function myFunction2() {

    clicks2 += 1;

    document.getElementById("output2").innerHTML = "Total likes:"+clicks2;


}
function myFunction3() {

    clicks3 += 1;

    document.getElementById("output3").innerHTML = "Total likes:"+clicks3;


}
function myFunction4() {

    clicks4 += 1;

    document.getElementById("output4").innerHTML = "Total likes:"+clicks4;



}
function myFunction5() {

    clicks5 += 1;

    document.getElementById("output5").innerHTML = "Total likes:"+clicks5;
}
function myFunction6() {

    clicks6 += 1;

    document.getElementById("output6").innerHTML = "Total likes:"+clicks6;


}

window.addEventListener("load",start,false)











