let btn = document.querySelector(".generat");
let gen =document.querySelector(".password");


btn.onclick =function()
{
    let X="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let count = 10;
    let result = "";
    for(let i = 0; i < count;i++)
    {
        result +=X[Math.floor(Math.random()*X.length)];
    }
    gen.innerHTML = result;
}