const myDiv = document.createElement("div");

myDiv.classList.add(
    "bg-white", "w-9/12", "mx-auto","rounded-md", "p-5", "shadow-sm",
    )
myDiv.innerHTML = `
    <button class="btn btn-primary">All </button>
    <button class="btn btn-primary">Open </button>
    <button class="btn btn-primary">Closed </button>
    
    `

document.querySelector("#div-container").appendChild(myDiv);