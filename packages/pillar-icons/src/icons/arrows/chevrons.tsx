import { Svg } from '../../shared/svg'
import { SvgType } from '../../type'

export const ChevronsTop = (props: SvgType) => (
  <Svg {...props}>
    <path d="m7 11 5-5 5 5M7 17l5-5 5 5" />
  </Svg>
)
export const ChevronsDown = ({ o, ...rest }: SvgType) => <ChevronsTop o="b" {...rest} />
export const ChevronsLeft = ({ o, ...rest }: SvgType) => <ChevronsTop o="l" {...rest} />
export const ChevronsRight = ({ o, ...rest }: SvgType) => <ChevronsTop o="r" {...rest} />
export const ChevronsTopLeft = ({ o, ...rest }: SvgType) => <ChevronsTop o="lt" {...rest} />
export const ChevronsTopRight = ({ o, ...rest }: SvgType) => <ChevronsTop o="rt" {...rest} />
export const ChevronsBottomRight = ({ o, ...rest }: SvgType) => <ChevronsTop o="rb" {...rest} />
export const ChevronsBottomLeft = ({ o, ...rest }: SvgType) => <ChevronsTop o="lb" {...rest} />
