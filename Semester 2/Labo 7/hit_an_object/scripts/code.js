let global={
    IMAGE_COUNT : 5,
    IMAGE_SIZE : 48,
    IMAGE_PATH_PREFIX : "images/",
    IMAGE_PATH_SUFFIX : ".png",
    MOVE_DELAY : 3000,
    score : 0,
    timeOutId : 0
}

const setup = () => {

};

const showAlert = () => {

};

const startGame = () => {

};

document.getElementById("Start").addEventListener("click", startGame);
document.getElementById("0").addEventListener("click", showAlert);
window.addEventListener("load", setup);