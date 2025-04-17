import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const accessible = (props: SvgType) => (
  <Svg {...props}>
    <path d="m10 16.5 2-3m0 0 2 3m-2-3v-2m0 0 3-1m-3 1-3-1M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8.5-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z" />
  </Svg>
)

export default accessible
