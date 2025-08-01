// JavaScript for the portfolio website
// Handles dynamic behaviours such as the floating navigation appearance

document.addEventListener('DOMContentLoaded', () => {
  const floatingNav = document.querySelector('.floating-nav');

  // Show or hide the floating navigation based on scroll position
  const toggleFloatingNav = () => {
    if (!floatingNav) return;
    if (window.scrollY > 400) {
      floatingNav.classList.add('visible');
    } else {
      floatingNav.classList.remove('visible');
    }
  };

  // Initialise visibility on load
  toggleFloatingNav();

  // Listen for scroll events
  window.addEventListener('scroll', toggleFloatingNav);

  // Project slider functionality
  const projectSlides = document.querySelectorAll('.project-slide');
  let projectIndex = 0;

  const showProjectSlide = (index) => {
    projectSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  // Previous/next buttons
  const prevBtn = document.querySelector('.project-nav.prev');
  const nextBtn = document.querySelector('.project-nav.next');
  if (prevBtn && nextBtn && projectSlides.length) {
    prevBtn.addEventListener('click', () => {
      projectIndex = (projectIndex - 1 + projectSlides.length) % projectSlides.length;
      showProjectSlide(projectIndex);
    });
    nextBtn.addEventListener('click', () => {
      projectIndex = (projectIndex + 1) % projectSlides.length;
      showProjectSlide(projectIndex);
    });
    // Initialize
    showProjectSlide(projectIndex);
  }

  // Tool slider functionality
  const toolSlides = document.querySelectorAll('.tool-slide');
  let toolIndex = 0;
  const showToolSlide = (index) => {
    toolSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };
  const toolPrevBtn = document.querySelector('.tool-nav.prev');
  const toolNextBtn = document.querySelector('.tool-nav.next');
  if (toolPrevBtn && toolNextBtn && toolSlides.length) {
    toolPrevBtn.addEventListener('click', () => {
      toolIndex = (toolIndex - 1 + toolSlides.length) % toolSlides.length;
      showToolSlide(toolIndex);
    });
    toolNextBtn.addEventListener('click', () => {
      toolIndex = (toolIndex + 1) % toolSlides.length;
      showToolSlide(toolIndex);
    });
    // Initialize tool slider
    showToolSlide(toolIndex);
  }
});