import { svgProps } from '../../shared'
import type { SvgType } from '../../type'

interface EyeProps extends SvgType {
  status: 'off' | 'on'
}
const MessageEmpty = ({ status, ...rest }: EyeProps) => (
  <svg {...svgProps} {...rest}>
    {status === 'off' ? (
      <path d="m3 20 1.3-3.9a7.3 7.3 0 0 1-1.1-5.5c.3-2 1.5-3.7 3.2-4.9a9.8 9.8 0 0 1 11.8.5 7.4 7.4 0 0 1 1 10.5 9.2 9.2 0 0 1-5.2 3 10 10 0 0 1-6.3-.7L3 20Z" />
    ) : (
      <path d="m3 3 18 18M8.6 4.6c3.2-1.2 7-.6 9.6 1.6 3 2.5 3.6 6.5 1.7 9.7m-2 2A9.9 9.9 0 0 1 7.8 19L3 20l1.3-3.9A7.4 7.4 0 0 1 6 6.1" />
    )}
  </svg>
)

export default MessageEmpty
