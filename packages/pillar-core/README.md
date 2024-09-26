# Pillar Core: React Design System & Reusable UI Components

Pillar Core is a comprehensive React design system empowering developers to build beautiful, consistent, and high-performing user interfaces. Our meticulously crafted library of reusable UI components accelerates your modern web development projects, ensuring a seamless user experience across devices.

**## Why Choose Pillar Core?**

- **React-Centric Design:** Specifically designed for React applications, ensuring seamless integration and optimal performance.
- **Industry Best Practices:** Components adhere to the latest React design patterns and accessibility standards (WCAG), guaranteeing a top-tier user experience.
- **Customization:** Tailor components effortlessly to match your brand's unique visual identity and design requirements.
- **Responsive Out of the Box:** Every component gracefully adapts to diverse screen sizes and devices, delivering a pixel-perfect experience everywhere.
- **Consistent & Intuitive UX:** Pillar Core fosters a cohesive user experience through a unified design language and intuitive interactions.
- **TypeScript for Type Safety:** Built with TypeScript, ensuring robust type safety and a smooth, predictable development process.
- **Storybook Showcase:** Explore and interact with live component examples in the interactive Storybook environment.
- **Theming & Customization Power:** Easily create custom themes and modify colors, typography, and spacing to align with your brand.
- **Dark Mode & RTL Support:** Out-of-the-box support for dark mode and right-to-left (RTL) languages enhances accessibility for all users.

## Getting Started

### Installation

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

### Adding Styles

To enhance the appearance and maintain visual consistency of your application using Pillar components, follow these steps to add the necessary styles. Pillar provides a CSS file that not only enhances the styling but also introduces additional features such as dark mode support and right-to-left (RTL) language support.

1. Open the root file of your project.

1. Locate the file where your application is initialized, typically named App.js, App.tsx, or similar.

1. Import the Pillar CSS file by adding the following import statement at the top of the file:

```tsx
import '@pillar-ui/core/main.css'
```

This import statement ensures that the necessary styles are applied to the Pillar components used in your application.

### Customizing Theming

With Pillar UI, you can easily customize the appearance of your user interface (UI) to match your preferences. By modifying the predefined custom properties, you can control colors, typography, spacing, and more.

To change the primary color of your UI, follow these simple steps:

1. Create a file named theme.css or any other preferred name.

1. Inside theme.css, define the desired primary color using the `--Pcolor` custom property. For example:

```css
:root {
  --Pcolor: #ff0000; /* Replace with your desired primary color */
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

## Contributing

We welcome contributions to Pillar Core! Whether you want to report issues, suggest new features, or submit pull requests, please refer to our Contributing Guidelines for more information.

## Roadmap

We are constantly working to improve Pillar-ui and add new features to the library. Our roadmap includes plans to improve accessibility, add new components, and improve the documentation. We welcome feedback and suggestions from the community and encourage you to get involved in the development process.

## Support Pillar-ui – We Appreciate Your Help

If you find Pillar-ui valuable and would like to help ensure its continued development and maintenance, we'd be honored if you would consider sponsoring the project. Your generous support would help cover the costs of ongoing development, testing, documentation, and community engagement. It would also enable us to dedicate more time and resources to making Pillar-ui even better and more versatile.

You can easily become a sponsor through GitHub Sponsors. This platform allows you to directly support open source projects and their contributors. You can choose to sponsor us on a monthly basis or with a one-time contribution. We'll be sure to acknowledge your sponsorship on our GitHub repository and website.

Of course, there are other wonderful ways to contribute! We always welcome code contributions, issue reports, and spreading the word about Pillar-ui. We value all contributions, no matter how big or small.

We are deeply grateful for your consideration and support. If you'd prefer to make a one-time donation, you can also support us through Ko-fi. Thank you for being a part of the Pillar-ui community!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Y8Y210RGNC)

## License

Pillar Core is released under the MIT License.
