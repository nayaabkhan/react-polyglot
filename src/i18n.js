import React from 'react'
import PropTypes from 'prop-types'
import Polyglot from 'node-polyglot'
import I18nContext from './i18n-context'

export default function I18n({
  locale,
  messages,

  allowMissing,
  onMissingKey,
  interpolation,
  pluralRules,

  children,
}) {
  const translate = React.useMemo(() => {
    const polyglot = new Polyglot({
      locale,
      phrases: messages,

      allowMissing,
      onMissingKey,
      interpolation,
      pluralRules,
    })
    const boundTranslate = polyglot.t.bind(polyglot)

    boundTranslate._polyglot = polyglot

    return boundTranslate
  }, [locale, messages, allowMissing, onMissingKey, interpolation, pluralRules])

  return (
    <I18nContext.Provider value={translate}>
      {React.Children.only(children)}
    </I18nContext.Provider>
  )
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
