console.log("connected");

const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand')

function setDate() {
	const now = new Date();


const secs = now.getSeconds();
const secsDegs = ((secs / 60) * 360) + 90;
secHand.style.transform = `rotate(${secsDegs}deg)`;

const mins = now.getMinutes();
const minsDegs = ((mins / 60) * 360) + ((secs / 60) * 360) + 90;;
minHand.style.transform = `rotate(${minsDegs}deg)`;

const hour = now.getHours();
const hourDegs = ((hour / 12) * 360) + ((mins / 60) * 360) + ((mins / 60) * 360) + 90;;
}

setInterval(setDate, 1000);
setDate();

// DOUBLE CHECK SYNTAX -- PRETTY SURE SOME THINGS ARE OFF