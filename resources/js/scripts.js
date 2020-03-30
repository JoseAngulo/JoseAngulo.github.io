
function scrollToTop(){
	let gameContainer = document.getElementById("gameContainer");

	gameContainer.scrollIntoView({
		behavior: 'smooth', block:'center', 

	});

	let building_info_container = document.getElementById("scroll-arrow-button");
	building_info_container.classList.add("d-none");

}


