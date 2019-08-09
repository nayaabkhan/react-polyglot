// Type definitions for react-polyglot v0.4.0
// Typescript version: 2.8

import { InterpolationOptions } from 'node-polyglot'
import { ComponentType } from 'react'

export type t = (
  /** The key of the phrase to translate. */
  phrase: string,
  /** The options accepted by `polyglot.t`. */
  options?: number | InterpolationOptions
) => string

export interface TranslateProps {
  /** Function to get translated phrase. */
  t: t
}

/** Wrap your components with `translate` to get a prop `t` passed in. */
declare const translate = () => <T extends object>(
  Component: ComponentType<T>
) => ComponentType<T & TranslateProps>(Component)

export default translate
