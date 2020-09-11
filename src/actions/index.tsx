export default () => {
  console.log("!!!!!")
}

const getOfficesSuccess = (offices: any) => ({
  type: "GET_OFFICES",
  payload: offices
})