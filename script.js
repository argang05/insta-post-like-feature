const pic = document.getElementById("container");
const likeIcon = document.querySelector("i");

//Adding eventListener on double click on pic:
pic.addEventListener("dblclick", function () {
    //Changing scale and opacity on double click to make the like icon visible
    likeIcon.style.transform = "translate(-50%,-50%) scale(1)";
    likeIcon.style.opacity = 0.8;
    setTimeout(() => {
        //Setting a duration after which opacity value will automatically become 0 and like icon 
        //disappears
        likeIcon.style.opacity = 0;
    }, 750);
    setTimeout(() => {
        //Setting a duration after which scale value will automatically become 0 and like icon 
        //disappears
        likeIcon.style.transform = "translate(-50%,-50%) scale(0)";
    }, 900);
})