import { Svg } from '../../shared/svg'
import type { SvgType } from '../../type'

const googlePhoto = (props: SvgType) => (
  <Svg {...props}>
    <path d="M12 12v-.6C12 9 10 7 7.5 7S3 9 3 11.4a.6.6 0 0 0 .2.4l.4.2H12Zm0 0v.6c0 2.4 2 4.4 4.5 4.4s4.5-2 4.5-4.4c0-.3-.3-.6-.6-.6H12Zm0 0h-.6C9 12 7 14 7 16.5S9 21 11.4 21a.6.6 0 0 0 .4-.2l.2-.4V12Zm0 0h.6C15 12 17 10 17 7.5S15 3 12.6 3a.6.6 0 0 0-.4.2l-.2.4V12Z" />
  </Svg>
)

export default googlePhoto
