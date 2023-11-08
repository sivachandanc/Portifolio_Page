// Throttle function to limit the function calls
function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }
  
  // The actual scroll handling function
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

  
  // Event listener for the scroll event with throttle
  window.addEventListener('scroll', throttle(handleScroll, 1000));

  // Function to open the About Me modal
  function openAboutMeModal() {
  document.getElementById('aboutMeModal').style.display = 'block';
  }

  // Function to close the About Me modal
  function closeAboutMeModal() {
  document.getElementById('aboutMeModal').style.display = 'none';
  }

  // Event listener for the "About Me" button click
  document.getElementById('aboutMeButton').addEventListener('click', openAboutMeModal);

  // Event listener for the close button in the modal
  document.getElementById('closeAboutMe').addEventListener('click', closeAboutMeModal);
