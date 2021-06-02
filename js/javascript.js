const countdown = () => {
	const countDate = new Date("July 1, 2021 00:00:00").getTime();
	const now = new Date().getTime();
	const gap = countDate - now;
	
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;
	
	//Calculate time
	const textDay = Math.floor(gap / day);
	const textHour = Math.floor((gap % day) / hour);
	const textMinute = Math.floor((gap % hour) / minute);
	const textSecond = Math.floor((gap % minute) / second);
	
	document.querySelector(".day").innerText = textDay;
	document.querySelector(".hour").innerText = textHour;
	document.querySelector(".minute").innerText = textMinute;
	document.querySelector(".second").innerText = textSecond;
};

setInterval(countdown, 1000);

function annually(){
	onclick=document.getElementById("regular").innerHTML = "$199.99";
	onclick=document.getElementById("professional").innerHTML = "$249.99";
	onclick=document.getElementById("master").innerHTML = "$399.99";
	onclick=document.getElementById("annually").style.color = "white";
	onclick=document.getElementById("annually").style.backgroundColor = "hsl(257, 27%, 26%)";
	onclick=document.getElementById("monthly").style.color = "hsl(257, 27%, 26%";
	onclick=document.getElementById("monthly").style.backgroundColor = "white";
	
};

function monthly(){
	onclick=document.getElementById("regular").innerHTML = "$19.99";
	onclick=document.getElementById("professional").innerHTML = "$24.99";
	onclick=document.getElementById("master").innerHTML = "$39.99";
	onclick=document.getElementById("monthly").style.color = "white";
	onclick=document.getElementById("monthly").style.backgroundColor = "hsl(257, 27%, 26%)";
	onclick=document.getElementById("annually").style.color = "hsl(257, 27%, 26%";
	onclick=document.getElementById("annually").style.backgroundColor = "white";
	
};