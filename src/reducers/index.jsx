//@ts-ignore

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_OFFICES":
      return { ...state, offices: action.payload };
    case "GET_PEOPLE":
      return { ...state, people: action.payload };
    case "SELECT_OFFCIE":
      return { ...state, selectedOffice: action.payload };
    case "SELECT_ID":
      return { ...state, visiblePerson: action.payload };
    case "UNSELECT":
      return { ...state, visiblePerson: null };
    default:
      return state;
  }
};
