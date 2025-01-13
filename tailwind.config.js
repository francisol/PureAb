
module.exports = {
	content: ['./hugo_stats.json'],
	// plugins: [[require("@tailwindcss/typography"), require("daisyui")]],
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        logs:false,
    },
};