import { Orientation, SvgType } from '../type'

function c(cls: string | undefined, o?: Orientation | undefined) {
  const orientation = o ? ` Tr-${o} ` : ''
  return `${orientation}${cls}`
}

export const Svg = ({ children, className, o, ...rest }: SvgType) => {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="var(--stroke-width 1.5px)"
      strokeLinejoin="round"
      strokeLinecap="round"
      fill="none"
      width={30}
      {...rest}
      className={c(className, o)}
    >
      {children}
    </svg>
  )
}
