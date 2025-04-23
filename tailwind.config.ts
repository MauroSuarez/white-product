import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
				success: {
					DEFAULT: 'hsl(var(--success))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
				},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  	},
		keyframes: {
			"caret-blink": {
				"0%,70%,100%": { opacity: "1" },
				"20%,50%": { opacity: "0" },
			},
			"spin": {
				from: {
					transform: "rotate(0deg)",
				},
				to: {
					transform: "rotate(360deg)",
				},
			},
			pulse: {
				"0%, 100%": { opacity: "1" },
				"50%": { opacity: "0.5" },
			},
			flip3D: {
				'0%': { transform: 'rotateY(0deg)' },
				'100%': { transform: 'rotateY(360deg)' },
			},
			flip: {
				'0%, 100%': { transform: 'rotateY(0deg)' },
				'50%': { transform: 'rotateY(180deg)' },
			},
			customBounce: {
				'0%, 100%': { 
					transform: 'translateY(-30%) scale(1.1)',
					opacity: '0.8'
				},
				'50%': { 
					transform: 'translateY(0) scale(0.9)',
					opacity: '1'
				},
			},
			bounce: {
				'0%, 100%': { transform: 'translateY(0)' },
				'50%': { transform: 'translateY(-20px)' },
			}
		},
		animation: {
			"caret-blink": "caret-blink 1.25s ease-out infinite",
			"spin": "spin 1s infinite",
			pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			flip3D: 'flip3D 3s linear infinite',
			flip: 'flip 0.1s ease-in-out infinite',
			bounce: 'bounce 0.6s ease infinite',
		},
		// gridTemplateColumns: {
		// 	'custom': 'minmax(0, 6fr) minmax(0, 3fr) minmax(0, 3fr)',
		// },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
