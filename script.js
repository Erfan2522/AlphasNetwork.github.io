// Pages

const welcome =
document.getElementById("welcome");

const login =
document.getElementById("login");

const dashboard =
document.getElementById("dashboard");

// Enter Button

document
.getElementById("enterBtn")
.onclick = () => {

welcome.style.display = "none";

login.style.display = "flex";

};

// Login

document
.getElementById("loginBtn")
.onclick = () => {

const user =
document
.getElementById("username")
.value;

const pass =
document
.getElementById("password")
.value;

// Login Info

if(
user === "erfan" &&
pass === "123456"
){

login.style.display = "none";

dashboard.style.display = "flex";

loadDashboard();

}else{

alert(
"Wrong Username Or Password"
);

}

};

// Seoul Clock

function updateClock(){

const now = new Date();

const seoul =
new Date(
now.toLocaleString(
"en-US",
{
timeZone:"Asia/Seoul"
}
)
);

document
.getElementById("clock")
.innerText =
seoul.toLocaleTimeString();

}

setInterval(
updateClock,
1000
);

updateClock();

// Date

function updateDate(){

document
.getElementById("date")
.innerText =
new Date()
.toLocaleDateString();

}

updateDate();

// Bitcoin

async function getBitcoin(){

try{

const res =
await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
);

const data =
await res.json();

document
.getElementById("btc")
.innerText =
"$" +
data.bitcoin.usd.toLocaleString();

}catch{

document
.getElementById("btc")
.innerText =
"Unavailable";

}

}

// Weather Seoul

async function getWeather(){

try{

const res =
await fetch(
"https://wttr.in/Seoul?format=j1"
);

const data =
await res.json();

document
.getElementById("temp")
.innerText =
data.current_condition[0].temp_C +
"°C";

}catch{

document
.getElementById("temp")
.innerText =
"Unavailable";

}

}

// Battery

async function getBatteryInfo(){

if(navigator.getBattery){

const battery =
await navigator.getBattery();

document
.getElementById("battery")
.innerText =
Math.floor(
battery.level * 100
) + "%";

}else{

document
.getElementById("battery")
.innerText =
"Unknown";

}

}

// Chart

function createChart(){

const ctx =
document
.getElementById("chart");

new Chart(ctx,{

type:"line",

data:{

labels:[
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat",
"Sun"
],

datasets:[{

label:"Bitcoin",

data:[
98000,
99500,
100500,
101000,
102500,
103500,
105000
],

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{
legend:{
display:true
}
}

}

});

}

// Dashboard Loader

function loadDashboard(){

getBitcoin();

getWeather();

getBatteryInfo();

createChart();

}

// Auto Refresh

setInterval(
getBitcoin,
60000
);

setInterval(
getWeather,
300000
);