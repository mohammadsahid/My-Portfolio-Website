let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let nightMode = document.getElementById("night-mode");
let dayMode = document.getElementById("day-mode");
let verticalNav = document.querySelector('.menu');

nightMode.addEventListener("click", () => {
  nightMode.style.display = "none";
  dayMode.style.display = "block";
  document.documentElement.style.setProperty('--bg-color', '#080808'); 
  document.documentElement.style.setProperty('--text-color','white');
  document.documentElement.style.setProperty('--main-color','#00ffee');
  document.documentElement.style.setProperty('--second-bg-color','#131313');
  document.querySelector(".header").style.backgroundColor = "#0000006e";
  document.querySelector(".btn2").style.backgroundColor = "black";
  
});    
dayMode.addEventListener("click", () => {
  dayMode.style.display = "none";
  nightMode.style.display = "block"; 
  document.documentElement.style.setProperty('--bg-color', 'white');
  document.documentElement.style.setProperty('--text-color','#080808');
  document.documentElement.style.setProperty('--main-color','#0056b3');
  document.documentElement.style.setProperty('--second-bg-color','rgb(231, 231, 231)');
  document.querySelector(".header").style.backgroundColor = "rgb(235, 235, 235)";
  document.querySelector(".btn2").style.backgroundColor = "white";
  // 8e44ad 0056b3
});

menuIcon.addEventListener("click", () => {
  verticalNav.style.display = "block";
});

const contact_Form = document.getElementById('contactForm')

contact_Form.addEventListener('submit' , (e) =>{
  e.preventDefault();
  alert('Thank you for your Message, I will get back to you soon');
  contact_Form.reset();
});