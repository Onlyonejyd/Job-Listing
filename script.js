// document.addEventListener("DOMContentLoaded", () => {
//     const jobCards = document.querySelectorAll(".jobCard");
//     const skillButtons = document.querySelectorAll(".skillsBtn");
//     const filterContainer = document.getElementById("filter");
//     const clearButton = document.getElementById("clear");
//     let selectedFilters = new Set();
  
//     // Function to update the filter display
//     function updateFilterDisplay() {
//       filterContainer.innerHTML = ""; // Clear existing filters
  
//       selectedFilters.forEach((filter) => {
//         const filterTag = document.createElement("button");
//         filterTag.classList.add("tagBtn");
//         filterTag.innerHTML = `${filter} <span class="remove-filter" data-filter="${filter}">×</span>`;
        
//         // Remove filter on click
//         filterTag.querySelector(".remove-filter").addEventListener("click", () => {
//           selectedFilters.delete(filter);
//           updateFilterDisplay();
//           filterJobs();
//         });
  
//         filterContainer.appendChild(filterTag);
//       });
  
//       clearButton.style.display = selectedFilters.size ? "block" : "none";
//     }
  
//     // Function to filter jobs
//     function filterJobs() {
//       jobCards.forEach((card) => {
//         const jobTags = Array.from(card.querySelectorAll(".skillsBtn")).map(btn => btn.textContent);
//         const isMatch = [...selectedFilters].every(filter => jobTags.includes(filter));
        
//         card.style.display = isMatch || selectedFilters.size === 0 ? "block" : "none";
//       });
//     }
  
//     // Add event listener to skill buttons
//     skillButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const filter = button.textContent;
//         if (!selectedFilters.has(filter)) {
//           selectedFilters.add(filter);
//           updateFilterDisplay();
//           filterJobs();
//         }
//       });
//     });
  
//     // Clear all filters
//     clearButton.addEventListener("click", () => {
//       selectedFilters.clear();
//       updateFilterDisplay();
//       filterJobs();
//     });
  
//     // Initial state
//     clearButton.style.display = "none";

"use strict";

const filterContainer = document.querySelector("#filter-container");
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear");
const joblistings = document.querySelector("#job-listings");

let selectedFilters = [];

// Function to show the filter container
function showFilterContainer() {
  filterContainer.style.display = "flex"; // Make the container visible
}

// Function to hide the filter container
function hideFilterContainer() {
  filterContainer.style.display = "none"; // Hide the container
}

// Function to add event listeners for skill buttons
function addFilterListeners() {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("skillsBtn")) {
      const filterValue = event.target.textContent;

      if (!selectedFilters.includes(filterValue)) {
        selectedFilters.push(filterValue);

        // Create filter tag
        const filterTag = document.createElement("div");
        filterTag.classList.add("tagBtn");
        filterTag.textContent = filterValue;

        // Add remove button to filter tag
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("clearTag");
        removeBtn.innerHTML = `<img src="images/icon-remove.svg" alt="remove tag button"/>`;
        removeBtn.addEventListener("click", () => {
          removeFilter(filterValue, filterTag);
        });

        filterTag.appendChild(removeBtn);
        filter.appendChild(filterTag);

        // Show the filter container
        showFilterContainer();

        // Apply filtering
        filterJobs();
      }
    }
  });

  // Clear all filters
  clearBtn.addEventListener("click", () => {
    selectedFilters = [];
    filter.innerHTML = "";
    hideFilterContainer(); // Hide the filter container
    filterJobs(); // Show all jobs
  });
}

// Function to remove a filter
function removeFilter(filterValue, filterTag) {
  selectedFilters = selectedFilters.filter((filter) => filter !== filterValue);
  filterTag.remove();

  if (selectedFilters.length === 0) {
    hideFilterContainer(); // Hide the filter container if no filters are left
  }

  filterJobs(); // Reapply filtering
}

// Function to filter jobs based on selected filters
function filterJobs() {
  document.querySelectorAll(".jobCard").forEach((jobCard) => {
    const jobTags = Array.from(jobCard.querySelectorAll(".skillsBtn")).map(
      (btn) => btn.textContent
    );

    const matchesAllFilters = selectedFilters.every((filter) =>
      jobTags.includes(filter)
    );

    // Show or hide job cards based on filter match
    jobCard.style.display = matchesAllFilters ? "flex" : "none";
  });
}

// Add event listeners for filtering
addFilterListeners();