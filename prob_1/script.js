
// Get the HTML elements trhu the DOM
let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let seconds = document.getElementById('seconds');

let setClock = setInterval(() => {
    // create an object to obtain the date
    let dateNow = new Date();

    let hrs = dateNow.getHours() * 30;
    let mins = dateNow.getMinutes() * 6;
    let secs = dateNow.getSeconds() * 6;

    let calculateHr = hrs + (mins/12);

    // Asign the previous vars to change the rotation every second
    hour.style.transform = `rotate(${calculateHr}deg)`;
    minute.style.transform = `rotate(${mins}deg)`;
    seconds.style.transform = `rotate(${secs}deg)`;
});