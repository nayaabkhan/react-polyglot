import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import I18nContext from './i18n-context'

export default function translate()(WrappedComponent) {
  const _translate = props => (
    <I18nContext.Consumer>
      {t => <WrappedComponent {...props} t={t} />}
    </I18nContext.Consumer>
  )

  return hoistNonReactStatics(_translate, WrappedComponent)
}
