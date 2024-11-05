import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import Link from 'next/link'

const breadcrumbsItems = [
  { name: 'Home', link: '.', current: false },
  { name: 'base-ui', link: '..', current: false },
  { name: 'components', link: '../..', current: false },
  { name: 'buttons', link: '../../..', current: true },
]

export const BreadcrumbAs = () => {
  const aItems = breadcrumbsItems.map(({ name, link, current }) => (
    <BreadcrumbItem current={current} key={name} href={link}>
      {name}
    </BreadcrumbItem>
  ))
  const linkItems = breadcrumbsItems.map(({ name, link, current }) => (
    <BreadcrumbItem as={Link} current={current} key={name} href={link}>
      {name}
    </BreadcrumbItem>
  ))
  const buttonItems = breadcrumbsItems.map(({ name, link, current }) => (
    <BreadcrumbItem as="button" current={current} key={name}>
      {name}
    </BreadcrumbItem>
  ))
  return (
    <>
      <Breadcrumb>{aItems}</Breadcrumb>
      <Breadcrumb>{linkItems}</Breadcrumb>
      <Breadcrumb>{buttonItems}</Breadcrumb>
    </>
  )
}
