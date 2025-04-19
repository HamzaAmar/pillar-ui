import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const headlessUi = (props: SvgType) => (
  <Svg {...props}>
    <path d="m6.7 4.3 7.9-1.2a4.5 4.5 0 0 1 5 3.6l1.3 7.9a4.5 4.5 0 0 1-3.6 5L9.4 21a4.5 4.5 0 0 1-5-3.6L3 9.4a4.5 4.5 0 0 1 3.6-5Z" />
    <path d="M7.3 7.7 15 6.4a1 1 0 0 1 1.2.9l.4 2.2L7 13l-.7-4.1a1 1 0 0 1 .9-1.2Z" />
  </Svg>
)

export default headlessUi
