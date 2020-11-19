const path = require("path");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css', 'json'];
const tsImportPluginFactory = require('ts-import-plugin');
process.env.VUE_APP_TIME  = new Date().valueOf();

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    // lintOnSave: true,
    publicPath: "./",

    css: {
        loaderOptions: {
            //将sass变量添加到全局
            sass: {
                additionalData: '@import "@/styles/variables.scss";'
            }
        }
    },
    transpileDependencies: [
        /authox-vue/gi,
        /monch/gi,
        'vue-echarts',
        'resize-detector',
        /iview.src.(?!utils.date\.js\b).+js$/
    ],
    chainWebpack: config => {
        config.resolve.alias
            .set("@oa", resolve("src"))
    },
    devServer: {
        port:8062,
        proxy: {
            //汪刚毅
            "/apw/": {
                target: "http://172.18.0.164",
                changeOrigin: true,
                pathRewrite: {
                    "^/apw": ""
                }
            },
            //张虎达
            "/apz/": {
                target: "http://172.18.0.164:80",
                changeOrigin: true,
                pathRewrite: {
                    "^/apz": ""
                }
            }
        }
    },
    configureWebpack: {
        // devtool: false,
        optimization: {
            splitChunks: {
                chunks: 'async',
                minSize: 1000,
                minChunks: 1,
                maxAsyncRequests: 10,
                maxInitialRequests: 5,
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                    default: {
                        minChunks: 1,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                    dll: {
                        test: /[\\/]node_modules[\\/](vue|vue-router|vuex|iview)[\\/]/,
                        name: 'dll',
                        chunks: 'all',
                    },
                },
            },
        },
        plugins: [
            new CompressionWebpackPlugin({
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                deleteOriginalAssets: false
            }),
            new WebpackNotifierPlugin({alwaysNotify: true}),
            // new BundleAnalyzerPlugin({
            //     analyzerPort: 6543
            // })
        ]
    }
};
