import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'
import I18nContext from './i18n-context'

// Provider root component
export default class I18n extends Component {
  constructor(props) {
    super(props)

    this._polyglot = new Polyglot({
      locale: props.locale,
      phrases: props.messages,
    })
  }

  render() {
    const { forceReInit, locale, messages, children } = this.props

    if (forceReInit || this._polyglot.locale() !== locale) {
      this._polyglot.locale(locale)
      this._polyglot.replace(messages)
    }

    return (
      <I18nContext.Provider value={this._polyglot.t.bind(this._polyglot)}>
        {React.Children.only(children)}
      </I18nContext.Provider>
    )
  }
}

I18n.propTypes = {
  forceReInit: PropTypes.bool,
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

I18n.defaultProps = {
  forceReInit: false,
}
