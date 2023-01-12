const formatSlug = (name) => {
  return name.replace(/[^\w\s]/gi, '').toLowerCase().split(' ').join('-')
}
const projects =  [
  {
    id: '01',
    name: 'Affiliated Media',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    images: [
      {
        thumbnail: 'https://verdantpath.io/projects/work_aff-media_desktop.jpg',
      }
    ],
    imageThumbnail: 'https://verdantpath.io/projects/work_aff-media_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_aff-media_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_aff-media_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_aff-media_mobile.jpg',
    description: 'WordPress site for a media and advertising agency in Portland.',
    url: 'http://affmedia.com/',
  },
  {
    id: '02',
    name: 'Emotive Brand',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_emotive-brand_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_emotive-brand_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_emotive-brand_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_emotive-brand_mobile.jpg',
    description: 'WordPress site for a brand & design firm in San Francisco.',
    url: 'http://emotivebrand.com/'
  },
  {
    id: '03',
    name: 'Vista Capital Partners',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_vistacp_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_vistacp_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_vistacp_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_vista_mobile.jpg',
    description: 'WordPress site for a financial planning firm in Portland.',
    url: 'https://vistacp.com/'
  },
  {
    id: '04',
    name: 'Juniper Partners',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'HTML Landing Page',
    imageThumbnail: 'https://verdantpath.io/projects/work_juniper_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_juniper_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_juniper_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_juniper_mobile.jpg',
    description: 'HTML landing page for an enterprise networking products corporation in Silicon Valley.',
    url: 'https://verdantpath.io/juniper/lp_2016-11-02_network-security/index.html'
  },
  {
    id: '05',
    name: 'Rhodes Architecture',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_rhodes_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_rhodes_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_rhodes_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_rhodes_mobile.jpg',
    description: 'WordPress site for an architecture firm in Seattle.',
    url: 'http://rhodesarchitecture.com/'
  },
  {
    id: '06',
    name: 'Evergreen Consulting',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_evergreen_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_evergreen_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_evergreen_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_evergreen_mobile.jpg',
    description: 'WordPress site for an energy efficiency consulting company in Portland.',
    url: 'http://evergreen-efficiency.com/'
  },{
    id: '07',
    name: 'Washington Tribes',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'Drupal',
    imageThumbnail: 'https://verdantpath.io/projects/work_wa-tribes_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_wa-tribes_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_wa-tribes_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_wa-tribes_mobile.jpg',
    description: 'Drupal site for a Native American gaming organization in Washington.',
    url: 'https://www.washingtontribes.org/'
  },
  {
    id: '08',
    name: 'Seattle City Club',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'Drupal',
    imageThumbnail: 'https://verdantpath.io/projects/work_seattle-city-club_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_seattle-city-club_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_seattle-city-club_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_seattle-city-club_mobile.jpg',
    description: 'Drupal site for a community forum that encourages public engagement in civics and government, in Seattle.',
    url: 'https://www.seattlecityclub.org/'
  },
  {
    id: '09',
    name: 'Culinary Traveler',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_culinary-traveler_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_culinary-traveler_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_culinary-traveler_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_culinary-traveler_mobile.jpg',
    description: 'WordPress site for a food, wine and destination blog.',
    url: 'http://culinarytraveler.com/'
  },
  {
    id: '10',
    name: 'Sravasti Abbey',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_sravasti-abbey_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_sravasti-abbey_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_sravasti-abbey_tabletjpg',
    imageMobile: 'https://verdantpath.io/projects/work_sravasti-abbey_mobile.jpg',
    description: 'WordPress site for a Buddhist monastery in Washington.',
    url: 'https://sravastiabbey.org/'
  },
  {
    id: '11',
    name: 'PacTech Law',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_pactech_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_pactech_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_pactech_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_pactech_mobile.jpg',
    description: 'WordPress site for a law partnership specializing in the technology industry.',
    url: 'http://pactechlaw.com/'
  },
  {
    id: '12',
    name: 'Port Ludlow Resort',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_port-ludlow_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_port-ludlow_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_port-ludlow_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_port-ludlow_mobile.jpg',
    description: 'WordPress site for a resort in Washington.',
    url: 'http://portludlowresort.com/'
  },
  {
    id: '13',
    name: 'Seattle Genomics',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_seattle-genomics_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_seattle-genomics_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_seattle-genomics_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_seattle-genomics_mobile.jpg',
    description: 'WordPress site for a gene sequencing lab affiliated with the University of Washington.',
    url: 'https://www.seattlegenomics.com/'
  },
  {
    id: '14',
    name: 'Casa de la Sirena',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_casa_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_casa_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_casa_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_casa_mobile.jpg',
    description: 'WordPress site for a destination resort in Mexico.',
    url: 'http://casadelasirena.net/'
  },
  {
    id: '15',
    name: 'Open Adoption and Family Services',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_open-adopt_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_open-adopt_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_open-adopt_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_open-adopt_mobile.jpg',
    description: 'WordPress site for a national adoption agency in Portland.',
    url: 'http://www.openadopt.org/'
  },
  {
    id: '16',
    name: 'The Classen Team',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_classen_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_classen_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_classen_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_classen_mobile.jpg',
    description: 'WordPress site for a real estate company in Washington.',
    url: 'http://theclassenteam.com/'
  },
  {
    id: '17',
    name: 'Lowenstein & Weatherwax',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_lowenstein-weatherwax_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_lowenstein-weatherwax_desktop.jpg',
    imageTablet: '',
    imageMobile: '',
    description: 'Drupal site for a patent and IP law firm in California.',
    url: 'http://lowensteinweatherwax.com/'
  },
  {
    id: '18',
    name: 'The Commencement',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_commencement_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_commencement_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_commencement_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_commencement_mobile.jpg',
    description: 'Drupal site for a condominium development in Washington.',
    url: 'http://www.thecommencement.com/'
  },
  {
    id: '19',
    name: 'Humani Pilates',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_humani_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_humani_desktop.jpg',
    imageTablet: '',
    imageMobile: '',
    description: 'WordPress site for a Pilates studio in California.',
    url: 'http://humanistudios.com/'
  },
  {
    id: '20',
    name: 'Landed Gentry',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_landedgentry_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_landedgentry_desktop.jpg',
    imageTablet: '',
    imageMobile: '',
    description: 'Drupal site for a real estate company in Washington.',
    url: 'http://humanistudios.com/'
  },
  {
    id: '21',
    name: 'Project Serve',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_projectserve_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_projectserve_desktop.jpg',
    imageTablet: '',
    imageMobile: '',
    description: 'WordPress site for a sleep study out of Stanford University.',
    url: 'http://projectservesleep.com/'
  },
  {
    id: '22',
    name: 'Mason Oregon',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_mason-oregon_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_mason-oregon_desktop.jpg',
    imageTablet: 'https://verdantpath.io/projects/work_mason-oregon_tablet.jpg',
    imageMobile: 'https://verdantpath.io/projects/work_mason-oregon_mobile.jpg',
    description: 'WordPress site for a masonry service company in Portland.',
    url: 'http://masonoregon.com/'
  },
  {
    id: '23',
    name: 'Robin Chell Design',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_robin-chell-design_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_robin-chell-design_desktop.jpg',
    imageTablet: '',
    imageMobile: '',
    description: 'HTML site for an interior design firm in Seattle.',
    url: 'http://robinchelldesign.com/'
  },
  {
    id: '24',
    name: 'Axiom Design Build',
    get slug() {
      return formatSlug(this.name)
    },
    technology: 'WordPress',
    imageThumbnail: 'https://verdantpath.io/projects/work_axiom_desktop.jpg',
    imageDesktop: 'https://verdantpath.io/projects/work_axiom_desktop.jpg',
    imageTablet: '',
    imageMobile: '',
    description: 'WordPress site for an architecture firm in Seattle.',
    url: 'http://axiomdesignbuild.com/'
  }
]

export default projects