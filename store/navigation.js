export const state = () => ({
  'mainMenu': [
    {
      url: '/',
      label: 'Home'
    },
    {
      url: '/about',
      label: 'About'
    },
    {
      url: '/activities',
      label: 'Activities',
      submenu: [
        { 
          label: "Global Index on Responsible AI",
          url: '/activities/responsible-ai-index'
        },
        { 
          label: "Global Data Barometer",
          url: '/activities/global-data-barometer'
        },
        { 
          label: "Open Data",
          url: '/activities/state-of-open-data'
        },
        { 
          label: "Data and Gender Equality",
          url: '/activities/data-and-gender-equality'
        },
        { 
          label: "Data for Democratic Development - D4D²",
          url: '/activities/data-for-democratic-development'
        },
      ]
    },
    {
      url: '/resources-soon',
      label: 'Resources',
    },
    {
      url: '/events',
      label: 'Events',
      title: 'Coming Soon',
      disabled: true
    },
    {
      url: '/news',
      label: 'News',
      title: 'Coming Soon',
      disabled: true
    },
    {
      url: '/contact',
      label: 'Contact'
    },
  ]
})
