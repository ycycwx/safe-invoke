/**
 * @file rollup.config.mjs
 * @author ycy
 */

// @ts-check

import {babel} from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    plugins: [
        babel({
            babelrc: false,
            babelHelpers: 'bundled',
            presets: [['@babel/preset-env', {loose: true, modules: false}]]
        }),
        terser()
    ]
};

export default config;
