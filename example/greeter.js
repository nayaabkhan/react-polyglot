import React from 'react'
import PropTypes from 'prop-types'
import { translate } from '../lib'

const Greeter = ({ name, nrCars, t }) => (
  <div>
    <h3>{t('hello_name', { name })}</h3>
    <p>{t('num_cars', { smart_count: nrCars })}</p>
  </div>
)

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
  nrCars: PropTypes.number.isRequired,
  t: PropTypes.func,
}

export default translate()(Greeter)
