/**
 * @file index.test.js
 * @author ycy
 */

import {expect, vi, test} from 'vitest';
import safeInvoke from '../src';

const noArgs = vi.fn();

const multiArgs = vi.fn();

const singleArgs = vi.fn();

const arrayPath = vi.fn();

const obj = {
    a: noArgs,
    b: {
        c: {
            d: {
                e: singleArgs,
            },
        },
    },
    f: [
        {
            g: multiArgs,
        },
    ],
    h: 'not a function',
    i: {
        3.5: {
            'j.k': arrayPath,
        },
    },
};

test('shallow obj with no argument', () => {
    safeInvoke(obj, 'a');
    expect(noArgs).toHaveBeenCalled();
    expect(noArgs.mock.calls.length).toBe(1);
    expect(noArgs.mock.calls[0]).toEqual([]);
});

test('deep obj with single argument', () => {
    safeInvoke(obj, 'b.c.d.e', 'single');
    expect(singleArgs.mock.calls.length).toBe(1);
    expect(singleArgs).toHaveBeenCalledWith('single');
});

test('array in obj && multiple arguments', () => {
    safeInvoke(obj, 'f.0.g', 'multi', 'argument');
    expect(multiArgs.mock.calls.length).toBe(1);
    expect(multiArgs).toHaveBeenCalledWith('multi', 'argument');
});

test('array of key path argument', () => {
    safeInvoke(obj, ['i', '3.5', 'j.k']);
    expect(arrayPath.mock.calls.length).toBe(1);
    expect(arrayPath.mock.calls[0]).toEqual([]);
});

test('no error to throw', () => {
    expect(() => safeInvoke()).not.toThrow();
    expect(() => safeInvoke(obj)).not.toThrow();
    expect(() => safeInvoke(obj, 'h')).not.toThrow();
    expect(() => safeInvoke(obj, 'h.i')).not.toThrow();
    expect(() => safeInvoke(obj, 'i')).not.toThrow();
    expect(() => safeInvoke(undefined)).not.toThrow();
    expect(() => safeInvoke(undefined, 'foo.bar')).not.toThrow();
    expect(() => safeInvoke(null)).not.toThrow();
    expect(() => safeInvoke(obj, null)).not.toThrow();
    expect(() => safeInvoke(obj, undefined)).not.toThrow();
    expect(() => safeInvoke(new Date())).not.toThrow();
});
