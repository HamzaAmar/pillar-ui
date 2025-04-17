import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

const eye = (props: SvgType) => (
  <Svg {...props}>
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    <path d="M21 12c-2.4 4-5.4 6-9 6-3.6 0-6.6-2-9-6 2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6Z" />
  </Svg>
)

export default eye
