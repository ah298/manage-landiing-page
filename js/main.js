/* VARIABLES */ 

// NAVIGATION MENU  
const menuButton = document.querySelector("#menu-button");
const menuIcon = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const navList = document.querySelector(".nav-list")
const lockScroll = document.querySelector ("body");

// TESTIMONIAL SLIDE CONTROLLER
const testimonyCard= document.querySelector('.testimonial-container');
const testimonyCardController= document.querySelectorAll('.testimonial-card-control');


/* NAVIGATION MENU */ 
menuButton.addEventListener('click', ()=>{

    if (menuIcon.classList.contains("close")){
        menuIcon.classList.remove("close");
        menuIcon.classList.add("open");
        
        lockScroll.classList.add("open");
        
        overlay.classList.remove("close");
        overlay.classList.add("open");

        navList.classList.remove("close");
        navList.classList.add("open");
    }

    else if(menuIcon.classList.contains("open")){
        menuIcon.classList.remove("open");
        menuIcon.classList.add("close");
        
        lockScroll.classList.remove("open");

        overlay.classList.remove("open");
        overlay.classList.add("close");

        navList.classList.remove("open");
        navList.classList.add("close");
    }
});


/* TESTIMONIAL SLIDE CONTROLLER */ 
testimonyCardController.forEach(function(controller, i){

    controller.addEventListener("click", function(){
        
        const activeController= document.querySelector('.testimonial-card-control.active');

        //Remove .active on previous active controller
        activeController.classList.remove("active");
        
        //Add .active to current active card controller
        controller.classList.add("active");
        
        testimonyCard.style.transform = `translateX(${i*-25}%)`;
    })
})

