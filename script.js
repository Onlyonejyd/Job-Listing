// "use strict";

// const filterContainer = document.querySelector(".filter-container");
// const filter = document.querySelector("#filter");
// const clearBtn = document.querySelector("#clear");
// const joblistings = document.querySelector("#job-listings");

// let selectedFilters = [];

// (async function () {
//   const res = await fetch("./data.json");
//   const data = await res.json();
//   data.forEach((job) => {
//     const jobCard = document.createElement("div");
//     jobCard.classList.add("jobCard");
//     jobCard.innerHTML = `
//       <div class="heading-container">
//         <div>
//           <img class="logo" src="${job.logo}" alt="company logo"/>
//         </div>
//         <div>
//           <div class="heading">
//             <h1>${job.company}</h1>
//             <div class="stat"></div>
//           </div>
//           <p class="position">${job.position}</p>
//           <ul class="availability">
//             <li>${job.postedAt}</li>
//             <li>${job.contract}</li>
//             <li>${job.location}</li>
//           </ul> 
//          </div> 
//       </div>
//       <hr>
//       <div class="skills"></div>
//     `;

//     const roleBtn = document.createElement("button");
//     roleBtn.textContent = job.role;
//     jobCard.querySelector(".skills").appendChild(roleBtn);

//     const levelBtn = document.createElement("button");
//     levelBtn.textContent = job.level;
//     jobCard.querySelector(".skills").appendChild(levelBtn);

//     job.languages.forEach((lang) => {
//       const langBtn = document.createElement("button");
//       langBtn.textContent = lang;
//       jobCard.querySelector(".skills").appendChild(langBtn);
//     });

//     job.tools.forEach((tool) => {
//       const toolBtn = document.createElement("button");
//       toolBtn.textContent = tool;
//       jobCard.querySelector(".skills").appendChild(toolBtn);
//     });

//     if (job.new) {
//       const newJob = document.createElement("span");
//       newJob.textContent = "NEW!";
//       newJob.classList.add("new");
//       jobCard.querySelector(".stat").appendChild(newJob);
//     }

//     if (job.featured) {
//       const featuredJob = document.createElement("span");
//       featuredJob.textContent = "FEATURED";
//       featuredJob.classList.add("featured-Job");
//       jobCard.classList.add("featured");
//       jobCard.querySelector(".stat").appendChild(featuredJob);
//     }

//     joblistings.appendChild(jobCard);
//   });
//   addFilter();
// })();

// function addFilter() {
//   document.querySelectorAll(".skills button").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       if (!selectedFilters.includes(btn.textContent)) {
//         selectedFilters.push(btn.textContent);
//         const filterTag = document.createElement("button");
//         filterTag.textContent = btn.textContent;
//         filterTag.classList.add("tagBtn");

//         const removeBtn = document.createElement("button");
//         removeBtn.classList.add("clearTag");
//         removeBtn.innerHTML = `<img src="images/icon-remove.svg" alt="remove skills button"/>`;
//         removeBtn.addEventListener("click", () => {
//           removeFilterTag(btn.textContent, filterTag);
//         });

//         filterTag.appendChild(removeBtn);
//         filter.appendChild(filterTag);
//         filter.classList.add("filter");
//         filterContainer.style.display = "flex";

//         filterJobs();
//       }
//     });
//   });
// }

// function removeFilterTag(tag, filterTagElement) {
//   selectedFilters = selectedFilters.filter((item) => item !== tag);
//   filterTagElement.remove();

//   if (selectedFilters.length === 0) {
//     filterContainer.style.display = "none";
//   }

//   filterJobs();
// }

// // function filterJobs() {
// //   document.querySelectorAll("#job-listings > div").forEach((jobCard) => {
// //     const jobTags = Array.from(jobCard.querySelectorAll(".skills button")).map(
// //       (btn) => btn.textContent
// //     );

// //     const matchesAllFilters = selectedFilters.every((filter) =>
// //       jobTags.includes(filter)
// //     );

// //     jobCard.style.display = matchesAllFilters ? "flex" : "none";
// //   });
// // }

// clearBtn.addEventListener("click", () => {
//   selectedFilters = [];
//   filter.innerHTML = "";
//   filterContainer.style.display = "none";

//   document.querySelectorAll("#job-listings > div").forEach((jobCard) => {
//     jobCard.style.display = "flex";
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
    const jobCards = document.querySelectorAll(".jobCard");
    const skillButtons = document.querySelectorAll(".skillsBtn");
    const filterContainer = document.getElementById("filter");
    const clearButton = document.getElementById("clear");
    let selectedFilters = new Set();
  
    // Function to update the filter display
    function updateFilterDisplay() {
      filterContainer.innerHTML = ""; // Clear existing filters
  
      selectedFilters.forEach((filter) => {
        const filterTag = document.createElement("button");
        filterTag.classList.add("tagBtn");
        filterTag.innerHTML = `${filter} <span class="remove-filter" data-filter="${filter}">×</span>`;
        
        // Remove filter on click
        filterTag.querySelector(".remove-filter").addEventListener("click", () => {
          selectedFilters.delete(filter);
          updateFilterDisplay();
          filterJobs();
        });
  
        filterContainer.appendChild(filterTag);
      });
  
      clearButton.style.display = selectedFilters.size ? "block" : "none";
    }
  
    // Function to filter jobs
    function filterJobs() {
      jobCards.forEach((card) => {
        const jobTags = Array.from(card.querySelectorAll(".skillsBtn")).map(btn => btn.textContent);
        const isMatch = [...selectedFilters].every(filter => jobTags.includes(filter));
        
        card.style.display = isMatch || selectedFilters.size === 0 ? "block" : "none";
      });
    }
  
    // Add event listener to skill buttons
    skillButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.textContent;
        if (!selectedFilters.has(filter)) {
          selectedFilters.add(filter);
          updateFilterDisplay();
          filterJobs();
        }
      });
    });
  
    // Clear all filters
    clearButton.addEventListener("click", () => {
      selectedFilters.clear();
      updateFilterDisplay();
      filterJobs();
    });
  
    // Initial state
    clearButton.style.display = "none";
  });
  