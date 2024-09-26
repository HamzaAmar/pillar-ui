import { Paper } from '@pillar-ui/core'

export const PaperFlow = () => {
  return (
    <>
      <Paper background="b-5" flow="xs">
        <div>Flow xs</div>
        <div>Flow xs</div>
        <div>Flow xs</div>
      </Paper>
      <Paper background="b-5" flow="sm">
        <div>Flow sm</div>
        <div>Flow sm</div>
        <div>Flow sm</div>
      </Paper>
      <Paper background="b-5" flow="md">
        <div>Flow md</div>
        <div>Flow md</div>
        <div>Flow md</div>
      </Paper>
      <Paper background="b-5" flow="lg">
        <div>Flow lg</div>
        <div>Flow lg</div>
        <div>Flow lg</div>
      </Paper>
      <Paper background="b-5" flow="xl">
        <div>Flow xl</div>
        <div>Flow xl</div>
        <div>Flow xl</div>
      </Paper>
    </>
  )
}
