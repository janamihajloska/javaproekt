function start()
{
    
var comment1 = document.getElementById("c1")
comment1.addEventListener( "click",Komentar1,false )

var comment2 = document.getElementById("c2")
comment2.addEventListener( "click",Komentar2,false )

var comment3 = document.getElementById("c3")
comment3.addEventListener( "click",Komentar3,false )

var comment4 = document.getElementById("c4")
comment4.addEventListener( "click",Komentar4,false )

var comment5 = document.getElementById("c5")
comment5.addEventListener( "click",Komentar5,false )

var comment6 = document.getElementById("c6")
comment6.addEventListener( "click",Komentar6,false )
}

function Komentar1()
{
   
    
    var current = new Date()
    document.getElementById("time1").innerHTML=
    "<p> " + current.getMonth()+ "." 
     + current.getFullYear()  +" "     
     + current.getHours()  + ":"+
     + current.getMinutes() + ":"    
     + current.getSeconds() + "</p>"     
}
function Komentar2()
{

    
    var current = new Date()
    document.getElementById("time2").innerHTML=
    "<p> " + current.getMonth() +"." 
     + current.getFullYear()  +" "     
     + current.getHours()  + ":"+
     + current.getMinutes() + ":"    
     + current.getSeconds() + "</p>"     
}
function Komentar3()
{
  
    
    var current = new Date()
    document.getElementById("time3").innerHTML=
    "<p> " + current.getMonth() +"." 
     + current.getFullYear()  +" "     
     + current.getHours()  + ":"+
     + current.getMinutes() + ":"    
     + current.getSeconds() + "</p>"   
}
function Komentar4()
{
    
    
    var current = new Date()
    document.getElementById("time4").innerHTML=
    "<p> " + current.getMonth() +"." 
    + current.getFullYear()  +" "     
    + current.getHours()  + ":"+
    + current.getMinutes() + ":"    
    + current.getSeconds() + "</p>"     
}
function Komentar5()
{
    
    
    var current = new Date()
    document.getElementById("time5").innerHTML=
    "<p> " + current.getMonth() +"." 
     + current.getFullYear()  +" "     
     + current.getHours()  + ":"+
     + current.getMinutes() + ":"    
     + current.getSeconds() + "</p>"      
}
function Komentar6()
{
    
    
    var current = new Date()
    document.getElementById("time6").innerHTML=
    "<p> " + current.getMonth() +"." 
     + current.getFullYear()  +" "     
     + current.getHours()  + ":"+
     + current.getMinutes() + ":"    
     + current.getSeconds() + "</p>"      
}
window.addEventListener("load",start,false)