import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const euro = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17.2 7c-.8-1-2-1.6-3-1.9a5.2 5.2 0 0 0-3.5.4C9.6 6.1 8.7 7 8 8.1A7.9 7.9 0 0 0 8 16c.7 1.1 1.6 2 2.7 2.6 1 .5 2.3.6 3.4.4 1.2-.3 2.3-1 3.1-1.9M13 10H5m0 4h8" />{' '}
  </svg>
)

export default euro
