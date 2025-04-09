
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector(".hamburger");
    const navlinks = document.querySelector(".navlinks");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navlinks.classList.toggle("active");
    });
});


var typed = new Typed(".multiple-text",{
    strings: ["Graphic Designer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})
            //   ----------------------------- skills-section ----------------------------

const skillsSection = document.querySelector ('.skills-section');
    const skillBars = document.querySelectorAll ('.skill-progress');
    const percentnumber = document.querySelectorAll ('.percent-number');

    let skillAnimated = false;

    function animateSkills() {
        if (skillAnimated) return;
        skillBars.forEach((bar, index)=>{

        const percent = parseInt(bar.getAttribute('data-percent'));
        bar.style.width = percent +'%';
        let currentPercent = 0; 
        const updateCounter = setInterval(()=>{
            if (currentPercent < percent) {
                currentPercent++;
                percentnumber[index].textContent = currentPercent; 
            }
            else{
                clearInterval(updateCounter);
            }
        } ,20);

        });
        skillAnimated = true;
    }
   
    // ----------------------------- stats-section ----------------------------

const statsSection = document.querySelector('.stats-section');
const counters = document.querySelectorAll('.stats-number');

let statsAnimated = false;

function animatestate() {
    if (statsAnimated) return;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // animation in milliseconds
        const increment = target / (duration / 16); // 60fps

        let currentCount = 0;

        const updateCount = () => {
            if (currentCount < target) {
                currentCount += increment;
                counter.textContent = Math.floor(currentCount);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target;
            }
        };

        updateCount();
    });

    statsAnimated = true;
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animatestate();
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

statsObserver.observe(statsSection);




                // -----------------------------For-skills-section---------------------------

    const skillsObserver = new IntersectionObserver((enteries)=>{

        enteries.forEach(entry =>{
           
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target )
            }
        })
    } ,observerOptions)

       
    skillsObserver.observe(skillsSection);


    document.addEventListener('DOMContentLoaded', () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
    
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
    
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
    
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    });
    

            // ------------------------------- back to top button ------------------------------

// Show "Back to Top" button when scrolling down
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll to the top when "Back to Top" button is clicked
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


                    // ---------------------------- about-us section Animation ---------------------------
    
                    


  AOS.init();



