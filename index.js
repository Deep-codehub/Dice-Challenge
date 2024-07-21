var ran1 = Math.floor(Math.random()*6+1);
var ran2 = Math.floor(Math.random()*6+1);
document.querySelector(".dice .img1").setAttribute("src","./images/dice"+ran1+".png");
document.querySelector(".dice .img2").setAttribute("src","./images/dice"+ran2+".png");
if(ran1>ran2)
    {
        document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
    }
else if(ran1<ran2)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
    }
else
    {
        document.querySelector("h1").innerHTML="Draw!";
    }   