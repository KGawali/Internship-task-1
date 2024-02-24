function changeColor(element) {
    
    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
  
    
    element.classList.add('active');
  }