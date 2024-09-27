import { Paper } from '@pillar-ui/core'

export const PaperFlow = () => {
  return (
    <>
      <Paper background="b-5" flow="3">
        <div>Flow 3</div>
        <div>Flow 3</div>
        <div>Flow 3</div>
      </Paper>
      <Paper background="b-5" flow="4">
        <div>Flow sm</div>
        <div>Flow sm</div>
        <div>Flow sm</div>
      </Paper>
      <Paper background="b-5" flow="5">
        <div>Flow md</div>
        <div>Flow md</div>
        <div>Flow md</div>
      </Paper>
      <Paper background="b-5" flow="6">
        <div>Flow lg</div>
        <div>Flow lg</div>
        <div>Flow lg</div>
      </Paper>
      <Paper background="b-5" flow="7">
        <div>Flow xl</div>
        <div>Flow xl</div>
        <div>Flow xl</div>
      </Paper>
    </>
  )
}
