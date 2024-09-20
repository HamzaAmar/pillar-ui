import { Breadcrumb, BreadcrumbItem } from '@pillar-ui/core'
import { Anchor, Home, Mouse, Palette } from '@pillar-ui/icons'

const breadcrumbsItems = [
  { name: 'home', link: '.', icon: <Home width={16} />, current: false },
  { name: 'base-ui', link: '..', icon: <Palette width={16} />, current: false },
  { name: 'components', link: '../..', icon: <Anchor width={16} />, current: false },
  { name: 'button', link: '../../..', icon: <Mouse width={16} />, current: true },
]

export const BreadcrumbIcon = () => {
  return (
    <>
      <Breadcrumb>
        {breadcrumbsItems.map(({ name, link, icon, current }) => (
          <BreadcrumbItem key={name} link={link} current={current}>
            {name}
            {icon}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>

      <Breadcrumb>
        {breadcrumbsItems.map(({ name, link, icon, current }) => (
          <BreadcrumbItem key={name} link={link} current={current}>
            {icon}
            {name}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </>
  )
}
