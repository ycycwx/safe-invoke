/**
 * @file rollup.config.mjs
 * @author ycy
 */

import terser from '@rollup/plugin-terser';
import pkg from './package.json' with {type: 'json'};

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: './src/index.js',
    output: [
        {
            file: pkg.exports['.'].require,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: pkg.exports['.'].import,
            format: 'es',
            sourcemap: true,
        },
        {
            file: pkg.exports['.'].default,
            format: 'umd',
            name: 'safeInvoke',
            sourcemap: true,
        },
    ],
    plugins: [terser()],
};
