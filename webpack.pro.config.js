const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const serverPath = "/dist/";
const buildPath = path.resolve(__dirname, './dist/');
module.exports = {

    mode: "production",

    entry: "./src/index.tsx",

    output: {
        filename: 'app.js',
        path: buildPath,
        chunkFilename: '[name].[chunkhash:8].chunk.js',
        publicPath: serverPath,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        // alias: {
        //     "@views": path.resolve(__dirname, "./src/views"),
        //     "@components":  path.resolve(__dirname, "./src/components"),
        // }
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // css style loader
            { test: /\.css$/, loader: ['style-loader', 'css-loader'] },

            //
            { test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

    plugins: [
        new HtmlWebpackPlugin({
            title: "ts-react",
            template: path.resolve(__dirname, './public/index.html'),
            inject: "head",
        }),
        new Analyzer(),
    ],

    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxInitialRequests: 2,
            maxAsyncRequests: 5,
            automaticNameDelimiter: '.',
            name: true,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|history)[\\/]/,
                    // test: /[\\/]node_modules[\\/]/,
                    filename: 'react.lib.js',
                    chunks: 'all',
                },
                default: {
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
};