const dday = document.querySelector("h2#dday");



function getClock()
{
    const date = new Date();

    const hours = String(date.getHours());
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const secondes = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
//    clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock();
setInterval(getClock, 1000);