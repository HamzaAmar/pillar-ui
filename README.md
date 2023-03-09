# Pillar-ui Design System

## What is pillar-ui

Pillar is a modern design system built with React, with the goal of providing a comprehensive set of reusable UI components that are fully accessible and adhere to best practices in modern web development.

## Features

- **Accessibility**: All components are designed to be fully accessible, following the latest WCAG 2.1 guidelines.
- **Modularity**: Components are designed to be modular, quick to customize and extend, and can be used individually or together to build complex User Interfaces.
- **Consistency**: A consistent visual language and naming conventions are used across components to make them easier to learn and use.
- **Responsive**: Components are designed to be responsive and work across a range of devices and screen sizes and screen modes
- **Theming**: Components are designed to be themable and can be quickly customized to match your brand or application.
- **Icon Component**: A customizable icon component is included, with a range of pre-built icons available.
- **Hooks**: A set of hooks are included to make common UI interactions (such as toggling a menu) easier to implement.

## Installation

Before You Install we need to let you know that pillar divided to three packages (core, hooks, icons), First to install choose which on of the package you need We make it separate to make bundle size small and use what you need `Core` `Icons` `Hooks`

```
npm install pillar/core
npm install pillar/hooks
npm install pillar/icons
```

```jsx
import { Button, InputPassword, Input, Checkbox } from "pillar/core";
import { useBoolean } from "pillar/hooks";
import * as Icons from "pillar/icons";

function MyComponent() {
  const { state, handleToggle } = useBoolean();

  return (
    <form aria-label="Register page">
      <Input required name="name" autoComplete="name" label="Name" />
      <Input
        type="Email"
        required
        name="email"
        autoComplete="email"
        label="Email"
      />
      <InputPassword
        required
        autoComplete="new-password"
        label="password"
        hint="password must be between 6 to 30 character"
      />
      <Checkbox
        color="primary"
        onChange={handleToggle}
        label="I agree to the terms and conditions"
      />
      <Button icon={<Icons.Send name="heart" size={24} color="red" />}>
        Register
      </Button>
    </form>
  );
}
```

## Contributing

We welcome contributions to Pillar-ui. To contribute, please follow the guidelines outlined in our CONTRIBUTING.md file.

## License

Pillar-ui is released under the MIT License.
