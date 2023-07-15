import React, { useState } from "react";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (index) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);

      checkWinner(newBoard, player);

      setPlayer(player === "X" ? "O" : "X");
      setClickCount(clickCount + 1);
    }
  };

  const checkWinner = (board, player) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] === player && board[b] === player && board[c] === player) {
        setWinner(player);
        break;
      }
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
    setClickCount(0);
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  const renderGameButton = (index) => {
    return (
      <div className="playerBtn">
        <button className="game">{`Cell #${index + 1}`}</button>;
      </div>
    );
  };

  const gameButtons = Array.from({ length: clickCount }, (_, index) =>
    renderGameButton(index)
  );

  return (
    <>
      <div className="flee">
        <div className="tic-tac-toe">
          <div className="board">
            {board.map((cell, index) => renderCell(index))}
          </div>
          {winner && (
            <div className="winner">
              <p>{`Winner: ${winner}`}</p>
              <button className="reset" onClick={resetGame}>
                Restart
              </button>
            </div>
          )}
        </div>
        {gameButtons}
      </div>
    </>
  );
};

export default GameBoard;
