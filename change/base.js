console.log("Sanity Check: JS is working!");

let element = document.querySelector("#time")
element.textContent = Date.now()

let button = document.createElement("button")
button.innerText = "Add them!"

let button2 = document.createElement("button")
button2.innerText = "Reset"

let parentBody = document.querySelector("body")

parentBody.append(button)
parentBody.append(button2)

let addthem = function() {
	let x = document.querySelector("#left")
	let y = document.querySelector("#right")
	let z = Number(x.value) + Number(y.value)
	let total = document.querySelector("#total")
	total.value = z
}

let clear = function() {
	let x = document.querySelector("#left")
	let y = document.querySelector("#right")
	let total = document.querySelector("#total")
	total.value = ""
	x.value = ""
	y.value = ""
}

button.addEventListener("click", addthem)
button2.addEventListener("click", clear)