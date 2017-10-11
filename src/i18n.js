import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
  
  componentWillReceiveProps(newProps) {
    if (newProps.locale !== this.props.locale) {
      this._polyglot.locale(newProps.locale);
      this._polyglot.replace(newProps.messages);
    }
 }

  render() {
    const children = this.props.children;
    return React.Children.only(children);
  }
}

I18n.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

I18n.childContextTypes = {
  t: PropTypes.func.isRequired,
};
