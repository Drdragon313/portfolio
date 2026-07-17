/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Paprika: "Paprika",
        Inria: "Inria Serif",
      },
      colors: {
        dark_primary: "#111318",
        bg_light_primary: "#111318",
        charcoal_card: "#1e2024",
        charcoal_border: "#333539",
        neon_cyan: "#00f1fe",
        neon_green: "#39FF14",
        neon_purple: "#adc6ff",
        gray: "#c1c6d7",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #1e2024 0%, #111318 100%)",
        neonLinear: "linear-gradient(90deg, #00f1fe 0%, #adc6ff 100%)",
      },
      dropShadow: {
        primary: "-5px 15px 30px rgba(0, 241, 254, 0.15)",
        neon: "0 0 10px rgba(0, 241, 254, 0.6)",
      },
      boxShadow: {
        neon: "0 0 15px rgba(0, 241, 254, 0.35)",
        neon_purple: "0 0 15px rgba(173, 198, 255, 0.35)",
        neon_hover: "0 0 25px rgba(0, 241, 254, 0.7)",
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.2', filter: 'blur(40px)' },
          '50%': { opacity: '0.4', filter: 'blur(60px)' },
        }
      }
    },
  },
  plugins: [],
};
