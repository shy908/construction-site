/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			Urbanist: ['"Urbanist"', "sans-serif"],
			Fira: ['"Fira Sans"', "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#2A9D8F", // Green-blue as the primary color
				secondary: "#264653", // Deep greenish-blue
				lightText: "#E9F5F2", // Very light green-blue for text
				disabled: "#A8DADC", // Muted light teal for disabled elements
				abstract: "#F1FAEE", // Soft off-white background shade
				navBorder: "#457B9D", // Blue-gray for borders
				articlesDesc: "#6BAED6", // Lighter blue for descriptions
			},
		},
	},
	plugins: [],
};
