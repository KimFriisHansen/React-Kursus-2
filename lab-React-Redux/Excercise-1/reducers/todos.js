import { ADD_TODO, TOGGLE_TODO } from './../constants';
import findTodoIndexById from './../lib/findTodoIndexById';

const defaultState = [
  {
    id: 10003,
    text: 'Customer 10003 contact order 28828828',
    date: new Date(),
    isComplete: true,
  },
  {
    id: 78009,
    text: 'Customer 78009 contact order 24554828',
    date: new Date(),
    isComplete: true,
  },
  
];

const todo = (state = {}, { type, id, text, date }) => {
  switch (type) {
    case ADD_TODO:
      return {
        id,
        text,
        date,
        isComplete: false,
      };
    
    default:
      return state;
  }
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      const toggledTodoIndex = findTodoIndexById(state, action.id);
      return [
        ...state.slice(0, toggledTodoIndex),
        todo(state[toggledTodoIndex], action),
        ...state.slice(toggledTodoIndex + 1),
      ];
    case DELETE_TODO:
      const deletedTodoIndex = findTodoIndexById(state, action.id);
      return [
        ...state.slice(0, deletedTodoIndex),
        ...state.slice(deletedTodoIndex + 1),
      ];
    default:
      return state;
  }
};

export default todos;
