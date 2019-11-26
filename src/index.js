
//   ****************   IMPORT   ************************
import $ from 'jquery';
import { books } from './data/books';


//   ****************   GENERAL   ***********************

const divG = $('<div></div>');
$('body').append(divG);
divG.addClass('container');

//   ****************   HEADER   ************************
const header = $('<header></header>');
const h2 = $('<h2>Ma Bibliteque du Quartier</h2>');
header.append(h2);
divG.append(header);
header.css({ 'background-color': 'grey' });


//   ****************   SECTION   ***********************

//   ---------  CREATE Liste Books ------------------
//TODO function
const divSection = $('<div></div>');
divG.append(divSection);
divSection.attr('id', 'divSection');

const divSectionL = $('<div></div>');
divSection.append(divSectionL);
divSectionL.attr('id', 'divSectionL');

    for (const book of books) {
        //div for 1 book
        const divBook = $('<div></div>');
        divBook.addClass('divBook');
        //separate div for photo - flex
        const divP = $('<div></div>');
        divP.addClass('divPhoto');
        //I'm writing separetly to add if for img
        const fig = $('<figure></figure>');
        const img = $('<img>');
        divP.append(fig);
        if(book.image==='') {
            fig.append(`<img src="/assets/images/book-default.png"/>`)
        }
        else{
            fig.append(`<img src="${book.image}" />`)
        }  
        //add btn in  bottom of img
        const btnEmprunter =$('<button></button>');  
        btnEmprunter.attr('id','btnEmprunter');
        btnEmprunter.html('Emprunter');
        fig.append(btnEmprunter);


        // -------------- ADD EVENT BUTTON EMPRUNTER ---------------------
        btnEmprunter.on('click', function() {
            console.log('testButton')
        });

        //separate div for text - flex
        const divT = $('<div></div>');
        divP.addClass('divText');
        divT.append(`
        <h3 id="titre">Titre : ${book.titre}</h3>
        <h3 id="auteur"> Auteur : ${book.auteur}</h3>
        <p id="resume"> Description : ${book.resume}</p>
        <h3 id="categorie"> Categorie : ${book.categorie}</h3>`,
        );
        divBook.append(divP);
        divBook.append(divT);
        divSectionL.append(divBook);
    }

const divSectionR = $('<div></div>');
divSection.append(divSectionR);
divSectionR.attr('id', 'divSection');


//   ****************   FOOTER   ************************