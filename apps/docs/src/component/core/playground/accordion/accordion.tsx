import { Accordion, Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'

function AccordionBase(props: any) {
  return (
    <Accordion {...props}>
      <Accordion.Item value={1}>
        <Accordion.Button>Hello</Accordion.Button>
        <Accordion.Panel>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt hic debitis, neque accusamus atque
          provident facilis vel ipsa illo officia aliquid dolore veritat iente at cum dolores.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value={2}>
        <Accordion.Button>Hello</Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
          perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
          veniam recusandae.
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value={3}>
        <Accordion.Button>Hello</Accordion.Button>
        <Accordion.Panel>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error odio
          animi mollitia? Blanditiis
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}

export const AccordionPlayGround = () => {
  return (
    <Paper flow="sm" p="sm" background="surface-3" corner="sm">
      Hello
    </Paper>
  )
}

const AccordionSizes = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="surface-3" corner="sm">
      <AccordionBase size="2xs" />
      <AccordionBase size="xs" />
      <AccordionBase size="sm" />
      <AccordionBase size="md" />
      <AccordionBase size="lg" />
      <AccordionBase size="xl" />
      <AccordionBase size="2xl" />
    </Paper>
  )
}

export const AccordionSubtitle = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="surface-3" corner="sm">
      <Accordion>
        <Accordion.Item value={1}>
          <Accordion.Button>
            <div>
              <Text>Hello</Text>{' '}
              <Text size="sm">
                {' '}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ipsum necessitatibus sunt praesentium
                quam qui laborum earum vitae, veniam tenetur mollitia fugiat numquam nesciunt? Velit quibusdam
                repudiandae distinctio. Ipsum, modi.
              </Text>
            </div>
          </Accordion.Button>
          <Accordion.Panel>Lorem, ipsum dolor sit amet consectetur adipisicing elit</Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value={2}>
          <Accordion.Button>
            <div>
              <Text>Hello</Text> <Text size="sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </div>
          </Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
            perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
            veniam recusandae.
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value={3}>
          <Accordion.Button>
            <div>
              <Text>Hello</Text> <Text size="sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
            </div>
          </Accordion.Button>
          <Accordion.Panel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error
            odio animi mollitia? Blanditiis
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Paper>
  )
}

const AccordionSeparate = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="surface-3" corner="sm">
      <AccordionBase separate />
    </Paper>
  )
}

const AccordionVariants = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="surface-3" corner="sm">
      <AccordionBase variant="solid" />
      <AccordionBase variant="soft" />
      <AccordionBase variant="outline" />
    </Paper>
  )
}

const AccordionCorners = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="surface-3" corner="sm">
      <AccordionBase separate color="surface" variant="solid" corner="sharp" />
      <AccordionBase separate color="surface" variant="soft" corner="sm" />
      <AccordionBase separate color="surface" variant="outline" corner="md" />
      <AccordionBase separate color="surface" variant="solid" corner="lg" />
      <AccordionBase separate color="surface" variant="soft" corner="xl" />
      <AccordionBase separate color="surface" variant="outline" corner="full" />
    </Paper>
  )
}

const AccordionType = () => {
  return (
    <Paper className="playground" flow="xl" p="sm" background="surface-3" corner="sm">
      <div className="l_flow__sm">
        <Heading>Accordion Type Single</Heading>
        <AccordionBase type="single" />
      </div>

      <div className="l_flow__sm">
        <Heading>Accordion Type Multiple</Heading>
        <AccordionBase type="multiple" />
      </div>
    </Paper>
  )
}

const AccordionCollapsible = () => {
  return (
    <Paper className="playground" flow="sm" p="sm" background="surface-3" corner="sm">
      <AccordionBase collapsible />
    </Paper>
  )
}

AccordionPlayGround.Sizes = AccordionSizes
AccordionPlayGround.Variants = AccordionVariants
AccordionPlayGround.Corners = AccordionCorners
AccordionPlayGround.Type = AccordionType
AccordionPlayGround.Collapsible = AccordionCollapsible
AccordionPlayGround.Separate = AccordionSeparate
AccordionPlayGround.Subtitle = AccordionSubtitle
