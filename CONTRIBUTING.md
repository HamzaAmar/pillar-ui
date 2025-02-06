# Contributing to Pillar Design System

Thank you for your interest in contributing to Pillar! We welcome contributions from everyone in the community, whether you're a developer, designer, or user. Here are some guidelines to help you get started:

## Getting Started

Before you start contributing to Pillar, please make sure to read our
[Code of Conduct](https://github.com/HamzaAmar/pillar-ui/blob/main/CODE_OF_CONDUCT.md)
and [README](https://github.com/HamzaAmar/pillar-ui/blob/main/README.md) files. These documents outline our community standards and expectations, as well as our project goals and scope.

To get started contributing, you can take a look at our [GitHub repository](https://github.com/HamzaAmar/pillar-ui) and the project board to see what tasks need to be completed. We use GitHub issues to track tasks and bugs, so please feel free to pick up an issue and start working on it.

## Development Setup

After cloning the repository, execute the following commands in the root folder:

### Install Dependencies

```npm
yarn
```

### Start the Development Server

If you will be working on the components source code, you can use the following command to start the webpack dev server: this command script `"dev": "turbo run dev",` will run dev to all subdirectories it will build (core , hooks, and icons) with [TSUP](https://github.com/egoist/tsup) and open two links one for the docs site in localhost:3000 and one for storybook in 6001

```npm
yarn dev
```

## How to Contribute

1. Fork the repository and clone it to your local machine.
1. Install the dependencies by running npm install.
1. Make your changes and commit them to a new branch.
1. Push your branch to your forked repository.
1. Open a pull request on the main repository with a detailed description of your changes.
1. Please note that the Pillar Design System has a code of conduct, and we ask all contributors to adhere to it. You can read the full code of conduct here.

## ## Bug Reports and Feature Requests

If you encounter a bug or have a feature request, please open an issue on the GitHub repository. Please be as detailed as possible when describing the issue or request.

## Style Guide

Pillar follows a set of design and coding guidelines to ensure consistency and maintainability. Please review these guidelines before contributing.

### Component Class Naming Convention

for class naming convention we use like bem methodology .Folder-element-modifier please we want it to follow this new ones.

### CSS Naming convention

#### 1. **Folder**

- The Folder is derived from the first two letters of the component's folder name, suffix by a hyphen (`-`).
- Example:
  - Folder Name: `button`, `alert`, `form`
  - Prefix: `.bu-`, `.al-`, `.fo-`

#### 2. **Element**

- The element is named using the first letter or more of the component's name, if the component name is composite example InputNumber the element will be (`In`) . Use additional letters if necessary to avoid conflicts between elements with the same First letter name.

- If the element has a sub-element, the sub-element is camelCased.
- Example:
  - Component Folder: `form`
  - Element: `InputNumber`, `InputSearch`
  - Sub-Element: `Suffix-Icon`,`close-Icon`
  - Class: `.fo-InSi`, `.fo-IsCi`
- caution: sometimes the element or sub-element has the same two letters in this component's for that we can get more letters to prevent conflicts.

#### 3. **Modifier**

- Modifiers are prefixed with a hyphen (`-`) and written as-is.
- Example:
  - Modifier for `bu-`: `bu-primary`, `bu-secondary`, `bu-soft`, , `bu-sharp`

---

### Naming Convention Examples

#### Example 1: Button Component

- **Folder Name**: `Button`
- **Element**: `Button`
- **Base Class**: `bu-`
- **Sub-Elements**:
  - text: `bu-T`
  - Icon: `bu-I`
- **Modifiers**:
  - Primary Button: `bu-primary`
  - Secondary Button: `bu-secondary`

#### Example 2: InputNumber Component

- **Folder Name**: `Form`
- **Element**: `InputNumber`
- **Base Class**: `fo-In`
- **Sub-Elements**:
  - Container: `fo-InC`
  - Prefix Icon: `fo-InPi`
- **Modifiers**:
  - Fluid: `fo-In-fluid`
  - Outline: `fo-In-outline`
  - Bordered: `fo-In-bordered`

---

### Implementation Guidelines

1. **Consistency**:

   - Always use the same pattern for prefixes, elements, and modifiers across all components.
   - Ensure that the first two letters of the folder name are consistently used.

2. **Scalability**:

   - Use camelCase for sub-elements to make the structure clear and readable.

3. **Separation of Concerns**:
   - Keep base classes, sub-elements, and modifiers distinct.
   - Use modifiers sparingly and only when necessary to avoid over-complicating the CSS.

---

Certainly! Let's break down and structure your utility class naming convention in a clear and easy-to-understand way. This will ensure that developers can quickly grasp the logic behind the utility classes and how they are organized.

---

### Utility Class Naming Convention

This naming convention is designed to make utility classes distinct from regular component-based classes, while also making it easy for developers to identify which file a utility class belongs to and what CSS property it affects.

---

#### 1. **Utility File Prefix**

- The first letter of the utility file name is used as a prefix for all utility classes within that file.
- This helps developers easily associate the utility class with its corresponding file.

**Example:**

- File Name: `alignment.css`
- Prefix: `A`
- File Name: `font.css`
- Prefix: `F`

---

#### 2. **Property Abbreviation**

- If the utility class represents a single CSS property, use the first letter of the property name after the file prefix.
- If the utility class combines multiple properties, use the first letter of each property involved.

**Examples:**

- For `justify-content`:
- First letter: `j`
- Combined with the file prefix (`A` for `alignment`): `.Ajc-`
  - For `font-style`:
- First letter: `f`
- Combined with the file prefix (`F` for `font`): `.Fst-`

---

#### 3. **Value Representation**

- The value of the CSS property is appended to the class name, separated by a hyphen (`-`).
- Use the exact value or a simplified version of it (e.g., `start` instead of `flex-start`).

**Examples:**

- For `justify-content: flex-start;`:
- Class Name: `.Ajc-start`
  - For `font-style: italic;`:
- Class Name: `.Fst-italic`

---

#### 4. **Combining Multiple Properties**

- If a utility class combines multiple properties, include the first letter of each property in the class name.
- Separate the letters with no spaces or underscores.

**Example:**

- File Name: `spacing.css`
- Prefix: `S`
  - Combining `margin-top` and `padding-bottom`:
- First letters: `m` (for `margin`) and `p` (for `padding`)
- Class Name: `.Smp-tb-10` (where `tb` indicates top and bottom, and `10` is the value)

---

### Examples

#### Example 1: Alignment Utilities

- **File Name**: `alignment.css`
- **Prefix**: `A`
- **Utilities**:
  - `justify-content: flex-start;` → `.Ajc-start`
  - `align-items: center;` → `.Aai-center`
  - `text-align: right;` → `.Ata-right`

#### Example 2: Font Utilities

- **File Name**: `font.css`
- **Prefix**: `F`
- **Utilities**:
  - `font-style: italic;` → `.Fst-italic`
  - `font-weight: bold;` → `.Fwt-bold`
  - `line-height: 1.5;` → `.Flh-1_5`

#### Example 3: Spacing Utilities

- **File Name**: `spacing.css`
- **Prefix**: `S`
- **Utilities**:
  - `margin-top: 10px;` → `.Sm-t-10`
  - `padding-bottom: 20px;` → `.Sp-b-20`
  - `margin-top: 10px; padding-bottom: 20px;` → `.Smp-tb-10-20`

---

#### Implementation Guidelines

1. **Consistency**:

   - Always use the same pattern for utility class names across all files.
   - Ensure that the file prefix and property abbreviations are consistent.

2. **Readability**:

   - Keep utility class names concise but meaningful.
   - Avoid overly long or cryptic abbreviations.

3. **Scalability**:

   - Use this convention for all utility files to maintain uniformity.
   - If a new utility file is added, follow the same rules for its prefix and class names.

4. **Documentation**:
   - Document this naming convention in your project's README or style guide to ensure consistency among contributors.

---

### Benefits of This Convention

1. **Easy Identification**:

   - Developers can quickly identify which file a utility class belongs to based on the prefix.

2. **Clear Property Mapping**:

   - The abbreviation of the property makes it easy to understand what the utility class does.

3. **Value Transparency**:

   - The value is explicitly included in the class name, making it clear what styles are applied.

4. **Maintainability**:
   - This convention ensures that utility classes remain organized and predictable, even as the project grows.

---

### Example CSS Code

```css
/* alignment.css */
.Ajc-start {
  justify-content: flex-start;
}

.Aai-center {
  align-items: center;
}

.Ata-right {
  text-align: right;
}

/* font.css */
.Fst-italic {
  font-style: italic;
}

.Fwt-bold {
  font-weight: bold;
}

.Flh-1_5 {
  line-height: 1.5;
}

/* spacing.css */
.Sm-t-10 {
  margin-top: 10px;
}

.Sp-b-20 {
  padding-bottom: 20px;
}

.Smp-tb-10-20 {
  margin-top: 10px;
  padding-bottom: 20px;
}
```

## Commit Messages

When making commits, please follow the [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0/) . This helps us to automatically generate changelogs and version numbers.

## Running Tests

We have a suite of automated tests in place to ensure that changes do not introduce regressions. Before submitting a pull request, please ensure that all tests are passing. You can run the tests by running npm run test.

## Pull Request Reviews

Pull requests will be reviewed by the Pillar team. We appreciate your patience as we review your contributions. Please be open to feedback and willing to make changes if necessary.

## Conclusion

We hope that you find contributing to Pillar to be a rewarding experience. Your contributions help make Pillar a better design system for everyone to use. If you have any questions or need help getting started, please don't hesitate to reach out to the maintainers.
