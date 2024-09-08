---
'@pillar-ui/hooks': patch
'@pillar-ui/utils': patch
'@pillar-ui/core': patch
---

# Release Notes v1.x.x

## Enhancements

- **Core:**

  - Added new utility functions to the core project, promoting code reusability and maintainability.
  - Added icons to the core, streamlining asset management.

- **Pillar:**
  - Refactored `pillar-ui/hooks` to be a peer dependency of `pillar core`, improving modularity and flexibility.
  - Improved the `cx` style function to automatically remove falsy values, simplifying styling.
  - Enhanced the `truncate` props to support new styling options, offering greater customization.
  - Refactored typography to use the new utils from the core, ensuring consistency.
  - Added new truncate classes, providing additional styling options.

## Bug Fixes

- Fixed an issue where the `truncate` props didn't support the new styling.
- Fixed an issue in the `cx` style function where falsy values were not removed.
- Refactored the typography component to remove the `variant` prop, streamlining the API.

**Note:** This release focuses on refactoring and improving the core and UI components for better code quality, maintainability, and styling flexibility. New features and enhancements will be introduced in future releases.
