# safe-invoke

[![NPM version](https://img.shields.io/npm/v/safe-invoke.svg?style=flat)](https://npmjs.com/package/save-invoke)
[![NPM downloads](https://img.shields.io/npm/dm/save-invoke.svg?style=flat)](https://npmjs.com/package/save-invoke)
[![CircleCI](https://img.shields.io/circleci/project/ycycwx/safe-invoke/master.svg?style=flat)](https://circleci.com/gh/ycycwx/safe-invoke)

## Install

``` bash
# use yarn
yarn add safe-invoke

# use npm
npm i --save safe-invoke
```

## How to use

Suppose we have an object like this

``` js
let age = {
    muv: {
        luv: [
            {
                extra: (...) => {...}
            },
            {
                unlimited: (...) => {...}
            },
            {
                alternative: (...) => {...}
            }
        ]
    }
};
```

If we want to call the function `extra`, `unlimited`, `alternative` safely.

**Original**

``` js
age
    && age.muv
    && age.muv.luv
    && age.muv.luv[0]
    && typeof age.muv.luv[0].extra === 'function'
    && age.muv.luv[0].extra();

age
    && age.muv
    && age.muv.luv
    && age.muv.luv[1]
    && typeof age.muv.luv[1].unlimited === 'function'
    && age.muv.luv[1].unlimited('オルタネイティヴ5');

age
    && age.muv
    && age.muv.luv
    && age.muv.luv[2]
    && typeof age.muv.luv[2].alternative === 'function'
    && age.muv.luv[2].alternative('オルタネイティヴ4', '桜花作戦');
```

**Now** we can write instead:

``` js
import safeInvoke from 'safe-invoke';

safeInvoke(age, 'muv.luv.0.extra');
safeInvoke(age, 'muv.luv.1.unlimited', 'オルタネイティヴ5');
safeInvoke(age, 'muv.luv.2.alternative', 'オルタネイティヴ4', '桜花作戦');
```

## License

[MIT](http://opensource.org/licenses/MIT)
