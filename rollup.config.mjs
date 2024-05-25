/**
 * @file rollup.config.mjs
 * @author ycy
 */

// @ts-check

import terser from '@rollup/plugin-terser';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    plugins: [
        terser()
    ]
};
