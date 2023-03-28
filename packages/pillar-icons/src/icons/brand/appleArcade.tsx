import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

const appleArcade = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v6m8-.5v5.1c-.1.1-.2.3-.4.3l-5.5 2.6a5 5 0 0 1-4.2 0L4.4 18a.7.7 0 0 1-.4-.6v-4.8m.4-.3 5.7-2.3a5 5 0 0 1 3.8 0l5.7 2.3a.7.7 0 0 1 0 1.3L14.1 16a5 5 0 0 1-4.2 0l-5.5-2.5a.7.7 0 0 1 0-1.3Z" />
  </svg>
)

export default appleArcade
