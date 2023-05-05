var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");

function showContent1() {
  content1.style.display = "flex";
  content2.style.display = "none";
}

function showContent2() {
  content1.style.display = "none";
  content2.style.display = "block";
}
