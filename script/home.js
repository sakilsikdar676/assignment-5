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
    <button id="all" class=" all btn   btn-primary">All </button>
    <button id="open"  class="all btn btn-soft  ">Open </button>
    <button id="closed" class="all btn btn-soft  ">Closed </button>   
    `
myDiv2.innerHTML = `

    <div class=" flex justify-between items-center  ">
       <div class="flex justify-start items-center">
            <div class="bg-[#ECE4FF] p-2 rounded-full mr-2">
              <img src="./assets/Aperture.png">
            </div>
            <div> 
                <h2 id="issue-count" class=" text-[18px] sm:text-lg font-bold">50 issues</h2>
                <p class=" hidden sm:inline-block text-[#64748B] ">Track and manage your project issues</p>
           </div>
       </div>

        <div class="  sm:flex items-center gap-4">
            <div class="flex items-center gap-2">
               <span class=" w-2  sm:w-4 h-2 sm:h-4 rounded-full bg-emerald-500"></span>
               <span class="text-gray-700  text-[10px] sm:text-xl font-medium">Open</span>
           </div>

            <div class="flex items-center gap-1 sm:gap-2">
                <span class="w-2  sm:w-4 h-2 sm:h-4 rounded-full bg-violet-500"></span>
                 <span class="text-gray-700 text-[10px] sm:text-xl font-medium">Closed</span>
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


// assignee
// :
// "jane_smith"
// author
// :
// "john_doe"
// createdAt
// :
// "2024-01-15T10:30:00Z"
// description
// :
// "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior."
// id
// :
// 1
// labels
// :
// (2)['bug', 'help wanted']
// priority
// :
// "high"
// status
// :
// "open"
// title
// :
// "Fix navigation menu on mobile devices"
// updatedAt
// :
// "2024-01-15T10:30:00Z"


// api use kore issue load korte hobe

const allIssues = () => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayIssues(data.data)


        })


}

// api er data display te anar kaj niche korte hobe

const displayIssues = (issues) => {
    // console.log(issues);

    const issuesContainer = document.querySelector("#issues-container");
    issuesContainer.innerHTML = "";


    issues.forEach(issue => {
        const issueDiv = document.createElement("div");
        issueDiv.classList.add("card")

        // map label arry ta ke niye Nilam

        const getLabels = issue.labels.map(masrur =>
            `<span class="bg-yellow-200 text-red-500 text-xs font-bold px-3 py-1 rounded-full border border-red-100">${masrur}</span>`
        ).join("");

        const modalId = `my_modal_${issue.id}`;


        issueDiv.innerHTML = `
         
        <div id="issue-${issue.id}" onclick="openMyModal('${modalId}')" class=" div-card h-full bg-white border border-emerald-100 rounded-lg shadow-sm font-sans overflow-hidden ">
            <div class="p-5">
              <div class="flex justify-between items-start mb-4">
               
   
                 <div class="flex items-center gap-2" id="status-placeholder-${issue.id}">
   
                  
                 </div>
              
              <span class="bg-red-50 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                   ${issue.priority}
                            </span>
                 </div>
             <h2 class="text-slate-800 text-xl font-bold leading-tight mb-2">
   
     ${issue.title}
    </h2>
    <p class="text-slate-400 text-sm leading-relaxed mb-6">
      ${issue.description}
    </p>

    <div class="flex gap-2 mb-2">
      <span class="inline-flex items-center gap-2">
         ${getLabels}
     </span>
    </div>
  </div>

  <hr class="border-slate-100">

  <div class="p-5 ">
    <div class="text-slate-500 text-sm space-y-4">
      <p>#${issue.id} by 
      ${issue.author}
      </p>
      <p>
      ${issue.createdAt}
      </p>
    </div>
  </div>
</div>
        `;
        const myDiv3 = document.createElement("div");



        myDiv3.innerHTML = `
 <dialog id="${modalId}" class="modal">
  <div class="modal-box">

    <div class="max-w-xl mx-auto bg-white p-6 rounded-xl  ">
  <h1 class="text-3xl font-bold text-gray-900 mb-3">${issue.title}</h1>
  
  <div class="flex items-center gap-2 text-sm text-gray-600 mb-4">
    <span class="bg-green-500 text-white px-3 py-1 rounded-full font-medium text-xs">${issue.status}</span>
    <span>•${issue.author}</span>
    <span>•${issue.createdAt}</span>
  </div>

  <div class="flex gap-2 mb-6">
    
    <span class="flex items-center gap-1 border-yellow-200 text-yellow-700 px-2 py-0.5 rounded-md text-xs font-semibold ">
       ${getLabels}
    </span>
  </div>

  <p class="text-gray-700 mb-6">
    ${issue.description}
  </p>

  <div class="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-500">Assignee:</p>
      <p class="font-semibold text-gray-900">${issue.assignee}</p>
    </div>
    <div>
      <p class="text-sm text-gray-500">Priority:</p>
      <span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
        ${issue.priority}
      </span>
    </div>
  </div>
</div>

    <div class="modal-action">
      <form method="dialog"> 
        <!-- if there is a button in form, it will close the modal -->
         <button class="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
</dialog> 
   
   `

        document.querySelector("#modal-container").appendChild(myDiv3);
        issuesContainer.appendChild(issueDiv);
        if (!window.openMyModal) {
            window.openMyModal = function (id) {
                const modal = document.getElementById(id);
                if (modal) {
                    modal.showModal();
                }
            }
        }




        // id ta ke dhorlam
        issueDiv.id = `issue-${issue.id}`;


        let issuesSet = "";

        // ebar ekhane status check kore border and status upded korbo


        if (issue.status == "open") {
            issueDiv.classList.add("border-t-3", "border-t-green-500");
            issuesSet = `
            <div class="flex items-center gap-2">
            <span>
            <img src="./assets/Open-Status.png">
            </span>
            <span class="text-green-500">
            open
            </span>
            </div>
            `

        }

        else {
            issueDiv.classList.add("border-t-3", "border-t-violet-500");

            issuesSet = `
            <div class="flex items-center gap-2">
            <span>
            <img src="./assets/Closed-Status.png">
            </span>
            <span class="text-violet-500">
            closed
            </span>
            </div>
            `
        }

        // ebar id er moddhe innerHTML set korbo
        const statusContainer = issueDiv.querySelector(`#status-placeholder-${issue.id}`);
        if (statusContainer) {
            statusContainer.innerHTML = issuesSet;
        }
    })



}


allIssues()

// api er data display te anar kaj niche korte hobe
const singleIssue = () => {
    const singleUrl = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(singleUrl)
        .then(res => res.json())
        .then(data => {
            allIssuesData = (data.data)

            //  console.log(data.data);
            displayIssues(allIssuesData);
        })

}

singleIssue()


// ebar proti ta button er kaj korte hobe




document.getElementById("open").addEventListener("click", () => {
    
showLoading(true);
    const openIssues = allIssuesData.filter(issue => issue.status === "open");

    const openCount = document.getElementById("issue-count");
    if (openCount) {
        openCount.innerText = `${openIssues.length} issues`;


    }

    displayIssues(openIssues);
    showLoading(false);
});

document.getElementById("closed").addEventListener("click", () => {
    showLoading(true);
    const closedIssues = allIssuesData.filter(issue => issue.status === "closed");

    const closedCount = document.getElementById("issue-count");
    if (closedCount) {
        closedCount.innerText = `${closedIssues.length} issues`;


    }

    displayIssues(closedIssues);
     showLoading(false);
});

document.getElementById("all").addEventListener("click", () => {

showLoading(true);

    const allCount = document.getElementById("issue-count");
    if (allCount) {
        allCount.innerText = `${allIssuesData.length} issues`;


    }
    displayIssues(allIssuesData);
     showLoading(false);
});



const showLoading = (status) => {
    const loadingElement = document.getElementById("loading");
    const issuesContainer = document.querySelector("#issues-container")

    if(status === true){
        issuesContainer.classList.add("hidden");
        loadingElement.classList.remove("hidden");
    }
    else{
        issuesContainer.classList.remove("hidden");
        loadingElement.classList.add("hidden");
    }
    
}
// showLoading(true);




















