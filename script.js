const contenitore = document.querySelector(".team-container");


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




    



// creo un ciclo per ogni posizione
for(let i = 0; i < profili.length; i++ ){
    let profiloiesimo = profili [i];

    // creo la team-card
let  teamCardEl = document.createElement ("div");
teamCardEl.classList.add ("team-card");

// creo la team-card-img e il tag img
let CardImgEl = document.createElement ("div");
CardImgEl.classList.add ("card-image");

let imgEl =document.createElement ("img");

// creo card-text e i correlati tag
let textCardEl = document.createElement ("div");
textCardEl.classList.add ("card-text");

let textNome = document.createElement ("h3");
let textRuolo = document.createElement ("p");



    imgEl.src = profiloiesimo.foto;
    textNome.append(profiloiesimo.nome);
    textRuolo.append (profiloiesimo.ruolo);

    // console.log(profiloiesimo.foto);
    // console.log(profiloiesimo.nome);
    // console.log(profiloiesimo.ruolo);

    


    
    // sezione img
    teamCardEl.append(CardImgEl);
    CardImgEl.append(imgEl);

    // sezione text
    textCardEl.append (textNome);
    textCardEl.append (textRuolo);
    teamCardEl.append(textCardEl);






    contenitore.append(teamCardEl);

}
