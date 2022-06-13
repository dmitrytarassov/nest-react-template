const formatter = new Intl.NumberFormat('ru-RU');

export const moneyFormat = (n: number, addSymbol = true): string =>
  `${formatter.format(n)}${addSymbol ? ' ₽' : ''}`;
