console.log("Sanity Check: JS is working!");

// Make sure you understand the following code before continuing!

//DOMContentLoaded event fires when the HTML has finished loading but before
//the CSS or images have finished loading. This is useful when the code
//is dependent on something existing or being. If the script is put before the
//element is, then DOMContentLoad will ensure the element is loaded before the 
//script. If the script already appears at the end, then DOMContentLoaded is
//unnessarcy 

let time1 = 0
let time2 = 0
let startTime = false
let space = function(x) {
	if (x.which == 32){
		if (startTime == false) {
			startTime = true
			time1 = Date.now()
			let h2 = document.querySelector("h2")
			let go = document.createElement("p")
			go.innerText = "Go!"
			go.className = "go"
			h2.append(go)
		}
		else {
			startTime = false
			time2 = Date.now()
			let timeinSeconds = (Number(time2) - Number(time1)) / 1000
			let span = document.querySelector("#total-time")
			span.textContent = timeinSeconds + " seconds!"
			let h2 = document.querySelector("h2")
			let go = document.querySelector(".go")
			h2.removeChild(go)
		}
	}
}
document.addEventListener("DOMContentLoaded", function(){
	document.addEventListener("keypress", space)
})

