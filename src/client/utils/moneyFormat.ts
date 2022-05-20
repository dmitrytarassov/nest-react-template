const formatter = new Intl.NumberFormat('ru-RU');

export const moneyFormat = (n: number): string => `${formatter.format(n)} ₽`;
