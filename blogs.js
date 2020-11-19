function start()
{
    var x1=0
    var but1 = document.getElementById("b1")
    but1.addEventListener("click",Post,false)
    if(x1!=0)
    {
        var bb=1
    }
    var but2 = document.getElementById("b2")
    if(but2.addEventListener("click",Post,false))
    {
        var bb=2
    }
    var but3 = document.getElementById("b3")
    if(but3.addEventListener("click",Post,false))
    {
        var bb=3
    }
    
}
function Post()
{
    var t = document.getElementById("bt"+bb).value;
    document.getElementById("blogtext"+bb).innerHTML= t;
    
    var current = new Date()
    document.getElementById("datum"+bb).innerHTML=
    "<p>Month: " + current.getMonth() +  
    "  Year: " + current.getFullYear()  +     
    "  Hours: " + current.getHours()  + 
    "  Minutes: " + current.getMinutes() +     
    "  Seconds: " + current.getSeconds() + "</p>" 
    alert("Thanks for posting!") 
}
window.addEventListener("load",start,false)