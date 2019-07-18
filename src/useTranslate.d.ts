import { InterpolationOptions } from 'node-polyglot'

type TranslateFunction = (
    phrase: string,
    options?: number| InterpolationOptions
) => string

declare const useTranslate = () => TranslateFunction

export default useTranslate
