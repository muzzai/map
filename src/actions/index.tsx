// @ts-ignore
export default () => (dispatch) => {
  fetch("http://localhost:3001/offices")
    .then((res) => res.json())
    .then((data) => dispatch(getOfficesSuccess(data)))
}

const getOfficesSuccess = (offices: any) => ({
  type: "GET_OFFICES",
  payload: offices[0].svg
})