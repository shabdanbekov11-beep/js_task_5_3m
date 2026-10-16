const formatNum = num => num < 10 ? `0${num}` : num;

const targetDate = new Date(2026, 9, 16, 16, 59, 59); 

let interval;

const birthdayFunc = () => {
    let day = document.getElementById('day');
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let congratsBlock = document.querySelector('.congrats');

    let now = new Date();
    
    let difference = (targetDate.getTime() - now.getTime()) / 1000;

    if (difference <= 0) {
        clearInterval(interval);

        day.textContent = "00";
        hour.textContent = "00";
        minute.textContent = "00";
        second.textContent = "00";

        congratsBlock.style.display = 'block'; 
        return; 
    }

    let days = Math.floor(difference / 60 / 60 / 24);
    let hours = Math.floor((difference / 60 / 60) % 24);
    let minutes = Math.floor((difference / 60) % 60);
    let seconds = Math.floor((difference) % 60);


    day.textContent = formatNum(days);
    hour.textContent = formatNum(hours);
    minute.textContent = formatNum(minutes);
    second.textContent = formatNum(seconds);
};


birthdayFunc();

interval = setInterval(() => {
    birthdayFunc();
}, 1000);
