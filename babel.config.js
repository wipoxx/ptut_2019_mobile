module.exports = function(api) {
  api.cache(true);
  return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					alias: {
						components: "./src/components",
						router: "./src/router",
						screens: "./src/screens",
						constants: "./src/constants",
						assets: "./assets",
						api: "./src/api"
					},
				},
			],
		],
	};
};
