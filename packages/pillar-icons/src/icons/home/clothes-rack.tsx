import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const clothesRack = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 0v14m-3 0h6M7.8 9.2a6 6 0 0 0 8.4 0" />
  </svg>
)

export default clothesRack
