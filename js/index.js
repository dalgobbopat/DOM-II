// Your code goes here



const headerColor = document.querySelector('header');

// console.log(headerColor);
headerColor.addEventListener('dblclick', (event) => {
    console.log(headerColor);
    console.log(event);
    event.target.style.backgroundColor = 'red';

});

const midColor = document.querySelector('.content-destination');

// console.log(headerColor);
midColor.addEventListener('mouseenter', (event) => {
    console.log(headerColor);
    console.log(event);
    event.target.style.backgroundColor = 'green';

});

const myButton = document.querySelector('.btn');

// console.log(headerColor);
myButton.addEventListener('mouseenter', (event) => {

    myButton.style.transform = 'scale(3.2)';


});

const myIntro = document.querySelector('.intro');

// console.log(headerColor);
myIntro.addEventListener('click', (event) => {

    myIntro.style.transform = 'scale(1.2)';


});

navlinks.addEventListener('click', (event) => {
    event.preventDefault();
});