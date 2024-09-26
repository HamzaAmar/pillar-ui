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
            <Text weight="medium">Nice to Meet You</Text>
            <Text size="2xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quia, consequatur nemo sapiente libero
              voluptatem obcaecati temporibus
            </Text>
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
    <div className="l_f-md">
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase color="d" />
        <AccordionBase color="s" />
        <AccordionBase color="w" />
        <AccordionBase color="p" />
        <AccordionBase color="se" />
        <AccordionBase color="b" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase variant="soft" color="d" />
        <AccordionBase variant="soft" color="s" />
        <AccordionBase variant="soft" color="w" />
        <AccordionBase variant="soft" color="p" />
        <AccordionBase variant="soft" color="se" />
        <AccordionBase variant="soft" color="b" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase separate variant="soft" color="d" />
        <AccordionBase separate variant="soft" color="s" />
        <AccordionBase separate variant="soft" color="w" />
        <AccordionBase separate variant="soft" color="p" />
        <AccordionBase separate variant="soft" color="se" />
        <AccordionBase separate variant="soft" color="b" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase variant="outline" color="d" />
        <AccordionBase variant="outline" color="s" />
        <AccordionBase variant="outline" color="w" />
        <AccordionBase variant="outline" color="p" />
        <AccordionBase variant="outline" color="se" />
        <AccordionBase variant="outline" color="b" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase separate variant="outline" color="d" />
        <AccordionBase separate variant="outline" color="s" />
        <AccordionBase separate variant="outline" color="w" />
        <AccordionBase separate variant="outline" color="p" />
        <AccordionBase separate variant="outline" color="se" />
        <AccordionBase separate variant="outline" color="b" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase variant="solid" color="d" />
        <AccordionBase variant="solid" color="s" />
        <AccordionBase variant="solid" color="w" />
        <AccordionBase variant="solid" color="p" />
        <AccordionBase variant="solid" color="se" />
        <AccordionBase variant="solid" color="b" />
      </Grid>
      <Grid grid="1fr 1fr 1fr" gap="lg">
        <AccordionBase separate variant="solid" color="d" />
        <AccordionBase separate variant="solid" color="s" />
        <AccordionBase separate variant="solid" color="w" />
        <AccordionBase separate variant="solid" color="p" />
        <AccordionBase separate variant="solid" color="se" />
        <AccordionBase separate variant="solid" color="b" />
      </Grid>
    </div>
  )
}

export const AlertVariants = () => {
  return (
    <div className="l_f-md">
      <AccordionBase variant="solid" />
      <AccordionBase variant="soft" />
      <AccordionBase variant="outline" />
    </div>
  )
}

export const AlertSizes = () => {
  return (
    <div className="l_f-md">
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
    <div className="l_f-md">
      <AccordionBase separate color="b" variant="solid" corner="sharp" />
      <AccordionBase separate color="b" variant="soft" corner="sm" />
      <AccordionBase separate color="b" variant="outline" corner="md" />
      <AccordionBase separate color="b" variant="solid" corner="lg" />
      <AccordionBase separate color="b" variant="soft" corner="xl" />
      <AccordionBase separate color="b" variant="outline" corner="full" />
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
    <div className="l_f-sm">
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
