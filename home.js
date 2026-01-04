document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");

  if (!nextBtn) {
    console.error("Next button not found");
    return;
  }

  nextBtn.addEventListener("click", () => {
    console.log("Surprise clicked 💖");
    window.location.href = "memories.html";
  });
});
