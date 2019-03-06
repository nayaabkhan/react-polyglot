import React from 'react';
import { translate } from '../lib';

const Greeter = ({ name, t }) => (
  <h3>{t('hello_name', { name })}</h3>
);

export default translate()(Greeter);
