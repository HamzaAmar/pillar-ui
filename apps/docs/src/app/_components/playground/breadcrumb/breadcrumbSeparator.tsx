import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import { Minus } from '@pillar-ui/icons'

const breadcrumbsItems = [
  { name: 'components', link: '../..', current: false },
  { name: 'base-ui', link: '../', current: false },
  { name: 'breadcrumb', link: './', current: true },
]

export const BreadcrumbSeparator = () => {
  const items = breadcrumbsItems.map(({ name, link, current }) => (
    <BreadcrumbItem current={current} key={name} href={link}>
      {name}
    </BreadcrumbItem>
  ))

  return (
    <>
      <Breadcrumb>{items}</Breadcrumb>
      <Breadcrumb separator="*">{items}</Breadcrumb>
      <Breadcrumb separator={<Minus width={10} />}>{items}</Breadcrumb>
    </>
  )
}
