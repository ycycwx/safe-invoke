/**
 * @file safely invoke function
 * @author ycy
 */

/**
 * safely invoke function instead of "&&" chains
 *
 * - origin:
 *
 *   ```
 *   object
 *       && object.foo
 *       && object.foo.bar
 *       && object.foo.bar('baz')
 *   ```
 *
 * - now:
 *
 *   ```
 *   safeInvoke(obj, 'foo.bar', 'baz')
 *   ```
 *
 * - or:
 *
 *   ```
 *   safeInvoke(obj, ['foo', 'bar'], 'baz')
 *   ```
 *
 * @param {Object} obj object
 * @param {string|Array.<string>} path keypath
 * @param {...*} args extra arguments
 */
export default function safeInvoke(obj, path, ...args) {
    let [last, ...head] = (Array.isArray(path) ? path : (path || '').split('.')).reverse();
    let initial = head.reduceRight((prev, part) => prev ? prev[part] : prev, obj);
    initial && typeof initial[last] === 'function' && ::initial[last](...args);
}
