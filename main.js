document.addEventListener("DOMContentLoaded", () => {
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle")
  const body = document.querySelector("body")
  const header = document.querySelector("#header")

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", (e) => {
      e.preventDefault()
      body.classList.toggle("mobile-nav-active")
      header.classList.toggle("mobile-nav-active")
    })
  }

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && !mobileNavToggle.contains(e.target)) {
      body.classList.remove("mobile-nav-active")
      header.classList.remove("mobile-nav-active")
    }
  })

  // Active link handling
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      navLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")

      // Close mobile nav on link click
      if (window.innerWidth < 1200) {
        body.classList.remove("mobile-nav-active")
        header.classList.remove("mobile-nav-active")
      }
    })
  })
})


