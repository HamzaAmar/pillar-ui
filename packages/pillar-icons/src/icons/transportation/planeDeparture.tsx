import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const planeDeparture = (props: SvgType) => (
  <Svg {...props}>
    <path d="M3 21h18m-6.4-10.7L19.5 9a2 2 0 1 1 1 3.8L6 16.8l-4.4-5.1 2.9-.8 2.4 1.4 3-.7L6 5.3 9 4.5l5.6 5.8Z" />
  </Svg>
)

export default planeDeparture
