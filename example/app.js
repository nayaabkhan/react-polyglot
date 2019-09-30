import React, { Fragment, useState } from 'react'
import { render } from 'react-dom'
import { I18n } from '../lib'
import Greeter from './greeter'

const messages = {
  en: {
    hello_name: 'Hello, %{name}.',
    num_cars:
      'Nice %{smart_count} car! |||| What are you doing with %{smart_count} cars?',
  },

  nl: {
    hello_name: 'Hallo, %{name}.',
    num_cars:
      "Mooie %{smart_count} auto! |||| Wat moet je met %{smart_count} auto's?",
  },
}

const App = () => {
  const [locale, setLocale] = useState('en')
  const toggleLocale = () => setLocale(locale === 'en' ? 'nl' : 'en')

  return (
    <Fragment>
      <button onClick={toggleLocale}>{locale}</button>
      <I18n locale={locale} messages={messages[locale]}>
        <Greeter name="Batsy" nrCars={3} />
      </I18n>
    </Fragment>
  )
}

render(<App />, document.getElementById('app'))
