import queryString from 'query-string';

export function parseSearch() {
  const parsed = queryString.parse(window.location.search);
  console.log('[SuperMall] location.search = ', parsed);
  return parsed;
}

export function parseHash() {
  const parsed = queryString.parse(window.location.hash);
  console.log('[SuperMall] location.hash = ', parsed);
  return parsed;
}

export function stringify(obj) {
  if (!obj) {
    return '';
  }
  const stringified = queryString.stringify(obj);
  console.log('[SuperMall] queryString.stringify = ', stringified);
  return stringified;
}

export function stringifyUrl(url = '', query) {
  if (!query) {
    return url;
  }
  const stringified = queryString.stringifyUrl({url, query});
  console.log('[SuperMall] queryString.stringifyUrl = ', stringified);
  return stringified;
}