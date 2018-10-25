'use strict';

// this is a comment

// write a message to browser console
console.log('You can add messages for app or testing with this method');

// trick button element
const trickButton = document.getElementById("trickBtn");

// wire up click event on trick button
trickButton.addEventListener('click', function() {
    // intro heading tag
    const headingTag = document.querySelectorAll('section.section-intro h1.heading-intro')[0];
    if (headingTag.innerHTML === 'Harrisburg Map Makers') {
        // set html content
        headingTag.innerHTML = 'Pennsylvania Cartographers';
    } else {
        // set html content
        headingTag.innerHTML = 'Harrisburg Map Makers';
    };
});