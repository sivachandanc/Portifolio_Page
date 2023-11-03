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
  function handleScroll() {
    let scrollPosition = window.pageYOffset;
    let sections = document.querySelectorAll("section");
    let scrollAmount = window.innerHeight * 0.1; // adjust as needed
  
    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;
      let sectionBottom = sectionTop + sectionHeight;
  
      // Check if the section top is just at the viewport and if we are scrolling down
      if (scrollPosition >= sectionTop - scrollAmount && scrollPosition < sectionBottom - scrollAmount) {
        // Check if there is a next section to scroll into view
        if (i < sections.length - 1) {
          // Prevent default scroll
          window.scrollTo(0, sectionTop);
          // Smoothly scroll to the next section
          sections[i + 1].scrollIntoView({ behavior: 'smooth' });
          break; // Exit the loop
        }
      }
    }
  }
  
  // Event listener for the scroll event with throttle
  window.addEventListener('scroll', throttle(handleScroll, 1000));
  