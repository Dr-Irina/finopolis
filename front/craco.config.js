const presetReact = require('@babel/preset-react').default;
const presetCRA = require('babel-preset-react-app');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
	babel: {
		pluginOptions: (babelLoaderOptions, { env, paths }) => {
			const origBabelPresetReactAppIndex = babelLoaderOptions.presets.findIndex((preset) => preset[0].includes('babel-preset-react-app'));

			if (origBabelPresetReactAppIndex === - 1) {
				return babelLoaderOptions;
			}

			const overrideBabelPresetReactApp = (...args) => {
				const babelPresetReactAppResult = presetCRA(...args);
				const origPresetReact = babelPresetReactAppResult.presets.find((preset) => preset[0] === presetReact);
				Object.assign(origPresetReact[1], {
					importSource: '@welldone-software/why-did-you-render',
				});
				return babelPresetReactAppResult;
			};

			babelLoaderOptions.presets[origBabelPresetReactAppIndex] = overrideBabelPresetReactApp;

			return babelLoaderOptions;
		},
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					compress: {
						drop_console: true,
					},
				},
			}),
		],
	},
};
