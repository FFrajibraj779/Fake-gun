/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#870ec9",
        
"secondary": "#134a7c",
        
"accent": "#991203",
        
"neutral": "#151A1E",
        
"base-100": "#EDEFF2",
        
"info": "#88D4F7",
        
"success": "#20AC7B",
        
"warning": "#A26607",
        
"error": "#F77969",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
