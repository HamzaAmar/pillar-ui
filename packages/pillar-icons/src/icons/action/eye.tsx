import { svgProps } from '../../shared'
import { SvgType } from '../../type'

const eye = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M11.3 10.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M21.3 8.6c-2.6 4.7-6 7-10 7s-7.3-2.3-10-7c2.7-4.7 6-7 10-7s7.4 2.3 10 7Z" />
  </svg>
)

export default eye
