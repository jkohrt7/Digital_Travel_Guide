//Gets an image url to a flag using a country code.
//API is hosted by flagpedia.net
function renderFlag(countryName) {
    getCountryCode(countryName).then(function(code) {
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

function addFlagToLocalStorage(countryName,cityName) {
    getCountryCode(countryName).then(function(code) {
        let url = "https://flagcdn.com/h60/"
        + code.trim()
        + ".png";

        localStorageArr = JSON.parse(localStorage.getItem("flagURLs"));
        if(localStorage.getItem("flagURLs") == null){
            localStorageArr = [];
        } 
        else if(localStorageArr.length > 10) {
            localStorageArr = localStorageArr.slice(1);
        }
        localStorageArr.push(url)
        localStorage.setItem("flagURLs", JSON.stringify(localStorageArr));
    })
}

function renderFlagCarousel() {
    let slider = document.querySelector('.carousel');

    slider.innerHTML = "";
    let localStorageArr = JSON.parse(localStorage.getItem("flagURLs"));

    for(let i = 0; i < localStorageArr.length; i++) {
        let node = document.createElement("A");
        node.setAttribute('class', "carousel-item");
        
        let imgNode = document.createElement("IMG");
        imgNode.src = localStorageArr[i];

        node.appendChild(imgNode);
        slider.appendChild(node);
    }

    M.Carousel.init(slider,{
        
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

function getStateCode(stateFullName) {
                
        stateList = {
        'Arizona': 'AZ',
        'Alabama': 'AL',
        'Alaska':'AK',
        'Arkansas': 'AR',
        'California': 'CA',
        'Colorado': 'CO',
        'Connecticut': 'CT',
        'Delaware': 'DE',
        'Florida': 'FL',
        'Georgia': 'GA',
        'Hawaii': 'HI',
        'Idaho': 'ID',
        'Illinois': 'IL',
        'Indiana': 'IN',
        'Iowa': 'IA',
        'Kansas': 'KS',
        'Kentucky': 'KY',
        'Louisiana': 'LA',
        'Maine': 'ME',
        'Maryland': 'MD',
        'Massachusetts': 'MA',
        'Michigan': 'MI',
        'Minnesota': 'MN',
        'Mississippi': 'MS',
        'Missouri': 'MO',
        'Montana': 'MT',
        'Nebraska': 'NE',
        'Nevada': 'NV',
        'New Hampshire': 'NH',
        'New Jersey': 'NJ',
        'New Mexico': 'NM',
        'New York': 'NY',
        'North Carolina': 'NC',
        'North Dakota': 'ND',
        'Ohio': 'OH',
        'Oklahoma': 'OK',
        'Oregon': 'OR',
        'Pennsylvania': 'PA',
        'Rhode Island': 'RI',
        'South Carolina': 'SC',
        'South Dakota': 'SD',
        'Tennessee': 'TN',
        'Texas': 'TX',
        'Utah': 'UT',
        'Vermont': 'VT',
        'Virginia': 'VA',
        'Washington': 'WA',
        'West Virginia': 'WV',
        'Wisconsin': 'WI',
        'Wyoming': 'WY'}

        return this.stateList[stateFullName];
}
