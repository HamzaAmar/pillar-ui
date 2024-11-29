# @pillar/hooks

## 0.7.6

### Patch Changes

- # Fix Issues in Core and Hooks

  ## Core Package

  - Fix issues with Padding in Paper component
  - Fix typescript issue in avatar component
  - fix issue in css variables background in Paper component

  ## Hooks Package

  - fix issues in vitest and vite that cause build issue

  ## Docs improvements

  - fix issue that prevent vercel from building project
  - improve color docs
  - improve site seo

## 0.7.5

### Patch Changes

- # add .js to hooks package

## 0.7.4

### Patch Changes

- # new Release September 20, 2024

  ## Major Features

  - **Code Components:** Added code and copyButton components for use in the Code section of the mdx component.
  - **Improved Button and Checkbox Styles:** Refactored button and checkbox styles for better consistency and appearance.
  - **Code Playground Restructuring:** Restructured the doc file playground for use in both playground and code highlighting.
  - **Pagination Bug Fix:** Fixed a pagination bug that prevented users from navigating back to previous pages.

  ## Bug Fixes

  - **Variant Undefined Issue:** Resolved an issue where the variant was undefined in the classname.
  - **--opa Mistakes Value:** Corrected the value for the `--opa` mistake.
  - **Stepper Bug:** Fixed a bug in the stepper and renamed the value for clarity.
  - **Pagination Bug:** Fixed a bug that prevented users from navigating back to previous pages.
  - **Code Bug:** Fixed a code bug by adding the code to the pre element.
  - **Doc Issue:** Resolved an issue in the documentation after changes to the core.

  ## Refactors

  - **Removed Icon from Badge:** Removed the icon from the badge component.
  - **Removed Cite Component:** Removed the cite component from the blockquote and set a default value for the icon.
  - **Improved Component Detail Page Style:** Refactored the style of the component detail page.
  - **Updated Content Files:** Upgraded content files to reflect the new changes in examples.
  - **Changed Header and Home Component:** Modified the header and home components to support the new API.
  - **Changed Stories:** Updated stories to work with the new changes.
  - **Reduced Pillar Core Size:** Reduced the size of Pillar Core.
  - **Reduced Pillar Hooks Size:** Reduced the size of Pillar Hooks.
  - **Restructured Utils:** Restructured the utils and reduced its size.

  ## Additional Notes

  - **Yarn Lock File Upgrade:** Upgraded the yarn lock file to ensure compatibility with the latest dependencies.

  This release includes significant improvements and bug fixes that enhance the overall functionality and usability of Pillar Core.

## 0.7.3

### Patch Changes

- # Release Notes

  **Release Date:** September 10, 2024

  **Summary:**

  This release focuses on code refactoring and optimization, with a strong emphasis on reducing component size and improving overall code structure.

  **Key Changes:**

  - **Improved Module Structure:** Nest type declarations inside export/require statements, promoting better organization and maintainability.
  - **Reduced Component Footprint:** Optimized the size and complexity of several core components, including buttons, alerts, badges, chips, and spinners.
  - **Code Cleanup:** Removed unused code (list component) and resolved warnings (type placement).
  - **Dependency Management:** Addressed lock file issues for smoother project setup.

  **Detailed Changes:**

  - **7559f0f:** Fixed nested type declarations within export/require.
  - **fbdcc3f:** Resolved lock file problems.
  - **6bccd91:** Moved types to the top to eliminate warnings.
  - **7c682b9:** Refactored badge story and removed the list component.
  - **b204d3c:** Removed the list component from index and style.
  - **34e4420:** Reduced core components' size.
  - **8260896:** Removed the list component.
  - **95e024b:** Reduced the spinner component code.
  - **3875d58:** Reduced the chips component code.
  - **4842b9f:** Reduced the button component code.
  - **b705b21:** Improved and reduced the alert components.
  - **b32358e:** Improved and reduced the badge component.

  **Future Plans:**

  - Continue to refine and optimize core components.
  - Expand the component library with new features.
  - Enhance documentation and examples.

  **Thank you for using our project!**

- Updated dependencies
  - @pillar-ui/utils@0.8.4

## 0.7.2

### Patch Changes

- d034bc0: # Release Notes v1.x.x

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

- Updated dependencies [d034bc0]
  - @pillar-ui/utils@0.8.3

## 0.7.1

### Patch Changes

- # Release Notes v1.x.x

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

- Updated dependencies
  - @pillar-ui/utils@0.8.2

## 0.7.0

### Minor Changes

- # Key Improvements

  - **Performance Boost:** Significant enhancements to the `utils` module, leading to improved overall application performance (`08b83f1`).
  - **Reduced Bundle Size:** The `pillar-ui/core` package has been optimized, resulting in a smaller bundle size for faster loading times (`4236adb`).
  - **Bug Fixes:**
    - Addressed a missing `className` issue in the KDB component (`2690c8b`).
    - Resolved missing dependencies and peer dependencies (`ebde610`).

  ## Other Changes

  - **New Benchmark Script:** Introduced a new script for benchmarking the `classnames` functions to aid in future performance optimizations (`50bc866`).
  - **TSUP Config Update:** Removed `tsx` from `useDirection` in the TSUP configuration (`ee65764`).
  - **Next Example Update:** The Next.js example project has been updated to align with the latest changes in the library (`42bc566`).

  ## Additional Notes

  - This release includes refactoring efforts that improve code maintainability and set the foundation for future enhancements.

### Patch Changes

- Updated dependencies
  - @pillar-ui/utils@0.8.0

## 0.6.4

### Patch Changes

- This patch release focuses on bug fixes and improvements to enhance stability and performance.

  **Key Changes:**

  - **Bug Fixes:**
    - Resolved issues that occurred after upgrading the UI (`ed29c7b`).
    - Fixed core component problems (`dd7e94c`).
  - **Refactoring and Optimizations:**
    - Reduced the CSS size of the Pillar core component and updated development packages (`94b61cb`).
    - Improved documentation pages' padding and styling (`04a972a`, `6d1e1c6`).
    - Simplified the 'getStarter' documentation (`0766b83`).
    - Removed React components from component titles (`67df5c7`).

## 0.6.3

### Patch Changes

- add build proccess before release.

## 0.6.2

### Patch Changes

- fix: add global .npmignore file to try to fix the problem of content those not send to npm

## 0.6.1

### Patch Changes

- # This release includes the following improvements:

  - **Color Class Optimization:** The color class and variant definitions have been refactored to use only the 3 digits of each color. This optimization reduces the overall size of the stylesheets, improving page load times and user experience.
  - **README Enhancement:** The README files have been updated to provide clearer instructions and more detailed information.

## 0.6.0

### Minor Changes

- # New Release

  This release primarily focuses on enhancing the codebase's maintainability and performance, setting the stage for future feature development and improvements. While the changes may not be immediately visible to end-users, they significantly impact the project's long-term health and sustainability.

  ## Key Enhancements

  - **Codebase Refactoring:** A comprehensive overhaul of components, CSS classes, and file structures to improve code quality, consistency, and organization. This refactor enhances maintainability, streamlines development, and lays the groundwork for future optimizations.
  - **Performance Optimizations:** Various adjustments have been made to enhance site speed and overall performance. These include optimizing CSS variables, consolidating theme files, and refining component structures for faster loading times.
  - **SEO and Accessibility Improvements:** The project now includes upgraded meta tags, improved sitemap generation, and content updates to optimize for search engines and screen readers. These changes enhance the project's discoverability and inclusivity.
  - **Content Refinement:** Story excerpts, titles, and metadata have been revised for clarity, relevance, and improved user experience. This includes adding `lastModified` dates for better SEO and sitemap management.
  - **Styling Updates:** CSS variables and color schemes have been streamlined, making customization and maintenance easier for developers.

  ## Additional Changes

  - **Contributor Guidelines:** Naming conventions for contributors have been updated and can be found in the README and Contribute files.
  - **Donation Option:** A donation button has been added to support the project's ongoing development. Details can be found in the updated documentation.
  - **Technical Upgrades:** The project has been upgraded to use a more modern approach to generate favicons and sitemaps. Additionally, various technical adjustments have been made to pages like docs, playground, and stories to ensure compatibility with changes in the core pillar.

  ## Developer Notes

  - Developers are encouraged to review the updated naming conventions, component structures, and contributor guidelines.
  - The streamlined CSS variables and theme files offer greater flexibility for customization and theming.

  This release marks a significant milestone in the project's evolution. While user-facing features may not be immediately apparent, the underlying improvements are substantial and pave the way for exciting future enhancements. We are committed to continuous improvement and welcome feedback and contributions from the community.

## 0.5.1

### Patch Changes

- This release brings improvements to the Pillar UI Core library, including bug fixes, refactoring for efficiency, and the addition of new features.

  **Key Changes:**

  - **Enhancements:**
    - Added utility classes for increased flexibility (7682312).
    - Implemented clear action icon in search input (49a2216).
    - Revised Create Context function parameters (8ee1a5e).
  - **Bug Fixes:**
    - Resolved issues in Pillar UI Core (7682312).
    - Fixed documentation errors (9968163, 11e303d).
  - **Refactoring:**
    - Reduced library code for improved performance (1a27b0a).
    - Optimized CSS by sharing variant styles (41c80cc).

  **Commits:**

  - 7682312: fix: the pillar ui core mistakes and add utility classes
  - 9968163: fix: the docs mistakes
  - 1a27b0a: refactor: reduce the lib code
  - 49a2216: refactor: the search input to add clear action icon
  - 41c80cc: refactor: reduce the css size by sharing variants style
  - 8ee1a5e: Refactor: Revise Create Context Function Parameters
  - 11e303d: fix: docs errors
  - 43856b0: refactor: change the paper component to be better

  **Important Note:** Please review the full commit history for a detailed understanding of the changes.

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
