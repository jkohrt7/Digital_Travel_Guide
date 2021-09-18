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
      var usrSelected = $(this).text();
      localStorage.setItem("Country",usrSelected);
      console.log(usrSelected);
      location.replace("searchResults.html");
  })