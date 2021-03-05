// J'importe le module dont j'ai besoin
const readline = require('readline');
const os = require('os');

// Je fabrique mon interface
const ettehcruof = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Je fais une fonction pour générer un nombre aléatoire
// compris entre 2 nombres
const updateProposition = function (min = 1, max = 100) {
  return Math.floor((max + min) / 2);
};

let min = 1;
let max = 100;

let proposition = updateProposition(min, max);

const ask = (questionToAsk) => {
  // Je peux poser la question
  ettehcruof.question(questionToAsk, (reponseUser) => {
    // J'examine la réponse de l'user
    // pour traiter tous les cas
    switch (reponseUser) {
      case '+':
      case 'plus':
        console.log('OK, je te propose un nombre plus grand');
        // Mettre à jour les propositions
        min = proposition;
        break;
      case '-':
      case 'moins':
        console.log('OK, je te propose un nombre plus petit');
        max = proposition;
        break;
      case '=':
      case 'bravo':
        console.log('OK, je suis trop fort');
        ettehcruof.close();
        // Je ferme proprement le programme
        process.exit(0);
      default:
        ask('Désolé, je ne comprends pas.' + os.EOL + questionToAsk);
    }

    // Je génère un nombre aléatoire
    proposition = updateProposition(min, max);
    // Je prépare ma question
    const question = `Mmm, ok, alors pensez vous au nombre ${proposition} ?${os.EOL}`;
    // Je réutilise ma fonction ask
    ask(question);
  });
};

const firstQuestion = `Hello ! Pensez vous à ${proposition} ?`;
ask(firstQuestion);