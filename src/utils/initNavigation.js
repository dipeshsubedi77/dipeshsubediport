/**
 * Initialize navigation based on URL hash
 */
export const initNavigation = () => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1) // Remove the # character
      const element = document.getElementById(id)
  
      if (element) {
        // Wait a bit for the page to fully load
        setTimeout(() => {
          // Get the navbar height to offset the scroll
          const navbar = document.querySelector("header")
          const navbarHeight = navbar ? navbar.offsetHeight : 80
  
          // Calculate the element's position
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
  
          // Scroll to the element with offset
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          })
        }, 300)
      }
    }
  }
  
  