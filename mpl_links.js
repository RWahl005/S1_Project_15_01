"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Ryan Wahl
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

// Calls the function when the page is loaded.
window.addEventListener("load", function () {
    //get all of the select elements within the govLinks forms.
    var allSelect = document.forms.govLinks.getElementsByTagName("select");
    // Loops through all of the allSelect elements
    for (var i = 0; i < allSelect.length; i++) {
        // Add the onchange handler to the selector.
        allSelect[i].onchange = function (e) {
            // Changes the value of the url bar to go to the website directed to from the selector.
            location.href = e.target.value;
        };
    }
});