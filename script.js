function myFunction() {
    var x = document.getElementById("links-small");
    var icon1 = document.getElementById("icon-bars");
    var icon2 = document.getElementById("icon-x");
    if (x.style.display === "block") {
      x.style.display = "none";
      icon1.style.display = "block";
      icon2.style.display = "none";
    } else {
      x.style.display = "block";
      icon1.style.display = "none";
      icon2.style.display = "block";
    }
    
  }
  
  