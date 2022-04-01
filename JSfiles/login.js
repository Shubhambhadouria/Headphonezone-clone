function searchFunction()
{
    document.querySelector("#searchpopside").style.width="450px";
}
function closethepopsideFunction()
{
    document.querySelector("#searchpopside").style.width="0px";
}
function cartFunction()
{
    document.querySelector("#cartpopside").style.width="450px";
}
function closethecartpopsideFunction()
{
    document.querySelector("#cartpopside").style.width="0px";
}



document.querySelector("#emailpasslogin").addEventListener("click",myfun)
var userCreds=JSON.parse(localStorage.getItem("userData"));
function myfun()
{
    event.preventDefault();
    var enteredEmail=document.querySelector("#email").value;
    var enteredPassword=document.querySelector("#pass").value;

    for(i=0; i<userCreds.length; i++)
    {
        if(userCreds[i].Email==enteredEmail && userCreds[i].Password==enteredPassword)
        {
            alert("Login Success");
            window.location.href="allproducts.html";
            break;
        }
        else
        {
            alert("Login Failed");
        }
        
    }

}