module.exports = function(api) {
	const isTest = api.env('test');
	let presets = [ '@babel/preset-env', '@babel/preset-react' ];
	let plugins = [];

	if (isTest) {
		presets = [ [ '@babel/preset-env', { targets: { node: 'current' } } ], '@babel/preset-react' ];
	}

	return {
		presets,
		plugins
	};
};
