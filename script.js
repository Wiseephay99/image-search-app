/* const accessKey = "OyJJJGLgNrBrQGSvEXih70XYm4SEojsIVj4pwth4aL0";

const formEl = document.querySelector("form");
const iputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWraper = document.createElement("div");
        imageWraper.classList.add("search-results");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_descritption;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html ;
        imageLink.target = "_blank";
        imageLink.textContent = results.alt_descritption;

        imageWraper.appendChild(image);
        imageWraper.appendChild(imageLink);
        searchResults.appendChild(imageWraper);
    });

    page++
    if(page > 1){
        showMore.style.display = "block"
    }

}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
 });
 showMore.addEventListener("click", () =>{
    searchImages();
 });

 

 const accessKey = "OyJJJGLgNrBrQGSvEXih70XYm4SEojsIVj4pwth4aL0";

const formEl = document .querySelector ("form");
const inputEl = document. getElementById("search-input");
const searchResults = document. querySelector (" .search-results");
const showMore = document. getElementById ("show-more-button" );

let inputData = ""
let page = 2;

async function searchImages () 

{
    inputData = inputEl.Value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results
    if (page === 1){
        searchResults. innerHTML = ""
    }

    results.map((result) => {
        const imageWrapper = document.createElement ("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageLink.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++
    if(page > 1){
        showMore.style.display = "block"
    }
    }

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
 });
 showMore.addEventListener("click", () =>{
    searchImages();
 });
*/
document.addEventListener("DOMContentLoaded", () => {
    const accessKey = "OyJJJGLgNrBrQGSvEXih70XYm4SEojsIVj4pwth4aL0";

    const formEl = document.querySelector("form");
    const inputEl = document.getElementById("search-input");
    const searchResults = document.querySelector(".search-results");
    const showMore = document.getElementById("show-more-button");

    let inputData = "";
    let page = 1;

    async function searchImages() {
        inputData = inputEl.value;
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

        const response = await fetch(url);
        const data = await response.json();

        const results = data.results;
        if (page === 1) {
            searchResults.innerHTML = "";
        }

        results.forEach((result) => {
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("search-result");
            const image = document.createElement("img");
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement("a");
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;

            imageLink.appendChild(image);
            imageWrapper.appendChild(imageLink);
            searchResults.appendChild(imageWrapper);
        });

        page++;
        if (page > 1) {
            showMore.style.display = "block";
        }
    }

    // Call the searchImages function initially to fetch images when the page loads
    searchImages();

    formEl.addEventListener("submit", (event) => {
        event.preventDefault();
        page = 1;
        searchImages();
    });

    showMore.addEventListener("click", () => {
        searchImages();
    });
});
