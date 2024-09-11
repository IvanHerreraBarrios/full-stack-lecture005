
function inform(){
    console.log("Function without parameters");
}

function today() {
    let today = new Date();
    let divLecture4 = document.getElementById("lecture4");

    divLecture4.innerHTML = today;
}