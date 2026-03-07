const myDiv = document.createElement("div");
const myDiv2 = document.createElement("div");


myDiv.classList.add(
    "bg-white", "w-9/12", "mx-auto", "rounded-md", "p-5", "shadow-sm",
)
myDiv2.classList.add(
    "bg-white", "w-9/12", "mx-auto", "rounded-t-md", "p-5", "shadow-sm",
)
myDiv.innerHTML = `
    <button class="btn btn-soft  btn-primary">All </button>
    <button class="btn btn-soft  btn-primary">Open </button>
    <button class="btn btn-soft  btn-primary">Closed </button>
    
    `
myDiv2.innerHTML = `

    <div class="flex justify-between items-center">
       <div class="flex justify-start items-center">
            <div class="bg-[#ECE4FF] p-2 rounded-full mr-2">
              <img src="./assets/Aperture.png">
            </div>
            <div> 
                <h2 class="text-lg font-bold">50 issues</h2>
                <p class="text-[#64748B]">Track and manage your project issues</p>
           </div>
       </div>

        <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
               <span class="w-4 h-4 rounded-full bg-emerald-500"></span>
               <span class="text-gray-700 font-medium">Open</span>
           </div>

            <div class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full bg-violet-500"></span>
                 <span class="text-gray-700 font-medium">Closed</span>
            </div>
        </div>


    </div>
   
   
   `

document.querySelector("#div-container").appendChild(myDiv);
document.querySelector("#div-container2").appendChild(myDiv2);