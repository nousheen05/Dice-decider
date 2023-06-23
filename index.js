var randomNumber1 = Math.floor((Math.random() * 7));

var randomNumber2 = Math.floor((Math.random() * 7));

var path1 = "./images/dice"+ randomNumber1 + ".png" ;
var path2 = "./images/dice"+ randomNumber2 + ".png" ;

document.querySelectorAll("img")[0].setAttribute("src" , path1);
document.querySelectorAll("img")[1].setAttribute("src" , path2);


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player2 wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}