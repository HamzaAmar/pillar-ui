# Pillar Core

Pillar Core is a collection of reusable UI components for modern web development. These components follow best practices, are highly customizable, and promote a consistent user experience across applications.

## Features

- **Best Practices**: Components adhere to industry best practices, ensuring optimal performance, maintainability, and accessibility.
- **Customizable**: Components are highly customizable, allowing you to adapt them to your application's unique visual and branding requirements.
- **Responsive Design**: All components are designed to be responsive and work seamlessly across different screen sizes and devices.
- **Consistent User Experience**: Pillar Core promotes a consistent user experience by providing a cohesive visual language and intuitive interactions.
- **TypeScript Support**: Components are built with TypeScript, providing type safety and enhanced developer experience.
- **Storybook Integration**: The components are fully compatible with Storybook, making it easy to explore and showcase their functionality.

## Installation

To start using Pillar Core in your project, follow these simple steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

1. Create a new project or navigate to your existing project directory in the terminal.

1. Install the Pillar Core package by running the following command:

```bash
npm install @pillar-ui/core

```

Or Yarn

```bash
yarn add @pillar-ui/core
```

## Adding Styles

To enhance the appearance and maintain visual consistency of your application using Pillar components, follow these steps to add the necessary styles. Pillar provides a CSS file that not only enhances the styling but also introduces additional features such as dark mode support and right-to-left (RTL) language support.

1. Open the root file of your project.

1. Locate the file where your application is initialized, typically named App.js, App.tsx, or similar.

1. Import the Pillar CSS file by adding the following import statement at the top of the file:

```tsx
import '@pillar-ui/core/main.css'
```

This import statement ensures that the necessary styles are applied to the Pillar components used in your application.

## Customizing Theming

With Pillar UI, you can easily customize the appearance of your user interface (UI) to match your preferences. By modifying the predefined custom properties, you can control colors, typography, spacing, and more.

To change the primary color of your UI, follow these simple steps:

1. Create a file named theme.css or any other preferred name.

1. Inside theme.css, define the desired primary color using the --pri-color custom property. For example:

```css
:root {
  --pri-color: #ff0000; /* Replace with your desired primary color */
}
```

You can customize other aspects of the theme by modifying additional custom properties. Refer to the Pillar Core documentation for a full list of available custom properties and their usage.

1. Save the `theme.css` file.

1. Import the `theme.css` file in your project, making sure to import it after the `@pillar-ui/core/main.css` import. This ensures that your custom styles override the default styles provided by Pillar Core. For example:

```tsx
import '@pillar-ui/core/style'
import './theme.css'
```

By following these steps, you can easily personalize the primary color of your UI to your preferred choice. Feel free to explore other customization options such as font size, shadows, gradients, and spacing, which can be adjusted using similar custom properties.

Pillar Core empowers you to create a visually appealing UI that aligns with your project requirements and brand identity. Enjoy the flexibility and control over your UI's appearance with Pillar Core's customization capabilities.

## Developer Experience

Pillar Core enhances your development experience (DX) with simple workflows for component implementation and customization. It eliminates repetitive styling code and offers customization options to fit your project requirements.

- **Responsive Variables**: Control component appearance easily with responsive variables.
- **Preventing Repetition**: Avoid repetitive styling by using predefined styles and variables.
- **Customization and Extensibility**: Customize Pillar Core to match your project's design language and branding.

Refer to the Pillar Core documentation for more details on utilizing the responsive variables, predefined styles, and customizations available.

## Get Ready

Once you have customized your Pillar Core theme and set the desired variables, you are ready to import the necessary components, icons, utilities, or hooks and start developing your application.

```tsx
import { Button } from '@pillar-ui/core'
```

## Contributing

We welcome contributions to Pillar Core! Whether you want to report issues, suggest new features, or submit pull requests, please refer to our Contributing Guidelines for more information.

## Roadmap

We are constantly working to improve Pillar-ui and add new features to the library. Our roadmap includes plans to improve accessibility, add new components, and improve the documentation. We welcome feedback and suggestions from the community and encourage you to get involved in the development process.

## Sponsor Pillar-ui

If you find Pillar-ui useful and want to support its development and maintenance, you can consider sponsoring the project. Your sponsorship will help cover the costs of development, testing, documentation, and community support. It will also help us allocate more time and resources to improving and expanding the library.

You can sponsor the project on GitHub Sponsors. GitHub Sponsors is a platform that enables you to support open source projects and contributors. You can choose to sponsor us monthly or with a one-time donation. Your sponsorship will be publicly recognized on our GitHub repository and website.

Alternatively, you can also support the project by contributing code, reporting issues, and spreading the word about it. Every little bit helps and we appreciate all contributions, big and small.

Thank you for considering sponsoring Pillar-ui!

## Let Us Know

If you have any questions, feedback, or need assistance with Pillar Utils, feel free to open a discussion on our GitHub page. We are committed to providing fast and helpful responses to ensure your success with the library.

You can visit the [Pillar Utils GitHub Discussions page]: https://github.com/HamzaAmar/pillar-ui/discussions to start a new discussion or join existing ones. We are here to support you and provide answers as quickly as possible.

## License

Pillar Core is released under the MIT License.

Feel free to customize the readme file further with specific links to your documentation, contributing guidelines, and any other relevant information for the users of the Pillar Core package.
