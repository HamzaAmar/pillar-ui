import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'

const breadcrumbsItems = [
  { name: 'components', link: '../..', current: false },
  { name: 'base-ui', link: '../', current: false },
  { name: 'breadcrumb', link: './', current: true },
]

export const BreadcrumbSize = () => {
  const items = breadcrumbsItems.map(({ name, link, current }) => (
    <BreadcrumbItem current={current} key={name} href={link}>
      {name}
    </BreadcrumbItem>
  ))
  return (
    <>
      <Breadcrumb size="1">{items}</Breadcrumb>
      <Breadcrumb size="2">{items}</Breadcrumb>
      <Breadcrumb size="3">{items}</Breadcrumb>
      <Breadcrumb size="4">{items}</Breadcrumb>
      <Breadcrumb size="5">{items}</Breadcrumb>
      <Breadcrumb size="6">{items}</Breadcrumb>
      <Breadcrumb size="7">{items}</Breadcrumb>
      <Breadcrumb size="8">{items}</Breadcrumb>
      <Breadcrumb size="9">{items}</Breadcrumb>
    </>
  )
}
