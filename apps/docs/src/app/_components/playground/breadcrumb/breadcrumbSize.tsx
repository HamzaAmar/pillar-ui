import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'

const breadcrumbsItems = [
  { name: 'components', link: '../..', current: false },
  { name: 'base-ui', link: '../', current: false },
  { name: 'breadcrumb', link: './', current: true },
]

export const BreadcrumbSize = () => {
  return (
    <>
      <Breadcrumb size="2" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="3" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="4" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="5" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="6" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="7" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Breadcrumb size="8" separator="-">
        {breadcrumbsItems.map(({ name, link, current }) => (
          <BreadcrumbItem current={current} key={name} link={link}>
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  )
}
