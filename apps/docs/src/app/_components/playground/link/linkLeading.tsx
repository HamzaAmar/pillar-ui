import { Link } from '@pillar-ui/core'

export const LinkLeading = () => {
  return (
    <>
      <Link leading="normal">This heading has a normal line height.</Link>
      <Link leading="sm">This heading has a small line height.</Link>
      <Link leading="md">This heading has a medium line height.</Link>
      <Link leading="lg">This heading has a large line height.</Link>
    </>
  )
}
