// configuration to show navigation - configurable
export const navItems = [
  {
    id: 'nav-item-code',
    title: 'Github',
    textClass: 'text-gray-500',
    roundedClass: 'rounded',
    hoverClass: 'hover:bg-green-500',
    hoverTextClass: 'hover:text-white',
    link: 'https://github.com/im-oswald/nasa-media-library',
    open: '_blank',
  },
  {
    id: 'nav-item-api',
    title: 'API Doc',
    textClass: 'text-white',
    roundedClass: 'rounded',
    normalClass: 'bg-green-500',
    hoverClass: 'hover:bg-green-400',
    link: 'https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf',
    open: '_self',
  },
]

// tailwind classes to make navigation tab
export const defaultNavClasses = 'py-2 px-2 font-medium transition duration-300'
