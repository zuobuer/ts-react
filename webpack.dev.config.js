const path = require("path");
const serverPath = "/dist/";
const buildPath = path.resolve(__dirname, './dist/');
const publicPath = '/';
module.exports = {

    mode: "development",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    entry: "./src/index.tsx",

    output: {
        pathinfo: true,
        filename: "static/js/bundle.js",
        // path: buildPath,
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: publicPath,
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        // runtimeChunk: false,
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
            // Disable require.ensure as it's not a standard language feature.
            { parser: { requireEnsure: false } },

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

    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 1000,
    //         maxInitialRequests: 2,
    //         maxAsyncRequests: 5,
    //         automaticNameDelimiter: '.',
    //         name: true,
    //         cacheGroups: {
    //             vendor: {
    //                 // test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
    //                 test: /[\\/]node_modules[\\/]/,
    //                 filename: 'react.lib.js',
    //                 chunks: 'all',
    //             },
    //             default: {
    //                 minChunks: 1,
    //                 priority: -20,
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // },

    devServer: {
        publicPath: serverPath,
        port: "8080",
        compress: true,
    }
};