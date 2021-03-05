import { combineReducers } from "redux";
import { SELECT_CELL, DECLARE_WINNER, RESET_GAME } from '../actions/moves';

export const createBoard = (i) =>
  Array(i)
    .fill(null)
    .map(_ =>
      Array(i)
        .fill(null)
    )

export const board = (state = createBoard(3), action) => {
  switch (action.type) {
    case SELECT_CELL: {
      const newBoard = JSON.parse(JSON.stringify(state));
      newBoard[action.row][action.col] = action.currentPlayer;
      return newBoard;
    }
    default: {
      return state;
    }
  }
}

export const game = (state = { currentPlayer: 'X', winner: null }, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
      };
    }
    case DECLARE_WINNER: {
      return {
        ...state,
        winner: action.winner
      };
    }
    default: {
      return state;
    }
  }
}

const appReducer =  combineReducers({
  board,
  game
});

const rootReducer = (state, action) => {
  if (action.type === RESET_GAME) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
