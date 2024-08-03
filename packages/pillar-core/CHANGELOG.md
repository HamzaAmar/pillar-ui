# @pillar/core

## 0.8.0

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

## 0.7.1

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

## 0.7.0

### Minor Changes

- **_Features_**

  - **Enhanced 'Change Theme' and 'RTL Experiences' Section:**
    - Redesigned color palette selection with improved previews
    - Streamlined RTL layout switching for smoother transitions
  - **Site Design Improvements:**
    - Optimized spacing and typography for better readability
    - Added visual hierarchy to guide user flow
  - **Documentation Updates:**
    - Fixed broken links and outdated examples
    - Added comprehensive guides for new `customColorPicker` and `rtlMode` props

  **_Fixes_**

  - **Design Issues Resolved:**
    - Fixed inconsistent button sizing across themes
    - Addressed overlapping elements in RTL mode

  **_Chore_**

  - **Documentation Updates for New Props:**
    - Clear explanation of `customColorPicker` and `rtlMode` props with usage examples.

## 0.6.0

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

## 0.5.2

### Patch Changes

- feat: remove unused icons
  d81cd7f fix: add new forgotten icons
  4ecabda fix: icon error that prevented build"

## 0.5.1

### Patch Changes

- Here's a simpler version of the message:

  ***

  🌟 **New Update: Better Icons!**

  We're excited to share our newest update! It makes our website even better with some new features and important fixes.

  **Here's What's New and Improved:**

  1. **New and Easier Icons (Commit 5470355):** We've added new icons to our site. They look great and are easier to understand, matching our modern style.
  2. **Updated Main Icons (Commit 293fbc6):** The main icons, which show our key features, are now better and easier to use.
  3. **Icons Look More Alike (Commit df2bd10):** We've changed the 'dots' icon to 'dotHorizontal'. This makes our icons more consistent and clear.

  **Why This Matters:**
  These updates make our platform look nicer and easier to use. We've worked on our icons so you can have a better and more straightforward experience.

## 0.5.0

### Minor Changes

- # New Changes

  - **Commit f1f8ee5**: We’ve fixed an issue by adding types to the package.json exports. This should help improve the overall functionality of the library.
  - **Commit cef2462**: We’ve removed index.json and made changes to icons.json. This is part of our ongoing effort to streamline our codebase and improve efficiency.
  - **Commit 3478d24**: We’ve fixed the icon problem that some users were experiencing. This should enhance the user interface and make it more user-friendly.

  ## Conclusion

  These updates are part of our ongoing commitment to improving the Pillar UI library and ensuring it meets the needs of our users. We appreciate your feedback and encourage you to reach out if you encounter any issues or have suggestions for future updates.

## 0.4.0

### Minor Changes

- ## What's New

  - **New Documentation for Flex and Grid**: With commit `2914402`, we've added comprehensive documentation for flex and grid layouts. Understanding how to leverage these powerful layout tools is now easier than ever.

  - **Info Color and High Contrast**: In commits `de6a284` and `d39d8a0`, we introduced a new 'info' color and a high contrast property to our theming options. These features provide better visual cues and accessibility options for your projects.

  - **Accordion Item Enhancement**: With commit `5feefc1`, we've made an update to the accordion component, allowing the `value` prop to accept either a string or a number, adding flexibility to the way you handle data.

  ## Bug Fixes

  - **Documentation Style Fix**: Commit `470f9f2` addresses a styling bug in the documentation. The appearance of our docs is now more consistent and user-friendly.

  - **README File Corrections**: With commit `a8ad825`, we've made corrections to the README file, fixing errors and ensuring that the project's introduction is as clear and accurate as possible.

## 0.3.1

### Patch Changes

- # Core Enhancements and Fixes:

  - Fixed form corner defaults and improved gap separation (commit: #df335a2).
  - Added custom fonts to Project 3 (commit: #62af24e).

  # Documentation and SEO:

  - Enhanced SEO with title and description tags (commit: #f5b4b0f).
  - Added Globby to the site (commit: #88b7989).
  - Refactored page SCSS files (commit: #9dfa9a8).
  - Added RSS and sitemap to the project (commit: #a6cce57).
  - Included robots.txt and sitemap.xml (commit: #b6c8391).
  - Added SEO meta information to the project (commit: #892f15a).

  This release focuses on improving SEO, enhancing appearance, and organizing resources for an optimized user experience.

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
