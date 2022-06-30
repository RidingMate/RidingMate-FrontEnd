const URL = {
  /* BIKE CONTROLLER */
  // PUT
  BIKE_ADD: `${process.env.BASE_URL}/v1/bike/add`,
  BIKE_UPDATE: `${process.env.BASE_URL}/v1/bike/update`,
  // DELETE
  BIKE_DELETE: `${process.env.BASE_URL}/v1/bike/delete`,
  // POST
  BIKE_REGIST: `${process.env.BASE_URL}/v1/bike/insert`,
  // GET
  BIKE_GET_LIST: `${process.env.BASE_URL}/v1/bike/list`,
  GET_COMPANY_LIST: `${process.env.BASE_URL}/v1/bike/search/company`,
  SEARCH_MODEL: `${process.env.BASE_URL}/v1/bike/search/model`,
  CHANGE_ROLE: `${process.env.BASE_URL}/v1/bike/role`,
  SEARCH_YEAR: `${process.env.BASE_URL}/v1/bike/search/year`,
}

export default URL
