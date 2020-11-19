
function start()
{
    var but1 = document.getElementById("b1")
    but1.addEventListener("click",Post1,false)
    var but2 = document.getElementById("b2")
    but2.addEventListener("click",Post2,false)
    var but3 = document.getElementById("b3")
    but3.addEventListener("click",Post3,false)
    
}
function Post1()
{
    var t1 = document.getElementById("bt1").value;
    document.getElementById("blogtext1").innerHTML= t1;
    
    var current = new Date()
    document.getElementById("datum1").innerHTML=
    "<p>Month: " + current.getMonth() +  
    "  Year: " + current.getFullYear()  +     
    "  Hours: " + current.getHours()  + 
    "  Minutes: " + current.getMinutes() +     
    "  Seconds: " + current.getSeconds() + "</p>" 
    alert("Thanks for posting!") 
}
function Post2()
{
    var t2 = document.getElementById("bt2").value;
    document.getElementById("blogtext2").innerHTML= t2;
    
    var current = new Date()
    document.getElementById("datum2").innerHTML=
    "<p>Month: " + current.getMonth() +  
    "  Year: " + current.getFullYear()  +     
    "  Hours: " + current.getHours()  + 
    "  Minutes: " + current.getMinutes() +     
    "  Seconds: " + current.getSeconds() + "</p>" 
    alert("Thanks for posting")
}

function Post3()
{
    var t3 = document.getElementById("bt3").value;
    document.getElementById("blogtext3").innerHTML= t3;
    
    var current = new Date()
    document.getElementById("datum3").innerHTML=
    "<p>Month: " + current.getMonth() +  
    "  Year: " + current.getFullYear()  +     
    "  Hours: " + current.getHours()  + 
    "  Minutes: " + current.getMinutes() +     
    "  Seconds: " + current.getSeconds() + "</p>" 
    alert("Thanks for posting")
    
}
window.addEventListener("load",start,false)




