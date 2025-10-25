const hand = ['rock', 'paper', 'scissors']; // Opciones

// Variables para contar la puntuación de los jugadores
let humanScore = 0;
let computerScore = 0;

// Función para que la computadora escoga
function getComputerChoice() {
  const indiceAleatorio = Math.floor(Math.random() * hand.length);
  return hand[indiceAleatorio];
}

// Función donde el usuario ingrese su opción
function getHumanChoice() {
  // El usuario ingresa su opción
  let preferenceHuman = prompt("Choice: rock, paper, or scissors");

  /* Regresa a su opción y convierte en
  minúsculas su opción. Es para evitar
  errores en el código*/
  return preferenceHuman.toLowerCase().trim();
}

// Función para que puedan jugar y saber quién ganó
function playRound(humanChoice, computerChoice) {

  // Variables
  const human = humanChoice.toLowerCase(); 
  const computer = computerChoice.toLowerCase();

  // Si empatan
  if(human === computer) {
    return "It's a tie!";
  } 
  
  // Ganó el usuario y se agrega un punto a su score
  else if(
    (human === "rock" && computer === "scissors") ||
    (human === "scissors" && computer === "paper") ||
    (human === "paper" && computer === "rock")
  ){
    humanScore++; // <--- ¡CRÍTICO: Incremento ANTES del return!
    return `You win! ${human} beats ${computer}`;
  }
  
  // Ganó la computadora y se agrega un punto a su score
  else {
    computerScore++; // <--- ¡CRÍTICO: Incremento y uso de '++'!
    // 10. Debe DEVOLVER la cadena, no solo imprimir en consola.
    return `You lose! ${computer} beats ${human}`; 
  }
}

// Dunción para acumular puntos e indicar quién ganó
function playGame() {
  // Inicializamos las variables dentro para que el juego pueda reiniciarse limpiamente.
  humanScore = 0;
  computerScore = 0;

  // Bucle
  for (let i = 0; i < 3; i++) {
    
    // Obtenemos las elecciones
    const hChoice = getHumanChoice();
    const cChoice = getComputerChoice();

    const resultadoRonda = playRound(hChoice, cChoice);
    
    // Indicaciones para jugar
    console.log(`\n--- Ronda ${i + 1} ---`);
    console.log(`Tú: ${hChoice}, Computadora: ${cChoice}`);
    console.log(`Resultado: ${resultadoRonda}`);
    console.log(`Puntuación: Humano ${humanScore} - Computadora ${computerScore}`);
  }

  // 14. Debes devolver el ganador del juego en función de quién ganó la mayor cantidad de rondas.
  console.log("\n--- RESULTADO FINAL ---");
  if(humanScore > computerScore) {
    return "You win the game!";
  } else {
    return "You lose the game!";
  }
}

console.log(playGame());