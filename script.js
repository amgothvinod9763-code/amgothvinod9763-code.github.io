const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  // Small press animation
  envelope.style.transform = "scale(0.95)";

  // Fade out
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "0";

  // Redirect to scan page
  setTimeout(() => {
    window.location.href = "scan.html";
  }, 800);
});
