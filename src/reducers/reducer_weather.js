import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      const weather   = action.payload;
      const weathers  = [weather, ...state];
      return weathers;
  }

  return state;
}
