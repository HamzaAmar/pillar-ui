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
            <Text weight="5">Nice to Meet You</Text>
            <Text size="2">
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
            <Text weight="5">Hello</Text>
            <Text size="3">Hello</Text>
          </div>
        </AccordionButton>
        <AccordionPanel>Lorem ipsum dolor sit amet consectetur, adipisicing elit</AccordionPanel>
      </AccordionItem>
      <AccordionItem value={3}>
        <AccordionButton>
          <div>
            <Text weight="5">Hello</Text>
            <Text size="3">Hello</Text>
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
      <AccordionBase multiple />
    </div>
  )
}

export const AlertCollapse = () => {
  return (
    <Flex direction="col" gap="8">
      <AccordionBase collapsible />
      <AccordionBase type="multiple" collapsible />
    </Flex>
  )
}

export const AlertColors = () => {
  return (
    <div className="Sf-4">
      <Grid cols={{ default: '1fr 1fr 1fr' }} gap="6">
        <AccordionBase color="d" />
        <AccordionBase color="su" />
        <AccordionBase color="w" />
        <AccordionBase color="p" />
        <AccordionBase color="se" />
        <AccordionBase color="b" />
      </Grid>
      <Grid cols={{ default: '1fr 1fr 1fr' }} gap="6">
        <AccordionBase variant="soft" color="d" />
        <AccordionBase variant="soft" color="su" />
        <AccordionBase variant="soft" color="w" />
        <AccordionBase variant="soft" color="p" />
        <AccordionBase variant="soft" color="se" />
        <AccordionBase variant="soft" color="b" />
      </Grid>
      <Grid cols={{ default: '1fr 1fr 1fr' }} gap="6">
        <AccordionBase separate variant="soft" color="d" />
        <AccordionBase separate variant="soft" color="su" />
        <AccordionBase separate variant="soft" color="w" />
        <AccordionBase separate variant="soft" color="p" />
        <AccordionBase separate variant="soft" color="se" />
        <AccordionBase separate variant="soft" color="b" />
      </Grid>
      <Grid cols={{ default: '1fr 1fr 1fr' }} gap="6">
        <AccordionBase variant="outline" color="d" />
        <AccordionBase variant="outline" color="su" />
        <AccordionBase variant="outline" color="w" />
        <AccordionBase variant="outline" color="p" />
        <AccordionBase variant="outline" color="se" />
        <AccordionBase variant="outline" color="b" />
      </Grid>
      <Grid cols={{ default: '1fr 1fr 1fr' }} gap="6">
        <AccordionBase separate variant="outline" color="d" />
        <AccordionBase separate variant="outline" color="su" />
        <AccordionBase separate variant="outline" color="w" />
        <AccordionBase separate variant="outline" color="p" />
        <AccordionBase separate variant="outline" color="se" />
        <AccordionBase separate variant="outline" color="b" />
      </Grid>
      <Grid cols={{ default: '1fr 1fr 1fr' }} gap="6">
        <AccordionBase variant="solid" color="d" />
        <AccordionBase variant="solid" color="su" />
        <AccordionBase variant="solid" color="w" />
        <AccordionBase variant="solid" color="p" />
        <AccordionBase variant="solid" color="se" />
        <AccordionBase variant="solid" color="b" />
      </Grid>
      <Grid cols={{ default: '1fr 1fr 1fr' }} gap="6">
        <AccordionBase separate variant="solid" color="d" />
        <AccordionBase separate variant="solid" color="su" />
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
    <div className="Sf-4">
      <AccordionBase variant="solid" />
      <AccordionBase variant="soft" />
      <AccordionBase variant="outline" />
    </div>
  )
}

export const AlertSizes = () => {
  return (
    <div className="Sf-4">
      <AccordionBase size="2" />
      <AccordionBase size="3" />
      <AccordionBase size="4" />
      <AccordionBase size="5" />
      <AccordionBase size="6" />
      <AccordionBase size="7" />
      <AccordionBase size="8" />
    </div>
  )
}

export const AlertCorners = () => {
  return (
    <div className="Sf-4">
      <AccordionBase separate color="b" variant="solid" corner="0" />
      <AccordionBase separate color="b" variant="soft" corner="2" />
      <AccordionBase separate color="b" variant="outline" corner="3" />
      <AccordionBase separate color="b" variant="solid" corner="4" />
      <AccordionBase separate color="b" variant="soft" corner="5" />
      <AccordionBase separate color="b" variant="outline" corner="full" />
    </div>
  )
}

export const AccordionStyle = () => {
  return (
    <div className="Sf-5">
      <Accordion>
        <AccordionItem value={1}>
          <AccordionButton className="Cd" title="Hello World" />
          <AccordionPanel className="Ci">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</AccordionPanel>
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
    <div className="Sf-3">
      <Flex direction="col" gap="4">
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
