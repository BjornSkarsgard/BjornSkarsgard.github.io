'use strict';

var aside = document.querySelector(".sidebar__mobile");
var slideout = document.querySelector(".slideout");
var materials = document.querySelector(".wrapper");
var body = document.body;


document.documentElement.classList.remove("no-js");
console.log("test");

slideout.addEventListener("click", function(evt) {
    evt.preventDefault();
    materials.classList.toggle("wrapper-transform");
});

slideout.addEventListener("click", function(evt) {
    evt.preventDefault();
    aside.classList.toggle("sidebar-open-mobile");
});



// slideout.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     materials.classList.toggle("materials-transform");
// });