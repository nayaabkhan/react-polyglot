import { InterpolationOptions } from 'node-polyglot'

type Tt = (
  /** The key of the phrase to translate. */
  phrase: string,
  /** The options accepted by `polyglot.t`. */
  options?: number | InterpolationOptions
) => string

export default Tt
