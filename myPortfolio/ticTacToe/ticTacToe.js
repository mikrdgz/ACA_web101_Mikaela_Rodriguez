var gameMarker = "x"

function changeMarkerToX(){ 
    console.log("here is X")
    gameMarker = "x"

} 

function changeMarkerToO(){ 
    console.log("here is O")
    gameMarker = "o"
}


function placeMark(elem) {
    document.getElementById(elem).innerHTML = gameMarker;
}

