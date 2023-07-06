import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const messanger = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m8 13 3-2 2 2 3-2M3 20l1.3-3.9a7.3 7.3 0 0 1-1.1-5.5c.3-2 1.5-3.7 3.2-4.9a9.8 9.8 0 0 1 11.8.5 7.4 7.4 0 0 1 1 10.5 9.2 9.2 0 0 1-5.2 3 10 10 0 0 1-6.3-.7L3 20Z" />
  </svg>
)

export default messanger
