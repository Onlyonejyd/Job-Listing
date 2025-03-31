# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). 

## TABLE OF CONTENTS
• Overview
» The Challenge
» Screenshot
» Links
» My Process
» Built With
» What I Learned
» Continued Development
» Useful Resources
» Author
» Acknowledgments



## Overview


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot of the Job Listings Page

**Note: The screenshots below shows the final design of the job listings page, including the filtering functionality and responsive layout.

![](../images/Screenshot%202025-03-31%20at%2013-48-08%20Frontend%20Mentor%20Job%20Listings.png)
![](../images/Screenshot%202025-03-31%20at%2013-48-44%20Frontend%20Mentor%20Job%20Listings.png)
![](../images/Screenshot%202025-03-31%20at%2013-50-43%20Frontend%20Mentor%20Job%20Listings.png)


### Links

- Solution URL: [https://github.com/Onlyonejyd/Job-Listing.git]
- Live Site URL: [https://onlyonejyd.github.io/Job-Listing/]

## My process

### Built with

◦Semantic HTML5 Markup
◦CSS Custom Properties
◦Flexbox for layout
◦Tailwind CSS for utility-first styling
◦JavaScript for dynamic functionality
◦Mobile-First Workflow

### What I learned

This project helped me solidify my understanding of:

Dynamic DOM Manipulation:

```js
I dynamically created job cards using JavaScript and appended them to the DOM.
Example:
const jobCard = document.createElement("div");
jobCard.classList.add("jobCard");
jobCard.innerHTML = `
  <div class="heading-container">
    <h1>${job.company}</h1>
    <p>${job.position}</p>
  </div>
`;
joblistings.appendChild(jobCard);

Filtering Logic:

I implemented a filtering system that dynamically updates the displayed job cards based on selected filters.
Example:
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

Responsive Design:

I used Tailwind CSS to ensure the layout adapts to different screen sizes.
Event Handling:

I added event listeners to dynamically created elements, such as skill buttons and filter tags.

``` 

### Continued development
In future projects, I want to:

Explore more advanced filtering techniques, such as fuzzy search or multi-level filtering.
Improve accessibility by ensuring all interactive elements are keyboard-navigable and screen-reader-friendly.
Use a front-end framework like React or Vue.js to manage state and DOM updates more efficiently.


### Useful resources
Useful Resources
MDN Web Docs - Helped me understand DOM manipulation and event handling.
Tailwind CSS Documentation - Provided guidance on utility-first styling.
Frontend Mentor - The challenge itself was a great learning resource.


## Author

- Frontend Mentor - [@Onlyonejyd](https://www.frontendmentor.io/profile/Onlyonejyd)
- Twitter - [@i_amjyd](https://www.twitter.com/i_amjyd)


