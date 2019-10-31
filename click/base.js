console.log("Sanity Check: JS is working!");

let firetheMissles = document.querySelectorAll("span")[0]
let launchtheArmada = document.querySelectorAll("span")[1]
let charge = document.querySelectorAll("span")[2]
let exterminate = document.querySelectorAll("span")[3]
let intotheBreach = document.querySelectorAll("span")[4]
let thisisSparta = document.querySelectorAll("span")[5]
let huzzah = document.querySelectorAll("span")[6]

class Phrase {
	constructor(phrase) {
		this.phrase = phrase
	}
}

let array = []
array[0] = new Phrase("Fire the missles!")
array[1] = new Phrase("Launch the Armada")
array[2] = new Phrase("Charge!")
array[3] = new Phrase("Exterminate!")
array[4] = new Phrase("Into the breech!")
array[5] = new Phrase("This is Sparta!")
array[6] = new Phrase("Huzzah!")

let changetoseconds = function(milliseconds) {
	let seconds = Math.round(milliseconds)/1000
	return seconds
}
let addtolist1 = function() {
	let input = document.createElement("li")
	input.innerText = array[0].phrase
	let parentUL = document.querySelector("ul")
	parentUL.append(input)
	let n = event.timeStamp
	parentUL.append("Time in seconds: " + changetoseconds(n))
}

let addtolist2 = function() {
	let input = document.createElement("li")
	input.innerText = array[1].phrase
	let parentUL = document.querySelector("ul")
	parentUL.append(input)
	let n = event.timeStamp
	parentUL.append("Time in seconds: " + changetoseconds(n))
}
let addtolist3 = function() {
	let input = document.createElement("li")
	input.innerText = array[2].phrase
	let parentUL = document.querySelector("ul")
	parentUL.append(input)
	let n = event.timeStamp
	parentUL.append("Time in seconds: " + changetoseconds(n))
}

let addtolist4 = function() {
	let input = document.createElement("li")
	input.innerText = array[3].phrase
	let parentUL = document.querySelector("ul")
	parentUL.append(input)
	let n = event.timeStamp
	parentUL.append("Time in seconds: " + changetoseconds(n))
}

let addtolist5 = function() {
	let input = document.createElement("li")
	input.innerText = array[4].phrase
	let parentUL = document.querySelector("ul")
	parentUL.append(input)
	let n = event.timeStamp
	parentUL.append("Time in seconds: " + changetoseconds(n))
}

let addtolist6 = function() {
	let input = document.createElement("li")
	input.innerText = array[5].phrase
	let parentUL = document.querySelector("ul")
	parentUL.append(input)
	let n = event.timeStamp
	parentUL.append("Time in seconds: " + changetoseconds(n))
}

let addtolist7 = function() {
	let input = document.createElement("li")
	input.innerText = array[6].phrase
	let parentUL = document.querySelector("ul")
	parentUL.append(input)
	let n = event.timeStamp
	parentUL.append("Time in seconds: " + changetoseconds(n))
}

firetheMissles.addEventListener("click", addtolist1)
launchtheArmada.addEventListener("click", addtolist2)
charge.addEventListener("click", addtolist3)
exterminate.addEventListener("click", addtolist4)
intotheBreach.addEventListener("click", addtolist5)
thisisSparta.addEventListener("click", addtolist6)
huzzah.addEventListener("click", addtolist7)
