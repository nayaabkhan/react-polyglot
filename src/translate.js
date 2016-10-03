import React from 'react';
import HoistNonReactStatics from 'hoist-non-react-statics';

// higher order decorator for components that need `t`
export default function translate() {
  return (WrappedComponent) => {
    const _translate = (props, context) => (
      <WrappedComponent {...props} t={context.t} />
    );

    _translate.contextTypes = {
      t: React.PropTypes.func.isRequired,
    };

    return HoistNonReactStatics(_translate, WrappedComponent);
  };
}
