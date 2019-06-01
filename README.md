# useSyncScroll

[![npm version](https://badge.fury.io/js/react-use-sync-scroll.png)](https://www.npmjs.com/package/react-use-sync-scroll)

A [custom][] [React hook][hooks] for synchronized, proportional, horizontal
and/or vertical DOM element scrolling.

**[Demo][]**

[custom]: https://reactjs.org/docs/hooks-custom.html
[hooks]: https://reactjs.org/docs/hooks-intro.html
[Demo]: https://agorf.github.io/react-use-sync-scroll/demo.html

## Install

With [npm](https://www.npmjs.com/):

```sh
npm install react-use-sync-scroll
```

With [Yarn](https://yarnpkg.com/):

```sh
yarn add react-use-sync-scroll
```

In a browser:

```html
<script src="https://unpkg.com/react-use-sync-scroll/dist/index.js"></script>
```

## Use

The hook accepts two arguments:

- The number of elements to synchronize
- An options object to define whether to synchronize `horizontal` or `vertical`
  scrolling (both default to `false`)

It returns an array of refs to assign to your elements.

For example:

```javascript
import useSyncScroll from 'react-use-sync-scroll';

function SomeComponent() {
  const refs = useSyncScroll(3, { vertical: true, horizontal: false });

  return (
    <div>
      <div ref={refs[0]}>...</div>
      <div ref={refs[1]}>...</div>
      <div ref={refs[2]}>...</div>
    </div>
  );
}
```

## License

[MIT](https://github.com/agorf/react-use-sync-scroll/blob/master/LICENSE.txt)

## Author

[Angelos Orfanakos](https://angelos.dev/)
