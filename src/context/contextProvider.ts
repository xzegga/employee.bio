import createFastContext from './createFastContext';

export const { Provider, useStore } = createFastContext({
  email: '',
  password: '',
});
