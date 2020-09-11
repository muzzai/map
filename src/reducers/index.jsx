//@ts-ignore

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_OFFICES': return { ...state, offices: action.payload }
    case 'GET_PEOPLE': return { ...state, people: action.payload }
    case 'SELECT_OFFCIE': return { ...state, selectedOffice: action.payload }
    case 'SELECT_PERSON': return { ...state, selectedPerson: action.payload }

    default: return state;
  }
};