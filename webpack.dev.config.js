const path = require("path");
const serverPath = "/dist/";
const buildPath = path.resolve(__dirname, './dist/');
module.exports = {

    mode: "development",

    entry: "./src/index.tsx",

    output: {
        filename: "app.js",
        path: buildPath,
        chunkFilename: '[name].chunck.[hash:8].js',
        publicPath: serverPath,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
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

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                  test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                  filename: 'react.lib.js',
                  chunks: 'all',
                }
              }
        }
    },

    devServer: {
        publicPath: serverPath,
        port: "8080",
        compress: true,
    }
};