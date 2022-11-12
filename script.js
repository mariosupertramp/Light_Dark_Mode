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
        localStorage.setItem('theme','dark');
        modoOscuro();
    }else{
        document.documentElement.setAttribute('data-theme','light');
        localStorage.setItem('theme','light');
        modoClaro();
    }
}


function modoOscuro(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Modo Oscuro';
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    imagen('dark');

}

function modoClaro(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Modo Claro';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    imagen('light');
}

function imagen(tipo){

    image1.src = `img/undraw_proud_coder_${tipo}.svg`;
    image2.src = `img/undraw_feeling_proud_${tipo}.svg`;
    image3.src = `img/undraw_conceptual_idea_${tipo}.svg`;

}

// evento listener
toogleSwitch.addEventListener("change", switchTheme);


// Checa el localStorage para mantener el therme
const temaActual = localStorage.getItem('theme');

if(temaActual){

    document.documentElement.setAttribute('data-theme',temaActual);
    if(temaActual === 'dark'){
        toogleSwitch.checked = true;
        modoOscuro();
    }
}