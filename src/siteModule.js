import {onLoadModules} from "./onLoadModule.js";
import {specialsModule} from "./specialsModule.js";
import {menuModule} from "./menuModule.js";

function makeHeader() {
    const siteHeader = document.createElement(`header`);
    siteHeader.classList.add(`site-header`);

    const siteName = document.createElement(`h1`);
    siteName.classList.add(`name`);
    siteName.textContent = `Weenie Hut Jr's`;

    siteHeader.appendChild(siteName);
    siteHeader.appendChild(makeTabs());

    return siteHeader;
}

function makeMain() {
    const main = document.createElement(`div`);
    main.setAttribute(`id`, `main`);
    return main;
}

function makeTabs() {
    const tabs = document.createElement(`div`);
    tabs.classList.add(`tabs-container`);

    const homePageButton = document.createElement(`button`);
    homePageButton.classList.add(`header-buttons`);
    homePageButton.textContent = `Home`;
    homePageButton.addEventListener(`click`, onLoadModules);

    
    const menuButton = document.createElement(`button`);
    menuButton.classList.add(`header-buttons`);
    menuButton.textContent = `Menu`;
    menuButton.addEventListener(`click`, menuModule);

    const specialsButton = document.createElement(`button`);
    specialsButton.classList.add(`header-buttons`);
    specialsButton.textContent = `Specials`;
    specialsButton.addEventListener(`click`, specialsModule);

    tabs.appendChild(homePageButton);
    tabs.appendChild(menuButton);
    tabs.appendChild(specialsButton);

    return tabs;
}

function startSite() {
    const contentDiv = document.getElementById(`content`);

    contentDiv.appendChild(makeHeader());
    contentDiv.appendChild(makeMain());

    onLoadModules();
}

export {startSite};