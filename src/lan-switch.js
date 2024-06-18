document
  .getElementById("lan-switch")
  .addEventListener("click", async (event) => {
    event.preventDefault();
    const lang = localStorage.getItem("language");
    lang == "hu" ? await changeLanguage("en") : await changeLanguage("hu");
  });

// Function to change the language
async function changeLanguage(lang) {
  localStorage.setItem("language", lang); // Set language preference
  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`lang/${lang}.json`);
  return response.json();
}

// Function to update the content based on the language data
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key];
  });
}

// On page load, set the language based on localStorage or default to English
document.addEventListener("DOMContentLoaded", async () => {
  const lang = localStorage.getItem("language") || "en";
  await changeLanguage(lang);
});
