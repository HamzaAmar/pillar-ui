import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const giftCard = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m7 16 3-3m0 0 3 3m-3-3c-.4-1.8-1.4-3-2.5-3-.8 0-1.5.7-1.5 1.5S7.2 13 8 13h4c.8 0 2-.7 2-1.5s-.7-1.5-1.5-1.5c-1.1 0-2 1.2-2.5 3ZM3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8Z" />
  </svg>
)

export default giftCard
