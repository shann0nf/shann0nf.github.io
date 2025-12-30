// Set footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll to projects on button click
document.getElementById("btnProjects").addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});
