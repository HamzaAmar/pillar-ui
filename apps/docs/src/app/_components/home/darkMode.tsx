import { Flex, Text, Paper } from '@pillar-ui/core'
import SwitchMode from './switchMode'
import { SectionHeading } from '~/component/core/sectionHeading'
import { strokes } from './data'
export function DarkMode() {
  return (
    <Paper items="center" justify="between" as={Flex} flow="6" className="section">
      <div className="Sf5">
        <div className="Sf4">
          <SectionHeading subheading=" Subtle, Soothing, Smart" heading=" Night Mode: Effortless Elegance" />
          <Text className="dark--description" color="b" low size="7">
            Switch to dark mode with ease. Our useDarkMode hook ensures a smooth, flicker-free experience, compatible
            with major frameworks.
          </Text>
          <Text className="dark--description" color="b" low size="7">
            Our styles are dark mode-ready from the start. Simply add <code>class=&quot;dark&quot;</code> to your
            elements, and watch them transform.
          </Text>
        </div>
        <SwitchMode />
      </div>

      <svg {...strokes} viewBox="0 0 265 265" width="265" fill="none">
        <path d="M181 104c-22-43-93-33-103 13-7 29 19 48 23 75h59l8-21c5-11 13-18 15-30 3-11 3-27-2-37Z" />
        <path
          d="m100 228-1-25c0-3 0-7 3-9 4-4 10-4 15-4h28c5 0 11-1 15 1s5 8 5 12c1 7 3 23-3 28-4 4-10 5-15 5-13 2-47 1-47-8Z"
          clipRule="evenodd"
        />
        <path d="m135 237-1 13M31 169l14-7M31 74l16 10M134 35V15M214 79l20-12M203 168l15 14" />
      </svg>
    </Paper>
  )
}
