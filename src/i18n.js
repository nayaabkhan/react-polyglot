import React, { Component } from 'react';
import Polyglot from 'node-polyglot';

// Provider root component
export default class I18n extends Component {
  constructor(props) {
    super(props);

    this._polyglot = new Polyglot({
      locale: props.locale,
      phrases: props.messages,
    });
  }

  getChildContext() {
    return { t: this._polyglot.t.bind(this._polyglot) };
  }

  render() {
    const children = this.props.children;
    return React.Children.only(children);
  }
}

I18n.propTypes = {
  locale: React.PropTypes.string.isRequired,
  messages: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired,
};

I18n.childContextTypes = {
  t: React.PropTypes.func.isRequired,
};
