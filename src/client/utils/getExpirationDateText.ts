import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';

export const getExpirationDateText = (date?: string): string =>
  date && `до ${format(new Date(date), 'd MMMM', { locale: ruLocale })}`;
