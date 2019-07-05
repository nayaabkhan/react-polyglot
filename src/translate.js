import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import PropTypes from 'prop-types'
import I18nContext from './i18n-context'

// higher order decorator for components that need `t`
export default function translate({ forwardRef } = {}) {
  return WrappedComponent => {
    const _translate = originalProps => {
      const props = Object.assign({}, originalProps)
      const forwardedRef = props.forwardedRef

      delete props.forwardedRef

      return (
        <I18nContext.Consumer>
          {t => <WrappedComponent {...props} t={t} ref={forwardedRef} />}
        </I18nContext.Consumer>
      )
    }
    _translate.propTypes = {
      forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.elementType }),
      ]),
    }

    if (forwardRef) {
      const forwarded = React.forwardRef((props, ref) => {
        return <_translate {...props} forwardedRef={ref} />
      })

      return hoistNonReactStatics(forwarded, WrappedComponent)
    }

    return hoistNonReactStatics(_translate, WrappedComponent)
  }
}
