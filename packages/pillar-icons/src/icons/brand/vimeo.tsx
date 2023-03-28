import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 8.5 1 1S5.5 8.4 6 9c.5.6 1.9 7.6 2.5 9 .6 1.2 2 2.9 4 1.5C14.5 18 20 14 21 8c.4-2.7-1-4-2.5-4-2 0-4 1.2-4.5 4 2-1.3 2.6 1 1.5 3-1 2-2 3-2.5 3s-1-1.2-1.5-3.5C10.9 8.1 11 4 8.5 4S3 8.5 3 8.5Z" />
  </svg>
)

export default SvgComponent
