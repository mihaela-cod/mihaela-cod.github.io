var jobTitle = "<span>FastTruckIT</span>";
var mottoElements = document.getElementsByClassName("motto-txt");

for (let index = 0; index < mottoElements.length; index++) {
  var element = mottoElements[index];
  element.innerHTML += " @ " + jobTitle;
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}

var activePage = "home";

function showPage(id) {
  hideAllPages();
  show(id);
  document.getElementById("menu-" + activePage).classList.remove("active");
  document.getElementById("menu-" + id).classList.add("active");
  activePage = id;
}

showPage(activePage);
