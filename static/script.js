// Throttle function to limit the function calls
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}

// The actual scroll handling function
function handleScroll() {
  let scrollPosition = window.pageYOffset;
  let sections = document.querySelectorAll("section");

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let sectionTop = section.offsetTop;

    // Check if the section top is just at the viewport and if we are scrolling down
    if (scrollPosition >= sectionTop) {
      // Check if there is a next section to scroll into view
      if (i < sections.length - 1) {
        // Smoothly scroll to the next section without any offset
        sections[i + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break; // Exit the loop
      }
    }
  }
}

// Function to cycle through job titles
const jobTitles = ["Engineer", "Analyst", "Consultant", "Scientist"];
const jobTitleElement = document.getElementById("jobTitle");
const staticTextElement = document.querySelector(".static-text");
let currentIndex = 0;

function cycleJobTitles() {
  const currentTitle = jobTitles[currentIndex];
  jobTitleElement.textContent = currentTitle;

  // Calculate the width of the current title and set it as a fixed width for the container
  const titleWidth = jobTitleElement.offsetWidth;
  staticTextElement.style.width = `${titleWidth}px`;

  currentIndex = (currentIndex + 1) % jobTitles.length;
}

// Initialize the text with the first job title
cycleJobTitles();

// Start the job title cycling
setInterval(cycleJobTitles, 2000); // Adjust the interval (in milliseconds) as needed

// Event listener for the scroll event with throttle
window.addEventListener('scroll', throttle(handleScroll, 1000));

// Function to open the About Me dialog
function openAboutMeDialog() {
  document.getElementById('aboutMeDialog').showModal();
}

// Function to close the About Me dialog
function closeAboutMeDialog() {
  document.getElementById('aboutMeDialog').close();
}

// Event listener for the "About Me" button click
document.getElementById('aboutMeButton').addEventListener('click', openAboutMeDialog);

// Event listener for the close button in the dialog
document.getElementById('closeAboutMeButton').addEventListener('click', closeAboutMeDialog);
