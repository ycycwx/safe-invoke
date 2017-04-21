/**
 * @file rollup.config.js
 * @author ycy
 */

import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
    plugins: [
        babel({
            babelrc: false,
            presets: [['env', {loose: true, modules: false}]],
            plugins: ['transform-function-bind']
        }),
        uglify()
    ]
};

