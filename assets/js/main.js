/* Main sets up the primary functions of our app: listening for a search, handling a search, and populating 
   the website with results. While the functions are called here, they are defined in different files to keep
   the outline of our functionaility clear and concise.
*/

//Sets up necessary listeners
const init = function() {
    //Determines if state input needs to be enabled
    window.addEventListener("click", enableState);

    //Executes a search on button click
    let searchButton = document.querySelector("#search-submit"); 
    searchButton.addEventListener("click",submitSearch); //Clicking it submits the search
    
}

const enableState = function(event){
    let stateInput  = document.querySelector("#state-name");
    let countryInput = document.querySelector("#country-name")
    if (countryInput.value === "United States") {
        document.querySelector("#state-name").removeAttribute("disabled");
    }
    else {
        if(stateInput.hasAttribute("disabled")) {
            return;
        }
        else {
            stateInput.setAttribute("disabled", "");
            stateInput.value = "";
            return;
        }
    }
}

//Contains functions that are fired when a search is initiated
const submitSearch = function () {
    console.log("clicked");
    document.querySelector("#api-feedback-container").setAttribute("class", "section container");
    clearInformation(); //Finished--forms.js
    processSearch(); //TODO: uses the search to perform API calls and populate the screen
    //addHistoryToStorage(); //add valid country searches to localStorage
}

//Uses the search info to run API queries and put that info on the site.
const processSearch = async function() {
    let country= document.querySelector("#country-name").value;
    let city = document.querySelector("#city-name").value;
    let state = document.querySelector("#state-name").value;
  
    if(country === "") {
        console.log("Required selection is blank");
        return;
    }

    //Populate weather summary flexbox
    try {
        let countryCode = await getCountryCode(country);
        await buildWeatherElement(countryCode, city, getStateCode(state)); //TODO: creates and appends the flexbox with weather elements for a country/city.
    }
    catch (error) {
        console.log(error);
        return;
    }

    try{
        await buildWikipediaElement(country); //TODO: creates and appends the flexbox with wiki image and text for a country/city.
        await renderFlag(country);
    }
    catch {
        
    }
   

    
}

init();