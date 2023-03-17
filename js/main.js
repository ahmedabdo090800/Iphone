

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let o = document.getElementById('o');


function changer(color){
    o.style.background=color
    localStorage.setItem('color_sto',color)

}
o.style.background=localStorage.getItem('color_sto');

function mytoggle() {
    var toggle = document.querySelector('.toggle');
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
    } else {
        toggle.style.display = "none";
    }
    toggle.classList.add('div-show');
  }

