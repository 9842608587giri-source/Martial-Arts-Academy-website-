// script.js - Enhanced version
document.addEventListener('DOMContentLoaded', function() {
    // Get current page filename
    const currentPath = window.location.pathname;
    let currentPage = currentPath.split('/').pop();
    
    // Handle root/home page
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }
    
    // Find all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove active class from all links first (optional, for safety)
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Find and highlight the active link
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Direct match
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
        
        // Handle cases where URL might have query parameters
        if (currentPage.startsWith(linkPage.replace('.html', '')) && 
            linkPage !== 'index.html' && 
            linkPage !== '') {
            link.classList.add('active');
        }
    });
    
    // Special handling for home page
    if (currentPage === 'index.html' || currentPage === '') {
        const homeLink = document.querySelector('a[href="index.html"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
});

// ================= ACTIVE NAV HIGHLIGHT =================
(function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".site-nav .nav-link");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
})();

// ================= TIMETABLE FILTER (optional but professional) =================
(function timetableFilter() {
  const filter = document.getElementById("classFilter");
  const slots = document.querySelectorAll(".timetable .slot");

  if (!filter || slots.length === 0) return;

  filter.addEventListener("change", () => {
    const value = filter.value;

    // reset
    slots.forEach(cell => {
      cell.classList.remove("is-muted", "is-highlight");
    });

    if (value === "all") return;

    slots.forEach(cell => {
      const cellClass = cell.dataset.class || "";
      const isKids = (value === "Kids" && cellClass === "Kids");
      const isMatch = (cellClass === value) || isKids;

      if (isMatch) {
        cell.classList.add("is-highlight");
      } else {
        cell.classList.add("is-muted");
      }
    });
  });
})();

// ================= CONTACT PAGE SCRIPT =================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  // If contact form not found, stop script (safe coding)
  if (!form) return;

  form.addEventListener("submit", function (e) {

    e.preventDefault(); // stop page refresh

    // Get values
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    // Validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill all required fields.");
      return;
    }

    // Email format check
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success message
    alert("Message sent successfully! (Database connection will be added later)");

    // Clear form after submit
    form.reset();

  });

});

// ================= TOGGLE LOGIN & SIGNUP =================

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginBtn && signupBtn) {
  loginBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
  });

  signupBtn.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
  });
}


// ================= SIMPLE VALIDATION =================

document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("loginMsg").textContent = "Login successful (backend later)";
});

document.getElementById("signupForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("signupMsg").textContent = "Account created (backend later)";
});