// &&
// ||


prompt("enter yor name");
prompt("enter your lovers name");

var loveScore = Math.floor(Math.random()*101);

if(loveScore === 100){ 
    alert("your love score is :" + loveScore + "%" + " " + "you will get married");
}

if(loveScore > 80 && loveScore < 99){ 
    alert("your love score is :" + loveScore + "%" + " " + "high chances");
}

if(loveScore > 50 && loveScore < 80){ 
    alert("your love score is :" + loveScore + "%" +" " + "moderate chances");
}

else { 
    alert("your love score is :" + loveScore + "%" + " " + "low chances");
}