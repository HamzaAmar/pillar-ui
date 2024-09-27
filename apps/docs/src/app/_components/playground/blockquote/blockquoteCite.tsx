import { Blockquote, Text } from '@pillar-ui/core'

export const BlockquoteCite = () => {
  return (
    <div className="Sfmd">
      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text as="cite">Hamza Miloud Amar</Text>
      </Blockquote>

      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text as="cite" align="center">
          Hamza Miloud Amar
        </Text>
      </Blockquote>

      <Blockquote color="d">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro corporis autem minima animi, sequi
        exercitationem fugit mollitia ducimus consequatur praesentium, inventore laudantium ullam aliquam saepe?
        Repellat libero quibusdam repellendus quisquam?
        <Text as="cite" align="end">
          Hamza Miloud Amar
        </Text>
      </Blockquote>
    </div>
  )
}
