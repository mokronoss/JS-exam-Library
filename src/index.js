
//   ****************   IMPORT   ************************
import $ from 'jquery';
import { books } from './data/books';
import {random} from './data/functionsG';


//   ****************   GENERAL   ***********************

const divG = $('<div></div>');
$('body').append(divG);
divG.addClass('container');

//   ****************   HEADER   ************************
const header = $('<header></header>');
divG.append(header);
header.css({ 'background-color': '#e6e6e6' });

// //TODO
const randomBook = books[random(books.length)];
header.html(`
    <h1>Ma Bibliteque du Quartier</h1>
    <h2>le bestseller recommondé </h2>
    <figure>
        <img src="${randomBook.image}" />
    </figure>
    <h3 id="titre">Titre : ${randomBook.titre}</h3>
    <h3 id="auteur"> Auteur : ${randomBook.auteur}</h3>
    <p id="resume"> Description : ${randomBook.resume}</p>
    <h3 id="categorie"> Categorie : ${randomBook.categorie}</h3>
`);

//   ****************   SECTION   ***********************

//   ---------  CREATE Liste Books ------------------
//TODO function
const divSection = $('<div></div>');
divG.append(divSection);
divSection.attr('id', 'divSection');

const divSectionL = $('<div></div>');
divSection.append(divSectionL);
divSectionL.attr('id', 'divSectionL');



let count = 0;
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
        btnEmprunter.html('Reserver');
        divT.append(btnEmprunter);

                	//   -------------- BONUS  COULEUR BACGROUND CATEGORIE ---------------------
	    if (book.categorie === 'essai') {
           divT.css({ 'background-color': '#ffffbe' })
        }
        if(book.categorie === 'roman') {
            divT.css({ 'background-color': '#e5ffbe' })
         }
         if(book.categorie === 'bd') {
            divT.css({ 'background-color': '#b3c6c6' })
        }

        // -------------- ADD EVENT BUTTON RESERVER ---------------------
        // list before to not recreate and add elements


        btnEmprunter.on('click', function() {

            const list = $('#liste');
            

            const newItem = $(`<li>
            <h1>Ma Bibliteque du Quartier</h1>
            <h2>le bestseller recommondé </h2>
            <figure>
                <img src="${book.image}" />
            </figure>
            <h3 id="titre">Titre : ${book.titre}</h3>
            <h3 id="auteur"> Auteur : ${book.auteur}</h3>
            <p id="resume"> Description : ${book.resume}</p>
            <h3 id="categorie"> Categorie : ${book.categorie}</h3></li>
            `);

            list.prepend(newItem);
            $(this).prop("disabled",true);

            count +=$(newItem).length;
            console.log(count);
            $('#btnSupprimer').css('display', 'block');


        });



    }

const divSectionR = $('<div></div>');
divSection.append(divSectionR);
divSectionR.attr('id', 'divSection');


//   ****************   FOOTER   ************************

const footer = $('<footer></footer>');
const footerTitre = $('<h2>Vos Livres</h2>');


const list = $('<ul></ul>');
list.attr('id', 'liste');

footer.append(list);

    // -------------- ADD  BUTTON  + EVENT Supprimer  ---------------------
    const btnSupprimer = $('<button>Annuler </button>');
    btnSupprimer.attr('id', 'btnSupprimer');
    footer.append(btnSupprimer);

        // -------------- ON CLICK COMMANDER HIDE WEBSITE by variable  ---------------------
        btnSupprimer.on('click', function (e) {
            e.preventDefault();
        location.reload();
        });
    // -------------- ADD  BUTTON  + EVENT Commander  ---------------------
    const btnCommander  = $('<button>Emprunter</button>');
    btnCommander.attr('id', 'btnCommander');
    footer.append(btnCommander );

        // -------------- ON CLICK COMMANDER HIDE WEBSITE by variable  ---------------------
        btnCommander.on('click', function (e) {
        e.preventDefault();

        if(list.val() < 0 ){
            alert ("ce n'est pas possible emprunter 0 livre")
        }
        else{
        divG.hide();
        //TODO count of listItem 
        const nrlivre = count;
        var date = new Date();
        const time = date.getHours() +2;
        $('body').text(`Vos ${nrlivre} livres sont empruntés. Vous pouvez passer les chercher aujourd'hui, avant ${time}heures`).css({ 'font-size' : '2rem' });
        }
    });


divG.append(footer);
