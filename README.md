# Next.js

## On my way to figure out to find the best way to deploy a React App

01. [create-react-app](https://github.com/mpolinowski/react-router-4)
02. [GatsbyJS](https://github.com/mpolinowski/gatsby-wiki)
03. Next.js

Today I want to try out [Next.js](https://zeit.co/docs/examples/next) ([Github](https://github.com/zeit/next.js)). More specifically the new [Next4](https://zeit.co/blog/next4) release that includes [React16](https://reactjs.org/blog/2017/09/26/react-v16.0.html) and [React Router 4](https://zeit.co/blog/next4) - as I already gathered some [positive experiences](https://github.com/mpolinowski/react-router-4) with those. There is also an update to [Styled JSX 2](https://github.com/zeit/styled-jsx/releases/tag/2.0.1), that now allows us to __prop__-up our styles, to avoid having to overwrite defaults inline inside components - here the documented example:

```js
export default ({ color }) => (
    <div>
      Hello there <span>my friend</span>
      <style jsx>{`
        /* this style only applies to the span within lexical scope */
        span { color: ${color}; }
      `}</style>
    </div>
  )
```



## Basic Setup

First create a directory for our app and _npm init -y_ it - then install Next.js and React:

```
npm install next@latest react@latest react-dom@latest --save
```

We can add the following npm scripts to the __package.json__ file to make things easier:

```
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
```

After that, the file-system is the main API. Every .js file becomes a route that gets automatically processed and rendered.

Populate _./pages/index.js_ inside your project:

```js
export default () => <div>Welcome to next.js!</div>
```

and then just run npm run dev and go to http://localhost:3000. To use another port, you can run npm run dev -- -p <your port here>.

So far, we get:

* Automatic transpilation and bundling (with webpack and babel)
* Hot code reloading
* Server rendering and indexing of ./pages
* Static file serving. ./static/ is mapped to /static/
* Automatic code splitting - Every import you declare gets bundled and served with each page. That means pages never load unnecessary code!



## Styling
