This React Hook can be useful in a SSR environment to wait until be in a browser to execution some functions.

Indeed, in a SSR application, when the component with the useIsClient hook is mounted in the browser, its state changes and causes a re-render. It is what we want here, but, if you want a boolean, without extra render, see [`useSSR()`](/react-hook/use-ssr).
