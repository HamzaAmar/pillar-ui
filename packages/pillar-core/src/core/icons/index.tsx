import type { SVGProps } from 'react'

type Direction = 'bottom' | 'top' | 'left' | 'right'
export interface SvgType extends SVGProps<SVGSVGElement> {}

export interface SvgWithDirection extends SvgType {
  direction?: Direction
}

export const svgProps = {
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 'var(--stroke-width, 1.5px)',
  strokeLinejoin: 'round',
  strokeLinecap: 'round',
  fill: 'none',
  width: 30,
} as SvgType

const Check = (props: SvgType) => {
  return (
    <svg {...svgProps} {...props}>
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

const Close = (props: SvgType) => {
  return (
    <svg {...svgProps} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

const Eye = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
    <path d="M21 12c-2.4 4-5.4 6-9 6-3.6 0-6.6-2-9-6 2.4-4 5.4-6 9-6 3.6 0 6.6 2 9 6Z" />
  </svg>
)

const EyeOff = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m2.3 1.6 18 18M10 9.2a2 2 0 0 0 2.9 2.8M8.7 4c.9-.3 1.7-.4 2.6-.4 4 0 7.4 2.3 10 7a19 19 0 0 1-2.5 3.5m-2.1 1.8a9.4 9.4 0 0 1-5.4 1.7c-4 0-7.3-2.3-10-7 1.4-2.4 3-4.2 4.7-5.4" />
  </svg>
)

const Minus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M5 12h14" />
  </svg>
)

const Plus = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 5v14m-7-7h14" />
  </svg>
)

const ChevronDown = ({ direction = 'bottom', ...rest }: SvgWithDirection) => (
  <svg className={`i-${direction}`} {...svgProps} {...rest}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const DotsHorizontal = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
  </svg>
)

const User = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
)

export { Check, Close, Eye, EyeOff, Minus, Plus, ChevronDown, DotsHorizontal, User }
