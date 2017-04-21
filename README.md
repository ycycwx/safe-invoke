# safe-invoke

[![CircleCI](https://img.shields.io/circleci/project/ycycwx/safe-invoke/master.svg?style=flat)](https://circleci.com/gh/ycycwx/safe-invoke)

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
    && age.muv.luv[0].extra
    && typeof age.muv.luv[0].extra === 'function'
    && age.muv.luv[0].extra();

age
    && age.muv
    && age.muv.luv
    && age.muv.luv[1]
    && age.muv.luv[1].unlimited
    && typeof age.muv.luv[1].unlimited === 'function'
    && age.muv.luv[1].unlimited('オルタネイティヴ5');

age
    && age.muv
    && age.muv.luv
    && age.muv.luv[2]
    && age.muv.luv[2].alternative
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
