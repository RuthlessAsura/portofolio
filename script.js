// DOM Elements
const menuToggle = document.getElementById("menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
const themeToggle = document.getElementById("theme-toggle")
const themeToggleMobile = document.getElementById("theme-toggle-mobile")
const currentYearElements = document.querySelectorAll("#current-year")
const skillBars = document.querySelectorAll(".skill-progress-bar")
const fadeElements = document.querySelectorAll(".fade-in")
const contactForm = document.getElementById("contact-form")
const formSuccess = document.getElementById("form-success")
const submitBtn = document.getElementById("submit-btn")

// Toggle mobile menu
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    menuToggle.innerHTML = mobileMenu.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>'
  })
}

// Theme toggle functionality
function setTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark")
  localStorage.setItem("theme", theme)
}

function initTheme() {
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme")
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (savedTheme) {
    setTheme(savedTheme)
  } else if (systemPrefersDark) {
    setTheme("dark")
  }
}

// Initialize theme on page load
initTheme()

// Theme toggle event listeners
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  })
}

if (themeToggleMobile) {
  themeToggleMobile.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "light" : "dark")
  })
}

// Set current year in footer
currentYearElements.forEach((element) => {
  element.textContent = new Date().getFullYear()
})

// Animate skill bars on scroll
function animateSkillBars() {
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width")
    bar.style.width = width + "%"
  })
}

// Animate elements on scroll
function animateOnScroll() {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementTop < windowHeight - 100) {
      element.classList.add("active")
    }
  })
}

// Initialize animations
function initAnimations() {
  // Animate elements that are already in view on page load
  animateOnScroll()

  // Animate skill bars if they exist
  if (skillBars.length > 0) {
    setTimeout(animateSkillBars, 500)
  }

  // Add scroll event listener for animations
  window.addEventListener("scroll", animateOnScroll)
}

// Initialize animations after page load
window.addEventListener("load", initAnimations)

// Contact form submission
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Disable submit button and show loading state
    submitBtn.disabled = true
    submitBtn.textContent = "Sending..."

    // Simulate form submission with a delay
    setTimeout(() => {
      // Show success message
      formSuccess.style.display = "block"
      contactForm.style.display = "none"

      // Reset form
      contactForm.reset()

      // Reset button state
      submitBtn.disabled = false
      submitBtn.textContent = "Send Message"
    }, 1500)
  })
}
