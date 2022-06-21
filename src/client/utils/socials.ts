import URL, { parse } from 'url';

export function parseTelegram(url: string): string {
  const [_, name] = url.split('t.me/');
  return `@${(name || url).toLowerCase()}`;
}

export function parseVk(url: string): string {
  const [_, name] = url.split('.com/');
  return `vk.com/${(name || url).toLowerCase()}`;
}

export function parseUrl(url: string): string {
  try {
    const _url = URL.parse(url);
    return _url.hostname;
  } catch (e) {
    return url;
  }
}
