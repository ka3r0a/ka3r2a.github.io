import Typed from "typed.js"

document.addEventListener("DOMContentLoaded", () => {
  // Typed.js initialization
  new Typed(".typed", {
    strings: [
      "Mathematics Student",
      "Photographer",
      "Programmer",
      "Tech Enthusiast",
      "Problem Solver",
      "Web Developer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  })

  // Sidebar toggle
  const toggleSidebarButton = document.getElementById("toggle-sidebar")
  const sidebar = document.getElementById("header")

  if (toggleSidebarButton) {
    toggleSidebarButton.addEventListener("click", () => {
      sidebar.classList.toggle("active")
    })
  }

  // Mobile nav toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle")
  const body = document.querySelector("body")
  const header = document.querySelector("#header")
  const main = document.querySelector("#main")

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", function (e) {
      body.classList.toggle("mobile-nav-active")
      this.classList.toggle("bi-list")
      this.classList.toggle("bi-x")
    })
  }

  // Close sidebar after clicking on a nav link or outside the sidebar
  const navLinks = document.querySelectorAll(".nav-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("mobile-nav-active")
      if (mobileNavToggle) {
        mobileNavToggle.classList.add("bi-list")
        mobileNavToggle.classList.remove("bi-x")
      }
    })
  })

  // Close mobile nav when clicking outside
  document.addEventListener("click", (e) => {
    if (body.classList.contains("mobile-nav-active") && !header.contains(e.target) && e.target !== mobileNavToggle) {
      body.classList.remove("mobile-nav-active")
      if (mobileNavToggle) {
        mobileNavToggle.classList.add("bi-list")
        mobileNavToggle.classList.remove("bi-x")
      }
    }
  })

  // Smooth scroll for navigation
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Skills animation
  const skillsSection = document.querySelector(".skills")
  if (skillsSection) {
    const progressBars = skillsSection.querySelectorAll(".progress-bar")
    const animateProgress = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target
          const value = progressBar.getAttribute("aria-valuenow")
          progressBar.style.width = "0%"
          progressBar.offsetWidth // Force a reflow
          setTimeout(() => {
            progressBar.style.width = value + "%"
          }, 100)
          observer.unobserve(progressBar)
        }
      })
    }

    const observer = new IntersectionObserver(animateProgress, {
      threshold: 0.1,
    })

    progressBars.forEach((bar) => {
      bar.style.width = "0%"
      observer.observe(bar)
    })
  }
})

