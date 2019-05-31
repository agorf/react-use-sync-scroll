# useSyncScroll

A [custom][] [React hook][hooks] for synchronized, proportional, horizontal
and/or vertical DOM element scrolling.

[Demo][]

[custom]: https://reactjs.org/docs/hooks-custom.html
[hooks]: https://reactjs.org/docs/hooks-intro.html
[Demo]: https://raw.githubusercontent.com/agorf/react-use-sync-scroll/master/demo.html

## Install

With [npm](https://www.npmjs.com/):

```sh
npm install react-use-sync-scroll
```

Or with [Yarn](https://yarnpkg.com/):

```sh
yarn add react-use-sync-scroll
```

Or in a browser:

```html
<script scr="https://unpkg.com/react-use-sync-scroll/dist/index.js"></script>
```

## Use

The hook accepts two arguments:

- The number of elements to synchronize
- An options object to define whether to synchronize `horizontal` or `vertical`
  scrolling (both default to `false`)

It returns an array of refs to assign to your elements. For example:

```javascript
import useSyncScroll from 'react-use-sync-scroll';

function myComponent() {
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
