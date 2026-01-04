/* =======================
   MEMORY DATA
======================= */
const data = {
  jan: {
    title: "January 🤍",
    subtitle: "Where everything began ✨",
    text: "January was the start of us — quiet moments, shy smiles, memories that stayed.",
    photos: [
      { src: "jan1.jpg", caption: "The first smile 🤍" },
      { src: "jan2.jpg", caption: "Soft beginnings ✨" },
      { src: "jan3.jpg", caption: "Little moments" },
      { src: "jan4.jpg", caption: "You felt special" },
      { src: "jan5.jpg", caption: "Forever started here" }
    ]
  },
  feb: {
    title: "February 💕",
    subtitle: "Love grew softly",
    text: "Everything started feeling warmer with you.",
    photos: [
      { src: "feb1.jpeg", caption: "That laugh 💗" },
      { src: "feb2.jpeg", caption: "Comfort days" },
      { src: "feb3.jpeg", caption: "Closer than before" }
    ]
  },
  mar: {
    title: "March 🌸",
    subtitle: "Soft moments",
    text: "Comfort, calm talks, and smiles that felt easy.",
    photos: [
      { src: "mar1.jpeg", caption: "Peaceful us" },
      { src: "mar2.jpeg", caption: "Simple happiness" }
    ]
  },
  apr: {
    title: "April ☁️",
    subtitle: "Smiles only",
    text: "Simple days that felt special because of you.",
    photos: [
      { src: "apr1.jpeg", caption: "Bright days" },
      { src: "apr2.jpeg", caption: "Gentle moments" }
    ]
  },
  may: {
    title: "May 💕",
    subtitle: "Warm days",
    text: "Sunshine outside, warmth inside.",
    photos: [
      { src: "may1.jpeg", caption: "Soft sunshine" },
      { src: "may2.jpeg", caption: "Easy smiles" }
    ]
  },
  jun: {
    title: "June 🤍",
    subtitle: "Closer",
    text: "Somehow, we felt more connected.",
    photos: [
      { src: "jun1.jpeg", caption: "Heart talks" },
      { src: "jun2.jpeg", caption: "You & me" }
    ]
  },
  jul: {
    title: "July 🌷",
    subtitle: "Laughs",
    text: "Laughing at little things together.",
    photos: [
      { src: "jul1.jpeg", caption: "Carefree" },
      { src: "jul2.jpeg", caption: "Happy hearts" }
    ]
  },
  aug: {
    title: "August 🩷",
    subtitle: "Us",
    text: "Just us, and that felt enough.",
    photos: [
      { src: "aug1.jpeg", caption: "Always you" },
      { src: "aug2.jpeg", caption: "My comfort" }
    ]
  },
  sep: {
    title: "September 📸",
    subtitle: "Memories",
    text: "Moments worth keeping forever.",
    photos: [
      { src: "sep1.jpeg", caption: "Captured love" },
      { src: "sep2.jpeg", caption: "Timeless" }
    ]
  },
  oct: {
    title: "October 🍂",
    subtitle: "Warm hearts",
    text: "Even the cold felt warm with you.",
    photos: [
      { src: "oct1.jpeg", caption: "Cozy vibes" },
      { src: "oct2.jpeg", caption: "Holding warmth" }
    ]
  },
  nov: {
    title: "November 💞",
    subtitle: "Forever vibes",
    text: "Comfort, trust, and quiet happiness.",
    photos: [
      { src: "nov1.jpeg", caption: "Safe with you" },
      { src: "nov2.jpeg", caption: "My peace" }
    ]
  },
  dec: {
    title: "December 🎄",
    subtitle: "Always you",
    text: "Ending the year knowing it was always you.",
    photos: [
      { src: "dec1.jpeg", caption: "Festive hearts" },
      { src: "dec2.jpeg", caption: "My forever" }
    ]
  }
};

/* =======================
   ELEMENTS
======================= */
const modal = document.getElementById("memoryModal");
const slides = document.getElementById("slides");
const dots = document.getElementById("dots");
const title = document.getElementById("memoryTitle");
const subtitle = document.getElementById("memorySubtitle");
const text = document.getElementById("memoryText");
const photoCaption = document.getElementById("photoCaption");

const letterModal = document.getElementById("letterModal");
const openLetterBtn = document.getElementById("openLetterBtn");
const closeLetterBtn = document.getElementById("closeLetter");
const typedLetter = document.getElementById("typedLetter");

let current = 0;
let currentPhotos = [];

/* =======================
   OPEN MONTH
======================= */
document.querySelectorAll(".polaroid").forEach(card => {
  card.addEventListener("click", () => openMonth(card.dataset.month));
});

function openMonth(month) {
  const m = data[month];
  if (!m) return;

  title.innerText = m.title;
  subtitle.innerText = m.subtitle;
  text.innerText = m.text;

  slides.innerHTML = "";
  dots.innerHTML = "";
  current = 0;
  currentPhotos = m.photos;

  m.photos.forEach((p, i) => {
    slides.innerHTML += `<img src="assets/images/${p.src}" alt="">`;
    dots.innerHTML += `<span class="${i === 0 ? "active" : ""}"></span>`;
  });

  updateSlider();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  localStorage.setItem(`viewed-${month}`, "true");
  document.querySelector(`.polaroid[data-month="${month}"]`).classList.add("viewed");

  updateProgress();
  checkFinalLetter(true);
}

/* =======================
   SLIDER
======================= */
function updateSlider() {
  slides.style.transform = `translateX(-${current * 100}%)`;
  dots.querySelectorAll("span").forEach((d, i) =>
    d.classList.toggle("active", i === current)
  );
  photoCaption.innerText = currentPhotos[current].caption;
}

document.getElementById("next").onclick = () => {
  current = (current + 1) % currentPhotos.length;
  updateSlider();
};

document.getElementById("prev").onclick = () => {
  current = (current - 1 + currentPhotos.length) % currentPhotos.length;
  updateSlider();
};

/* =======================
   CLOSE MEMORY MODAL
======================= */
document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

/* =======================
   PROGRESS
======================= */
function updateProgress() {
  const viewed = Object.keys(localStorage).filter(k => k.startsWith("viewed-")).length;
  const progressText = document.getElementById("progressText");
  if (progressText) {
    progressText.innerText = `${viewed} / 12 memories seen 🤍`;
  }
}

/* =======================
   FINAL LETTER
======================= */
const letterText = `
My BUJJI 🤍

As this year ends, I just want you to know how special you are to me.

Every month, every smile, every small moment and every argument of mine 
with you has stayed in my heart.
You turned ordinary days into memories I’ll always treasure.
im gratefull to ur god that he kept ur name pn every page of this year in my lifd

Thank you for being you.
Thank you for staying.
Thank you for undeestanding.
Sorry for everything which i did't noced im sorry. 
Thank you for choosing us.

Here’s to a new year filled with love, warmth, and countless moments together.

Happy New Year, my forever 🤍
`;

function typeLetter(text, el, speed = 35) {
  let i = 0;
  el.innerHTML = "";
  const typing = setInterval(() => {
    el.innerHTML += text.charAt(i).replace("\n", "<br>");
    i++;
    if (i >= text.length) clearInterval(typing);
  }, speed);
}

function checkFinalLetter(auto = false) {
  const viewed = Object.keys(localStorage).filter(k => k.startsWith("viewed-")).length;

  if (viewed === 12) {
    openLetterBtn.style.display = "block";

    if (auto && !localStorage.getItem("letter-auto-opened")) {
      letterModal.style.display = "flex";
      typeLetter(letterText, typedLetter);
      localStorage.setItem("letter-auto-opened", "true");
    }
  }
}

/* =======================
   LETTER BUTTONS
======================= */
openLetterBtn.onclick = () => {
  letterModal.style.display = "flex";
  if (!typedLetter.innerHTML.trim()) {
    typeLetter(letterText, typedLetter);
  }
};

closeLetterBtn.onclick = () => {
  letterModal.style.display = "none";
};

/* =======================
   RESTORE STATE
======================= */
document.querySelectorAll(".polaroid").forEach(card => {
  const month = card.dataset.month;
  if (localStorage.getItem(`viewed-${month}`)) {
    card.classList.add("viewed");
  }
});

updateProgress();
checkFinalLetter(false);
