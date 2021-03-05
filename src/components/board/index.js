import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCell, declareWinner, resetGame } from '../../store/actions/moves';
import './index.css';

const selectBoard = (state) => state.board;
const selectGame = (state) => state.game;

const levelBoard = (arr) => [].concat(...arr);

const getWinner = (quads) => {
  const indexes = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
  ];

  for (let i = 0; i < indexes.length; i++) {
    const [x, y, z] = indexes[i];
    if (quads[x] && quads[x] === quads[y] && quads[x] === quads[z]) {
      return quads[x];
    }
  }
  return;
};

export const Board = () => {
  const board = useSelector(selectBoard);
  const game = useSelector(selectGame);
  const dispatch = useDispatch();

  useEffect(() => {
    const levelledBoard = levelBoard(board);
    const winner = getWinner(levelledBoard);

    if (winner) {
      dispatch(declareWinner(winner));
    } else if (!levelledBoard.includes(null) && !winner) {
      dispatch(declareWinner('draw'));
    }
  }, [board, dispatch]);

  const pickQuad = (line, quad) => {
    if (!board[line][quad]) {
      dispatch(selectCell(game.currentPlayer, line, quad));
    }
  };

  const successText = game.winner === 'draw'? "This game is a tie!" : `Player ${game.winner} Won!`;

  return (
    <>
      <header className="toolbar"><h1>Tic Tac Toe</h1></header>
      <div className='main'>
        <div className='Board'>
          {board.map((line, lineIndex) => (
            <div key={lineIndex} className="series">
              {line.map((_, quadIndex) => (
                <button
                  className="quad"
                  key={quadIndex}
                  onClick={() => pickQuad(lineIndex, quadIndex)}
                  disabled={game.winner}>
                  {board[lineIndex][quadIndex]}
                </button>
              ))}
            </div>
          ))}
        </div>
        {game.winner ? (
          <>
            <h2>{successText}</h2>
            <button
              className="button"
              onClick={() => {
                dispatch(resetGame());
              }}>
              Start Again
            </button>
          </>
        ) : (
            <h2>Player {game.currentPlayer}'s move</h2>
          )}
      </div>
    </>
  )
}
