import React, { ReactNode } from 'react'
import Polyglot from 'node-polyglot'
import I18nContext from './i18n-context'

interface I18nProps {
  children: ReactNode
  /** Locale to use, e.g. `en` */
  locale: string
  /** A dictionary of translations */
  messages: object
}

// Provider root component
export default class I18n extends React.Component<I18nProps> {
  _polyglot: Polyglot

  constructor(props: I18nProps) {
    super(props)

    this._polyglot = new Polyglot({
      locale: props.locale,
      phrases: props.messages,
    })
  }

  componentWillReceiveProps(newProps: I18nProps) {
    if (newProps.locale !== this.props.locale) {
      this._polyglot.locale(newProps.locale)
    }

    if (newProps.messages !== this.props.messages) {
      this._polyglot.replace(newProps.messages)
    }
  }

  render() {
    const { children } = this.props

    return (
      <I18nContext.Provider value={this._polyglot.t.bind(this._polyglot)}>
        {React.Children.only(children)}
      </I18nContext.Provider>
    )
  }
}
