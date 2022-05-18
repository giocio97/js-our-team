const container = document.getElementsByClassName (".team-container");


const profili = [
    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder & CEO",
        "foto" : " ./img/wayne-barnett-founder-ceo.jpg",
    },

    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : ".//img/angela-caroll-chief-editor.jpg",
    },

    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" :"./img/walter-gordon-office-manager.jpg",
    },

    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "./img/angela-lopez-social-media-manager.jpg",
    },

    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "./img/scott-estrada-developer.jpg",
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "./img/barbara-ramos-graphic-designer.jpg",
    },
];

console.log(profili); 


// creo la team-card
let  teamCardEl = document.createElement ("div");
    teamCardEl.classList.add ("team-card");

// creo la team-card-img e il tag img
let CardImgEl = document.createElement ("div");
    CardImgEl.classList.add ("card-image");

let imgEl =document.createElement ("img");

// creo card-text e i correlati tag
let textmCardEl = document.createElement ("div");
    textmCardEl.classList.add ("card-text");

let textNome = document.createElement ("h3");
let textRuolo = document.createElement ("p");


    



// creo un ciclo per ogni posizione
for(let i = 0; i < profili.length; i++ ){
    let profiloiesimo = profili [i];


}
