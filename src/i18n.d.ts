// Type definitions for react-polyglot v0.4.0
// TypeScript Version: 2.8

import { ComponentType, ReactNode } from 'react'

interface I18nProps {
  children: ReactNode
  /** Locale to use, e.g. `en` */
  locale: number
  /** A dictionary of translations */
  messages: object
}

/** Provider component to wrap your root application component in. */
declare const I18n: ComponentType<I18nProps>

export default I18n
