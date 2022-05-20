import * as parsePhoneNumber from 'libphonenumber-js';

export const phoneFormat = (phone: string): string =>
  parsePhoneNumber.parsePhoneNumber(phone).formatInternational();
