export type ServiceItem = {
  id?: number;
  subTitle?: string;
  title?: string;
  description?: string;
  delayAnimation?: string;
  serviceList?: ServiceItem[];
  name?: string;
  number?: string;
  icon?: string;
  titlePart1?: string;
  titlePart2?: string;
  webLink?: string;
}


export const approachContent: ServiceItem[] = [
  {
    id: 1,
    subTitle: "ONE",
    title: "Research",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.`,
    delayAnimation: "0",
  },

  {
    id: 2,
    subTitle: "TWO",
    title: "Concept",
    description: `Donec venenatis consequat libero, quis auctor nunc volutpat quis. Proin at ipsum id magna dapibus dictum eget lobortis magna. Fusce et ligula non tellus vulputate condimentum.`,
    delayAnimation: "100",
  },
  {
    id: 3,
    subTitle: "THREE",
    title: "Strategy",
    description: `Consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.`,
    delayAnimation: "200",
  },
  {
    id: 4,
    subTitle: "FOUR",
    title: "Development",
    description: `Vivamus vel sollicitudin sem, id sagittis justo. Nam non magna eleifend, tempus nisl quis, commod diam. Morbi gravida ut nulla non porttitor. Suspendis eget arcu eu ex dignissim faucibus. Nullam et luctus tortor.`,
    delayAnimation: "300",
  },
  {
    id: 5,
    subTitle: "FIVE",
    title: "Test",
    description: `Suspendisse vel magna vitae nunc consequat eleifend. Aenean iaculis Nam non magna eleifend est eget turpis lacinia egest dictum ipsum sollicitudin.Suspendis eget arcu eu ex dignissim faucibus.`,
    delayAnimation: "400",
  },
  {
    id: 6,
    subTitle: "SIX",
    title: "Hand Over",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit cras tempus. Libero ligula, vitae accumsan tortor varius nec. Ut luctus maximus dolor. Nunc sed diam sit amet urna fermentum accumsan vitae vitae diam.`,
    delayAnimation: "500",
  },
];

export const approachContenttwo: ServiceItem[] = [
  {
    id: 7,
    title: "Partnership",
    description: `We believe in design partnership and co-creation. We like to discuss,
        plan and be a part of your team.`,
    delayAnimation: "0",
  },
  {
    id: 8,
    title: "Clossness",
    description: `We believe in design partnership and co-creation. We like to discuss,
        plan and be a part of your team.`,
    delayAnimation: "100",
  },
  {
    id: 9,
    title: "Future",
    description: `We believe in design partnership and co-creation. We like to discuss,
        plan and be a part of your team.`,
    delayAnimation: "200",
  },
  {
    id: 10,
    title: "Commitment",
    description: `We believe in design partnership and co-creation. We like to discuss,
        plan and be a part of your team.`,
    delayAnimation: "300",
  },
];

export const serviceContent: ServiceItem[] = [
  {
    id: 11,
    icon: "lnil lnil-cup",
    titlePart1: "CUSTOM SOFTWARE",
    titlePart2: "DEVELOPMENT",
    description: `Streamline your business operations with our custom software solutions. We create tailor-made applications that address your unique challenges, boost efficiency, and support your business growth.`,
  },
  {
    id: 12,
    icon: "lnil lnil-website-rank",
    titlePart1: "MOBILE APPLICATION",
    titlePart2: "DEVELOPMENT",
    description: ` We build and activate brands throung cultural insight &amp;
          strategic vision.`,
  },
  {
    id: 13,
    icon: "lnil lnil-3d",
    titlePart1: "CUSTOM AI",
    titlePart2: "SOLUTIONS",
    description: ` We build and activate brands throung cultural insight &amp;
          strategic vision.`,
  },
];
export const serviceContenttwo: ServiceItem[] = [
  {

    delayAnimation: "0",
    title: "Branding",
    serviceList: [

      { id: 15, name: "Brand Strategy", },

      { id: 16, name: "Consulting", },

      { id: 17, name: "Illustration", },

      { id: 18, name: "Graphic Design", },

      { id: 19, name: "Photography", },
    ],
  },
  {

    delayAnimation: "100",
    title: "INTERACTION",
    serviceList: [
      { id: 20, name: "Mobile Design", },

      { id: 21, name: "UI/UX Web Design", },

      { id: 22, name: "Motion", },

      { id: 23, name: "Animation", },

      { id: 24, name: "System Management", },

      { id: 25, name: "Hosting & Domain", },

      { id: 26, name: "CRM", },


    ],
  },
  {

    delayAnimation: "200",
    title: "SOCIAL",
    serviceList: [

      { id: 27, name: "Marketing Consult", },

      { id: 28, name: "Google Ads", },

      { id: 29, name: "Facebook Ads", },

      { id: 30, name: "Social Media", },
    ],
  },
];

export const serviceContentfour: ServiceItem[] = [
  {
    delayAnimation: "200",
    serviceList: [
      { id: 31, name: "Branding" },
      { id: 32, name: "UI/UX", },
      { id: 33, name: "Photography", },
      { id: 34, name: "Animation", },]
  },
  {
    delayAnimation: "300",
    serviceList: [,
      { id: 35, name: "Illustration", },
      { id: 36, name: " SEO/Marketing", },]
  },
];

export const serviceListfive: ServiceItem[] = [
  { id: 1, name: "Full Stack Web Development", number: "1" },
  { id: 2, name: "Mobile App Development", number: "2" },
  {id: 3, name: "Software System Maintenance", number: "3"},
  {id: 4, name: "Custom AI Solutions", number: "4"},
  {id: 5, name: "IT Consultancy", number: "5"},
];


export const listContent: ServiceItem[] = [
  { id: 42, name: "Branding & Strategy" }
  ,
  { id: 43, name: "3D Packaging" }
  ,
  { id: 44, name: "Illustration" }
  ,
  { id: 45, name: "UI/UX Website Design" }
  ,
  { id: 46, name: "UI/UX Mobile Design" }
  ,
  { id: 47, name: "Motion TVC" }
  ,


];

export const brandContent: ServiceItem[] = [
  {
    delayAnimation: "200",
    serviceList: [
      { id: 48, name: "Apple", webLink: "#" },
      { id: 49, name: "Spotify", webLink: "#" },
      { id: 50, name: "IBM", webLink: "#" },
      { id: 51, name: "Google", webLink: "#" },
      { id: 52, name: "Dropbox", webLink: "#" },
    ],
  },
  {
    delayAnimation: "300",
    serviceList: [
      { id: 53, name: "Envato", webLink: "#" },
      { id: 54, name: "Woocommerce", webLink: "#" },
      { id: 55, name: "Discord", webLink: "#" },
    ],
  },
];


export const listContenttwo: ServiceItem[] = [
  { id: 11, name: "Branding" },
  { id: 12, name: "UI/UX Design" },
  { id: 13, name: "WordPress Development" },
  { id: 14, name: "Digital Marketing" },
  { id: 15, name: "Social Media Management" },
];


export const listContentthree: ServiceItem[] = [
  { id: 61, name: "Branding Design" }
  ,
  { id: 62, name: "Advertising" }
  ,
  { id: 63, name: "Package Design" }
  ,
  { id: 64, name: "Animation" }
  ,
  { id: 65, name: "UI/UX Interaction" }
  ,
  { id: 66, name: "Mobile Design" }
  ,
  { id: 67, name: "Photography" }
  ,
  { id: 68, name: "Illustration" }
  ,
];


export const allserviceContent: ServiceItem[] = [
  ...approachContent,
  ...approachContenttwo,
  ...serviceContent,
  ...serviceContenttwo,
  ...serviceContentfour,
  ...serviceListfive,
  ...listContent,
  ...serviceListfive,
  ...listContenttwo,
  ...listContentthree,
  ...brandContent

]