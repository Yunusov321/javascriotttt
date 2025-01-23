document.addEventListener("DOMContentLoaded", () => { 
    
    const style = document.createElement('style');
    style.textContent = `
            body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(45deg,rgb(207, 169, 0),rgb(241, 149, 73),rgb(185, 83, 0));
            font-family: Arial, sans-serif;
        }

        .clock-container {
            display: flex;
            gap: 20px;
            background: #ffb347;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .time-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: black;
            color: #fff;
            width: 180px;
            height: 200px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .soat time span {
            font-size: 1.2rem;
            font-weight: bold;
        }

        .soat box small {
            font-size: 0.8rem;
            color: #ccc;
        }
    `;
    document.head.appendChild(style);

    const clockContainer = document.createElement('div');
    clockContainer.className = 'clock-container';

    ['Hours', 'Minutes', 'Seconds'].forEach(unit => {
        const timeBox = document.createElement('div');
        timeBox.className = 'time-box';

        const span = document.createElement('span');
        span.id = unit.toLowerCase();
        span.textContent = '00';

        const small = document.createElement('small');
        small.textContent = unit;

        timeBox.appendChild(span);
        timeBox.appendChild(small);
        clockContainer.appendChild(timeBox);
    });

    document.body.appendChild(clockContainer);

    function updateClock() {
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(updateClock, 1000);
    updateClock();
});