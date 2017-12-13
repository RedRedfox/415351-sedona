var link = document.querySelector(".search-button");
var formSearch = document.querySelector(".search-form");
var arrivalDate = formSearch.querySelector("[name=arrival-date]");
var departureDate = formSearch.querySelector("[name=departure-date]");
var jsadults = formSearch.querySelector("[name=adults]");
var jskids = formSearch.querySelector("[name=kids]");

     
if (formSearch) {
  formSearch.classList.add("js-form-close");
} 

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  formSearch.classList.toggle("js-form-close");
  formSearch.classList.toggle("js-form-show");
  formSearch.classList.remove("form-error");
  arrivalDate.focus();
});
     
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  if (formSearch) {
  formSearch.classList.add("js-form-close");
    }
  }
});

formSearch.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !jsadults.value || !jskids.value) {
  evt.preventDefault();
  formSearch.classList.remove("form-error");
  formSearch.offsetWidth=formSearch.offsetWidth;
  formSearch.classList.add("form-error");
  }
});
