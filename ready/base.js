
// Write JavaScript so that the page 
// says "Go!" instead of "Ready"


let header = document.querySelector("h1")
header.innerText = "Go!"

/// Do not modify the code below
let h1 = document.querySelector("h1")
if (h1.textContent == "Go!") {
  console.log("The page says:", h1.textContent)
  console.log("Success!")
} 
else {
  console.log(`Make it say "Go!" where it currently says "${h1.textContent}"`)
}
