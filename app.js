function navi() {
    var x = document.getElementById("maxjander");
    if (x.className === "navi") {
      x.className += " responsive";
    } else {
      x.className = "navi";
    }
  }