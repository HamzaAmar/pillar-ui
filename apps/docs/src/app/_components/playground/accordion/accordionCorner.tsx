import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'

function AccordionBase(props: any) {
  return (
    <Accordion {...props}>
      <AccordionItem value={1}>
        <AccordionButton>
          <Text weight="5" size="4">
            Hello World
          </Text>
        </AccordionButton>
        <AccordionPanel>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
            perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
            veniam recusandae.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value={2}>
        <AccordionButton>
          <Text weight="5" size="4">
            Hello World
          </Text>
        </AccordionButton>
        <AccordionPanel>
          <Text size="4" color="b" low>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
            perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
            veniam recusandae.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const AccordionCorner = () => {
  return (
    <>
      <AccordionBase corner="0" />
      <AccordionBase corner="1" />
      <AccordionBase corner="2" />
      <AccordionBase corner="3" />
      <AccordionBase corner="4" />
      <AccordionBase corner="5" />
      <AccordionBase corner="full" />
    </>
  )
}
