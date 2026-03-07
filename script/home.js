// button div ta and status div ta banailam

const myDiv = document.createElement("div");
const myDiv2 = document.createElement("div");
myDiv.classList.add(
    "bg-white", "w-9/12", "mx-auto", "rounded-md", "p-5", "shadow-sm",
)
myDiv2.classList.add(
    "bg-white", "w-9/12", "mx-auto", "rounded-t-md", "p-5", "shadow-sm",
)
myDiv.innerHTML = `
    <button class=" all btn   btn-primary">All </button>
    <button  class="all btn btn-soft  ">Open </button>
    <button  class="all btn btn-soft  ">Closed </button>
    
    `
myDiv2.innerHTML = `

    <div class=" flex justify-between items-center  ">
       <div class="flex justify-start items-center">
            <div class="bg-[#ECE4FF] p-2 rounded-full mr-2">
              <img src="./assets/Aperture.png">
            </div>
            <div> 
                <h2 class=" text-[18px] sm:text-lg font-bold">50 issues</h2>
                <p class=" hidden sm: text-[#64748B] ">Track and manage your project issues</p>
           </div>
       </div>

        <div class=" flex-col sm:flex items-center">
            <div class="flex items-center gap-2">
               <span class=" w-2  sm:w-4 h-2 sm:h-4 rounded-full bg-emerald-500"></span>
               <span class="text-gray-700  text-[10px] sm:font-medium">Open</span>
           </div>

            <div class="flex items-center gap-2">
                <span class="w-2  sm:w-4 h-2 sm:h-4 rounded-full bg-violet-500"></span>
                 <span class="text-gray-700 text-[10px] sm: font-medium">Closed</span>
            </div>
        </div>


    </div>
   
   
   `

document.querySelector("#div-container").appendChild(myDiv);
document.querySelector("#div-container2").appendChild(myDiv2);


// button section er function
const buttonSection = () => {
    const buttons = document.querySelectorAll(".all");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("btn-primary");
                btn.classList.add("btn-soft");
                
            });
            button.classList.remove("btn-soft");
            button.classList.add("btn-primary");
        });
    });
    

}

buttonSection()





























