/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch ({ type: FETCH_SMURF_START });

  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res);
    dispatch ({ type: FETCH_SMURF_SUCCESS, payload: res.data });
  })
  .catch(err => {
    console.log(err);
    dispatch ({ type: FETCH_SMURF_FAILURE, payload: err.response })
  });
};

export const addSmurf = (smurf) => dispatch => {
  dispatch ({ type: ADD_SMURF_START });

  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    dispatch ({ type: ADD_SMURF_SUCCESS, payload: res.data });
  })
  .catch(err => {
    dispatch ({ type: ADD_SMURF_FAILURE, payload: err });
  });
};

