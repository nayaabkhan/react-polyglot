// Type definitions for react-polyglot v0.4.0
// Typescript version: 2.8

import { InterpolationOptions } from 'node-polyglot'
import { ComponentType, ComponentClass } from 'react'

import hoistNonReactStatics = require('hoist-non-react-statics');

// Borrowed from @types/react-redux
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-redux/index.d.ts
export type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
    ? InjectedProps[P] extends DecorationTargetProps[P]
        ? DecorationTargetProps[P]
        : InjectedProps[P]
    : DecorationTargetProps[P];
};
export type Shared<
InjectedProps,
DecorationTargetProps
> = {
    [P in Extract<keyof InjectedProps, keyof DecorationTargetProps>]?: InjectedProps[P] extends DecorationTargetProps[P] ? DecorationTargetProps[P] : never;
};
export type GetProps<C> = C extends ComponentType<infer P> ? P : never;
export type ConnectedComponentClass<
    C extends ComponentType<any>,
    P
> = ComponentClass<JSX.LibraryManagedAttributes<C, P>> & hoistNonReactStatics.NonReactStatics<C> & {
    WrappedComponent: C;
};
export type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> =
    <C extends ComponentType<Matching<TInjectedProps, GetProps<C>>>>(
        component: C
    ) => ConnectedComponentClass<C, Omit<GetProps<C>, keyof Shared<TInjectedProps, GetProps<C>>> & TNeedsProps>;
export type InferableComponentEnhancer<TInjectedProps> =
        InferableComponentEnhancerWithProps<TInjectedProps, {}>;

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
interface Translate {
    (): InferableComponentEnhancer<TranslateProps>
}

declare const translate: Translate

export default translate
