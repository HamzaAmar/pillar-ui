import { Alert } from '@pillar-ui/core'

/* 
  this is the list of the color used in Pillar ui Library
  p => primary | se=> secondary | d => danger | w => warning | i => info | su=> success | b => bg 
*/
export const AlertColor = () => {
  return (
    <>
      <Alert title="Success!" color="d" />
      <Alert title="Success!" color="w" />
      <Alert title="Success!" color="su" />
      <Alert title="Success!" color="p" />
      <Alert title="Success!" color="b" />
      <Alert title="Success!" color="se" />
      <Alert title="Success!" color="i" />
    </>
  )
}
