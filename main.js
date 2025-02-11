document.addEventListener("DOMContentLoaded", () => {
  const mobileNavToggle = document.getElementById("mobile-nav-toggle")
  const body = document.body
  const sidebar = document.getElementById("sidebar")

  // Toggle mobile navigation
  mobileNavToggle.addEventListener("click", () => {
    body.classList.toggle("mobile-nav-active")
    mobileNavToggle.querySelector("i").classList.toggle("fa-bars")
    mobileNavToggle.querySelector("i").classList.toggle("fa-times")
  })

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    if (body.classList.contains("mobile-nav-active") && !sidebar.contains(e.target) && e.target !== mobileNavToggle) {
      body.classList.remove("mobile-nav-active")
      mobileNavToggle.querySelector("i").classList.add("fa-bars")
      mobileNavToggle.querySelector("i").classList.remove("fa-times")
    }
  })

  // Handle navigation active states
  const navLinks = document.querySelectorAll(".nav-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"))
      this.classList.add("active")

      if (window.innerWidth < 1200) {
        body.classList.remove("mobile-nav-active")
        mobileNavToggle.querySelector("i").classList.add("fa-bars")
        mobileNavToggle.querySelector("i").classList.remove("fa-times")
      }
    })
  })
})

