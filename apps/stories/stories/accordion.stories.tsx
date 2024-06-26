import React, { CSSProperties } from 'react'
import { Meta } from '@storybook/react'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Flex, Grid, Paper, Text } from '@pillar-ui/core'

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta<typeof Accordion>

export function AccordionBase(props: any) {
  return (
    <Accordion {...props}>
      <AccordionItem value={1}>
        <AccordionButton>
          <div>
            <Text weight="medium">Hello</Text>
            <Text size="xs">Hello</Text>
          </div>
        </AccordionButton>
        <AccordionPanel>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value={2}>
        <AccordionButton>
          <div>
            <Text weight="medium">Hello</Text>
            <Text size="xs">Hello</Text>
          </div>
        </AccordionButton>
        <AccordionPanel>Lorem ipsum dolor sit amet consectetur, adipisicing elit</AccordionPanel>
      </AccordionItem>
      <AccordionItem value={3}>
        <AccordionButton>
          <div>
            <Text weight="medium">Hello</Text>
            <Text size="xs">Hello</Text>
          </div>
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error odio
          animi mollitia? Blanditiis facere
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const AlertBasic = () => {
  return (
    <div>
      <AccordionBase />
    </div>
  )
}

export const AlertMultiple = () => {
  return (
    <div>
      <AccordionBase type="multiple" />
      <AccordionBase type="single" />
    </div>
  )
}

export const AlertCollapse = () => {
  return (
    <Flex direction="column" gap="2xl">
      <AccordionBase collapsible />
      <AccordionBase type="multiple" collapsible />
    </Flex>
  )
}

export const AlertColors = () => {
  return (
    <div className="l_flow__md">
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase color="danger" />
        <AccordionBase color="success" />
        <AccordionBase color="warning" />
        <AccordionBase color="primary" />
        <AccordionBase color="secondary" />
        <AccordionBase color="surface" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase variant="soft" color="danger" />
        <AccordionBase variant="soft" color="success" />
        <AccordionBase variant="soft" color="warning" />
        <AccordionBase variant="soft" color="primary" />
        <AccordionBase variant="soft" color="secondary" />
        <AccordionBase variant="soft" color="surface" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase separate variant="soft" color="danger" />
        <AccordionBase separate variant="soft" color="success" />
        <AccordionBase separate variant="soft" color="warning" />
        <AccordionBase separate variant="soft" color="primary" />
        <AccordionBase separate variant="soft" color="secondary" />
        <AccordionBase separate variant="soft" color="surface" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase variant="outline" color="danger" />
        <AccordionBase variant="outline" color="success" />
        <AccordionBase variant="outline" color="warning" />
        <AccordionBase variant="outline" color="primary" />
        <AccordionBase variant="outline" color="secondary" />
        <AccordionBase variant="outline" color="surface" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase separate variant="outline" color="danger" />
        <AccordionBase separate variant="outline" color="success" />
        <AccordionBase separate variant="outline" color="warning" />
        <AccordionBase separate variant="outline" color="primary" />
        <AccordionBase separate variant="outline" color="secondary" />
        <AccordionBase separate variant="outline" color="surface" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase variant="solid" color="danger" />
        <AccordionBase variant="solid" color="success" />
        <AccordionBase variant="solid" color="warning" />
        <AccordionBase variant="solid" color="primary" />
        <AccordionBase variant="solid" color="secondary" />
        <AccordionBase variant="solid" color="surface" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase separate variant="solid" color="danger" />
        <AccordionBase separate variant="solid" color="success" />
        <AccordionBase separate variant="solid" color="warning" />
        <AccordionBase separate variant="solid" color="primary" />
        <AccordionBase separate variant="solid" color="secondary" />
        <AccordionBase separate variant="solid" color="surface" />
      </Grid>
    </div>
  )
}

export const AlertVariants = () => {
  return (
    <div className="l_flow__md">
      <AccordionBase variant="solid" />
      <AccordionBase variant="soft" />
      <AccordionBase variant="outline" />
    </div>
  )
}

export const AlertSizes = () => {
  return (
    <div className="l_flow__md">
      <AccordionBase size="2xs" />
      <AccordionBase size="xs" />
      <AccordionBase size="sm" />
      <AccordionBase size="md" />
      <AccordionBase size="lg" />
      <AccordionBase size="xl" />
      <AccordionBase size="2xl" />
    </div>
  )
}

export const AlertCorners = () => {
  return (
    <div className="l_flow__md">
      <AccordionBase separate color="surface" variant="solid" corner="sharp" />
      <AccordionBase separate color="surface" variant="soft" corner="sm" />
      <AccordionBase separate color="surface" variant="outline" corner="md" />
      <AccordionBase separate color="surface" variant="solid" corner="lg" />
      <AccordionBase separate color="surface" variant="soft" corner="xl" />
      <AccordionBase separate color="surface" variant="outline" corner="full" />
    </div>
  )
}

export const AccordionStyle = () => {
  return (
    <div className="l_flow-md">
      <Accordion>
        <AccordionItem value={1}>
          <AccordionButton className="u_red" title="Hello World" />
          <AccordionPanel className="u_brown">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value={1}>
          <AccordionButton title="Hello" />
          <AccordionPanel>Lorem ipsum dolor sit amet consectetur, adipisicing elit</AccordionPanel>
        </AccordionItem>
        <AccordionItem value={1}>
          <AccordionButton title="Hello" />
          <AccordionPanel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error
            odio animi mollitia? Blanditiis facere
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Accordion>
        <AccordionItem value={1}>
          <AccordionButton title="Hello WOrld" />
          <AccordionPanel>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value={1}>
          <AccordionButton title="Hello" />
          <AccordionPanel>Lorem ipsum dolor sit amet consectetur, adipisicing elit</AccordionPanel>
        </AccordionItem>
        <AccordionItem value={1}>
          <AccordionButton title="Hello" />
          <AccordionPanel>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error
            odio animi mollitia? Blanditiis facere
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export function AlertSizeDefaults() {
  return (
    <div className="l_flow__sm">
      <Flex direction="column" gap="sm">
        <AccordionBase />
        <Paper style={{ '--accordion-size': '2rem' } as CSSProperties}>
          <AccordionBase />
        </Paper>
        <Paper style={{ '--accordion-size': '3rem' } as CSSProperties}>
          <AccordionBase />
        </Paper>
        <Paper style={{ '--accordion-size': '1.5rem' } as CSSProperties}>
          <AccordionBase />
          <Paper style={{ '--accordion-size': '5rem' } as CSSProperties}>
            <AccordionBase />
          </Paper>
        </Paper>
      </Flex>
    </div>
  )
}
