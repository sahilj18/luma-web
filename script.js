console .log("hello");

const now = new Date();

const ourtime = now.getHours() + ":" + now.getMinutes()+"PM GMT+5:30";



console.log(ourtime);

const timeE1 = document.querySelector(".time");
timeE1 .textContent = ourtime;
