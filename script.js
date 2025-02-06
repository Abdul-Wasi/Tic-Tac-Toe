// Track the state of the game board
let board = ["", "", "", "", "", "", "", "", ""];

// Track the current player (X or O)
let currentPlayer = "X";

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Add event listeners to each button
document.querySelectorAll(".btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    if (board[index] === "") {
      //Update the board array
      board[index] = currentPlayer;

      //Update the UI
      button.textContent = currentPlayer;

      //Check for a winner
      checkWinner();

      //check for a draw
      checkDraw();

      //Switch to the next player
      switchPlayer();
    }
  });
});

function checkWinner() {
  //Define winning combinations
  const winCombinations = [
    [0, 1, 2],
    [2, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //Check each winning combination
  for (let combination of winCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      alert(`${board[a]} wins!`);
      resetGame();
      return;
    }
  }
}

function checkDraw() {
  if (!board.includes("")) {
    alert("It's a draw!");
    resetGame();
  }
}

function resetGame() {
    //Clear the board array
    board = ["", "", "", "", "", "", "", "", ""];

    //Clear the button's text content
    document.querySelectorAll(".btn").forEach(button => {
        button.textContent = "";
    });

    //Reset the current player to "X"
    currentPlayer = "X";
}

document.querySelector(".resetBtn").addEventListener("click", resetGame);