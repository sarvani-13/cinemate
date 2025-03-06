// eslint-disable-next-line import/no-anonymous-default-export
export default {
        darkMode: 'class',
        content: ["./src/**/*.{html,js}"],
        theme: {
          extend: {
            screens: {
              "other": {'min': '340px', 'max': '1200px'}
            }
          },
        },
        plugins: [],
      }