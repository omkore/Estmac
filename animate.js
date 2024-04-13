window.addEventListener('scroll', yourScrollHandler, { passive: true });

function yourScrollHandler() {
    const elements = document.querySelectorAll('*'); // Select all elements

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
            if (element.classList.contains("left-in")) {
                element.classList.add('slide-in-left');
            } else if (element.classList.contains("right-in")) {
                element.classList.add('slide-in-right');
            } else if (element.classList.contains("top-in")) {
                element.classList.add('slide-in-top');
            } else {
                // Handle other cases if needed
            }
            element.style.opacity = 1; // Show the element
        }
    });
}

// window.addEventListener('scroll', () => {

// });
      // Define enableScroll function
      function enableScroll(element) {
        element.classList.add('show-scrollable-col');
    }
          // Define enableScroll function
          function disableScroll(element) {
            element.classList.remove('show-scrollable-col'); // Remove the class that enables scrolling
            // element.style.overflow = 'hidden'; // Optionally, set overflow to 'hidden' to prevent scrolling
        }
        

    // Add event listener after defining enableScroll
    document.addEventListener('DOMContentLoaded', function() {
        // Attach event listener to your element
        var scrollableCol = document.querySelector('.scrollable-col');
        scrollableCol.addEventListener('mouseenter', function() {
            enableScroll(this);
        });
    });



    