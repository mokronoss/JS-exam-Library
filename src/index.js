
//   ****************   IMPORT   ************************
import $ from 'jquery';
import { books } from './data/books';
import random from './data/functionsG';


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

// //TODO
// const randomBook = books[random(books.length)];
// header.add( `
//     <h2>le bestseller recommondé </h2>
//     <figure>
//         <img src="${randomBook.image}" />
//     </figure>
//     <h3>${randomBook.description}</h3>

// `);

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
            fig.append(`<img src="/assets/images/book-default.png"/>`);
        }
        else{
            fig.append(`<img src="${book.image}" />`);
        } 
    

        //separate div for text - flex
        const divT = $('<div></div>');
        divT.addClass('divText');
        divT.attr('id','divText');
        divT.append(`
        <h3 id="titre">Titre : ${book.titre}</h3>
        <h3 id="auteur"> Auteur : ${book.auteur}</h3>
        <p id="resume"> Description : ${book.resume}</p>
        <h3 id="categorie"> Categorie : ${book.categorie}</h3>`
        );
        divBook.append(divP);
        divBook.append(divT);
        divSectionL.append(divBook);

        //add btn in  bottom of div text
        const btnEmprunter =$('<button></button>');  
        btnEmprunter.attr('id','btnEmprunter');
        btnEmprunter.html('Emprunter');
        divT.append(btnEmprunter);

        // -------------- ADD EVENT BUTTON EMPRUNTER ---------------------
        // list before to not recreate and add elements


        btnEmprunter.on('click', function() {
            console.log('testB');
            const list = $('<ul></ul>');
            list.attr('id', 'liste');
        const listItem = $('<li></li>');
        listItem.attr=('id', 'listItem');
        const contenu = $('#divText').clone();
        listItem.append(contenu);
        console.log(list);
        console.log(listItem);
        });
    }

const divSectionR = $('<div></div>');
divSection.append(divSectionR);
divSectionR.attr('id', 'divSection');


//   ****************   FOOTER   ************************

const footer = $('<footer></footer>');
// const footerTitre = $('<h2>Vos Livres</h2>');

// footer.append(list);
// const list = $('#liste').get();
// footer.append(list);
divG.append(footer);
