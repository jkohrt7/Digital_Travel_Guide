/**
 * @function getWikiPromise : Returns a Promise for a wikipedia page's contents.
 * @param {String} articleName : A string containing the name of a wikipedia article.
 * @returns {Promise} : Returns a promise from the wikipedia API; use Promise.then() to parse Response.
 */
 let countryNameEl = $(".countryName");
 let countryInfoEl = $(".countryInfo");

function getWikiPromise(articleName){
    let url = "https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=" 
    + articleName.trim().replace(" ", "_") 
    + "&format=json"

    return fetch(url, {
        method: "GET",
        mode: "cors"
    }).then(function(resp) {
        let dataPromise = resp.json();
        return dataPromise;
    }).catch((error) => {
        return error;
    })
} 

//returns a promise to the summary (a String) of a wikipedia page.
function getWikiPageSummary(articleName) {
    articleName = localStorage.getItem("Country");
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles="
    + articleName.replace(" ", "_");
    return fetch(url, {
        method: "GET",
        mode: "cors"
    })
    .then(function(resp) {
        let dataPromise = resp.json();
        return dataPromise;
    })
    .then(function(data) {
        let summaryObj = data.query.pages;
        let pageid = Object.keys(summaryObj)[0];
        let summaryString = summaryObj[pageid].extract;
        return summaryString;
    })   
    .catch((error) => {
        return error;
    })
}

//TODO: renders results of a wikipedia search to a flexbox
function buildWikipediaElement (articleName) {
    getWikiPageSummary(articleName).then(function (response) {
        //create a <p> element with .innerText = response and append it to the page
        return response;
    })
        .then(function(data){
        console.log(data)
        countryInfoEl.append("<p>" + data + "</p>")
    })
}
buildWikipediaElement();