/**
 * @file index.test.js
 * @author ycy
 */

/* global jest, test */

import safeInvoke from '../src';

let noArgs = jest.fn();

let multiArgs = jest.fn();

let singleArgs = jest.fn();

let arrayPath = jest.fn();

let obj = {
    a: noArgs,
    b: {
        c: {
            d: {
                e: singleArgs
            }
        }
    },
    f: [
        {
            g: multiArgs
        }
    ],
    h: 'not a function',
    i: {
        '3.5': {
            'j.k': arrayPath
        }
    }
};

test('shallow obj with no argument', () => {
    safeInvoke(obj, 'a');
    expect(noArgs).toBeCalled();
    expect(noArgs.mock.calls.length).toBe(1);
    expect(noArgs.mock.calls[0]).toEqual([]);
});

test('deep obj with single argument', () => {
    safeInvoke(obj, 'b.c.d.e', 'single');
    expect(singleArgs.mock.calls.length).toBe(1);
    expect(singleArgs).toBeCalledWith('single');
});

test('array in obj && multiple arguments', () => {
    safeInvoke(obj, 'f.0.g', 'multi', 'argument');
    expect(multiArgs.mock.calls.length).toBe(1);
    expect(multiArgs).toBeCalledWith('multi', 'argument');
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

