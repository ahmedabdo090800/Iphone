let img_changer = document.getElementById('img_changer');
let container = document.querySelector('.container');

function changer(phone){
    img_changer.src=phone

}
function changer2(color){
    container.style.background=color

}
function golden(){
    container.style= `background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
    radial-gradient(ellipse farthest-corner at left top, #FEDB37 0%, #FDB931 8%,#9f7928 30%, #5d4a1f 62.5%, #5d4a1f 100%)`;
}
