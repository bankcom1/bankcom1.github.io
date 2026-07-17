<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>FC Center - Control Panel</title>

<script src="bank.js"></script>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:linear-gradient(135deg,#1e3c72,#2a5298);
    min-height:100vh;
}

h1{
    text-align:center;
    color:white;
    padding:30px;
}


.people{

    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:20px;
    padding:20px;

}


.card{

    background:white;
    border-radius:20px;
    padding:25px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,.3);

}


.card h2{

    color:#1e3c72;
    margin-bottom:15px;

}


.balance{

    font-size:28px;
    font-weight:bold;
    color:#2ecc71;
    margin:10px;

}


.money{

    font-size:22px;
    color:#f39c12;
    margin-bottom:15px;

}


input{

    width:100%;
    padding:12px;
    border-radius:10px;
    border:1px solid gray;
    text-align:center;
    font-size:17px;
    margin-bottom:10px;

}


button{

    width:100%;
    padding:12px;
    margin:5px 0;
    border:none;
    border-radius:10px;
    color:white;
    cursor:pointer;
    font-size:16px;

}


.add{

    background:#2ecc71;

}


.remove{

    background:#e74c3c;

}


.back{

    background:#34495e;
    width:250px;
    display:block;
    margin:30px auto;

}


</style>

</head>


<body>


<h1>
FC Center Control Panel
</h1>


<div class="people">



<div class="card">

<h2>Sean</h2>

<div class="balance">
Credits: <span id="SeanCredits">0</span>
</div>

<div class="money">
Money: $<span id="SeanMoney">0</span>
</div>

<input id="SeanAmount" type="number" placeholder="Credit amount">


<button class="add" onclick="changeCredits('Sean', true)">
Add Credits
</button>


<button class="remove" onclick="changeCredits('Sean', false)">
Remove Credits
</button>


</div>




<div class="card">

<h2>Breanna</h2>

<div class="balance">
Credits: <span id="BreannaCredits">0</span>
</div>

<div class="money">
Money: $<span id="BreannaMoney">0</span>
</div>

<input id="BreannaAmount" type="number" placeholder="Credit amount">


<button class="add" onclick="changeCredits('Breanna', true)">
Add Credits
</button>


<button class="remove" onclick="changeCredits('Breanna', false)">
Remove Credits
</button>


</div>





<div class="card">

<h2>Grayson</h2>

<div class="balance">
Credits: <span id="GraysonCredits">0</span>
</div>

<div class="money">
Money: $<span id="GraysonMoney">0</span>
</div>

<input id="GraysonAmount" type="number" placeholder="Credit amount">


<button class="add" onclick="changeCredits('Grayson', true)">
Add Credits
</button>


<button class="remove" onclick="changeCredits('Grayson', false)">
Remove Credits
</button>


</div>






<div class="card">

<h2>Willow</h2>

<div class="balance">
Credits: <span id="WillowCredits">0</span>
</div>

<div class="money">
Money: $<span id="WillowMoney">0</span>
</div>

<input id="WillowAmount" type="number" placeholder="Credit amount">


<button class="add" onclick="changeCredits('Willow', true)">
Add Credits
</button>


<button class="remove" onclick="changeCredits('Willow', false)">
Remove Credits
</button>


</div>



</div>



<button class="back" onclick="location.href='index.html'">
Back to Home
</button>




<script>


function updateBalances(){


let people=[
"Sean",
"Breanna",
"Grayson",
"Willow"
];


people.forEach(function(person){


document.getElementById(person+"Credits").textContent =
family[person].credits;


document.getElementById(person+"Money").textContent =
family[person].money;


});


}




function changeCredits(person, add){


let input =
document.getElementById(person+"Amount");


let amount =
Number(input.value);



if(amount <= 0 || isNaN(amount)){

alert("Enter a valid amount.");

return;

}



if(add){

family[person].credits += amount;

}

else{

family[person].credits -= amount;

}



saveBank();

updateBalances();


input.value="";


}




function setupEnter(person){


let input =
document.getElementById(person+"Amount");


input.addEventListener("keydown",function(event){


if(event.key==="Enter"){

changeCredits(person,true);

}


});


}




window.onload=function(){


updateBalances();


setupEnter("Sean");
setupEnter("Breanna");
setupEnter("Grayson");
setupEnter("Willow");


};



</script>


</body>

</html>
