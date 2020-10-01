import { GET_OFFICES, GET_PEOPLE, SELECT_ID, UNSELECT } from "./action-types";

// @ts-ignore
export const getOffice = (id: string) => (dispatch) => {
  fetch(`http://localhost:3001/offices/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(getOfficesSuccess(data)));
};

const getOfficesSuccess = (offices: any) => ({
  type: GET_OFFICES,
  payload: offices.svg,
});
// @ts-ignore
export const getPeople = () => (dispatch) => {
  fetch("http://localhost:3001/people")
    .then((res) => res.json())
    .then((data) => dispatch(getPeopleSuccess(data)));
};

const getPeopleSuccess = (people: any) => ({
  type: GET_PEOPLE,
  payload: people,
});
// @ts-ignore
export const selectId = (id: string) => (dispatch) => {
  dispatch({
    type: SELECT_ID,
    payload: id,
  });
};
// @ts-ignore
export const unselectId = () => (dispatch) => dispatch({ type: UNSELECT });
