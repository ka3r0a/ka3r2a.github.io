// Import AOS library.  Make sure you have included the AOS library in your HTML file.  For example:  <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
import AOS from "aos"

document.addEventListener("DOMContentLoaded", () => {
  // AOS initialization
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  })

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

  // Skills animation
  const skillsSection = document.querySelector(".skills")
  if (skillsSection) {
    const progressBars = skillsSection.querySelectorAll(".progress-bar")
    const animateProgress = () => {
      progressBars.forEach((bar) => {
        const value = bar.getAttribute("aria-valuenow")
        bar.style.width = `${value}%`
      })
    }
    window.addEventListener("scroll", () => {
      const sectionPos = skillsSection.getBoundingClientRect().top
      const screenPos = window.innerHeight / 2
      if (sectionPos < screenPos) {
        animateProgress()
      }
    })
  }

  // Back to top button
  const backtotop = document.querySelector(".back-to-top")
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active")
      } else {
        backtotop.classList.remove("active")
      }
    }
    window.addEventListener("load", toggleBacktotop)
    document.addEventListener("scroll", toggleBacktotop)
    backtotop.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
})

