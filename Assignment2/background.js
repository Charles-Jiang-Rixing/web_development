let headNum = parseInt(Math.random() * 6 + 1);
let bodyNum = parseInt(Math.random() * 6 + 1);

document.write(`<img id='head' src='heads/head${headNum}.png'>`);
document.write(`<img id='body' src='bodies/body${bodyNum}.png'>`);  
document.write("</div>");
document.write("</div>");
// document.getElementById("head").src=`images/heads/head${headNum}.png'>`;

let num = prompt("Please input a positive number equal to or greater than 3.");
let heading = document.getElementById("heading");

if (isNaN(num) === true || num < 3) {
    prompt("Please input a positive number equal to or greater than 3.");
}
else {
    const words = ['Awesome', 'Fantastic', 'Fabulous', 'Superb', 'Perfect', 'Brilliant', 'Coming up Roses'];
    let randonNum = Math.floor(Math.random() * 7);
    heading.innerHTML = words[randonNum];
}

let today = new Date();
let hour = today.getHours();
let min = today.getMinutes();
let timeDisplay = document.getElementById("timeDisplay");
let greeting = document.getElementById("greeting");
let background = document.getElementById("container");
let luckyNum = document.getElementById("luckyNum");

let luckyNum1 = Math.floor(Math.random() * num) + 1;
let luckyNum2 = Math.floor(Math.random() * num) + 1;
let luckyNum3 = Math.floor(Math.random() * num) + 1;

if (luckyNum1 != luckyNum2 && luckyNum1 != luckyNum3 && luckyNum2 != luckyNum3) {
    luckyNum.innerHTML = luckyNum1 + ", " + luckyNum2 + ", " + luckyNum3;
} 

if (hour <= 12) {
    if (hour < 6) {
        greeting.innerHTML = "Good Night";
        background.style.backgroundImage = "url('backgrounds/night.png')";
        if (min < 10) {
            timeDisplay.innerHTML = hour + ":" + "0" + min + "am";
        }   
        else {
            timeDisplay.innerHTML = hour + ":" + min + "am";
        }
    }

    else if (hour >= 6 && hour < 12) {
        greeting.innerHTML = "Good Morning";
        background.style.backgroundImage = "url('backgrounds/morning.png')";
        if (min < 10) {
            timeDisplay.innerHTML = hour + ":" + "0" + min + "am";
        }   
        else {
            timeDisplay.innerHTML = hour + ":" + min + "am";
        }
    }

    else {
        greeting.innerHTML = "Good Afternoon";
        background.style.backgroundImage = "url('backgrounds/afternoon.png')";
        if (min < 10) {
            timeDisplay.innerHTML = hour + ":" + "0" + min + "am";
        }   
        else {
            timeDisplay.innerHTML = hour + ":" + min + "am";
        }
    }
}

else {
    if (hour < 18) {
        greeting.innerHTML = "Good Afternoon";
        background.style.backgroundImage = "url('backgrounds/afternoon.png')";
        hour = hour - 12;
        if (min < 10) {
            timeDisplay.innerHTML = hour + ":" + "0" + min + "pm";
        }   
        else {
        timeDisplay.innerHTML = hour + ":" + min + "pm";
        }
    }

    else {
        greeting.innerHTML = "Good Evening";
        background.style.backgroundImage = "url('backgrounds/evening.png')";
        hour = hour - 12;
        if (min < 10) {
            timeDisplay.innerHTML = hour + ":" + "0" + min + "pm";
        }   
        else {
        timeDisplay.innerHTML = hour + ":" + min + "pm";
        }
    }
}
