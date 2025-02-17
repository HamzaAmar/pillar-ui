import { Paper } from '@pillar-ui/core'

export const PaperWidth = () => {
  return (
    <>
      <Paper border width="20px" ratio="1" background="B1" />
      <Paper border width="100px" ratio="1" background="B1" />
      <Paper border width="100%" ratio="1" background="B1" />
      <Paper border width="20vw" ratio="1" background="B1" />
      <Paper border width="10rem" ratio="1" background="B1" />
    </>
  )
}
