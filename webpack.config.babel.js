import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

module.exports = {
    devServer: {
        port: 8082,
    },
    entry: {
        main: ['./src/js/index.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer({
                                    browsers: ['last 2 versions'],
                                }),
                                cssnano(),
                            ]
                        },
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            },
            {
                test: /\.(ts|tsx)$/,
                include: /(src[/|\\]js)/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' }
                ],
            },
            {
                test: /\.(js|jsx)$/,
                include: /(src[/|\\]js)/,
                use: [{ loader: 'babel-loader' }],
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.ejs',
		    inject: true
        })
    ]
}