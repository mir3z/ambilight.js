# ambilight.js

[Ambilight effect](https://en.wikipedia.org/wiki/Ambilight) for HTML.

Demos:
* [Aurora](https://cdn.rawgit.com/mir3z/ambilight.js/13dbbd34/demo/index.html)
* [Dartmoor](https://cdn.rawgit.com/mir3z/ambilight.js/13dbbd34/demo/index.html?_=1)
* [The Peak](https://cdn.rawgit.com/mir3z/ambilight.js/13dbbd34/demo/index.html?_=2)


## Quick Usage

```js
import ambilight from "ambilight.js";

ambilight(document.querySelector("video"));
```

`led` and `ambient` are two possible strategies of performing the ambilight effect. They can be applied as the second argument to `ambilight`. The default one is `led`.

## API

### <code>ambilight(*video:HTMLVideoElement, [strategy:function]*)</code>

`strategy` may be one of the following:

* <code>ambient(*options:object*)</code>
    * `options.strength:number`, light strength, default: 1.1
    * `options.spread:number`, light spread, default: 60
* <code>led(*options:object*)</code>
    * `options.vertical:number` - number vertical of light points, default: 6
    * `options.horizontal:number` - number horizontal of light points, default: 4

`ambient` duplicates input video, puts it behind the original video and applies blur CSS filter so that it looks like a glow.

`led` divides input video into `options.horizontal` × `options.vertical` areas aligned as a grid. Each area has assigned average color of the corresponsing video area. Each area glows with its own color via `border-shadow` CSS property. This gives more dynamic and smooth effect than `ambient`.

## License
The MIT License (MIT). Copyright (c) 2018 mirz (that.mirz@gmail.com)