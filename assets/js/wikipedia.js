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
    //articleName = localStorage.getItem("Country");
    console.log(articleName);
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

function buildWikipediaElement (articleName) {
    console.log(articleName)
    getWikiPageSummary(articleName).then(function (responseString) {
        //Limit the response length.
        if (responseString.length > 500) {
            responseString = responseString.slice(0, 500) + "...";
        }
       
        //make the title the country
        let title = document.querySelector("#country-title");
        titleNode = document.createTextNode(articleName);
        title.appendChild(titleNode);

        //make the body the text
        let wikiSummary = document.querySelector("#country-wiki-text")
        let summaryNode = document.createElement("P");
        let summaryTextNode = document.createTextNode(responseString);
        summaryNode.appendChild(summaryTextNode);
        wikiSummary.appendChild(summaryNode);

        //add a read more url (TODO)
        let wikiURL = "https://en.wikipedia.org/wiki/" + articleName
        let linkNode = document.createElement("a");
        linkNode.href = wikiURL;
        let linkText = document.createTextNode("[Learn More]");

        linkNode.appendChild(linkText);
        wikiSummary.appendChild(linkNode);

        return;
    })

}
