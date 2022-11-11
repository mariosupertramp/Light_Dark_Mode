const toogleSwitch = document.querySelector('input[type="checkbox"]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme','dark');
        modoOscuro();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        modoClaro();
    }
}


function modoOscuro(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';

}


toogleSwitch.addEventListener("change", switchTheme);
