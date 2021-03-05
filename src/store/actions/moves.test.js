import * as Actions from './moves';

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0,
    };
    const result = Actions.selectCell('X', 0, 0);
    expect(result).toEqual(expectedAction);
  });
});

describe('declareWinner', () => {
  it('should create an action to set player X winner', () => {
    const expectedAction = {
      type: Actions.DECLARE_WINNER,
      winner: 'X',
    };

    const result = Actions.declareWinner('X');
    expect(result).toEqual(expectedAction);
  });
});

it('should create an action to set player O winner', () => {
  const expectedAction = {
    type: Actions.DECLARE_WINNER,
    winner: 'O',
  };

  const result = Actions.declareWinner('O');
  expect(result).toEqual(expectedAction);
});

it('should create an action to set a draw', () => {
  const expectedAction = {
    type: Actions.DECLARE_WINNER,
    winner: 'draw',
  };

  const result = Actions.declareWinner('draw');
  expect(result).toEqual(expectedAction);
});

describe('resetGame', () => {
  it('should create an action to reset the game', () => {
    const expectedAction = {
      type: Actions.RESET_GAME,
    };

    const result = Actions.resetGame();
    expect(result).toEqual(expectedAction);
  });
});
