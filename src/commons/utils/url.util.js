import queryString from 'query-string';
import { decamelizeKeys } from 'humps';

export const queryParams = (params, isNotDecamelize) => {
  const _params = isNotDecamelize ? params : decamelizeKeys(params);

  return queryString.stringify(_params, { encode: true, arrayFormat: 'bracket' });
};

export const passUrlQueryParams = (url, params, isNotDecamelize) => {
  if (!params) return url;

  return url + (url.indexOf('?') === -1 ? '?' : '&') + queryParams(params, isNotDecamelize);
};