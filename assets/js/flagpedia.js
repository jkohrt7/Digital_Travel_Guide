//Gets an image url to a flag using a country code.
//API is hosted by flagpedia.net
function renderFlag(countryName) {
    getCountryCode(countryName).then(function(code) {
        console.log(typeof(code))
        let url = "https://flagcdn.com/h60/"
        + code.trim()
        + ".png";
        
        console.log(url)

        let imgContainer = document.querySelector("#country-flag")
        let imgNode = document.createElement("IMG");
        imgNode.src = url;
        imgContainer.appendChild(imgNode);

        return;
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
        return "Eggs";
    })
}
