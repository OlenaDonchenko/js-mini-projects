const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playButton = document.getElementById("play-button");
const result = document.getElementById("result");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
let userChoice = null;
let userPoints = 0;
let computerPoints = 0;
playButton.addEventListener("click", function () {

    if (userChoice === null) {
        alert("Please choose Rock, Paper, or Scissors!");
        return;
    }

    const computerChoice = getComputerChoice();

    const winner = getWinner(userChoice, computerChoice);

    if (winner === "draw") {

        result.textContent =
            `Draw! You both chose ${userChoice}.`;

    } else if (winner === "user") {

        result.textContent =
            `You win! You chose ${userChoice}, computer chose ${computerChoice}.`;

        userPoints++;

    } else if (winner === "computer") {

        result.textContent =
            `Computer wins! You chose ${userChoice}, computer chose ${computerChoice}.`;

        computerPoints++;
    }

    userScore.textContent = userPoints;
    computerScore.textContent = computerPoints;
});
rockButton.addEventListener("click",
    function () {
    userChoice = "rock";
});
paperButton.addEventListener("click",
    function () {
    userChoice = "paper";
    });
scissorsButton.addEventListener("click",
    function () {
    userChoice = "scissors";
    });
    function selectButton(button) {
        rockButton.classList.remove(
            "bg-pink-500",
            "border-pink-300",
            "shadow-[0_0_30px_rgba(255,60,172,0.7)]"
        );

        paperButton.classList.remove(
            "bg-pink-500",
            "border-pink-300",
            "shadow-[0_0_30px_rgba(255,60,172,0.7)]"
        );

        scissorsButton.classList.remove(
            "bg-pink-500",
            "border-pink-300",
            "shadow-[0_0_30px_rgba(255,60,172,0.7)]"
        );


        button.classList.add(
            "bg-pink-500",
            "border-pink-300",
            "shadow-[0_0_30px_rgba(255,60,172,0.7)]"
        );
}
rockButton.addEventListener("click",
function () {
    userChoice = "rock";
    selectButton(rockButton)
});
paperButton.addEventListener("click",
function () {
    userChoice = "paper";
    selectButton(paperButton)
    });
scissorsButton.addEventListener("click",
function () {
    userChoice = "scissors";
    selectButton(scissorsButton)
    });
const choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
        return choice[randomIndex];
}
function getWinner(user, computer) {
    if (user === computer) {
            return "draw";
    }
    if ((user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper")
    ) {
            return "user";
    }
    return "computer";
}

