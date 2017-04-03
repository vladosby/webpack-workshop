const devConfig = require('./config/webpack.dev.config');
const prodConfig = require('./config/webpack.prod.config');

const commonConfig = require('./config/webpack.common.config');

module.exports = (env)=> {
    const MODE = env !== undefined ? env.mode : 'dev';

    if (MODE === 'dev') {
        return devConfig('dev');
        // return commonConfig('dev');
    } else {
        return prodConfig('prod');
    }
};