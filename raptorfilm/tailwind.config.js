module.exports = {
    darkMode: 'class',
    purge: {
      enabled: true,
      content: ['./src/**/*.{html,ts}']
    },
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      require('daisyui'),
    ],
  };