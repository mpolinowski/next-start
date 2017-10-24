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

All righty, lets go then!
---


__TOC__

01. [Basic Setup](#01-basic-setup)
02. [Styling](#02-styling)
  * [Example](#example)

## 01 Basic Setup

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



## 02 Styling

Next.js 4 bundles styled-jsx 2 to provide support for isolated scoped CSS - the [documentation can be found here](https://www.npmjs.com/package/styled-jsx). A few examples are:


__isolated scoped CSS__
```js
export default () => (
  <div>
    <p>only this paragraph will get the style :)</p>

    { /* you can include <Component />s here that include
         other <p>s that don't get unexpected styles! */ }

    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
  </div>
)
```


Styles can be defined in separate JavaScript modules by tagging with css any template literal that contain CSS. css must be imported from styled-jsx/css:

__Keeping CSS in separate files__
```js
/* styles.js */
import css from 'styled-jsx/css'

export const button = css`button { color: purple; }`
export default css`div { color: teal; }`
```

and imported as regular strings:

```js
import styles, { button } from './styles'

export default () => (
  <div>
    <button>styled-jsx</button>
    <style jsx>{styles}</style>
    <style jsx>{button}</style>
  </div>
)
```

in this example all "potential" \<div\>'s inside the components JSX - as well as the enclosing root \<div\> is targeted by {styles}. If you just want to target the root:


__Targeting The Root__
```js
export default () => (
  <div className="root">
    <style jsx>{`
      .root {
        color: green;
      }
    `}</style>
  </div>
)
```


To skip scoping entirely, you can make the global-ness of your styles explicit by adding global:

__Global styles__
```js
export default () => (
  <div>
    <style jsx global>{`
      body {
        background: red
      }
    `}</style>
  </div>
)
```


You can also use modifiers for your CSS classes to create components that can be called in different "versions", e.g. \<Button\>Hi\</Button\> or \<Button large\>Big\</Button\>.

__className toggling__
```js
const Button = (props) => (
  <button className={ 'large' in props && 'large' }>
     { props.children }
     <style jsx>{`
        button {
          padding: 20px;
          background: #eee;
          color: #999
        }
        .large {
          padding: 50px
        }
     `}</style>
  </button>
)
```


You can override the CSS you configure via inline-styles:

__inline style__
```js
const Button = ({ padding, children }) => (
  <button style={{ padding }}>
     { children }
     <style jsx>{`
        button {
          padding: 20px;
          background: #eee;
          color: #999
        }
     `}</style>
  </button>
)
```

In this example, the padding defaults to the one set in \<style\> (20), but the user can pass a custom one via \<Button padding={30}\>.


It is possible to use constants like so:

__Constants__
```js
import { colors, spacing } from '../theme'
import { invertColor } from '../theme/utils'

const Button = ({ children }) => (
  <button>
     { children }
     <style jsx>{`
        button {
          padding: ${ spacing.medium };
          background: ${ colors.primary };
          color: ${ invertColor(colors.primary) };
        }
     `}</style>
  </button>
)
```

or to pass them down by Props:

__Dynamic styles__
```js
const Button = (props) => (
  <button>
     { props.children }
     <style jsx>{`
        button {
          padding: ${ 'large' in props ? '50' : '20' }px;
          background: ${props.theme.background};
          color: #999;
          display: inline-block;
          font-size: 1em;
        }
     `}</style>
  </button>
)
```

## Example

_./pages/index.js_

```js
import styles, { hipsterum, imagefloat } from './styles/hipsterum'

export default () =>
  <div>

    <h1>Welcome to next.js!</h1>
    <h3>The awesome World of Server-side Rendering</h3>
    <h5>lets see what this is all about</h5>
    <img src="/static/test.png" className="imagefloat"/>
    <p className="hipsterum">
      [ipsum...]
    </p>

    <style jsx>{`
      h1, h5 {
        color: white;
      }
      @media (max-width: 600px) {
        h1, h5 {
          color: black;
        }
      }
    `}</style>

    <style global jsx>{`
      body {
        background: black;
      }
      @media (max-width: 600px) {
        body {
          background-image: url("/static/test.png");
        }
      }
    `}</style>

    <style jsx>{styles}</style>
    <style jsx>{imagefloat}</style>
    <style jsx>{hipsterum}</style>

  </div>
```

_./pages/styles/hipsterum.js_

```js
import css from 'styled-jsx/css'

export const hipsterum = css`.hipsterum {
    color: blue;
    text-align: justify;
  }`

export const imagefloat = css`.imagefloat {
    float:right;
    margin-left:10px;
  }`

export default css`h3 { color: red; }`
```

This leads you to an style abomination that will make you cringe :) but uses all the important features of Style-JSX:

* \@media queries for responsive designs
* usage of static assets for your designs from the _./static_ folder
* inline css and separated css styles in their own files
* separation of styles into their own functions to allow you to import only necessary styles
