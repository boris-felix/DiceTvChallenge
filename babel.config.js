module.exports = {
    'plugins': [
		'@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import'
	],
	'presets': [
        [
            '@babel/preset-env',
            {
                'modules': 'commonjs'
            }
        ],
        '@babel/react'
	] 
};