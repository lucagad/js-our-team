// esercizio di oggi: **Our Team**
// nome repo: **js-our-team**

// Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.

// Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
// **Consigli del giorno:**

// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.

// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

/********** 
 * VARIABLES - OBJECTS - ARRAY
***********/

// Oggetto Member
const member = {
	name: 'Wayne Barnett',
	role: 'Founder & CEO',
  image: 'img/wayne-barnett-founder-ceo.jpg'
};

// Array contenete i membri del team
const ourTeam = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'img/wayne-barnett-founder-ceo.jpg'
  },

  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'img/angela-caroll-chief-editor.jpg'
  },

  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/walter-gordon-office-manager.jpg'
  },

  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/angela-lopez-social-media-manager.jpg'
  },

  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/scott-estrada-developer.jpg'
  },

  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/barbara-ramos-graphic-designer.jpg'
  }
];


/********** 
 * START
***********/

const cardBox = document.querySelector('.team-container');
const btnAdd = document.querySelector('#addMemberButton');

stampCard(ourTeam);

btnAdd.addEventListener('click',btnAddClick);



/********** 
 * FUNCTIONS
***********/

// Stampa in pagina le card dei membri
function stampCard (arrayTeam){

  // Svuota il contenuto dell'elemento cardBox
  cardBox.innerHTML ="";

  //Ciclo per creare le card
  for (const key in arrayTeam) {
      
      cardBox.innerHTML += `
      <div class="team-card">
        <div class="card-image">
          <img src="${arrayTeam[key].image}"
            alt="${arrayTeam[key].name}"/>
        </div>
        <div class="card-text">
          <h3>${arrayTeam[key].name}</h3>
          <p>${arrayTeam[key].role}</p>
        </div>
      </div>`;
  }
  
}

// Funzione per aggiungere una nuova card al click del bottone "add"
function btnAddClick (){ 

  const nameNewMember = document.querySelector('#name');
  const roleNewMember = document.querySelector('#role');
  const imageNewMember = document.querySelector('#image');

  ourTeam.push(
    {
      name: nameNewMember.value,
      role: roleNewMember.value,
      image: imageNewMember.value
    }
  );

  stampCard(ourTeam);

}

