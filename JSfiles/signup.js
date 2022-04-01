
var userCreds=[];
function myfun()
{
    event.preventDefault();
    
    var dataObj={
        firstName:document.querySelector("#Firstname").value,
        lastName:document.querySelector("#Lastname").value,
        Email:document.querySelector("#email").value,
        Password:document.querySelector("#pass").value
    };
    userCreds.push(dataObj);
    console.log(userCreds);
    localStorage.setItem("userData",JSON.stringify(userCreds))
    alert("Account has been created successfully --> Redirecting to Login Page")
    document.querySelector("#Firstname").value="";
    document.querySelector("#Lastname").value="";
    document.querySelector("#email").value="";
    document.querySelector("#pass").value="";
    window.location.href="login.html";
}

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