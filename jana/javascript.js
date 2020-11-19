function start()
{


var likecount1 =0;
var likecount2=0;
var likecount3 =0;
var likecount4=0;
var likecount5 =0;
var likecount6=0;
var button1 = document.getElementById("likebutton1");

if(button1.addEventListener("click",Like,false))
{
  likecount1+=likecount1 ;  
}

document.getElementById("output1").innerHTML=likecount1 ;

}













window.addEventListener("load",start,false)
