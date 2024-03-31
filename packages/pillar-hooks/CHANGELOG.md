# @pillar/hooks

## 0.5.0

### Minor Changes

- ✨ **Refactor:** Add New Release with Modifications

  This commit introduces a fresh release to the library, encompassing a range of enhancements and fixes across various files:

  🔍 **Updated Checkbox Story:** Implemented tests for the Checkbox component within a form context.

  🎨 **Added CSS for Side Effects:** Included CSS styling for side effects in the package.json file.

  🔄 **Improved RTL Language Support:** Fixed issues related to right-to-left language support in the CSS.

  🛠️ **Enhanced Form Field Functionality:** Modified the FormField component and resolved the describedBy problem.

  ⚙️ **Adjusted Tsup Configuration:** Made modifications to the Tsup configuration file.

  🖌️ **Updated Tooltip Styling:** Revamped the styling of tooltips and introduced size variations.

  These changes elevate the functionality and user experience of the library.

## 0.4.0

### Minor Changes

- # New Changes

  - **Commit f1f8ee5**: We’ve fixed an issue by adding types to the package.json exports. This should help improve the overall functionality of the library.
  - **Commit cef2462**: We’ve removed index.json and made changes to icons.json. This is part of our ongoing effort to streamline our codebase and improve efficiency.
  - **Commit 3478d24**: We’ve fixed the icon problem that some users were experiencing. This should enhance the user interface and make it more user-friendly.

  ## Conclusion

  These updates are part of our ongoing commitment to improving the Pillar UI library and ensuring it meets the needs of our users. We appreciate your feedback and encourage you to reach out if you encounter any issues or have suggestions for future updates.

## 0.3.0

### Minor Changes

- # 🚀 Release Notes: Pillar UI Library Update

  We're excited to roll out a series of enhancements and new features in this minor release that will supercharge your development workflow with the Pillar UI library!

  ## 🌐 Global Updates

  - Minor version bumps across multiple packages to ensure you’re working with the most refined and updated tools.

  ## 🧱 `@pillar-ui/core`

  ### New Components

  - 🌐 Tooltip and Popover: Elevate your UI with our newly added interactive components.
  - 📜 Blockquote: Seamlessly incorporate quotes into your text with our styled component.
  - 📝 List: Managing and rendering lists got a lot easier.

  ### Bug Fixes

  - 🐛 Improved the Avatar component’s error handling for enhanced reliability.

  ### Refactoring

  - 🔄 Renamed `composeRef` to `useComposeRefs` for improved readability and consistency.

  ## 🪝 `@pillar-ui/hooks`

  ### New Custom Hooks

  - 🧰 Introduced `useComposeRefs` to simplify and optimize reference composition.

  ### Enhancements

  - 📦 Enhanced `useClickOutside` to accept a ref, allowing for a more flexible usage.

  ## 🧰 `@pillar-ui/utils`

  ### Organizational Improvements

  - 🗂 Reorganized the structure of utility functions for easier navigation and usage.
  - 🔄 Shifted `useComposeRefs` from `utils` to `hooks` for logical categorization.

  ## 📚 Pillar Docs

  ### Documentation Improvements

  - 📱 Optimized the documentation header’s responsiveness for improved navigation on various devices.
  - 🚀 Added a dynamic Tutorial page to expedite users' proficiency with the library.
  - 🔍 Incorporated a search functionality, streamlining access to documentation contents.

  🙏 Thank you for choosing Pillar UI. We're committed to enhancing your development experience and eagerly look forward to your feedback on these latest updates!

## 0.2.0

### Minor Changes

- ### Pillar/utils

  - Added new `get` utility functions.
  - Added new `has` utility functions.
  - Added new `is` utility functions.

  ### Pillar/hooks

  - Added `useTimeout` custom hook.
  - Added `useIntersectionObserver` custom hook.
  - Added `useDebounce` custom hook.
  - Added `usePrevious` custom hook.
  - Added `usePersistentCallback` custom hook.
  - Added `useMouseMove` custom hook.
  - Added `useFullScreen` custom hook.
  - Added `useLocalStorage` custom hook.
  - Added `useEventListener` custom hook.
  - Added `useGeolocation` custom hook.
  - Added `useInterval` custom hook.
  - Added `useHover` custom hook.

  ## Pillar/core

  - Added `pinInput` field.

  ## Pillar/icons

  - Added new nature icons.
  - Added new health icons.
  - Added new faces icons.
  - Added new development icons.

  ### Refactor

  - Added `@examples` to JSDoc.

  ### Chore

  - Added `globals` type.

## 0.1.0

### Minor Changes

- 60583bf: ## Features

  - Add composeRef function
  - Add classnames utility to the utils package
  - Add string utils and corresponding tests
  - Add number utils and corresponding tests
  - Add useStepper custom hook
  - Add new utility classes and component library
  - Add core components to the project
  - Add various icons to the project
  - Add documentation pages and playground
  - Implement custom hooks and enhance existing ones

  ## Refactoring

  - Move classNames to a separate styles directory
  - Refactor and update multiple components
  - Refactor and improve various core components
  - Update icons and fix naming issues
  - Update styles and typography
  - Enhance code components

  ## Fixes

  - Fix CSS incorrect URL
  - Fix icons problem and naming issues

  ## Chore

  - Update build configuration
  - Add lint-staged to the project
  - Configure dependabot
  - Improve project structure and organization
