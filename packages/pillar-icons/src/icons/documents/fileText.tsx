import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const fileText = (props: SvgType) => (
  <Svg {...props}>
    <path d="M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-5-5 5 5M9 9h1m-1 4h6m-6 4h6" />
  </Svg>
)

export default fileText
