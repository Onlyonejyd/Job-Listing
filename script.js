"use strict";

const filterContainer = document.querySelector("#filter-container");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear");
const joblistings = document.querySelector("#job-listings");

let selectedFilters = [];


function showFilterContainer() {
  filterContainer.style.display = "flex"; 
}


function hideFilterContainer() {
  filterContainer.style.display = "none"; 
}


function addFilterListeners() {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("skillsBtn")) {
      const filterValue = event.target.textContent;

      if (!selectedFilters.includes(filterValue)) {
        selectedFilters.push(filterValue);

        
        const filterTag = document.createElement("div");
        filterTag.classList.add("tagBtn");
        filterTag.textContent = filterValue;

        
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("clearTag");
        removeBtn.innerHTML = `<img src="images/icon-remove.svg" alt="remove tag button"/>`;
        removeBtn.addEventListener("click", () => {
          removeFilter(filterValue, filterTag);
        });

        filterTag.appendChild(removeBtn);
        filter.appendChild(filterTag);

        
        showFilterContainer();

        filterJobs();
      }
    }
  });

  
  clearBtn.addEventListener("click", () => {
    selectedFilters = [];
    filter.innerHTML = "";
    hideFilterContainer(); 
    filterJobs(); 
  });
}


function removeFilter(filterValue, filterTag) {
  selectedFilters = selectedFilters.filter((filter) => filter !== filterValue);
  filterTag.remove();

  if (selectedFilters.length === 0) {
    hideFilterContainer(); 
  }

  filterJobs(); 
}


function filterJobs() {
  document.querySelectorAll(".jobCard").forEach((jobCard) => {
    const jobTags = Array.from(jobCard.querySelectorAll(".skillsBtn")).map(
      (btn) => btn.textContent
    );

    const matchesAllFilters = selectedFilters.every((filter) =>
      jobTags.includes(filter)
    );

    
    jobCard.style.display = matchesAllFilters ? "flex" : "none";
  });
}


addFilterListeners();