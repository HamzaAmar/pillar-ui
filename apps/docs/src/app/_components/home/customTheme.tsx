import { Flex, Heading, Text, Paper } from '~/component/core/pillar'
import { SectionHeading } from '~/component/core/sectionHeading'

export function CustomTheme() {
  return (
    <Paper as={Flex} items="center" justify="center" flow="xl" className="section hello-world">
      <div className="l_f-md">
        <SectionHeading subheading="Change Theme" heading=" Custom your perfect look in seconds!" />

        <div className="l_f-lg">
          <Text className="dark--description" color="bg" low size="xl">
            Customize your interface to showcase your personal flair. Adjust CSS variables for colors, fonts, and
            layouts to craft a design that’s unmistakably your own.
          </Text>
          <Text className="dark--description" color="bg" low size="xl">
            In the theme settings, you can enhance your user experience by customizing various elements. This includes
            adjusting the size, corner details, and text transformations. You can select specific areas within the
            entire tree structure to apply these style changes, ensuring a consistent and personalized look.
          </Text>
        </div>
      </div>

      <svg viewBox="0 0 490 490" height="491" fill="none">
        <path
          fill="var(--bg-1)"
          fillRule="evenodd"
          d="m381 112-13-7c-19-7-43-2-62-1l-86 3c-17 1-35 0-52 2-19 3-39-3-57 6-26 13-25 33-25 60l1 108c0 17 1 41 3 58 4 24 25 49 53 48 52 1 109-2 159-4 22 0 49-1 71-7 35-11 32-67 31-95 0-8-4-113-9-142-1-5-2-13-5-18"
          clipRule="evenodd"
        />
        <g stroke="var(--bg-8)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="10.2">
          <path d="m381 112-13-7c-19-7-43-2-62-1l-86 3c-17 1-35 0-52 2-19 3-39-3-57 6-26 13-25 33-25 60l1 108c0 17 1 41 3 58 4 24 25 49 53 48 52 1 109-2 159-4 22 0 49-1 71-7 35-11 32-67 31-95 0-8-4-113-9-142-1-5-2-13-5-18" />
          <path d="M349 133c-13-2-29 0-38 0-26-1-52 2-78 2-23 1-47 0-69 2-19 3-47-2-47 22l1 86c0 18-4 37-1 55 2 10 6 19 16 21s21 1 31 0l36-1c30-1 140-6 156-8 15-4 18-28 18-40-2-36-3-76-7-123" />
          <path d="M178 165c-13-5-22 9-24 20-1 10 7 20 16 23 5 2 12 3 17 1 21-7 20-37-1-43M133 316c3-10 9-20 16-28 7-9 14-19 25-24 42-21 83 13 102 49" />
          <path d="M228 263c-1-12 9-25 15-35 9-13 21-28 37-35 33-13 73 5 90 35" />
        </g>
      </svg>
    </Paper>
  )
}
