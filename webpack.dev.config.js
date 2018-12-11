const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: "development",
    bail: true,
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    entry: ["./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'static/js/entry.js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
        publicPath: "/",
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxInitialRequests: 3,
            automaticNameDelimiter: '.',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    filename: "static/js/lib.js",
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
            },
        },
        runtimeChunk: false,
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "@views": path.resolve(__dirname, "./src/views"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@actions": path.resolve(__dirname, "./src/actions"),
            "@types": path.resolve(__dirname, "./src/types"),
        }
    },

    module: {
        strictExportPresence: true,
        rules: [
             // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
             { test: /\.tsx?$/, loader: require.resolve("awesome-typescript-loader") },

             // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
             { enforce: "pre", test: /\.js$/, loader: require.resolve("source-map-loader" )},
 
            // css style loader
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        }
                    },
                    require.resolve('postcss-loader'),
                ]
            },

            // sass loader
            {
                test: /\.scss$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 2
                        }
                    },
                    require.resolve('postcss-loader'),
                    require.resolve('sass-loader'),
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    performance: false,

    devServer: {
        publicPath: "/",
        contentBase: "./public",
        port: "8080",
        compress: true,
        // open: true,
    }
};