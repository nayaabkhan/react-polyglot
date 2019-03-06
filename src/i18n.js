import React from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'
import I18nContext from './i18n-context'

// Provider root component
export default class I18n extends React.Component {
  constructor(props) {
    super(props)

    this._polyglot = new Polyglot({
      locale: props.locale,
      phrases: props.messages,
    })
  }

  componentWillReceiveProps(newProps) {
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

I18n.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}
