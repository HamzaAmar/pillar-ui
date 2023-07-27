import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const openSource = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 3a9 9 0 0 1 3.6 17.2l-2.2-5.6a3 3 0 1 0-2.8 0l-2.2 5.6A9 9 0 0 1 12 3Z" />
  </svg>
)

export default openSource
