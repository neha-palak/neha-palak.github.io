function go(page){

window.location.href = page;

}



function toggleMenu(){

const panel =
document.getElementById(
"sidePanel"
);

panel.classList.toggle(
"open"
);

}

// function go(page){

// window.location.href = page;

// }



// window.addEventListener(
// "DOMContentLoaded",

// ()=>{

// const menu =
// document.getElementById(
// "sidePanel"
// );

// const menuBtn =
// document.getElementById(
// "menuToggle"
// );



// if(menuBtn && menu){

// menuBtn.addEventListener(
// "click",

// (e)=>{

// e.stopPropagation();

// menu.classList.toggle(
// "open"
// );

// }

// );



// document.addEventListener(
// "click",

// (e)=>{

// if(

// !menu.contains(e.target)

// &&

// !menuBtn.contains(e.target)

// ){

// menu.classList.remove(
// "open"
// );

// }

// });

// }

// });