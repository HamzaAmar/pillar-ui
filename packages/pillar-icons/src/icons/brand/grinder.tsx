import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const grinder = (props: SvgType) => (
  <Svg {...props}>
    <path d="M13 13.3c0 .5.8 1.7 2.1 1.7s2.9-1 2.9-2c0-.9-1-1-1.4-1-.2 0-3.6.1-3.6 1.3Z" />
    <path d="M12 21c-3 0-6.5-2.7-6.6-3C3.2 14.5 3 4.3 3 4.3L4.4 3c2.5.4 5 .6 7.6.7 2.5 0 5-.3 7.6-.7L21 4.3s-.2 10.2-2.4 13.7c-.1.3-3.6 3-6.6 3Z" />
    <path d="M11 13.3c0 .5-.8 1.7-2.1 1.7S6 14 6 13c0-.9 1-1 1.4-1 .2 0 3.6.1 3.6 1.3Z" />
  </Svg>
)

export default grinder
