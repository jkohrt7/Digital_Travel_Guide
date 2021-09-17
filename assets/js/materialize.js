document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var options = {
       constrainWidth: false,
       stopPropagation: false
    }
    var instances = M.Dropdown.init(elems,options);
  });