# Pillar-ui Design System

## What is pillar-ui

Pillar is a modern design system built with React, with the goal of providing a comprehensive set of reusable UI components that are fully accessible and adhere to best practices in modern web development.

## Features

- **Lightweight**: Only 11KB. Built as a lightweight alternative with full support for RTL languages, TypeScript, dark mode, and customization at both global and component levels.
- **Accessibility**: Fully compliant with WCAG 2.1 guidelines, including color contrast, high contrast mode, semantic markup, keyboard navigation, text resizing, and reduced-motion support.
- **Modularity**: Each component is standalone and extensible, allowing for flexible usage in isolation or in combination for building complex UIs.
- **Consistency**: Promotes a unified design language and consistent naming conventions for better usability and developer experience.
- **Flexibility**: Offers variants and customization options while following best practices in CSS and JavaScript to reduce bundle size and boost runtime performance.
- **Responsive**: Built with fluid design principles. Spacing, typography, and layout adapt seamlessly across screen sizes by default.
- **Theming**: Powered by CSS variables, making it easy to create and apply custom themes that reflect any brand or application style.
- **Icon Component**: Includes a fully customizable icon component with a rich set of prebuilt icons.
- **Hooks**: Ships with helpful React hooks to simplify UI interactions like toggling menus and handling user input.
- **Usability**: Designed with UX best practices to ensure a consistent, intuitive, and accessible experience for users.

## Installation

Before You Install we need to let you know that pillar contain four packages (core, hooks,utils icons).

```bash
# you can install all of them or only what you need

#NPM
npm i @pillar-ui/core
# (or | and)
npm i @pillar-ui/hooks
# (or | and)
npm i @pillar-ui/icons

#Yarn
yarn add @pillar-ui/core
# (or | and)
yarn add @pillar-ui/hooks
# (or | and)
yarn add @pillar-ui/icons
```

## How to use it

```jsx
import { Button, InputPassword, Input, Checkbox } from 'core'
import { useBoolean } from 'hooks'
import * as Icons from 'icons'

function MyComponent() {
  const { state, handleToggle } = useBoolean()

  return (
    <form aria-label="Register page">
      <Input required name="name" autoComplete="name" label="Name" />
      <Input type="Email" required name="email" autoComplete="email" label="Email" />
      <InputPassword
        required
        autoComplete="new-password"
        label="password"
        hint="password must be between 6 to 30 character"
      />
      <Checkbox color="p" onChange={handleToggle} label="I agree to the terms and conditions" />
      <Button icon={<Icons.Send name="heart" size={24} color="d" />}>Register</Button>
    </form>
  )
}
```

## Contributing

We welcome contributions to Pillar-ui, whether that's through reporting issues, submitting feature requests, or contributing code. [For More Information Check CONTRIBUTING.md file](https://github.com/HamzaAmar/pillar-ui/blob/main/CONTRIBUTING.md)

## Roadmap

We are constantly working to improve Pillar-ui and add new features to the library. Our roadmap includes plans to improve accessibility, add new components, and improve the documentation. We welcome feedback and suggestions from the community and encourage you to get involved in the development process.

## Security Policy

Please see our [Security Policy](https://github.com/HamzaAmar/pillar-ui/blob/main/SECURITY.md) for information on how to report security vulnerabilities and our disclosure policy.

## Sponsor Pillar-ui

If you find Pillar-ui useful and want to support its development and maintenance, you can consider sponsoring the project. Your sponsorship will help cover the costs of development, testing, documentation, and community support. It will also help us allocate more time and resources to improving and expanding the library.

You can sponsor the project on GitHub Sponsors. GitHub Sponsors is a platform that enables you to support open source projects and contributors. You can choose to sponsor us monthly or with a one-time donation. Your sponsorship will be publicly recognized on our GitHub repository and website.

Alternatively, you can also support the project by contributing code, reporting issues, and spreading the word about it. Every little bit helps and we appreciate all contributions, big and small.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y210RGNC)

Thank you for considering sponsoring Pillar-ui!

## License

Pillar-ui is released under the MIT License.
