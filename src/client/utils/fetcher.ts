export const get = (url) => fetch(url).then((r) => r.json());
