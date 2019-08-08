// Type definitions for react-polyglot v0.4.0
// TypeScript Version: 2.8

import { ComponentType, ReactNode } from 'react'

interface InterpolationOptions {
    smart_count?: number | { length: number };
    _?: string;
    [interpolationKey: string]: any;
}

interface InterpolationTokenOptions {
  prefix?: string;
  suffix?: string;
}

interface PluralRules {
    pluralTypes: {
        [key: string]: (no: number) => number;
    };
    pluralTypeToLanguages: {
        [key: string]: string[];
    };
}

interface PolyglotOptions {
  /** Locale to use, e.g. `en` */
  locale: string;
  /** A dictionary of translations */
  messages: object;

  /** A boolean to control whether missing keys are allowed **/
  allowMissing?: boolean;
  /** If allow missing is true this function will be called instead of default error handler **/
  onMissingKey?: (key: string, options?: InterpolationOptions, locale?: string) => string;
  /** An object to change the substituation syntax for interpolation by setting prefix and suffix **/
  interpolation?: InterpolationTokenOptions;
  /** https://github.com/airbnb/polyglot.js#custom-pluralization-rules */
  pluralRules?: PluralRules;
}

interface I18nProps extends PolyglotOptions {
  children: ReactNode;
}

/** Provider component to wrap your root application component in. */
declare const I18n: ComponentType<I18nProps>

export default I18n
