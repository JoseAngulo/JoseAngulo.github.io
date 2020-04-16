
function scrollToTop(){
	let gameContainer = document.getElementById("gameContainer");
    gameContainer.classList.remove("d-none");

    gameContainer.addEventListener("transitionend", hideBuildingBackground, false);
    gameContainer.classList.remove('scaleDownGameContainer');
    gameContainer.classList.add('scaleUpGameContainer');

	gameContainer.scrollIntoView({
		behavior: 'smooth', block:'start', 

	});

}

function hideBuildingBackground(){

    document.getElementById("building_bg").classList.add("d-none");

    document.getElementById("gameContainer").scrollIntoView({
        behavior: 'smooth', block:'start', 

    });
}


