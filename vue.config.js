const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})
const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/')
            }
        }
    }
};

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('glb')
            .test(/\.glb$/)
            .use('file-loader')
            .loader('file-loader')
            .options({
                outputPath: 'assets/models/',
                name: '[name].[ext]'
            });
    }
};

module.exports = {
    devServer: {
        proxy: {
            '/models': {  // This path is an arbitrary path to use in your Vue app
                target: 'http://121.40.140.72:8889',
                changeOrigin: true,
                pathRewrite: { '^/models': '' },  // Removes '/models' from the forwarded request
            }
        }
    }
};


