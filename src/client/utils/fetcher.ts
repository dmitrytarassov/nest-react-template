export const get = (url) => fetch(url).then((r) => r.json());

export const post = (url, data: any) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json());
