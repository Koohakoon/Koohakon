// ================== THEME TOGGLE ==================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    body.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

setTheme(localStorage.getItem("theme") === "dark");

toggleBtn.addEventListener("click", () => {
  const isDark = !body.classList.contains("dark");
  setTheme(isDark);
});

// ================== LANGUAGE SYSTEM ==================
const translations = {
  en: {
    heroTitle: "Hi, I'm Koohakon",
    tagline: "2D/3D Illustrator | Web developer | UI/UX Designer",
    aboutBtn: "About Me",
    projectsBtn: "Projects",
    linksBtn: "Links",
    footer: "© 2025 Nohakuun. All rights reserved.",
    aboutTitle: "About Me",
    aboutDesc: "Hi! I'm Nohakuun, you can call me nohakuun or hakoon, no it's not my real name",
    aboutFooter: "Back to Home",
    projectsTitle: "My Projects",
    projectsDesc: "Here are some things I’m currently exploring — from web design to digital art and 3D modeling.",
    project1: "Web Development",
    project2: "Digital Drawing",
    project3: "3D Blender Works",
    linksTitle: "Find Me Online",
    linksDesc: "Connect with me on these platforms:",
    whoTitle: "Who I Am",
    whoDesc: "Just an average person",
    skillsTitle: "My Skills",
    skill1: "HTML, CSS",
    skill2: "Illustrator",
    skill3: "UI / UX Design",
    skill4: "Blender",
    interestsTitle: "Interests",
    interestsDesc: "I enjoy gacha games, mostly hoyo's",
  },

  id: {
    heroTitle: "Halo, Saya Nohakuun",
    tagline: "Illustrator 2D/3D | Web developer | Designer UI/UX",
    aboutBtn: "Tentang Saya",
    projectsBtn: "Proyek",
    linksBtn: "Tautan",
    footer: "© 2025 Nohakuun. Hak cipta dilindungi.",
    aboutTitle: "Tentang Saya",
    aboutDesc: "Halo! Saya Nohakuun, kamu bisa panggil saya nohakuun atau hakoon, bukan itu bukan nama asliku",
    aboutFooter: "Kembali ke Beranda",
    projectsTitle: "Proyek Saya",
    projectsDesc: "Berikut hal-hal yang sedang saya pelajari — dari desain web hingga gambar digital dan model 3D.",
    project1: "Pengembangan Web",
    project2: "Menggambar Digital",
    project3: "Karya 3D Blender",
    linksTitle: "Temukan Saya Online",
    linksDesc: "Terhubung dengan saya di platform berikut:",
    whoTitle: "Siapa Saya",
    whoDesc: "Hanya orang biasa",
    skillsTitle: "Keahlian Saya",
    skill1: "HTML, CSS",
    skill2: "Illustrator",
    skill3: "Desain UI / UX",
    skill4: "Blender",
    interestsTitle: "Minat",
    interestsDesc: "Saya suka bermain game gacha, terutama dari Hoyo",
  },
};

// ================== APPLY LANGUAGE ==================
function applyLanguage(lang) {
  console.log("Applying language:", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const translation = translations[lang]?.[key];
    if (translation) el.textContent = translation;
  });
  localStorage.setItem("lang", lang);
}

// ================== INIT ON LOAD ==================
window.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select");
  const savedLang = localStorage.getItem("lang") || "en";

  // set dropdown value
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", () => {
      applyLanguage(langSelect.value);
    });
  }

  // apply stored language
  applyLanguage(savedLang);
});

// ================== FADE-UP ANIMATION ==================
const fadeEls = document.querySelectorAll(".fade-up");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("visible");
  });
});
window.dispatchEvent(new Event("scroll"));


