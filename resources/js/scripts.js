
function scrollToTop(){
	let gameContainer = document.getElementById("gameContainer");

    gameContainer.removeEventListener("transitionend", showFixedArrowButton, false);
    gameContainer.addEventListener("transitionend", hideBuildingBackground, false);

    gameContainer.scrollIntoView({
        behavior: 'smooth', block:'start', 

    });

    document.getElementById("fixedArrowButton").classList.add("d-none");
    document.getElementById("footer").classList.add("d-none");
    gameContainer.classList.remove("d-none");
    gameContainer.classList.remove('scaleDownGameContainer');
    gameContainer.classList.add('scaleUpGameContainer');

}

function hideBuildingBackground(){

    document.getElementById("building_bg").classList.add("d-none");
    
}

function showFixedArrowButton(){

    document.getElementById("fixedArrowButton").classList.remove("d-none");
    
}


