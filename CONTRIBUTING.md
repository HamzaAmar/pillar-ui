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

## Commit Messages

When making commits, please follow the [Conventional Commits format](https://www.conventionalcommits.org/en/v1.0.0/) . This helps us to automatically generate changelogs and version numbers.

## Running Tests

We have a suite of automated tests in place to ensure that changes do not introduce regressions. Before submitting a pull request, please ensure that all tests are passing. You can run the tests by running npm run test.

## Pull Request Reviews

Pull requests will be reviewed by the Pillar team. We appreciate your patience as we review your contributions. Please be open to feedback and willing to make changes if necessary.

## Conclusion

We hope that you find contributing to Pillar to be a rewarding experience. Your contributions help make Pillar a better design system for everyone to use. If you have any questions or need help getting started, please don't hesitate to reach out to the maintainers.
