var slidePosition = 1;
// forward/Back controls
function plusSlides(n) {
	SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
	SlideShow((slidePosition = n));
}

function SlideShow(n) {
	var i;
	//console.log("hi");
	var slides = document.getElementsByClassName("banner-container");
	var circles = document.querySelectorAll(".slide-content");
	console.log(circles);

	if (n > slides.length) {
		slidePosition = 1;
	}
	if (n < 1) {
		slidePosition = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		// slides[i].style.className.replace(" show", "");
		slides[i].classList.remove("show");
		slides[i].classList.add("hide");
		console.log(slides[i]);
	}
	for (i = 0; i < circles.length; i++) {
		circles[i].classList.remove("selected");
	}
	slides[slidePosition - 1].classList.remove("hide");
	slides[slidePosition - 1].classList.add("show");
	circles[slidePosition - 1].scrollIntoView({
		behavior: "smooth",
		inline: "center",
	});
	circles[slidePosition - 1].classList.add("selected");
	console.log(circles);
}

(() => {
	SlideShow(slidePosition);
})();
