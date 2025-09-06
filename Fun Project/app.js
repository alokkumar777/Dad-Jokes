(() => {
  const statusEl = document.getElementById("status");
  const boardEl = document.querySelector(".board");
  const resetBtn = document.getElementById("reset");
  const cells = Array.from(document.querySelectorAll(".cell"));
  const xScoreEl = document.getElementById("x-score");
  const oScoreEl = document.getElementById("o-score");
  const drawScoreEl = document.getElementById("draw-score");
  const totalGamesEl = document.getElementById("total-games");

  // Game state
  let board = Array(9).fill("");
  let currentPlayer = "X";
  let gameActive = true;
  let scores = { X: 0, O: 0, draws: 0 };
  let totalGames = 0;

  const WIN_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  function setStatus(text) {
    statusEl.textContent = text;
  }

  function updateTurnIndicator() {
    // Clear all turn indicators
    xScoreEl.classList.remove("current-turn");
    oScoreEl.classList.remove("current-turn");

    // Add indicator to current player if game is active
    if (gameActive) {
      if (currentPlayer === "X") {
        xScoreEl.classList.add("current-turn");
      } else {
        oScoreEl.classList.add("current-turn");
      }
    }
  }

  function updateScoreDisplay() {
    xScoreEl.querySelector(".score-value").textContent = scores.X;
    oScoreEl.querySelector(".score-value").textContent = scores.O;
    drawScoreEl.querySelector(".score-value").textContent = scores.draws;
    totalGamesEl.textContent = `Total Games: ${totalGames}`;
  }

  function renderCell(index) {
    const value = board[index];
    const cell = cells[index];
    cell.textContent = value;
    cell.classList.toggle("x", value === "X");
    cell.classList.toggle("o", value === "O");
    cell.setAttribute(
      "aria-label",
      `Cell ${index + 1}${value ? ", " + value : ""}`
    );
    cell.disabled = !!value || !gameActive;
  }

  function renderBoard() {
    for (let i = 0; i < 9; i++) {
      renderCell(i);
    }
    updateTurnIndicator();
  }

  function highlightWin(line) {
    line.forEach((i) => {
      cells[i].classList.add("win");
    });
  }

  function clearHighlights() {
    cells.forEach((cell) => {
      cell.classList.remove("win");
    });
    xScoreEl.classList.remove("current-turn");
    oScoreEl.classList.remove("current-turn");
  }

  function checkWinner() {
    // Check for winning lines
    for (const line of WIN_LINES) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line };
      }
    }

    // Check for draw (all cells filled, no winner)
    if (board.every((cell) => cell !== "")) {
      return { winner: null, line: null, draw: true };
    }

    return null;
  }

  function endGame(result) {
    gameActive = false;
    cells.forEach((cell) => {
      cell.disabled = true;
    });

    if (result.winner) {
      setStatus(`Winner: Player ${result.winner}!`);
      highlightWin(result.line);
      scores[result.winner]++;
    } else if (result.draw) {
      setStatus("It's a draw!");
      scores.draws++;
    }

    totalGames++;
    updateScoreDisplay();
    updateTurnIndicator(); // This will clear turn indicators
  }

  function handleTurn(index) {
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    renderCell(index);

    const result = checkWinner();
    if (result) {
      endGame(result);
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      setStatus(`Turn: Player ${currentPlayer}`);
      updateTurnIndicator();
    }
  }

  function resetGame() {
    board = Array(9).fill("");
    currentPlayer = "X";
    gameActive = true;
    clearHighlights();
    setStatus("Turn: Player X");
    renderBoard();
  }

  function resetAllScores() {
    scores = { X: 0, O: 0, draws: 0 };
    totalGames = 0;
    updateScoreDisplay();
    resetGame();
  }

  // Event listeners
  boardEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".cell");
    if (!btn) return;
    const index = Number(btn.dataset.index);
    handleTurn(index);
  });

  resetBtn.addEventListener("click", resetGame);

  // Double-click reset button to reset all scores
  resetBtn.addEventListener("dblclick", (e) => {
    e.preventDefault();
    if (confirm("Reset all scores?")) {
      resetAllScores();
    }
  });

  // Keyboard support
  document.addEventListener("keydown", (e) => {
    if (e.key >= "1" && e.key <= "9") {
      const index = parseInt(e.key) - 1;
      handleTurn(index);
    } else if (e.key === "r" || e.key === "R") {
      resetGame();
    }
  });

  // Initialize game
  updateScoreDisplay();
  renderBoard();
})();
