import { MODAL_SHOW, MODAL_HIDE } from '../actions';
import * as initialState from './initialState';

export function modal(state = initialState.modal, action) {
  switch (action.type) {
    case MODAL_SHOW: {
      return {
        ...state,
        show: true,
        content: action.payload.content,
      };
    }
    case MODAL_HIDE: {
      return {
        ...state,
        show: false,
        // content: {}, // INFO: commented out for perfomance
      };
    }
    default: {
      return state;
    }
  }
}

