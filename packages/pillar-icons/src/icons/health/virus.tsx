import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const virus = (props: SvgType) => (
  <Svg {...props}>
    <path d="M7 12a5 5 0 0 0 1.5 3.5M7 12a5 5 0 0 1 1.5-3.5M7 12H3m5.5 3.5A5 5 0 0 0 12 17m-3.5-1.5-2.9 2.9M12 17a5 5 0 0 0 3.5-1.5M12 17v4m3.5-5.5A5 5 0 0 0 17 12m-1.5 3.5 2.9 2.9M17 12a5 5 0 0 0-1.5-3.5M17 12h4m-5.5-3.5A5 5 0 0 0 12 7m3.5 1.5 2.9-2.9M12 7a5 5 0 0 0-3.5 1.5M12 7V3M8.5 8.5 5.6 5.6M11 3h2m4.7 2L19 6.2M21 11v2m-2 4.7L17.8 19M13 21h-2m-4.7-2L5 17.8M3 13v-2m2-4.7L6.2 5" />
  </Svg>
)

export default virus
