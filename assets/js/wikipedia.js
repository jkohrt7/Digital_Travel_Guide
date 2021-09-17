/**
 * @function getWikiPromise : Returns a Promise for a wikipedia page's contents.
 * @param {String} articleName : A string containing the name of a wikipedia article.
 * @returns {Promise} : Returns a promise from the wikipedia API; use Promise.then() to parse Response.
 */

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

/**
 * TODO:
 * @function getAvgTempWiki : Returns a promise to the array of avg monthly temps for a city using
 * the wikipedia API.
 * @param {String} city : The city whose monthy temps (F) will be retrieved
 * @returns A Promise to an array containing average monthly temperatures
 */

function getAvgTempWiki(city) {
    //get sections of the article
    let url = "https://en.wikipedia.org/w/api.php?origin=*&action=parse&page=" 
    + "List_of_cities_by_average_temperature" 
    + "&format=json"

    getWikiPromise(url).then((data) => {
        //parse the html to find all the necessary 
        console.log(data);
    })

}

//returns a promise to the summary (a String) of a wikipedia page.
function getWikiPageSummary(articleName) {
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles="
    + articleName.trim().replace(" ", "_");

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

//returns a promise to the img link (a String) of a wikipedia article.
//TODO: WIP
function getWikiPageImage(articleName) {
    let url = "http://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&origins=*&titles="
    + articleName.trim().replace(" ", "_");

    return fetch(url, {
        method: "GET",
        mode: "cors"
    }).then(function(resp) {
        let dataPromise = resp.json();
        return dataPromise;
    }).then(function(data) {
        let imgObject = data.query.pages;
        let pageid = Object.keys(imgObject)[0];
        let img = imgObject[pageid].thumbnail.source;
    })
    .catch((error) => {
        return error;
    })
}


//renders results of a wikipedia search to a flexbox
function buildWikipediaElement (articleName) {
    getWikiPageSummary(articleName).then(function (response) {
        //create a <p> element with .innerText = response and append it to the page

    })
    getWikiPageImage(articleName).then(function (response) {
        //create a <img> tag using the response url and append it to the page

    })
}