# Pillar-ui Design System

## What is pillar-ui

Pillar is a modern design system built with React, with the goal of providing a comprehensive set of reusable UI components that are fully accessible and adhere to best practices in modern web development.

## Features

- **Accessibility**: All components are designed to be fully accessible, following the latest WCAG 2.1 guidelines support high contrast mode and prefer-reduced-motion..
- **Modularity**: Components are designed to be modular, quick to customize and extend, and can be used individually or together to build complex User Interfaces.
- **Consistency**: A consistent visual language and naming conventions are used across components to make them easier to learn and use.
- **Responsive**: Components are designed to be responsive and work across a range of devices and screen sizes and screen modes
- **Theming**: Components are designed to be themable and can be quickly customized to match your brand or application.
- **Icon Component**: A customizable icon component is included, with a range of pre-built icons available.
- **Hooks**: A set of hooks are included to make common UI interactions (such as toggling a menu) easier to implement.
- **Usability**: Respects UX principles and guidelines, providing a consistent and intuitive user experience.
- **Flexibility**: Works with variants, allowing for greater flexibility and customization of components.

## Installation

Before You Install we need to let you know that pillar divided to three packages (core, hooks, icons), First to install choose which on of the package you need We make it separate to make bundle size small and use what you need `Core` `Icons` `Hooks`

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

## Security Policy

Please see our [Security Policy](https://github.com/HamzaAmar/pillar-ui/blob/main/SECURITY.md) for information on how to report security vulnerabilities and our disclosure policy.

## Contributing

We welcome contributions to Pillar-ui, whether that's through reporting issues, submitting feature requests, or contributing code. Here's how you can get involved:

## Reporting Security Vulnerabilities

Pillar-ui takes security very seriously. If you find a security vulnerability in Pillar-ui, please report it as soon as possible. You can report security vulnerabilities by following these steps:

1. Create an issue on the Pillar-ui GitHub repository.
1. In the issue, provide as much information as possible about the vulnerability, including:
   - A description of the vulnerability
   - Steps to reproduce the vulnerability
   - Any other information that may be helpful in understanding or fixing the vulnerability
1. Do not share the vulnerability with anyone else until it has been fixed.

We will investigate all security vulnerabilities reported to us and take appropriate action to fix them. We will also work with you to ensure that your report is kept confidential.

Thank you for helping to keep Pillar-ui secure!

Here are some additional tips for reporting security vulnerabilities:

- Be as specific as possible when describing the vulnerability.
- Provide steps to reproduce the vulnerability, if possible.
- Do not share the vulnerability with anyone else until it has been fixed.
- Be patient. It may take some time for the vulnerability to be fixed.

## Submitting Feature Requests

If there's a feature you'd like to see added to Pillar-ui, please open an issue on our GitHub repository and provide as much detail as possible about the feature you're requesting. We'll review your request and consider it for inclusion in a future release.

## Contributing Code

If you'd like to contribute code to Pillar-ui, we'd be thrilled to have your help! Before getting started, please review our contributing guidelines for information on our coding standards, development workflow, and other important details.

Once you're ready to contribute, please fork our GitHub repository and create a new branch for your changes. When you're ready to submit your changes, please create a pull request and provide a clear description of the changes you've made and why they're necessary.

We review all pull requests and will work with you to ensure your changes are merged as smoothly as possible. Thank you for your interest in contributing to Pillar-ui!

## Development and Maintenance

Pillar-ui is an open-source project that welcomes contributions from the community. The project is maintained by a team of dedicated developers who work to ensure that the library is up to date, secure, and easy to use.

## Issue Triage

When issues are reported, they are triaged by the Pillar-ui team to ensure that they are valid and that they have not already been reported. Once an issue has been validated, it is assigned a priority based on its severity and impact. Issues are then added to the project board, which is used to track the progress of the issue and ensure that it is resolved in a timely manner.

## Pull Requests

Pull requests are welcome and should follow the guidelines outlined in the CONTRIBUTING.md file. Once a pull request is submitted, it is reviewed by the Pillar-ui team, who will provide feedback and suggest any necessary changes. Once the pull request is approved, it will be merged into the main branch and included in the next release.

## Releases

Pillar-ui releases are managed using Semantic Versioning. When a new release is ready, the team will create a release branch and begin the process of testing and preparing the release. Once the release has been thoroughly tested and is ready for deployment, it will be merged into the main branch and published to NPM.

## Roadmap

We are constantly working to improve Pillar-ui and add new features to the library. Our roadmap includes plans to improve accessibility, add new components, and improve the documentation. We welcome feedback and suggestions from the community and encourage you to get involved in the development process.

## Sponsor Pillar-ui

If you find Pillar-ui useful and want to support its development and maintenance, you can consider sponsoring the project. Your sponsorship will help cover the costs of development, testing, documentation, and community support. It will also help us allocate more time and resources to improving and expanding the library.

You can sponsor the project on GitHub Sponsors. GitHub Sponsors is a platform that enables you to support open source projects and contributors. You can choose to sponsor us monthly or with a one-time donation. Your sponsorship will be publicly recognized on our GitHub repository and website.

Alternatively, you can also support the project by contributing code, reporting issues, and spreading the word about it. Every little bit helps and we appreciate all contributions, big and small.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y210RGNC)

Thank you for considering sponsoring Pillar-ui!

## License

Pillar-ui is released under the MIT License.
