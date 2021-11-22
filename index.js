const path = require("path");
module.exports = function (_api, opts) {
	if (!opts) {
		opts = {};
	}

	const isEnvDevelopment =
		process.env.NODE_ENV == "development" ||
		process.env.BABEL_ENV == "development";
	const userPresets = opts.presets || [];
	const userPlugins = opts.plugins || [];
	const defaultRutime = {
		corejs: false,
		helpers: true,
		version: require("@babel/runtime/package.json").version,
		regenerator: true,
		absoluteRuntime: path.dirname(
			require.resolve("@babel/runtime/package.json")
		),
	};
	const defaultPreset = {
		useBuiltIns: "entry",
		corejs: 3,
		exclude: ["transform-typeof-symbol"],
	};

	let react = [];
	if (opts.react) {
		const optsReact = typeof opts.react == "object" ? opts.react : {};
		react = [
			require("@babel/preset-react").default,
			{
				development: isEnvDevelopment,
				runtime: "automatic",
				...optsReact,
			},
		];
	}
	return {
		presets: [
			[
				require("@babel/preset-env").default,
				Object.assign(defaultPreset, opts.env || {}),
			],
			react,
		].concat(userPresets),
		plugins: [
			[
				require("@babel/plugin-transform-runtime").default,
				Object.assign(defaultRutime, opts.runtime || {}),
			],
		].concat(userPlugins),
	};
};
