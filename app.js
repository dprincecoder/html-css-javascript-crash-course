const header = document.querySelector(".header");
const btn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const hiddenEl = document.querySelector(".hidden");
const navList = document.querySelector(".nav-list");

btn.addEventListener("click", () => {
	header.style.backgroundColor = "blue";
	hiddenEl.style.right = "0";
});

header.addEventListener("mousemove", () => {
	navList.style.listStyle = "none";
});

header.addEventListener("mouseleave", () => {
	navList.style.listStyle = "dotted";
});

closeBtn.addEventListener('click', () => {
    hiddenEl.style.right = '-30rem'
})