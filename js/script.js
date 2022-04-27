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
    image: 'img/'
  },

  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'img/'
  },

  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'img/'
  },

  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'img/'
  },

  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'img/'
  }
];

const cardBox = document.querySelector('.team-container');

//Ciclo per creare le card
for (const key in ourTeam) {
  
    cardBox.innerHTML += `
    
    <div class="team-card">
      <div class="card-image">
        <img src="img/wayne-barnett-founder-ceo.jpg"
          alt="Wayne Barnett"/>
      </div>
      <div class="card-text">
        <h3>Wayne Barnett</h3>
        <p>Founder & CEO</p>
      </div>
    </div> 
    `
  };
