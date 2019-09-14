import React from 'react'
import Polyglot from 'node-polyglot'

const polyglot = new Polyglot()

const I18nContext = React.createContext(polyglot.t)

export default I18nContext
