const prevBtn =document.querySelector(".gallery__prev-btn")
const nextBtn = document.querySelector(".gallery__next-btn")
const galleryImage = document.querySelector(".gallery__image img")
const closeBtn = document.querySelector(".gallery__close")
const gallery = document.querySelector(".gallery")
const images = document.querySelectorAll(".img__slide img") 

var currentIndex = 0

images.forEach((item, index) => {
    item.addEventListener("click", function(){
        currentIndex = index
        galleryImage.src = images[currentIndex].src
        gallery.classList.toggle("show")
    })
})

var nextImageHandler = function() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    galleryImage.src = images[currentIndex].src
}

var prevImageHandler = function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length-1;
    }
    galleryImage.src = images[currentIndex].src
    console.log(currentIndex)
}

nextBtn.addEventListener("click", nextImageHandler)

prevBtn.addEventListener("click", prevImageHandler)

closeBtn.addEventListener("click", function() {
    gallery.classList.toggle("show")
})
