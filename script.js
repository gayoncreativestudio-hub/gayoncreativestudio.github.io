// Gayon Creative Studio

// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Back to top button
const button = document.createElement("button");
button.innerHTML = "↑";
button.id = "topBtn";

button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "12px 16px";
button.style.border = "none";
button.style.borderRadius = "50%";
button.style.background = "#c78c7b";
button.style.color = "#fff";
button.style.cursor = "pointer";
button.style.display = "none";
button.style.fontSize = "18px";
button.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

document.body.appendChild(button);

window.addEventListener("scroll", () => {
  button.style.display = window.scrollY > 300 ? "block" : "none";
});

button.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
