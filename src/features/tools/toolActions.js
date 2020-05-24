import { fetchData } from '../../data/mockAPI';

import { DATA_LOADED } from './toolConstant'

export function loadUnitData() {
    return (dispatch, getState) => {
      fetchData()
        .then(data => {
          dispatch({
            type: DATA_LOADED,
            payload: data
          })
        });
    }
}
