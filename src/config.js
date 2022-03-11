module.exports = {
  siteTitle: 'Abhishek Bansal | Technical Recruiter | Content Writer | Web3 & Blockchain community manager',
  siteDescription:
    'Abhishek Bansal is a Technical Recruiter, Content Writer, Web3 & Blockchain community manager based in Gwalior, India. He is passionate about building products that solve real world problems.',
  siteKeywords:
    'Abhishek Bansal, Abhishek, Bansal, Abhishekbnsal, Abhishekbnsal, Abhishek-bansal, Gwalior, software engineer, front-end engineer, web developer, javascript, India, Educator',
  siteUrl: 'https://Abhishekbansal.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-172670715-00',
  googleVerification: '',
  name: 'Abhishek Bansal',
  location: 'Gwalior, India',
  email: 'abhibnsl96@gmail.com',
  github: 'https://github.com/abhibnsl96',
  linkedin: 'https://www.linkedin.com/in/Abhishek-bansal',
  twitterHandle: '@Abhishekbnsal',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Abhishekbnsal',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/Abhishek-bansal',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Abhishekbnsal',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
