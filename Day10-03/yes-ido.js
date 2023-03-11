
function yesClick()
{
    alert("Yes. you are right ");
}
function noHover()
{
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("iNo").style.left = x + 'px';
    document.getElementById("iNo").style.top = y + 'px';
}