const small = document.querySelector('.carousel');
M.Carousel.init(small,{
  
})

var countries = {
  "Andorra":null,
  "United Arab Emirates":null,
  "Afghanistan":null,
  "Antigua and Barbuda":null,
  "Anguilla":null,
  "Albania":null,
  "Armenia":null,
  "Angola":null,
  "Antarctica":null,
  "Argentina":null,
  "American Samoa":null,
  "Austria":null,
  "Australia":null,
  "Aruba":null,
  "Åland Islands":null,
  "Azerbaijan":null,
  "Bosnia and Herzegovina":null,
  "Barbados":null,
  "Bangladesh":null,
  "Belgium":null,
  "Burkina Faso":null,
  "Bulgaria":null,
  "Bahrain":null,
  "Burundi":null,
  "Benin":null,
  "Saint Barthélemy":null,
  "Bermuda":null,
  "Brunei":null,
  "Bolivia":null,
  "Caribbean Netherlands":null,
  "Brazil":null,
  "Bahamas":null,
  "Bhutan":null,
  "Bouvet Island":null,
  "Botswana":null,
  "Belarus":null,
  "Belize":null,
  "Canada":null,
  "Cocos (Keeling) Islands":null,
  "DR Congo":null,
  "Central African Republic":null,
  "Republic of the Congo":null,
  "Switzerland":null,
  "Côte d'Ivoire (Ivory Coast)":null,
  "Cook Islands":null,
  "Chile":null,
  "Cameroon":null,
  "China":null,
  "Colombia":null,
  "Costa Rica":null,
  "Cuba":null,
  "Cape Verde":null,
  "Curaçao":null,
  "Christmas Island":null,
  "Cyprus":null,
  "Czechia":null,
  "Germany":null,
  "Djibouti":null,
  "Denmark":null,
  "Dominica":null,
  "Dominican Republic":null,
  "Algeria":null,
  "Ecuador":null,
  "Estonia":null,
  "Egypt":null,
  "Western Sahara":null,
  "Eritrea":null,
  "Spain":null,
  "Ethiopia":null,
  "European Union":null,
  "Finland":null,
  "Fiji":null,
  "Falkland Islands":null,
  "Micronesia":null,
  "Faroe Islands":null,
  "France":null,
  "Gabon":null,
  "United Kingdom":null,
  "Grenada":null,
  "Georgia":null,
  "French Guiana":null,
  "Guernsey":null,
  "Ghana":null,
  "Gibraltar":null,
  "Greenland":null,
  "Gambia":null,
  "Guinea":null,
  "Guadeloupe":null,
  "Equatorial Guinea":null,
  "Greece":null,
  "South Georgia":null,
  "Guatemala":null,
  "Guam":null,
  "Guinea-Bissau":null,
  "Guyana":null,
  "Hong Kong":null,
  "Heard Island and McDonald Islands":null,
  "Honduras":null,
  "Croatia":null,
  "Haiti":null,
  "Hungary":null,
  "Indonesia":null,
  "Ireland":null,
  "Israel":null,
  "Isle of Man":null,
  "India":null,
  "British Indian Ocean Territory":null,
  "Iraq":null,
  "Iran":null,
  "Iceland":null,
  "Italy":null,
  "Jersey":null,
  "Jamaica":null,
  "Jordan":null,
  "Japan":null,
  "Kenya":null,
  "Kyrgyzstan":null,
  "Cambodia":null,
  "Kiribati":null,
  "Comoros":null,
  "Saint Kitts and Nevis":null,
  "North Korea":null,
  "South Korea":null,
  "Kuwait":null,
  "Cayman Islands":null,
  "Kazakhstan":null,
  "Laos":null,
  "Lebanon":null,
  "Saint Lucia":null,
  "Liechtenstein":null,
  "Sri Lanka":null,
  "Liberia":null,
  "Lesotho":null,
  "Lithuania":null,
  "Luxembourg":null,
  "Latvia":null,
  "Libya":null,
  "Morocco":null,
  "Monaco":null,
  "Moldova":null,
  "Montenegro":null,
  "Saint Martin":null,
  "Madagascar":null,
  "Marshall Islands":null,
  "North Macedonia":null,
  "Mali":null,
  "Myanmar":null,
  "Mongolia":null,
  "Macau":null,
  "Northern Mariana Islands":null,
  "Martinique":null,
  "Mauritania":null,
  "Montserrat":null,
  "Malta":null,
  "Mauritius":null,
  "Maldives":null,
  "Malawi":null,
  "Mexico":null,
  "Malaysia":null,
  "Mozambique":null,
  "Namibia":null,
  "New Caledonia":null,
  "Niger":null,
  "Norfolk Island":null,
  "Nigeria":null,
  "Nicaragua":null,
  "Netherlands":null,
  "Norway":null,
  "Nepal":null,
  "Nauru":null,
  "Niue":null,
  "New Zealand":null,
  "Oman":null,
  "Panama":null,
  "Peru":null,
  "French Polynesia":null,
  "Papua New Guinea":null,
  "Philippines":null,
  "Pakistan":null,
  "Poland":null,
  "Saint Pierre and Miquelon":null,
  "Pitcairn Islands":null,
  "Puerto Rico":null,
  "Palestine":null,
  "Portugal":null,
  "Palau":null,
  "Paraguay":null,
  "Qatar":null,
  "Réunion":null,
  "Romania":null,
  "Serbia":null,
  "Russia":null,
  "Rwanda":null,
  "Saudi Arabia":null,
  "Solomon Islands":null,
  "Seychelles":null,
  "Sudan":null,
  "Sweden":null,
  "Singapore":null,
  "Saint Helena, Ascension and Tristan da Cunha":null,
  "Slovenia":null,
  "Svalbard and Jan Mayen":null,
  "Slovakia":null,
  "Sierra Leone":null,
  "San Marino":null,
  "Senegal":null,
  "Somalia":null,
  "Suriname":null,
  "South Sudan":null,
  "São Tomé and Príncipe":null,
  "El Salvador":null,
  "Sint Maarten":null,
  "Syria":null,
  "Eswatini (Swaziland)":null,
  "Turks and Caicos Islands":null,
  "Chad":null,
  "French Southern and Antarctic Lands":null,
  "Togo":null,
  "Thailand":null,
  "Tajikistan":null,
  "Tokelau":null,
  "Timor-Leste":null,
  "Turkmenistan":null,
  "Tunisia":null,
  "Tonga":null,
  "Turkey":null,
  "Trinidad and Tobago":null,
  "Tuvalu":null,
  "Taiwan":null,
  "Tanzania":null,
  "Ukraine":null,
  "Uganda":null,
  "United States Minor Outlying Islands":null,
  "United Nations":null,
  "United States":null,
  "Uruguay":null,
  "Uzbekistan":null,
  "Vatican City (Holy See)":null,
  "Saint Vincent and the Grenadines":null,
  "Venezuela":null,
  "British Virgin Islands":null,
  "United States Virgin Islands":null,
  "Vietnam":null,
  "Vanuatu":null,
  "Wallis and Futuna":null,
  "Samoa":null,
  "Kosovo":null,
  "Yemen":null,
  "Mayotte":null,
  "South Africa":null,
  "Zambia":null,
  "Zimbabwe":null,
}

//Gives country autocomplete options
//don't like having global variables but it didn't work otherwise.
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
  data: countries
});

function clearInformation() {
  //clear weather box
  document.querySelector("#weather-text").innerHTML = "";
  document.querySelector("#weather-date").innerHTML = "";

  //clear country box
  document.querySelector("#country-title").innerHTML = "";
  document.querySelector("#country-flag").innerHTML = "";
  document.querySelector("#country-wiki-text").innerHTML = "";
}

function getSearchTerms() {
  let country= document.querySelector("#country-name").value;
  let city = document.querySelector("#city-name").value;
  let state = document.querySelector("#state-name").value;

  return [country,city,state];
}