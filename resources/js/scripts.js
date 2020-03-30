
function scrollToTop(){
	let gameContainer = document.getElementById("gameContainer");

	gameContainer.scrollIntoView({
		behavior: 'smooth', block:'center', 

	});

	setTimeout(function(){
		let building_info_container = document.getElementById("building_bg");
		building_info_container.classList.add("d-none");
		building_info_container.classList.remove("d-flex");
	}, 1000);

}


