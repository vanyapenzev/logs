const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
    entry: {
        main: './src/main.js'
    },
    resolve: {
        alias: {
            "svelte": path.resolve('node_modules', 'svelte'),
            "@": path.resolve(__dirname, './src/assets/'),
            "api": path.resolve(__dirname, './src/api'),
            "json": path.resolve(__dirname, './src/json')
        },
    },
    output: {
        path: path.join(__dirname, "./dist"),
		filename: "build/bundle.js",
        libraryTarget: "umd",
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: "build/bundle.css"
        })
    ],
    module: {
        rules: [
            {
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						hotReload: true
					}
				}
            },
            {
                test: /\.(c|sac|sa|sc)ss$/i,
                enforce: "pre",
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader, //4. Extract css into files\
                        options: {
                            publicPath: '../', // опускаемся из build директории
                        }
                    },
                    "css-loader", { // 3 Turns css into javascript
                        loader: "postcss-loader", //2. Runs Autoprefixer
                        options: {
                            ident: "postcss",
                            plugins: [require("autoprefixer")]
                        }
                    },
                    "sass-loader" // 1. Turns sass into css
                ]
            },
            {
                test: /\.(jpe?g|png|webm|svg?|ttf|eot|woff(2)?|ogg|mp3|wav|mpe?g)(\?[a-z0-9=&.]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: { 
                        name: 'assets/[name]-[hash].[ext]'
                    }
                }]
			},
        ]
    },
    mode,
    devtool: prod ? false: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    }
}