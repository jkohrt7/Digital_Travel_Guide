//Gets an image url to a flag using a country code.
//API is hosted by flagpedia.net
let countryName = localStorage.getItem("Country")

function getFlagImage(countryName) {
    getCountryCode(countryName).then(function(code) {
        let url = "https://flagcdn.com/w640/"
        + code;
        + ".png"
         return url;
    })
}

//Gets a country code for a given country
function getCountryCode(countryName) {

    //gets a list of all the available country codes
    return fetch("https://flagcdn.com/en/codes.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        let valArr = Object.values(data);
        let keyArr = Object.keys(data);

        for (let i = 0; i < keyArr.length; i++) {
            if(valArr[i] == countryName) {
                return keyArr[i]; 
            }
        }
        return;
    })
}

//TODO
//renders a flag img
function renderFlag(countryName) {
    getCountryCode().then(function(response){
        return response
    })
    .then(getFlagImage(countryName))
        //append to the correct box
        // let countryFlagEl = $(".countryFlag")
        // countryFlagEl.append()
}
renderFlag();