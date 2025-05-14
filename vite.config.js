import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            keyframes: {
              slideDown: {
                "0%": { opacity: 0, transform: "translateY(-10px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            },
            animation: {
              slideDown: "slideDown 300ms ease-out",
            },
          },
        },
      },
    }),
  ],
});
