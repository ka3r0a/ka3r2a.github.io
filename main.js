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
  const toggleSidebarButton = document.getElementById('toggle-sidebar');
  const sidebar = document.getElementById('header');

  if (toggleSidebarButton) {
    toggleSidebarButton.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });
  }

  // Close sidebar after clicking on a nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      sidebar.classList.remove('active');
    });
  });

  // Mobile nav toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle")
  const header = document.querySelector("#header")
  const main = document.querySelector("#main")

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", function (e) {
      header.classList.toggle("mobile-nav-active")
      this.classList.toggle("bi-list")
      this.classList.toggle("bi-x")
      main.classList.toggle("mobile-nav-active")
    })
  }

  // Smooth scroll for navigation
  const navLinks = document.querySelectorAll(".nav-menu a")
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

document.addEventListener("DOMContentLoaded", () => {
  // Animate progress bars when they come into view
  const progressBars = document.querySelectorAll(".progress-bar")

  const animateProgress = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target
        const value = progressBar.getAttribute("aria-valuenow")
        // Reset to 0 first
        progressBar.style.width = "0%"
        // Force a reflow
        progressBar.offsetWidth
        // Animate to the target percentage
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
})


