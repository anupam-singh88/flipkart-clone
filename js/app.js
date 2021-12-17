let burger = document.querySelector(".burger");
let navbar = document.querySelector(".nav");
let resp = document.querySelector(".navItem");


// console.log(resp);
burger.addEventListener('click', () => {

	navbar.classList.toggle('h-nav');
	resp.classList.toggle('v-class');
})
