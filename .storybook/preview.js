import '../styles/globals.css';
import '../service/index';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: 'white',
      },
      {
        name: 'dark',
        value: 'black',
      },
    ],
  },
}