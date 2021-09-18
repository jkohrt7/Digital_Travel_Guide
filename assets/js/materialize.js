$(".waves-effect").on("click", function(){
location.replace("searchResults.html");
})

document.addEventListener('DOMContentLoaded', function() {
    event.preventDefault();
    var elems = document.querySelector('.dropdown-trigger');
    var options = {
       constrainWidth: false,
       stopPropagation: false,
    }
    var instances = M.Dropdown.init(elems,options);
  });

  $(".dropdown-content").on("click","option",function(){
      event.preventDefault();
      countryInfoEl.empty();
      var usrSelected = $(this).text();
      localStorage.setItem("Country",usrSelected);
      buildWikipediaElement();
      countryNameEl.text(usrSelected);
      console.log(usrSelected);
    //   buildWikipediaElement();
  })