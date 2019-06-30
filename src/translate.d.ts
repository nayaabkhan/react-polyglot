// Type definitions for react-polyglot v0.4.0
// Typescript version: 2.8

import { InterpolationOptions } from 'node-polyglot';
import { ComponentType } from 'react';

export type t = (
  phrase: string,
  options?: number | InterpolationOptions
) => string;

export interface TranslateProps {
  t: t;
}

declare const translate = () => <T extends object>(
  Component: ComponentType<T>
) => ComponentType<T & TranslateProps>(Component);

export default translate;
