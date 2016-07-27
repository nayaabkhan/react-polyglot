import React from 'react';
import { translate } from '../lib';

const Greeter = ({ name, t }) => (
  <h3>{t('hello_name', { name })}</h3>
);

Greeter.propTypes = {
  name: React.PropTypes.string.isRequired,
  t: React.PropTypes.func.isRequired,
};

export default translate()(Greeter);
