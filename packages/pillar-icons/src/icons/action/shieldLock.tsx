import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const shieldLock = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 0v3m0-12c2 2 5 3 9 3a12 12 0 0 1-9 15A12 12 0 0 1 4 6c3 0 6-1 8-3Z" />
  </svg>
)

export default shieldLock
