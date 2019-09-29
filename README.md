<a href="https://codeclimate.com/github/nayaabkhan/react-polyglot/maintainability"><img src="https://api.codeclimate.com/v1/badges/fd8c57e662c5f08ba77e/maintainability" /></a>
<a href="https://codeclimate.com/github/nayaabkhan/react-polyglot/test_coverage"><img src="https://api.codeclimate.com/v1/badges/fd8c57e662c5f08ba77e/test_coverage" /></a>
<a href="https://travis-ci.org/nayaabkhan/react-polyglot"><img src="https://travis-ci.org/nayaabkhan/react-polyglot.svg?branch=master" /></a>
<a href="https://bundlephobia.com/result?p=react-polyglot"><img src="https://badgen.net/bundlephobia/min/react-polyglot" /></a>
<a href="https://bundlephobia.com/result?p=react-polyglot"><img src="https://badgen.net/bundlephobia/minzip/react-polyglot" /></a>

# React Polyglot
Provides higher order component for using Polyglot with React

## Installation

```
npm install --save react-polyglot
```

## Usage

`react-polyglot` exports consists for one wrapper component called `I18n`, one decorator called
`translate` and one hook called `useTranslate`. The decorator provides a prop `t` which is instance of `Polyglot`.

You are required to wrap your root component with `I18n` and pass on a `locale` like `en` or `fr`.
And `messages` object containing the strings.

```js
import React from 'react';
import { render } from 'react-dom';
import { I18n } from 'react-polyglot';
import App from './components/app';

const locale = window.locale || 'en';
const messages = {
  "hello_name": "Hello, %{name}.",
  "num_cars": "%{smart_count} car |||| %{smart_count} cars",
}

render(
  <I18n locale={locale} messages={messages}>
    <App />
  </I18n>,
  document.getElementById('app')
);
```

Then inside `App` or a child component of `App` you can do:

```js
import React from 'react';
import { translate } from 'react-polyglot';

const Greeter = ({ name, t }) => (
  <h3>{t('hello_name', { name })}</h3>
);

Greeter.propTypes = {
  name: React.PropTypes.string.isRequired,
  t: React.PropTypes.func.isRequired,
};

export default translate()(Greeter);
```


or with React Hooks:

```js
import React from 'react';
import { useTranslate } from 'react-polyglot';

export default const Greeter = ({ name }) => {
  const t = useTranslate();

  return (
    <h3>{t('hello_name', { name })}</h3>
  );
};

Greeter.propTypes = {
  name: React.PropTypes.string.isRequired
};

```


## Live Examples

### Minimal example using class components

https://codesandbox.io/s/mq76ojk228

### Advance example with user changeable locales

https://codesandbox.io/s/px8n63v0m


## How to provide context in your tests

Use a simple helper to wrap your components in a context.

```js
export const wrapWithContext = function (component, context, contextTypes) {
  const wrappedComponent = React.createClass({
    childContextTypes: contextTypes,
    getChildContext() {
      return context;
    },
    render() {
      return component;
    },
  });
  return React.createElement(wrappedComponent);
}
```

Then use it inside your tests.

```js
import React from 'react';
import { renderToString } from 'react-dom/server';
import Polyglot from 'node-polyglot';
import Greeter from './greeter';
import { wrapWithContext } from './helpers';

const polyglot = new Polyglot({
  locale: 'en',
  phrases: {"hello_name": "Hello, %{name}."},
});

const greeterWithContext = wrapWithContext(
  <Greeter name="Batsy" />,
  { t: polyglot.t.bind(polyglot) },
  { t: React.PropTypes.func }
);

// use greeterWithContext in your tests
// here it is shown how to use it with renderToString
console.log(renderToString(greeterWithContext));
```


## Release History

Check the [Releases](https://github.com/nayaabkhan/react-polyglot/releases) tab. 
