// setting up an array with objects as indexes so i can run a forEach on and pull the value to insert on the html

const testimonial = [
    {
        id: 1,
        image: 'url(/images/image1.jpg)',
        text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus similique sequi magni saepe eligendi odio, perferendis!"',
        name: 'The43rdSensei',
        role: 'Frontend web developer',
        company: 'Doom labs'
    },

    {
        id: 2,
        image: 'url(/images/image2.jpg)',
        text: '"Praesent congue quis metus id imperdiet. Suspendisse placerat erat sed posuere viverra. Pellentesque sapien augue."',
        name: 'Busayo',
        role: 'software engineer',
        company: 'Kxn labs'
    },

    {
        id: 3,
        image: 'url(/images/image3.jpg)',
        text: '"Nullam lobortis vulputate facilisis. Integer et mauris ex. Donec luctus accumsan velit nec faucibus. Sed."',
        name: 'Chidera',
        role: 'software engineer',
        company: 'CHI labs'
    },

    {
        id: 4,
        image: 'url(/images/image4.jpg)',
        text: '"Curabitur vel tellus ornare, egestas nisl in, sodales sem. Morbi rutrum ex mauris, in finibus."',
        name: 'Farouk',
        role: 'Backend developer',
        company: 'Far labs'
    }
];

// selecting the classes to be passed the inputs from the array

const text = document.querySelector('.quote');
const bgImage = document.querySelector('.left');
const profileName = document.getElementById('name');
const job = document.getElementById('job');
const company = document.getElementById('company');

//  initial item 
let currentItem = 0;

//load initial item as the page loads 
window.addEventListener('DOMContentLoaded', function(){
    showProfile(currentItem);
})

function showProfile () {
    const item = testimonial[currentItem];
    bgImage.style.backgroundImage = item.image;
    profileName.textContent = item.name;
    job.textContent = item.role;
    company.textContent = item.company; 
    text.textContent = item.text; 
}

// selecting the buttons and adding event listeners to both 

const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');

leftBtn.addEventListener('click', function () {
    currentItem--;

    if (currentItem < 0 ) {
        currentItem = testimonial.length-1;
    }
    
    showProfile();
    
})

rightBtn.addEventListener('click', function () {
    currentItem++;

    if (currentItem > testimonial.length-1) {
        currentItem = 0;
    }

    showProfile();
})

// preventing the page from refreshing, following the click of the submit button

// adding an eventlistener to form to listen for a submit event

const signInForm = document.getElementById('signin-form');
const signInInputs = document.querySelectorAll('.signin-input');

signInForm.addEventListener('submit', function (event) {
    event.preventDefault();
    signInInputs.forEach(function(input) {
        console.log(input.value);
        input.value = "";
    })
})

const signUpForm = document.getElementById('signup-form');
const signUpInputs = document.querySelectorAll('.signup-input');

signUpForm.addEventListener('submit', function (event) {
    event.preventDefault();
    signUpInputs.forEach(function(input) {
        console.log(input.value);
        input.value = "";
    })
})