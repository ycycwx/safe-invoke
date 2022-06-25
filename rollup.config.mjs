/**
 * @file rollup.config.mjs
 * @author ycy
 */

// @ts-check

import {babel} from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

export default {
    plugins: [
        babel({
            babelrc: false,
            babelHelpers: 'bundled',
            presets: [['@babel/preset-env', {loose: true, modules: false}]]
        }),
        terser()
    ]
};
