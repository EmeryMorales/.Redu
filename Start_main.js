var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("images");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    } 

    slides[slideIndex-1].style.display = "flex";
    slides[slideIndex-1].style.justifyContent = "center";
    slides[slideIndex-1].style.alignItems = "center";
    setTimeout(showSlides, 4000);
}