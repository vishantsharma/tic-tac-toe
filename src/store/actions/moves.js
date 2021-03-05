export const SELECT_CELL = 'SELECT_CELL';
export const DECLARE_WINNER = 'DECLARE_WINNER';
export const RESET_GAME = 'RESET_GAME';

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  };
}

export function declareWinner(winner) {
  return {
    type: DECLARE_WINNER,
    winner
  };
}

export function resetGame() {
  return {
    type: RESET_GAME,
  };
}
