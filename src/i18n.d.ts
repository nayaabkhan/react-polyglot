// Type definitions for react-polyglot v0.4.0
// TypeScript Version: 2.8

import { ComponentType, ReactNode } from 'react';

interface I18nProps {
  children: ReactNode;
  locale: string;
  messages: object;
}

declare const I18n: ComponentType<I18nProps>;

export default I18n;
