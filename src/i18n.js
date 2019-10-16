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

      allowMissing: props.allowMissing,
      onMissingKey: props.onMissingKey,
      interpolation: props.interpolation,
      pluralRules: props.pluralRules,
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

  allowMissing: PropTypes.bool,
  onMissingKey: PropTypes.func,
  interpolation: PropTypes.shape({
    suffix: PropTypes.string,
    prefix: PropTypes.string,
  }),
  pluralRules: PropTypes.shape({
    pluralTypes: PropTypes.object,
    pluralTypeToLanguages: PropTypes.object,
  }),

  children: PropTypes.element.isRequired,
}

I18n.defaultProps = {
  allowMissing: false,
  onMissingKey: undefined,
  interpolation: undefined,
  pluralRules: undefined,
}
