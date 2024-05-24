export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      screens: {
        Mobile : "375px",
        Tablet : "800px",
        Desktop: "1440px",
      },
      
      colors: {
        "neutral-grayish-blue": "hsl(218, 22%, 67%)",
        "primary-cyan": " hsl(179, 62%, 43%)",
        "primary-yellow": "hsl(71, 73%, 54%)",
        "neutral-light-gray": "hsl(204, 43%, 93%)",
         "primary-cyan-2" : "#49BEBD"

      },
      backgroundImage : {
        "hero-pattern" : "url('/blob-scene-haikei(1).svg')",
      }
    },
  },
  plugins: [],
};