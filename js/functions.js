var jobTitle = "<span>FastTruckIT</span>";
var mottoElement = document.getElementById("motto");

//mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
mottoElement.innerHTML += " & " + jobTitle;

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

function showPage(id) {
  hideAllPages();
  show(id);
}

showPage("home");
