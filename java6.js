function s(){
    a=document.getElementsByClassName("unit-price");
    b=document.getElementsByClassName("quantity");
    for (i=0,i<a.lenght,i++)
    if( a[i].innerHTML=(a[i].innerHTML*1)*b[i].innerHTML*1)
        return a[i]

}
function afficher()
{
ch=document.getElementById("").value;
if(ch=""|| verif(ch)==false)
{
    alert(" minimum")
    return false;
    
}
ch=document.getElementById("mdp").value;
if(ch.length<6|| ch.length>32)
{
    alert("maximum")
    return false;
}
document.getElementById("s").innerHTML=ch
}