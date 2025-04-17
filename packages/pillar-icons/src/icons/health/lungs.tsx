import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const lungs = (props: SvgType) => (
  <Svg {...props}>
    <path d="M9 12a3 3 0 0 0 3-3m0 0a3 3 0 0 0 3 3m-3-3V4M6 20a3 3 0 0 0 3-3V7.3C9 6.6 8.4 6 7.8 6c-.2 0-.4 0-.6.2H7c-1.5 1-2.5 2.7-3.4 5.9-.5 1.3-.7 3-.7 4.7 0 1.7 1.3 3 2.9 3.2H6Zm12 0a3 3 0 0 1-3-3V7.3c0-.7.6-1.3 1.2-1.3.2 0 .4 0 .6.2h.1c1.5 1 2.5 2.7 3.5 5.9.4 1.3.6 3 .6 4.7 0 1.7-1.3 3-2.9 3.2H18Z" />
  </Svg>
)

export default lungs
