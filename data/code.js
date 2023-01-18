const formatSlug = (name) => {
  return name.replace(/[^\w\s]/gi, '').toLowerCase().split(' ').join('-')
}
const codes =  [
  {
    id: '01',
    name: 'Start Page',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'Vue.js',
    imageThumbnail: 'https://verdantpath.io/projects/code_startpage_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/code_startpage_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/code_startpage_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/code_startpage_mobile.jpg',
    description: 'Vue project based on a popular browser extension',
    url: 'https://startpage.verdantpath.io/',
  },
  {
    id: '02',
    name: 'Expense Tracker',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'Vue.js',
    imageThumbnail: 'https://verdantpath.io/projects/code_expense-tracker_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/code_expense-tracker_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/code_expense-tracker_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/code_expense-tracker_mobile.jpg',
    description: 'Vue project to track your budget, expenses and savings',
    url: 'https://expense-tracker.verdantpath.io'
  },
  {
    id: '03',
    name: 'Vuello',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'Nuxt.js',
    imageThumbnail: 'https://verdantpath.io/projects/code_vuello_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/code_vuello_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/code_vuello_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/code_vuello_mobile.jpg',
    description: 'Vue project based on a popular project management app',
    url: 'https://vuello.verdantpath.io'
  },
  {
    id: '04',
    name: 'NuxtBnb',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'Nuxt.js',
    imageThumbnail: 'https://verdantpath.io/projects/code_expense-tracker_desktop.jpg',
  },
  {
    id: '05',
    name: 'Verdantpath Portfolio',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'Nuxt.js',
    imageThumbnail: '',
    imageDesktop: '',
    imageTable: '',
    imageMobile: '',
    description: 'My portfolio site built with Nuxt',
    url: 'https://verdantpath.io'
  }
]

export default codes