/**
 * Helper function to scroll to a section with proper offset
 * @param {string} id - The ID of the section to scroll to
 */
export const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
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
  
      // Update URL hash without scrolling (prevents double scroll)
      window.history.pushState(null, null, `#${id}`)
    } else {
      console.error(`Element with id "${id}" not found`)
    }
  }
  
  /**
   * Determines which section is currently in view
   * @returns {string} - The ID of the active section
   */
  export const getActiveSection = () => {
    const sections = ["home", "projects", "about", "blog", "testimonials", "contact"]
  
    // Find the section that is currently in view
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const rect = element.getBoundingClientRect()
        // If the section is in view (with some buffer for better UX)
        if (rect.top <= 150 && rect.bottom >= 100) {
          return sectionId
        }
      }
    }
  
    // Default to home if no section is in view
    return "home"
  }
  
  