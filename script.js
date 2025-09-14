// Welcome alert
function showWelcomeAlert(){
  alert("Welcome to Qasim Tech! Explore latest tech articles and blogs.");
}

// Clock in footer
function updateClock(){
  const clock = document.getElementById('clock');
  if(clock){
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }
}
setInterval(updateClock,1000);

// Add random tech tip in highlights
const addTechBtn=document.getElementById('addTechBtn');
if(addTechBtn){
  const techList=document.getElementById('tech-list');
  const tips=[
    "Learn Python for data analysis.",
    "Try building a JavaScript project today.",
    "Explore AI tools to boost productivity.",
    "Stay updated with CSS tricks."
  ];
  addTechBtn.addEventListener('click',()=>{
    const randomTip=tips[Math.floor(Math.random()*tips.length)];
    const li=document.createElement('li');
    li.textContent=randomTip;
    techList.appendChild(li);
  });
}

// Newsletter subscription
const newsletterForm=document.getElementById('newsletterForm');
if(newsletterForm){
  newsletterForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
  });
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you for contacting us! We will respond soon.");
    contactForm.reset();
  });
}

