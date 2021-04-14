module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      
      screens: {
        'sm': '640px',
        'md': '768px',
      },
        maxWidth: {
         '250px': '250px',
        },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
