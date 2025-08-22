const navbar = document.getElementById("navbar");
const aboutDiv = document.getElementById("about_us");

window.addEventListener("scroll", () => {
	const rect = aboutDiv.getBoundingClientRect();
	if (rect.bottom < 0) {
		navbar.style.transform = "translateY(-100%)";
		navbar.style.opacity = "0";
		navbar.style.pointerEvents = "none";
	} else {
		navbar.style.transform = "translateY(0)";
		navbar.style.opacity = "1";
		navbar.style.pointerEvents = "auto";
	}
});
