module.exports = {
  plugins: [
		require("stylelint")(),
		require("postcss-custom-selectors")(),
		require("postcss-cssnext")({ browsers: "last 2 versions" }),
		require("postcss-reporter")(),
		...!config.production ? [
			require("postcss-browser-reporter")(),
		] : [],
	]
};
