
document.addEventListener("DOMContentLoaded", () => {
  
    const currentPage = window.location.pathname;

   
    if (currentPage.includes("index.html")) {
        alert("Hello! Welcome to the Home page of ABC News!");
    } else if (currentPage.includes("sports.html")) {
        alert("Hello! Welcome to the Sports section of ABC News!");
    } else if (currentPage.includes("technology.html")) {
        alert("Hello! Welcome to the Technology section of ABC News!");
    } else if (currentPage.includes("politics.html")) {
        alert("Hello! Welcome to the Politics section of ABC News!");
    } else if (currentPage.includes("connect.html")) {
        alert("Hello! Welcome to the Connect page of ABC News!");
    }

    
   

    
    const form = document.querySelector("form");

    
    if (form) {
        form.addEventListener("submit", (e) => {
            

          
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                
                alert("Thank you for your message! We will get back to you soon.");
                form.reset(); 
            } else {
                
                alert("Please fill out all fields before submitting.");
            }
        });
    }
});

function toggleReadMore(button) {
    const fullText = button.previousElementSibling;
    const shortText = fullText.previousElementSibling;

    if (fullText.style.display === 'none') {
        fullText.style.display = 'inline';
        button.textContent = 'Read Less';
    } else {
        fullText.style.display = 'none';
        button.textContent = 'Read More';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const fullTexts = document.querySelectorAll('.full-text');
    fullTexts.forEach(fullText => {
        fullText.style.display = 'none';
    });
});

