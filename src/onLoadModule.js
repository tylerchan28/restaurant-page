function onLoadFunctions() {
    const homePage = document.createElement(`div`);
    
    const pageImage = document.createElement(`img`);
    pageImage.src = `./images/weenie.png`;
    
    
    homePage.classList.add(`home-page`)
    pageImage.classList.add(`page-image`);
    
    homePage.appendChild(pageImage);
    homePage.appendChild(pageText(`Welcome to Weenie Hut Jr's!`));
    homePage.appendChild(pageText(`Est. 2002`));
    homePage.appendChild(pageText(`Only in Bikini Bottom`));
    return homePage;

}

function pageText(words) {
    const text = document.createElement(`p`);
    text.textContent = words;
    return text;
}

function onLoadModules() {
    const mainContent = document.getElementById(`main`);
    mainContent.textContent = "";
    mainContent.appendChild(onLoadFunctions());
}
export {onLoadModules};
