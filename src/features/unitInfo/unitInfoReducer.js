import { createReducer } from '../../common/utils/reducerUtils';
import { DATA_LOADED } from '../tools/toolConstant';

// const initialState = {
//     name : 'Black Widow Company',
//     affiliation : 'wd'
// }

const initialState = {
  name : "N/A",
  affiliation : "",
};

export function dataLoaded(state, payload) {
  const {unit} = payload;

  return unit;
}

export default createReducer(initialState, {
  [DATA_LOADED] : dataLoaded 
});
