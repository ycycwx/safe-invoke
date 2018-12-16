/**
 * @file rollup.config.js
 * @author ycy
 */

import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default {
    plugins: [
        babel({
            babelrc: false,
            presets: [['@babel/preset-env', {loose: true, modules: false}]],
            plugins: ['@babel/plugin-proposal-function-bind']
        }),
        terser()
    ]
};

