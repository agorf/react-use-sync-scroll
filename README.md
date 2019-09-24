# useSyncScroll

[![npm version](https://badge.fury.io/js/react-use-sync-scroll.png)](https://www.npmjs.com/package/react-use-sync-scroll)

A [custom][] [React hook][hooks] for synchronized, proportional, horizontal
and/or vertical DOM element scrolling.

**[DEMO][]**

[custom]: https://reactjs.org/docs/hooks-custom.html
[hooks]: https://reactjs.org/docs/hooks-intro.html
[DEMO]: https://agorf.github.io/react-use-sync-scroll/demo.html

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

- A ref of refs (at least 2) of elements to synchronize
- An options object to define whether to synchronize `horizontal` or `vertical`
  scrolling (both default to `false`)

For example:

```javascript
import useSyncScroll from 'react-use-sync-scroll';

function SomeComponent() {
  // Make a ref for each element to synchronize
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);

  // Combine them into a single array ref
  const refsRef = React.useRef([ref1, ref2, ref3]);

  // Use the hook
  useSyncScroll(refsRef, { vertical: true, horizontal: false });

  // Render
  return (
    <div>
      <div ref={ref1}>...</div>
      <div ref={ref2}>...</div>
      <div ref={ref3}>...</div>
    </div>
  );
}
```

## License

[MIT](https://github.com/agorf/react-use-sync-scroll/blob/master/LICENSE.txt)

## Author

[Angelos Orfanakos](https://angelos.dev/)
