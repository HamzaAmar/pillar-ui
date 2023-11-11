import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const basket = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 10 5-6 5 6m4 0-2 8c0 .6-.3 1-.7 1.5-.4.3-.8.5-1.3.5H7c-.5 0-1-.2-1.3-.5-.4-.4-.6-1-.7-1.5l-2-8h18Zm-11 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </svg>
)
export default basket
