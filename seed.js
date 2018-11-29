require('dotenv').config();
require('./config/database');
var Ailment = require('./models/ailment');

var ailments = [
    { img: "img/backache.png", name: "Backache" },
    { img: "img/bloodynose.png", name: "Bloodynose" },
    { img: "img/cavity.png", name: "Cavity" },
    { img: "img/chestpain.png", name: "Chestpain" },
    { img: "img/chills.png", name: "Chills" },
    { img: "img/cold.png", name: "Cold" },
    { img: "img/cough.png", name: "Cough" },
    { img: "img/cramps.png", name: "Cramps" },
    { img: "img/diarrhea.png", name: "Diarrhea" },
    { img: "img/earache.png", name: "Earache" },
    { img: "img/fever.png", name: "Fever" },
    { img: "img/headache.png", name: "Headache" },
    { img: "img/hiccups.png", name: "Hiccups" },
    { img: "img/infection.png", name: "Infection" },
    { img: "img/insectbite.png", name: "Insectbite" },
    { img: "img/laryngitis.png", name: "Laryngitis" },
    { img: "img/rash.png", name: "Rash" },
    { img: "img/runnynose.png", name: "Runnynose" },
    { img: "img/shortnessofbreath.png", name: "Shortness of Breath" },
    { img: "img/sorethroat.png", name: "Sore Throat" },
    { img: "img/stiffneck.png", name: "Stiff Neck" },
    { img: "img/stomachache.png", name: "Stomach Ache" },
    { img: "img/sunburn.png", name: "Sunburn" },
    { img: "img/toothache.png", name: "Toothache" },
    { img: "img/virus.png", name: "Virus" },
    { img: "img/wart.png", name: "Wart" }
];

Ailment.deleteMany({}) 
    .then(() => {
        return Ailment.insertMany(ailments);
    })
    .then(() => {
        process.exit();
    });
