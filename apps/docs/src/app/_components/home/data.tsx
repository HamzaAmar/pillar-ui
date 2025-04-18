import { Star, TextIncrease, Space, Code, Mouse, PlayerPause, EyeCheck, Palette } from '@pillar-ui/icons'

export const USER_DATA = {
  en: {
    user: {
      avatar: 'path/to/avatar.jpg',
      fullName: 'John Doe',
      description: 'Passionate developer with a knack for creating intuitive user experiences.',
      likes: 120,
      followers: 350,
      jobTitle: 'UI/UX Designer',

      additionalInfo: {
        location: 'New York, USA',
        company: 'Tech Solutions Inc.',
      },
    },
  },
  ar: {
    user: {
      avatar: 'path/to/avatar.jpg',
      fullName: 'جون دو',
      description: 'مطور شغوف بخلق تجارب مستخدم سهلة وبديهية.',
      likes: 120,
      followers: 350,
      jobTitle: 'مصمم واجهة المستخدم/تجربة المستخدم',

      additionalInfo: {
        location: 'نيويورك، الولايات المتحدة',
        company: 'شركة حلول التكنولوجيا',
      },
    },
  },
}

export const FEATURES = [
  {
    id: '1',
    title: 'Inclusive Experiences:',
    description: 'Seamless support for any RTL language.',
    icon: '🌐',
  },
  {
    id: '2',
    title: 'Intuitive Design:',
    description: 'Automatic text alignment and visual order for a natural feel.',
    icon: '✨',
  },
  {
    id: '3',
    title: 'Pre-Built RTL Components:',
    description: 'Effortlessly create interfaces that work across languages.',
    icon: '🔨',
  },
  {
    id: '4',
    title: 'Flexible Customization:',
    description: "Add `dir='rtl'` to target specific areas for complete control.",
    icon: '🎯',
  },
  {
    id: '5',
    title: 'Accessibility Focused:',
    description: 'Design for everyone with RTL optimization at the core.',
    icon: '🤝',
  },
]

export const ACCESSIBILITY = [
  {
    id: 'high-contrast',
    title: 'Support Windows High Contrast',
    description:
      'Our UI library supports windows high contrast mode out of the box without any additional configuration.',
    icon: <Star width="24" stroke="var(--P11)" />,
  },
  {
    id: 'color-contrast',
    title: 'Color Contrast',
    description: 'Meets WCAG contrast guidelines for readability by all users.',
    icon: <EyeCheck width="24" stroke="var(--P11)" />,
  },
  {
    id: 'reduce-animation',
    title: 'Reduce Motion',
    description: 'Option to minimize animations for users with motion sensitivity.',
    icon: <PlayerPause width="24" stroke="var(--P11)" />,
  },
  {
    id: 'Keyboard Navigation',
    title: 'Keyboard Navigation',
    description: 'Full keyboard support for users who cannot use a mouse.',
    icon: <Space width="24" stroke="var(--P11)" />,
  },
  {
    id: 'Text Resizing',
    title: 'Text Resizing',
    description: 'Supports text resizing for users with low vision.',
    icon: <TextIncrease width="24" stroke="var(--P11)" />,
  },
  {
    id: 'Focus Indicators',
    title: 'Focus Indicators',
    description: 'Clear focus indicators for keyboard navigation.',
    icon: <Mouse width="24" stroke="var(--P11)" />,
  },
  {
    id: 'Semantic Markup',
    title: 'Semantic Markup',
    description: 'Uses semantic HTML for accessibility and structure.',
    icon: <Code width="24" stroke="var(--P11)" />,
  },
  {
    id: 'colorblind-friendly',
    title: 'Color blind Friendly Design',
    description: 'Does not rely on color alone to convey information, ensuring accessibility for colorblind users.',
    icon: <Palette width="24" stroke="var(--P11)" />, // You might want a more suitable icon here.
  },
]

export const SIMPLE_DEVELOPMENT = [
  {
    id: 'Unlock Efficiency',
    title: 'Unlock Efficiency',
    description: 'Build faster with pre-built components, hooks, icons, and utilities.',
  },
  {
    id: 'all-in-one',
    title: 'All-in-One Solution',
    description: 'One library for UI elements, functionality, and visual assets.',
  },
  {
    id: 'Efficiency and Consistency',
    title: 'Efficiency and Consistency',
    description: 'Reduce code duplication and ensure a cohesive design.',
  },
  {
    id: 'lightweight-powerful',
    title: 'Lightweight Projects, Powerful Results',
    description: 'A Core library that is 9 times smaller than any other react UI library.',
  },
  {
    id: 'simplify-streamline',
    title: 'Simplify and Streamline',
    description: 'Focus on unique features, not reinventing common UI elements.',
  },
  {
    id: 'Empower Your Development Process',
    title: 'Empower Your Development Process',
    description: 'Build exceptional projects with efficiency and ease.',
  },
]

export const SUPPORTED = [
  {
    slug: 'cra',
    title: 'CRA',
    icon: (
      <svg width="80" viewBox="0 0 171 159.9">
        <path
          fill="#09d3ac"
          d="M141.3 73.3c0-7-8-13-20.5-16.8 3-12.6 1.7-22.7-4.3-26.1a9.6 9.6 0 0 0-4.8-1.2c-5.6 0-12.6 3.9-19.7 10.6-7.1-6.7-14.2-10.6-19.7-10.6a9.5 9.5 0 0 0-4.9 1.3c-6 3.4-7.1 13.4-4.2 26-12.4 3.7-20.5 9.8-20.5 16.6s8.1 13 20.6 16.8c-3 12.6-1.7 22.7 4.3 26.1a9.4 9.4 0 0 0 4.8 1.2c5.5 0 12.6-3.9 19.7-10.6 7.1 6.7 14.1 10.6 19.7 10.6a9.6 9.6 0 0 0 4.8-1.3c6-3.4 7.2-13.4 4.3-26 12.4-3.7 20.4-9.8 20.4-16.6zM96.6 42c8.2-7.4 13.3-8.2 15-8.2a4.7 4.7 0 0 1 2.5.6c2.9 1.7 4 7.4 3.1 15a56.7 56.7 0 0 1-1 5.8 97.7 97.7 0 0 0-12.6-2 98.5 98.5 0 0 0-8.2-10.1l1.2-1.1zM71.8 78.9A134.8 134.8 0 0 0 77 88c-2.7-.4-5.3-.9-7.8-1.5.7-2.5 1.5-5 2.6-7.6zM69 60a88 88 0 0 1 8-1.5c-1 1.5-2 3-2.8 4.6l-2.5 4.6-2.7-7.7zm5.2 13.3q1.9-3.9 4.1-7.8c1.5-2.6 3.1-5.2 4.8-7.6a110.8 110.8 0 0 1 17.9 0 129.6 129.6 0 0 1 8.8 15.4 113 113 0 0 1-8.8 15.4 112.7 112.7 0 0 1-17.9 0 112.2 112.2 0 0 1-8.8-15.4zm32.9-14.7c2.7.3 5.3.8 7.8 1.4-.7 2.5-1.6 5-2.6 7.6a135.3 135.3 0 0 0-5.2-9zm2.7 24.9 2.5-4.5c1 2.6 2 5.1 2.7 7.6a87.2 87.2 0 0 1-8 1.5l2.9-4.6zM92 46.6c1.8 1.9 3.6 4 5.3 6.2l-5.2-.1h-5.4c1.7-2.1 3.5-4.2 5.3-6.1zm-22.2-12a4.8 4.8 0 0 1 2.5-.6 13.1 13.1 0 0 1 5.2 1.3 39 39 0 0 1 10 6.8l1.1 1a98.5 98.5 0 0 0-8.1 10 98.9 98.9 0 0 0-12.7 2.1c-.4-2-.8-3.8-1-5.6-1-7.6.2-13.4 3-15zm-5.3 50.7a58.8 58.8 0 0 1-5.5-2c-7.1-3-11.5-6.9-11.5-10.2s4.4-7.1 11.5-10a57.6 57.6 0 0 1 5.4-2A98 98 0 0 0 69 73.2a98.7 98.7 0 0 0-4.5 12zm23 19c-8.2 7.4-13.3 8.2-15.1 8.2a4.7 4.7 0 0 1-2.4-.6c-2.9-1.6-4-7.4-3.1-15a56 56 0 0 1 1-5.8 99.5 99.5 0 0 0 12.6 2 97.2 97.2 0 0 0 8.2 10.2zm4.6-4.4c-1.8-2-3.6-4-5.3-6.3l5.2.1h5.4a95.5 95.5 0 0 1-5.3 6.2zm22.2 12a4.8 4.8 0 0 1-2.5.5c-1.8 0-7-.8-15.2-8l-1.1-1.1a98.4 98.4 0 0 0 8.1-10 97 97 0 0 0 12.7-2c.4 1.9.8 3.8 1 5.6 1 7.5-.2 13.3-3 15zM125 83.4c-1.7.7-3.5 1.4-5.5 2a98.5 98.5 0 0 0-4.5-12.2 98.1 98.1 0 0 0 4.5-12 58.8 58.8 0 0 1 5.5 2c7 3 11.5 6.9 11.5 10.1s-4.4 7.1-11.5 10zm-33.1-1a9.2 9.2 0 1 0-9.2-9.2 9.2 9.2 0 0 0 9.2 9.2zM31 17.9v110.6h122V18zm117.3 105.9H35.8V22.6h112.5zm-85-34c-3 12.8-1.7 22.8 4.3 26.2a9.4 9.4 0 0 0 4.8 1.2c5.5 0 12.6-3.9 19.7-10.6 7 6.7 14.1 10.6 19.7 10.6a9.6 9.6 0 0 0 4.8-1.3c6-3.4 7.2-13.4 4.3-26 12.4-3.7 20.4-9.7 20.4-16.6s-8-13-20.5-16.7c3-12.7 1.7-22.8-4.3-26.2a9.6 9.6 0 0 0-4.8-1.2c-5.6 0-12.6 4-19.7 10.6-7.1-6.6-14.2-10.5-19.7-10.5a9.5 9.5 0 0 0-4.9 1.2c-6 3.4-7.2 13.4-4.2 26-12.4 3.8-20.5 9.8-20.5 16.7s8.1 13 20.6 16.7zm24.2 14.6c-8.2 7.3-13.3 8-15.1 8a4.7 4.7 0 0 1-2.4-.5c-3-1.6-4-7.4-3.1-15a56 56 0 0 1 1-5.8 99.5 99.5 0 0 0 12.5 2 97.2 97.2 0 0 0 8.3 10.2zm24.8-37-2.5-4.4-2.7-4.5c2.7.3 5.4.8 7.8 1.4-.7 2.5-1.6 5-2.6 7.6zm2.7 19a87.2 87.2 0 0 1-7.9 1.5l2.8-4.6q1.4-2.4 2.4-4.5c1 2.7 2 5.2 2.7 7.7zm-5.2-13.3a113 113 0 0 1-8.8 15.5l-9 .3s-6-.1-9-.3a112.2 112.2 0 0 1-8.8-15.4q1.9-4 4-7.9l4.9-7.6a110.8 110.8 0 0 1 17.9 0 129.6 129.6 0 0 1 8.8 15.5zM77 88c-2.7-.4-5.3-.9-7.8-1.5a91 91 0 0 1 2.6-7.5 134.8 134.8 0 0 0 5.2 9zm-2.8-25-2.5 4.5Q70.3 63.6 69 60a88 88 0 0 1 8-1.5L74.1 63zm17.9 36.9c-1.8-2-3.6-4-5.3-6.3l5.2.1h5.3a92.4 92.4 0 0 1-5.2 6.1zm22.2 12a4.8 4.8 0 0 1-2.5.5c-1.8 0-7-.8-15.2-8l-1.1-1.1a98.4 98.4 0 0 0 8.1-10 97 97 0 0 0 12.7-2c.4 1.9.8 3.8 1 5.6 1 7.5-.2 13.3-3 15zm5.2-50.7a58.8 58.8 0 0 1 5.6 2c7 3 11.5 6.8 11.5 10.1s-4.4 7.2-11.5 10.1l-5.5 2a98.5 98.5 0 0 0-4.5-12.2 98.1 98.1 0 0 0 4.4-12zM96.5 42c8.2-7.3 13.4-8.1 15.2-8.1a4.7 4.7 0 0 1 2.4.6c2.9 1.6 4 7.3 3 15a56.7 56.7 0 0 1-1 5.7 97.7 97.7 0 0 0-12.5-2 98.5 98.5 0 0 0-8.2-10.1c.3-.4.7-.8 1.2-1.1zM92 46.6c1.8 1.9 3.6 4 5.3 6.2l-5.2-.1h-5.4c1.7-2.1 3.5-4.2 5.3-6.1zm-22.2-12a4.8 4.8 0 0 1 2.5-.6 13.1 13.1 0 0 1 5.2 1.3 39 39 0 0 1 10 6.8l1.1 1a98.5 98.5 0 0 0-8.1 10 98.9 98.9 0 0 0-12.7 2.1c-.4-2-.8-3.8-1-5.6-1-7.6.2-13.4 3-15zM59 63a57.6 57.6 0 0 1 5.4-1.9A98 98 0 0 0 69 73.2a98.7 98.7 0 0 0-4.5 12 58.8 58.8 0 0 1-5.5-2c-7.1-3-11.5-6.8-11.5-10S51.9 66 59 63zm33 1a9.2 9.2 0 1 0 9.2 9.2A9.2 9.2 0 0 0 92 64zm0 0a9.2 9.2 0 1 0 9.2 9.2A9.2 9.2 0 0 0 92 64zm0 0a9.2 9.2 0 1 0 9.2 9.2A9.2 9.2 0 0 0 92 64zm49.4 9.3c0-6.9-8.2-13-20.6-16.7 3-12.7 1.7-22.8-4.3-26.2a9.6 9.6 0 0 0-4.8-1.2c-5.6 0-12.6 3.9-19.7 10.6-7.1-6.7-14.2-10.5-19.7-10.5a9.5 9.5 0 0 0-4.9 1.2c-6 3.4-7.1 13.4-4.2 26-12.4 3.7-20.5 9.8-20.5 16.7s8.1 13 20.6 16.7c-3 12.7-1.7 22.7 4.3 26.1a9.4 9.4 0 0 0 4.8 1.2c5.5 0 12.6-3.8 19.7-10.6 7.1 6.7 14.1 10.6 19.7 10.6a9.6 9.6 0 0 0 4.8-1.2c6-3.5 7.2-13.5 4.3-26 12.4-3.8 20.4-9.9 20.4-16.7zM96.5 42c8.2-7.4 13.3-8.2 15-8.2a4.7 4.7 0 0 1 2.5.6c2.9 1.7 4 7.4 3.1 15a56.7 56.7 0 0 1-1 5.8 97.7 97.7 0 0 0-12.6-2 98.5 98.5 0 0 0-8.2-10.1l1.2-1.1zM71.8 78.9A134.8 134.8 0 0 0 77 88c-2.7-.4-5.3-.9-7.8-1.5.7-2.5 1.5-5 2.6-7.6zM69 60a88 88 0 0 1 8-1.5c-1 1.5-2 3-2.8 4.6l-2.5 4.6-2.7-7.7zm5.2 13.3q1.9-3.9 4.1-7.8c1.5-2.6 3.1-5.2 4.8-7.6a110.8 110.8 0 0 1 17.9 0 129.6 129.6 0 0 1 8.8 15.4 113 113 0 0 1-8.8 15.4 112.7 112.7 0 0 1-17.9 0 112.2 112.2 0 0 1-8.8-15.4zm32.9-14.7c2.7.3 5.3.8 7.8 1.4-.7 2.5-1.6 5-2.6 7.6a135.3 135.3 0 0 0-5.2-9zm2.7 24.9 2.5-4.5c1 2.6 2 5.1 2.7 7.6a87.2 87.2 0 0 1-8 1.5l2.9-4.6zM92 46.6c1.8 1.9 3.6 4 5.3 6.2l-5.2-.1h-5.4c1.7-2.1 3.5-4.2 5.3-6.1zm-22.2-12a4.8 4.8 0 0 1 2.5-.6 13.1 13.1 0 0 1 5.2 1.3 39 39 0 0 1 10 6.8l1.1 1a98.5 98.5 0 0 0-8.1 10 98.9 98.9 0 0 0-12.7 2.1c-.4-2-.8-3.8-1-5.6-1-7.6.2-13.4 3-15zm-5.3 50.7a58.8 58.8 0 0 1-5.5-2c-7.1-3-11.5-6.9-11.5-10.2s4.4-7.1 11.5-10a57.6 57.6 0 0 1 5.4-2A98 98 0 0 0 69 73.2a98.7 98.7 0 0 0-4.5 12zm23 19c-8.2 7.4-13.3 8.2-15.1 8.2a4.7 4.7 0 0 1-2.4-.6c-2.9-1.6-4-7.4-3.1-15a56 56 0 0 1 1-5.8 99.5 99.5 0 0 0 12.6 2 97.2 97.2 0 0 0 8.2 10.2zm4.6-4.4c-1.8-2-3.6-4-5.3-6.3l5.2.1h5.4a95.5 95.5 0 0 1-5.3 6.2zm22.2 12a4.8 4.8 0 0 1-2.5.5c-1.8 0-7-.8-15.2-8l-1.1-1.1a98.4 98.4 0 0 0 8.1-10 97 97 0 0 0 12.7-2c.4 1.9.8 3.8 1 5.6 1 7.5-.2 13.3-3 15zM125 83.4c-1.7.7-3.5 1.4-5.5 2a98.5 98.5 0 0 0-4.5-12.2 98.1 98.1 0 0 0 4.5-12 58.8 58.8 0 0 1 5.5 2c7 3 11.5 6.9 11.5 10.1s-4.4 7.1-11.5 10zm-33.1-1a9.2 9.2 0 1 0-9.2-9.2 9.2 9.2 0 0 0 9.2 9.2zm-69.3 54.5V26.2L17.9 31v110.7h122l4.8-4.8z"
        />
      </svg>
    ),
  },
  {
    slug: 'vite',
    title: 'Vite',
    icon: (
      <svg width="80" fill="none" viewBox="0 0 410 404">
        <path
          fill="url(#a)"
          d="m399.6 59.5-184 329a10 10 0 0 1-17.4.1L10.6 59.6A10 10 0 0 1 21 44.8l184.2 32.9c1.2.2 2.4.2 3.6 0L389 44.8a10 10 0 0 1 10.5 14.7Z"
        />
        <path
          fill="url(#b)"
          d="M293 1.6 156.8 28.3a5 5 0 0 0-4 4.6l-8.4 141.4a5 5 0 0 0 6.1 5.2l38-8.8a5 5 0 0 1 6 6l-11.3 55a5 5 0 0 0 6.3 5.9l23.4-7.2a5 5 0 0 1 6.4 5.8L201.4 323c-1.1 5.4 6 8.3 9 3.7l2.1-3.1 111-221.4a5 5 0 0 0-5.5-7.2l-39 7.6a5 5 0 0 1-5.7-6.3l25.4-88.3c1-3.6-2-7-5.7-6.3Z"
        />
        <defs>
          <linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="b" x1="194.7" x2="236.1" y1="8.8" y2="293" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEA83" />
            <stop offset=".1" stopColor="#FFDD35" />
            <stop offset="1" stopColor="#FFA800" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    slug: 'remix',
    title: 'Remix',
    icon: (
      <svg width="120" fill="var(--B12)" preserveAspectRatio="xMidYMid" viewBox="0 0 512 128">
        <path d="M404.5 38.3v89.5h-32.3V38.3h32.3zm41.6-.1 14.7 21.2L476 38.2h33.2L477 80.7l35.1 47h-35.6l-17.8-24.3-17.7 24.3h-33.3L442.5 82l-32-44H446zM330 35.3c24.2 0 31.5 16.7 31.7 35.2v56.7h-32.3V76.5a63.2 63.2 0 0 0 0-.3l-.1-.7a53.3 53.3 0 0 0 0-.6l-.1-.6a45 45 0 0 0 0-.4v-.6l-.1-.6C328 65 325 61 317.4 61c-9.1 0-13 6.4-14 16.6l-.1.7-.2 4.6v44.3h-32.3V76a54.2 54.2 0 0 0 0-.4l-.1-.6v-.6l-.1-.7c-.9-8.3-4-12.6-12-12.6-10.4 0-14.2 8.7-14.2 21.9v44.3H212V37.7h32.2v13.5c4.8-9.8 14.4-15.9 27.7-15.9 15.8 0 24 7.3 27.7 17.7A32.1 32.1 0 0 1 330 35.3zm-170.4-2.8c29.3 0 45 20 45.4 44v9.8h-62.4c.8 11 8.8 16.2 18.6 16.2 8.6 0 14.2-2.9 17.2-9.7v-.3l26 2.4c-4.6 20.5-21 32-44.4 32-28.5 0-48.8-17.3-48.8-45.8a47 47 0 0 1 48.4-48.6zM60.4 0C92.9 0 109 15.5 109 40.2c0 18.5-11.4 30.6-26.8 32.6 13 2.6 20.6 10 22 24.8l.2 2.7.2 2.5.1 2.3.1 1.8.1 2.1.1 1.2v2l.1 1.7v1l.1 1.7v2.8l.1 2.7v4.4H72v-16.2l-.1-1.5v-.7l-.1-1.2-.1-1.3-.1-1.8-.2-1.4c-.9-13.5-6.3-17.2-16.2-17.7H53.8a54.4 54.4 0 0 0-.7 0H0V58.3h54.4c14.3 0 21.5-4.4 21.5-16 0-10.3-7.2-16.5-21.5-16.5H0V0h60.4zm-25 106.9c4.5 0 6.3 2.4 7 4.7v.4l.1.3v.3l.1.1V113.7l.1.2v12.6H0v-19.6h35.5zm123.8-51.1c-8.1 0-12.7 3.9-14.9 9.6l-.1.4-.2.5-.4 1.4-.1.5-.2 1-.1.4v.3l-.1.5v.2h31.2c-.4-8-5.6-14.8-15.1-14.8zM404.7 1.4V30H372V1.4h32.7z" />
      </svg>
    ),
  },
  {
    slug: 'next',
    title: 'Next',
    icon: (
      <svg width="120" preserveAspectRatio="xMidYMid" viewBox="0 0 512 309" fill="var(--B12)">
        <path d="M120.8 80.6h96.6v7.6h-87.7V146H212v7.7h-82.4V217h88.7v7.7h-97.6V80.6zm105.2 0h10.3l45.5 63.4 46.4-63.4L391.4 0 287.6 150.7l53.5 74h-10.7l-48.6-67.4-49 67.5h-10.4l54-74.2-50.4-70zm119 7.6v-7.6h110v7.6h-50.7v136.6h-8.9V88.2H345zM0 80.6h11l152.6 228.3-63-84.1L9.3 91.5l-.4 133.3H0V80.6zm454 134.2a3.1 3.1 0 0 1-3-3.2c0-1.8 1.3-3.2 3-3.2 2 0 3.2 1.4 3.2 3.2 0 1.8-1.3 3.2-3.1 3.2zm8.8-8.5h4.7c0 2.6 2 4.3 4.7 4.3 3 0 4.8-1.8 4.8-5.3v-22h4.9v22c0 6.3-3.7 9.9-9.6 9.9-5.7 0-9.5-3.5-9.5-8.9zm25.4-.2h4.7c.5 3 3.3 4.8 7.5 4.8 3.9 0 6.7-2 6.7-4.8 0-2.4-1.8-3.8-6-4.7l-4-1c-5.5-1.3-8-4-8-8.6 0-5.6 4.4-9.2 11.2-9.2 6.3 0 11 3.6 11.2 8.9h-4.7c-.4-2.9-3-4.7-6.6-4.7-3.8 0-6.3 1.9-6.3 4.7 0 2.2 1.6 3.5 5.7 4.4l3.4.8c6.4 1.5 9 4.1 9 8.8 0 6-4.6 9.7-12 9.7-6.9 0-11.5-3.6-11.8-9.1z" />
      </svg>
    ),
  },
  {
    slug: 'gatsby',
    title: 'Gatsby',
    icon: (
      <svg width="80" fill="none" viewBox="0 0 48 48">
        <path
          fill="#fff"
          d="M41.3 24h-11v3.1h7.5a14.2 14.2 0 0 1-9 10.3L10.5 19.3c2-5.5 7.3-9.4 13.4-9.4 4.7 0 9 2.3 11.6 6l2.4-2.1a17.3 17.3 0 0 0-30.8 6.4L27.9 41a17.7 17.7 0 0 0 13.4-17zm-34.6.2a17 17 0 0 0 17 17l-17-17z"
        />
        <path
          fill="#639"
          d="M24 2C11.9 2 2 11.9 2 24s9.9 22 22 22 22-9.9 22-22S36.1 2 24 2zM11.7 36.3a17 17 0 0 1-5-12l17.1 17c-4.4-.2-8.8-1.7-12-5zm16 4.5L7.3 20.2A17.3 17.3 0 0 1 38 13.8l-2.4 2c-2.6-3.6-6.9-6-11.6-6-6.1 0-11.3 4-13.4 9.5l18.1 18c4.6-1.5 8-5.4 9.1-10.2h-7.5V24h11c0 8.2-5.8 15-13.5 16.8z"
        />
      </svg>
    ),
  },
  {
    slug: 'blitz',
    title: 'Blitz',
    icon: (
      <svg width="80" height="64" fill="none" viewBox="0 0 60 60">
        <path
          fill="#6700EB"
          d="M39.1 30h10L26.5.3a.8.8 0 0 0-1.3.1l-5.6 11a.8.8 0 0 0 0 .8l9.8 13a12 12 0 0 0 9.6 4.8ZM20 30H10l22.4 29.7a.8.8 0 0 0 1.3-.1l5.7-11a.8.8 0 0 0 0-.8l-9.9-13A12 12 0 0 0 20 30Z"
        />
      </svg>
    ),
  },
  {
    slug: 'redwood-js',
    title: 'RedwoodJS',
    icon: (
      <svg width="80" fill="none" viewBox="0 0 60 60">
        <path
          fill="var(--B1)"
          fillRule="evenodd"
          d="M26.6.8C24.3 2 19.5 4.3 16.9 6c-2.6 1.7-2.3 3.4-3.4 4.5a89.4 89.4 0 0 1-6.8 5.7c-2.3 1.7-1.8 6.2-2.3 8L2 31.4c-.6 1.7 1.1 4 2.3 6.2s4 8.5 5.1 10.8c1.1 2.3 4.5 1.2 7.4 3.4a100.2 100.2 0 0 0 9.7 6.8c2.8 1.7 4 1.7 6.8 0 2.9-1.7 6.8-4.5 9.7-6.8 2.8-2.2 6.2-1.1 7.4-3.4l5.1-10.8c1.1-2.2 2.8-4.5 2.3-6.2L55.6 24c-.6-1.7 0-6.2-2.3-8a84.1 84.1 0 0 1-6.8-5.6c-2-1.8-1.1-2.8-3.4-4.5-2.3-1.7-7.4-4-9.7-5.1a7.3 7.3 0 0 0-6.8 0Z"
          clipRule="evenodd"
        />
        <path
          fill="#BF4722"
          fillRule="evenodd"
          d="m18.6 10.1 10.6 7.4c.2.2.5.3.8.3.3 0 .6-.1.8-.3l10.6-7.4a1.5 1.5 0 0 0-.2-2.6L30.6 2.1c-.4-.2-.9-.2-1.3 0L18.9 7.5c-.5.3-.8.7-.8 1.3 0 .5.2 1 .6 1.3Zm15 9.8c0 .5.2.9.6 1.2l8.5 6a1.4 1.4 0 0 0 1.8-.2l7.1-6.5a1.5 1.5 0 0 0 0-2.3l-6.9-5.6a1.4 1.4 0 0 0-1.7 0l-8.8 6.1c-.4.3-.6.8-.6 1.2Zm-21.1 8a1.5 1.5 0 0 1-.3 2.4l-5 3.2a1.4 1.4 0 0 1-1.7-.1 1.5 1.5 0 0 1-.4-1.7l1.8-6c.2-.5.6-.9 1-1 .5-.1 1 0 1.4.3l3.2 3Zm27.5.7-9.2-6.4a1.4 1.4 0 0 0-1.6 0L20 28.6a1.5 1.5 0 0 0-.1 2.3l9.2 8.4a1.4 1.4 0 0 0 1.9 0L40 31c.4-.3.5-.7.5-1.2a1.5 1.5 0 0 0-.6-1.1Zm-24.5-1.7-7-6.5c-.4-.3-.6-.7-.6-1.2 0-.4.2-.8.6-1.1l6.8-5.6c.5-.4 1.2-.5 1.7-.1l8.8 6.2a1.5 1.5 0 0 1 0 2.5l-8.5 6c-.5.3-1.3.3-1.8-.2Zm36.6 9.4L44.8 32a1.4 1.4 0 0 0-1.7.1l-8.8 8.1a1.5 1.5 0 0 0 .4 2.5L47 47.7l.5.2c.6 0 1.1-.4 1.3-1l3.8-8.7a1.5 1.5 0 0 0-.5-1.9Zm1-10.6 1.8 6c.2.5 0 1-.2 1.4a1.4 1.4 0 0 1-1.9.4l-5-3.2c-.5-.2-.7-.6-.8-1a1.5 1.5 0 0 1 .5-1.3l3.2-3a1.4 1.4 0 0 1 1.4-.3c.4.1.8.5 1 1ZM26.2 41.5c.1-.5 0-1-.4-1.4l-8.9-8a1.4 1.4 0 0 0-1.7-.2L8 36.3c-.7.4-1 1.2-.6 2l3.8 8.7a1.4 1.4 0 0 0 1.9.7l12.2-5c.5-.3.8-.7 1-1.2Zm4.4 2.5 9.8 4.1c.5.2.8.7.9 1.2a1.5 1.5 0 0 1-.6 1.4l-9.9 7a1.4 1.4 0 0 1-.8.3c-.3 0-.6-.1-.8-.3l-9.9-7a1.5 1.5 0 0 1 .3-2.6l9.9-4.1h1Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export const COMING_SUPPORT = [
  {
    slug: 'qwik-js',
    title: 'Qwik',
    icon: (
      <svg fill="none" width="120" viewBox="0 0 167 53">
        <path
          fill="currentColor"
          d="M82 46.6h-6.4V35.4a12.3 12.3 0 0 1-7.1 2.2c-3.5 0-6-1-7.7-3-1.6-2-2.4-5.4-2.4-10.4s1-8.6 2.9-10.7c2-2 5-3 9.4-3 4 0 7.8.5 11.3 1.6v34.5Zm-6.4-30.3c-1.5-.5-3.1-.7-4.9-.7-2.2 0-3.7.6-4.6 1.7-.9 1.2-1.3 3.4-1.3 6.7 0 3 .4 5.1 1.2 6.2.9 1.1 2.4 1.7 4.5 1.7 2.9 0 5-1.2 5-2.6v-13ZM91.1 11.1c2.3 6.3 4.2 12.6 5.9 19 2.2-6.5 4-12.8 5.5-19h5.7c2 6.3 3.8 12.6 5.2 19 2.6-6.9 4.5-13.2 6-19h6.3c-2.7 9-5.6 17.7-9 25.8h-7.4c-.9-4.6-2.3-10.1-4-16.7-1.2 5-2.9 10.7-5 16.7h-7.5c-2.5-9.4-5.3-18-8.2-25.8h6.5ZM132.8 7.6c-2.8 0-3.6-.7-3.6-3.6 0-2.6.8-3.2 3.6-3.2 2.9 0 3.7.6 3.7 3.2 0 2.9-.8 3.6-3.7 3.6Zm-3.2 3.5h6.5V37h-6.5V11.1ZM166.3 11.1a71 71 0 0 1-9.5 11.8c1.5 1 5.4 6 10.2 14h-7.4c-6-9.1-8.9-13-10.3-13.6v13.6H143V0h6.4v23.2c1.5-1 4.7-5 9.6-12h7.4Z"
        />
        <path
          fill="#18B6F6"
          d="m41 52.5-9-8.8L13 25l4.7-4.5L15 4.8l-13 16a7.1 7.1 0 0 0-1 8.6l8 13.4c1.3 2.1 3.6 3.3 6 3.3h4l22 6.4Z"
        />
        <path
          fill="#AC7EF4"
          d="M45.8 20.5 44 17.2l-.9-1.6-.4-.7-4.9-8.4a6.8 6.8 0 0 0-6-3.5l-4.3.2H14.7A6.8 6.8 0 0 0 9 6.6L1 22l14-17.3 18.1 20L30 28l2 15.7 1.5 1.5 7.3 7.2c.3.3.9 0 .6-.4L37 43l8-14.6.2-.3.2-.3c1.6-2.1 1.8-5 .5-7.3Z"
        />
        <path fill="#fff" d="M33.3 24.7 15 4.7l2.6 15.7-4.6 4.5 19 18.8-1.8-15.6 3.1-3.4Z" />
      </svg>
    ),
  },
  {
    slug: 'vue-js',
    title: 'Vue',
    icon: (
      <svg width="80" viewBox="0 0 128 128">
        <path fill="#42b883" d="M78.8 10 64 35.4 49.2 10H0l64 110 64-110H78.8z" />
        <path fill="#35495e" d="M78.8 10 64 35.4 49.2 10H25.6L64 76l38.4-66H78.8z" />
      </svg>
    ),
  },
  {
    slug: 'svelte-js',
    title: 'Svelte',
    icon: (
      <svg viewBox="0 0 24 24" width="80" fill="none">
        <path
          stroke="var(--W10)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15 8-5 3 .8-.5a4.1 4.1 0 0 1 5.6 1.4 4 4 0 0 1-1.3 5.4l-5 3.1a4 4 0 0 1-6-2.7 4 4 0 0 1 1.8-4l.2-.1M8 17l5-3-.8.5a4.1 4.1 0 0 1-5.6-1.4 4 4 0 0 1 1.3-5.4l5-3.1a4 4 0 0 1 6 2.7 4 4 0 0 1-1.8 4l-.2.1"
        />
      </svg>
    ),
  },
]

export const strokes = {
  stroke: 'var(--B9)',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeMiterlimit: '1.5',
  strokeWidth: '10.2',
} as const

export const filles = {
  fill: 'var(--B2)',
  fillRule: 'evenodd',
  clipRule: 'evenodd',
} as const

export const allConfig = { ...strokes, ...filles } as const
