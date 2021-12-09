// Etape 1 - Sélectionner nos éléments
let input = document.getElementById("prix");
let error = document.querySelector("small");
let form = document.getElementById("formulaire");
let instructions = document.getElementById("instructions");

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let randomNumber = Math.floor(Math.random() * 1001);
let coups = 0;
let playerNumber;

function verify(number) {
  let instruction = document.createElement("div");
  instructions.prepend(instruction);

  if (number < randomNumber) {
    instruction.textContent =
      "#" + coups + " ( " + playerNumber + " ) C'est plus !";
    instruction.classList.add("instruction", "plus");
  } else if (number > randomNumber) {
    instruction.textContent =
      "#" + coups + " ( " + playerNumber + " ) C'est moins !";
    instruction.classList.add("instruction", "moins");
  } else {
    instruction.textContent =
      "#" +
      coups +
      "  (" +
      playerNumber +
      " ) Félicitations vous avez trouvé le juste prix";
    instruction.classList.add("instruction", "fini");
    input.disabled = true;
  }
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    error.style.display = "block";
    error.classList.add("alert", "alert-danger", "mt-3");
  } else {
    error.style.display = "none";
  }
  //   console.log(e.target.value);
  //   console.log(input.value);
});

// Etape 5 - Agir à l'envoi du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(input.value) || input.value == "") {
    input.style.borderColor = "red";
  } else {
    input.style.borderColor = "silver";
    coups++;
    playerNumber = input.value;
    input.value = "";
    verify(playerNumber);
  }
});
