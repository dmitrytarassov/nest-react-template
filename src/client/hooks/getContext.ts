import { Context, useContext } from 'react';

export function getContext<T>(_context: Context<T>) {
  const context = useContext(_context);

  if (!context) {
    throw new Error(`Missing ${context.constructor.name} context`);
  }

  return context;
}
