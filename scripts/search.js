function toggleEngine() {

  var gSearch = document.getElementById("gSearch");
  var ytSearch = document.getElementById("ytSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);

  if (logo.indexOf("youtube.svg") != -1) {
    document.getElementById("engineLogo").src = "icons/google.svg";
    gSearch.style.display = "block";
    ytSearch.style.display = "none";
  } else {
    document.getElementById("engineLogo").src = "icons/youtube.svg";
    ytSearch.style.display = "block";
    gSearch.style.display = "none";
  }

  document.getElementById("textField").reset();
}
