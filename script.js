let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let submit = document.querySelector('.btn')

document.addEventListener("click", function(event) {
    if (event.target === submit) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data
        let form = document.querySelector('#contactForm');
        let formData = new FormData(form); // Collects form data as key-value pairs
        let details = {};

        // Convert FormData to an object
        formData.forEach((value, key) => {
            details[key] = value;
        });

        console.log("Form Details:", details);

        // Store details in localStorage
        localStorage.setItem('userDetails', JSON.stringify(details));

        // Retrieve stored details (optional, for verification)
        const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
        console.log("Stored Details from localStorage:", storedDetails);

        // Example: Send the details to a server (replace with your API endpoint)
        fetch('https://your-api-endpoint.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Form submitted successfully:", data);
            alert("Your message has been sent successfully!");
        })
        .catch(error => {
            console.error("Error submitting the form:", error);
            alert("There was an error sending your message. Please try again later.");
        });
    }
});


window.onscroll = () => {
    // your scroll logic here
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
    
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
        })
      }
    })
  }



menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

