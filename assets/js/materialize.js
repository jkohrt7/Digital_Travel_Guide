$(".homepageBtn").on("click", function(){
location.replace("search.html");
})

document.addEventListener('DOMContentLoaded', function() {
    event.preventDefault();
    var elems = document.querySelector('.dropdown-trigger');
    var options ={
        alignment: "center",
       constrainWidth: false,
       stopPropagation: false,
    }
    var instances = M.Dropdown.init(elems,options);
  });

  $(".dropdown-content").on("click","option",function(){
      event.preventDefault();
      countryInfoEl.empty();
      $(".weatherSearch").css("display","flex");
      let usrSelected = $(this).text();
      localStorage.setItem("Country",usrSelected);
      buildWikipediaElement();
      countryNameEl.text(usrSelected);
  })

  $(".weatherBtn").on("click",function(event){
      event.preventDefault();
      let cityName = $(".validate").val().trim();
      let countryCode = localStorage.getItem("Country");
      if (!cityName){
          alert("Please enter a city name")
          return;
      }
      let nameEl = $(".weatherName");
         getWeatherData(countryCode,cityName);
         $(".weatherIcon").empty();
         $(".weatherName").text(cityName);
         
      })
