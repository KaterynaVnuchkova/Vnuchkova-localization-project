async function changeLanguage(lang) {
    const response = await fetch(`${lang}.json`);
    const data = await response.json();

    document.getElementById("title").textContent = data.title;
}
