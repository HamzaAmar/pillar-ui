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
1. Code of Conduct
1. Please note that the Pillar Design System has a code of conduct, and we ask all contributors to
1. adhere to it. You can read the full code of conduct here.

## ## Bug Reports and Feature Requests

If you encounter a bug or have a feature request, please open an issue on the GitHub repository. Please be as detailed as possible when describing the issue or request.

## Style Guide

Pillar follows a set of design and coding guidelines to ensure consistency and maintainability. Please review these guidelines before contributing.

### Component Class Naming Convention

for class naming convention we use like bem methodology .block_element-modifier please we want it to follow this one.

also for utilities, and layout we prefix them with with the beginning of the folder followed by \_

`utils` ====> u\_
`layout` ====> l\_

but for the components we follow this inscruction below :

To ensure uniqueness and minimize bundle size, Pillar adopts the following class naming convention for components:

The first and second letters of the component's folder name, separated by a hyphen (-).

Absolutely! Let's refine your component class naming convention description.

Pillar components adhere to a unique class naming convention designed for both clarity and efficiency:

1. **Base Abbreviation:** The first two letters of the component folder name are used as the base abbreviation. (e.g., "Button" becomes "bu-")

2. **Disambiguation:**
   - If two or more components share the same base abbreviation, the third letter is included for distinction.
   - If ambiguity persists, the first unique letter encountered in the component folder name is added to the abbreviation.
   - This step is repeated as needed until a unique class name is generated.

**Example:**

```html
<div class="bu-"></div>
<div class="bu--primary"></div>
<div class="bu--large"></div>
```

**Benefits:**

- **Collision Prevention:** This approach minimizes the risk of Pillar component styles conflicting with user-defined classes.
- **Conciseness:** Short, predictable class names reduce CSS bundle size, also component size, enhancing website performance.
- **Readability:** While abbreviated, the class names remain reasonably intuitive, aiding in code maintainability.
- **Scalability:** The convention accommodates a growing number of components without sacrificing uniqueness.

**Additional Considerations (Optional):**

- **Delimiter:** Consider using a consistent delimiter (e.g., hyphen, underscore) to visually separate the abbreviation parts in longer class names.
- **Documentation:** Include the naming convention details in your component documentation or style guide for easy reference.

## CSS Reserved Words (Continued)

| Reserved Word | Description               | Example    |
| ------------- | ------------------------- | ---------- |
| `_btn`        | Reserved for "button"     | `.bu-_btn` |
| `_cnt`        | Reserved for "content"    | `.bu-_cnt` |
| `_err`        | Reserved for "error"      | `.bu-_err` |
| `_ele`        | Reserved for "element"    | `.bu-_el`  |
| `_flb`        | Reserved for "fallback"   | `.bu-_flb` |
| `_hor`        | Reserved for "horizontal" | `.bu-_hor` |
| `_itm`        | Reserved for "item"       | `.b-Aaim`  |
| `_img`        | Reserved for "image"      | `.bu-_img` |
| `_icn`        | Reserved for "icon"       | `.bu-_icn` |
| `_lnk`        | Reserved for "link"       | `.bu-_lnk` |
| `_lbl`        | Reserved for "label"      | `.bu-_lbl` |
| `_lst`        | Reserved for "list"       | `.bu-_lst` |
| `_pnl`        | Reserved for "panel"      | `.bu-_pnl` |
| `_pfx`        | Reserved for "prefix"     | `.bu-_pfx` |
| `_sh`         | Reserved for "show"       | `.bu-_shw` |
| `_sfx`        | Reserved for "suffix"     | `.bu-_sfx` |
| `_txt`        | Reserved for "text"       | `.bu-_txt` |
| `_ver`        | Reserved for "vertical"   | `.bu-_ver` |
| `_wrp`        | Reserved for "wrapper"    | `.bu-_wrp` |

Please adhere to this convention when creating or modifying Pillar components.

## Commit Messages

When making commits, please follow the [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0/) . This helps us to automatically generate changelogs and version numbers.

## Running Tests

We have a suite of automated tests in place to ensure that changes do not introduce regressions. Before submitting a pull request, please ensure that all tests are passing. You can run the tests by running npm run test.

## Pull Request Reviews

Pull requests will be reviewed by the Pillar team. We appreciate your patience as we review your contributions. Please be open to feedback and willing to make changes if necessary.

## Conclusion

We hope that you find contributing to Pillar to be a rewarding experience. Your contributions help make Pillar a better design system for everyone to use. If you have any questions or need help getting started, please don't hesitate to reach out to the maintainers.
