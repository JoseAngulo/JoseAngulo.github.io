
function scrollToTop(){
	let gameMainWrapper = document.getElementById("gameMainWrapper");

    gameMainWrapper.removeEventListener("transitionend", showFixedArrowButton, false);
    gameMainWrapper.addEventListener("transitionend", hideBuildingBackground, false);

    gameMainWrapper.scrollIntoView({
        behavior: 'smooth', block:'start', 

    });

    document.getElementById("fixedArrowButton").classList.add("d-none");
    document.getElementById("footer").classList.add("d-none");
    gameMainWrapper.classList.remove("d-none");
    gameMainWrapper.classList.remove('scaleDownGameContainer');
    gameMainWrapper.classList.add('scaleUpGameContainer');

}

function hideBuildingBackground(){

    document.getElementById("building_bg").classList.add("d-none");
    
}

function showFixedArrowButton(){

    document.getElementById("fixedArrowButton").classList.remove("d-none");
    
}



