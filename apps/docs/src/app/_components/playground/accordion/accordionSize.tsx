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

export const AccordionSize = () => {
  return (
    <>
      <AccordionBase size="1" />
      <AccordionBase size="2" />
      <AccordionBase size="3" />
      <AccordionBase size="4" />
      <AccordionBase size="5" />
      <AccordionBase size="6" />
      <AccordionBase size="7" />
      <AccordionBase size="8" />
      <AccordionBase size="9" />
    </>
  )
}
