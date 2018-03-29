


function setDate () {
    const now = new Date;

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds /60)*360) + 90;
    const secondHand = document.querySelector('.second-hand');
    if (secondsDegrees >= 444) {
        secondHand.style.transform = 'none'
      }
    secondHand.style.transform = "rotate(" + secondsDegrees + "deg)";
    // secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes /60)*360) + 90;
    const minuteHand = document.querySelector('.min-hand');
    minuteHand.style.transform = "rotate(" + minuteDegrees + "deg)";

    const hour = now.getHours();
    const hourDegrees = ((hour /12)*360) + 90;
    const hourdHand = document.querySelector('.hour-hand');
    hourdHand.style.transform = "rotate(" + hourDegrees + "deg)";
}

setInterval(setDate, 1000);