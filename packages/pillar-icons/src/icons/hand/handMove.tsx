import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const handOff = (props: SvgType) => (
  <Svg {...props}>
    <path d="M11 12V4.5a1.5 1.5 0 1 0-3 0V13l-1.5-1.5a1.9 1.9 0 0 0-2.3-.3 1.5 1.5 0 0 0-.5 2L7 19l.2.3a6 6 0 0 0 5 2.7H12h2a6 6 0 0 0 6-6v-4.5a1.5 1.5 0 1 0-3 0m-6 0v-2a1.5 1.5 0 1 1 3 0V12m0-1.5a1.5 1.5 0 1 1 3 0V12M2.5 5.6c.8-.6 1.6-1 2.5-1.4m9-.7c1.3.3 2.6.9 3.7 1.6" />
  </Svg>
)

export default handOff
