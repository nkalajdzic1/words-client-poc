/**
 * @description creates query string for a http call from an object
 *              Example: { pageNumber: 1, pageSize: 10 } -> 'pageNumber=1&pageSize=10'
 * @param {Object} obj containing the query params
 * @returns {string} the given query string for the http call
 */
export const createQueryFromObj = (obj) =>
  Object.entries(obj)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
