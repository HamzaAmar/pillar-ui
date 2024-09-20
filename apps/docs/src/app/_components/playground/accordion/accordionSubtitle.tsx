import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Heading, Paper, Text } from '@pillar-ui/core'
import React from 'react'

export const AccordionSubtitle = () => {
  return (
    <Accordion>
      <AccordionItem value={1}>
        <AccordionButton>
          <div>
            <Text>Hello</Text>{' '}
            <Text size="sm">
              {' '}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ipsum necessitatibus sunt praesentium quam
              qui laborum earum vitae, veniam tenetur mollitia fugiat numquam nesciunt? Velit quibusdam repudiandae
              distinctio. Ipsum, modi.
            </Text>
          </div>
        </AccordionButton>
        <AccordionPanel>Lorem, ipsum dolor sit amet consectetur adipisicing elit</AccordionPanel>
      </AccordionItem>
      <AccordionItem value={2}>
        <AccordionButton>
          <div>
            <Text>Hello</Text> <Text size="sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
          </div>
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos laborum distinctio officiis a eaque
          perspiciatis itaque, fugiat quaerat! Natus beatae eius ullam sed repellendus aliquam provident quod fugiat
          veniam recusandae.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value={3}>
        <AccordionButton>
          <div>
            <Text>Hello</Text> <Text size="sm"> Lorem ipsum dolor sit, amet consectetur adipisicing elit</Text>
          </div>
        </AccordionButton>
        <AccordionPanel>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, voluptates ratione doloremque quasi error odio
          animi mollitia? Blanditiis
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
