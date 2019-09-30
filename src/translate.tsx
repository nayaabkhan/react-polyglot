import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import I18nContext from './i18n-context'
import Tt from './types/t'

interface Props {
  t: Tt
}

// higher order decorator for components that need `t`
export default function translate() {
  return (WrappedComponent: Props) => {
    const _translate = (props: object) => (
      <I18nContext.Consumer>
        {t => <WrappedComponent {...props} t={t} />}
      </I18nContext.Consumer>
    )

    return hoistNonReactStatics(_translate, WrappedComponent)
  }
}
