import { Flex, Heading, Text, Paper, Grid } from '@pillar-ui/core'
import { allConfig, filles, SIMPLE_DEVELOPMENT, strokes } from './data'
import { SectionHeading } from '~/component/core/sectionHeading'

export function SimplifyDevelopment() {
  return (
    <Paper as={Flex} items="center" gap="lg" className="section">
      <div className="simplify-dev--container l_f-xl">
        <SectionHeading subheading="Deliver Projects Faster" heading="Effortless UI with Pillar UI" />

        <Grid grid="1fr 1fr" md="1fr" gap="md">
          {SIMPLE_DEVELOPMENT.map(({ title, id, description }) => (
            <div className="article--item l_f-2xs" key={id}>
              <Heading as="h3">{title}</Heading>
              <Text transform="capitalize" color="b" low>
                {description}
              </Text>
            </div>
          ))}
        </Grid>
      </div>

      <svg className="simple--develope" viewBox="0 0 490 491" width="300" fill="none">
        <path
          {...filles}
          d="M224 283c-11-8-23-14-35-21-7-5-14-12-21-16-29 50-58 100-81 153 17-7 39-15 54-25 4 19 11 37 16 56 19-52 49-98 68-149"
        />
        <path
          {...strokes}
          d="M224 283c-11-8-23-14-35-21-7-5-14-12-21-16-29 50-58 100-81 153 17-7 39-15 54-25 4 19 11 37 16 56 19-52 49-98 68-149"
        />
        <path
          {...allConfig}
          d="M321 256c-13 9-36 23-51 30 7 25 48 120 60 140l12-63c21 10 39 18 62 32-5-10-67-115-83-139Z"
        />
        <path
          {...filles}
          d="M311 93c-9-1-18 2-24 9 5-13-6-30-17-36-18-10-49 3-51 25-18-32-65-17-63 20l-10-5c-30-10-49 35-28 56-27 7-37 53-8 63-31 17-10 77 26 65-2 10-3 23 3 32 10 16 34 22 49 10-1 32 47 36 60 11 21 28 64 17 67-19 7 2 15 5 23 3 24-6 35-35 23-56 28-4 45-53 4-71 15-12 17-33 4-52-7-10-24-12-33-10 4-11 4-23-3-33"
        />
        <path
          {...strokes}
          d="M311 93c-9-1-18 2-24 9 5-13-6-30-17-36-18-10-49 3-51 25-18-32-65-17-63 20l-10-5c-30-10-49 35-28 56-27 7-37 53-8 63-31 17-10 77 26 65-2 10-3 23 3 32 10 16 34 22 49 10-1 32 47 36 60 11 21 28 64 17 67-19 7 2 15 5 23 3 24-6 35-35 23-56 28-4 45-53 4-71 15-12 17-33 4-52-7-10-24-12-33-10 4-11 4-23-3-33"
        />
        <path {...strokes} d="M265 120c-43-20-103 8-119 53-18 53-5 108 49 133 40 19 92 13 123-19a96 96 0 0 0-26-155" />
        <path {...strokes} d="M210 195c13-10 24-21 30-35" />
        <path {...filles} d="M241 161c-1 31 2 63 0 94v-94Z" />
        <path {...strokes} d="M241 161c-1 31 2 63 0 94" />
        <path {...filles} d="M207 257c24-3 47-1 70-4l-70 4Z" />
        <path d="M207 257c24-3 47-1 70-4" {...strokes} />
      </svg>
    </Paper>
  )
}
