'use strict';

var sidebarMobile = document.querySelector(".sidebar__mobile");
var sidebarWrapper = document.querySelector(".sidebar__wrapper");
var slideout = document.querySelector(".slideout");
var wrapper = document.querySelector(".wrapper");
var burgerActive = document.querySelector(".slideout__burger")
var body = document.body;
var html = document.querySelector(".html");
var overlay = document.querySelector(".overlay");

slideout.addEventListener("click", function(evt) {
    evt.preventDefault();
    wrapper.classList.toggle("wrapper--active"),
        slideout.classList.toggle("slideout--active"),
        sidebarMobile.classList.toggle("sidebar__mobile--active"),
        sidebarWrapper.classList.toggle("sidebar__wrapper--active"),
        html.classList.toggle("overflow"),
        body.classList.toggle("overflow"),
        // html.classList.toggle("overflow"),
        burgerActive.classList.toggle("slideout__burger--active"),
        // body.classList.toggle("overflow-hide"),
        overlay.classList.toggle("overlay--active");
});

overlay.addEventListener("click", function(evt) {
    evt.preventDefault();
    wrapper.classList.toggle("wrapper--active"),
        slideout.classList.toggle("slideout--active"),
        sidebarMobile.classList.toggle("sidebar__mobile--active"),
        sidebarWrapper.classList.toggle("sidebar__wrapper--active"),
        html.classList.toggle("overflow"),
        body.classList.toggle("overflow"),
        // html.classList.toggle("overflow"),
        // aside.classList.toggle("sidebar-open-mobile"),
        burgerActive.classList.toggle("slideout__burger--active"),
        // body.classList.toggle("overflow-hide"),
        overlay.classList.toggle("overlay--active");
});