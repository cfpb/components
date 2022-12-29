const vars = {
  // Beige family
  'beige': '#bea96f',
  'beige-30': '#f0e8d8',
  'beige-60': '#d8c8a0',

  // Green family
  'green-dark': '#1e9642',
  'green-mid-dark': '#1fa040',
  'green': '#20aa3f', // Primary brand green color, aka "CFPB Green"
  'green-90': '#48b753',
  'green-80': '#66c368',
  'green-70': '#93cf7c',
  'green-60': '#addc91',
  'green-50': '#bae0a2',
  'green-40': '#c7e5b3',
  'green-30': '#d4eac6',
  'green-20': '#e2efd8',
  'green-10': '#f0f8eb',

  // Teal family
  'teal-dark': '#005e5d',
  'teal-mid-dark': '#126b69',
  'teal': '#257675',
  'teal-90': '#3e8685',
  'teal-80': '#579695',
  'teal-70': '#70a6a5',
  'teal-60': '#89b6b5',
  'teal-50': '#9ec4c3',
  'teal-40': '#b4d2d1',
  'teal-30': '#c4dddc',
  'teal-20': '#d4e7e6',
  'teal-10': '#f0f7f6',

  // Pacific family
  'pacific-dark': '#0050b4',
  'pacific-mid-dark': '#0061c1',
  'pacific': '#0072ce',
  'pacific-90': '#2284d5',
  'pacific-80': '#4497dc',
  'pacific-70': '#61a7e2',
  'pacific-60': '#7eb7e8',
  'pacific-50': '#96c4ed',
  'pacific-40': '#afd2f2',
  'pacific-30': '#c3ddf6',
  'pacific-20': '#d6e8fa',
  'pacific-10': '#eff8fd',

  // Navy family
  'navy-dark': '#002d72',
  'navy-mid-dark': '#123c7c',
  'navy': '#254b87',
  'navy-90': '#3e5f95',
  'navy-80': '#5674a3',
  'navy-70': '#6f88b2',
  'navy-60': '#889cc0',
  'navy-50': '#9daecc',
  'navy-40': '#b3c0d9',
  'navy-30': '#c3cde2',
  'navy-20': '#d3daeb',
  'navy-10': '#f4f6fa',

  // Purple family
  'purple-dark': '#a01b68',
  'purple-mid-dark': '#aa2071',
  'purple': '#b4267a',
  'purple-90': '#be438b',
  'purple-80': '#c55998',
  'purple-70': '#cd70a5',
  'purple-60': '#d486b2',
  'purple-50': '#dc9cbf',
  'purple-40': '#e3b2cc',
  'purple-30': '#ebc9d9',
  'purple-20': '#f0d8e2',
  'purple-10': '#fdf3f8',

  // Red family
  'red-dark': '#b63014',
  'red-mid-dark': '#c3381c',
  'red': '#d14124',
  'red-90': '#d75a40',
  'red-80': '#dd735d',
  'red-70': '#e28875',
  'red-60': '#e79e8e',
  'red-50': '#ebb0a3',
  'red-40': '#f0c3b8',
  'red-30': '#f3d1c8',
  'red-20': '#f7e0d9',
  'red-10': '#fbefec',

  // Gold family
  'gold-dark': '#dc731c',
  'gold-mid-dark': '#ed881b',
  'gold': '#ff9e1b',
  'gold-90': '#ffab39',
  'gold-80': '#ffb858',
  'gold-70': '#ffc372',
  'gold-60': '#ffce8d',
  'gold-50': '#ffd8a3',
  'gold-40': '#ffe1b9',
  'gold-30': '#ffe8cb',
  'gold-20': '#fff0dd',
  'gold-10': '#fff6ec',

  // Neutral family
  'neutral-dark': '#745745',
  'neutral-mid-dark': '#7d604b',
  'neutral': '#8a6c57',
  'neutral-90': '#957865',
  'neutral-80': '#a18573',
  'neutral-70': '#ad9484',
  'neutral-60': '#baa496',
  'neutral-50': '#c6b4a9',
  'neutral-40': '#d3c5bc',
  'neutral-30': '#ddd1c9',
  'neutral-20': '#e7ddd7',
  'neutral-10': '#f8f5f2',

  // Gray family
  'gray-darker': '#293037',
  'gray-dark': '#43484e',
  'gray-mid-dark': '#4f5257',
  'gray': '#5a5d61',
  'gray-90': '#676a6f',
  'gray-80': '#75787b',
  'gray-70': '#838588',
  'gray-60': '#919395',
  'gray-50': '#a2a3a4',
  'gray-40': '#b4b5b6',
  'gray-30': '#c3c4c4',
  'gray-20': '#d2d3d5',
  'gray-15': '#dcdddf',
  'gray-10': '#e7e8e9',
  'gray-5': '#f7f8f9',

  // with special guests
  'black': '#101820', // Also known as "CFPB Black"
  'white': '#ffffff',
  'text': '#101820',

  // a
  'link-text': '#0072ce',
  'link-underline': '#0072ce',
  'link-text-visited': '#257675',
  'link-underline-visited': '#257675',
  'link-text-hover': '#0050b4',
  'link-underline-hover': '#0050b4',
  'link-text-active': '#254b87',
  'link-underline-active': '#254b87',

  // table
  'table-head-text': '#101820',
  'table-head-bg': '#f7f8f9',
  'table-cell-bg': '#ffffff',
  'table-cell-bg_alt': '#f7f8f9',
  'table-scrolling-border': '#b4b5b6',
  'table-border': '#5a5d61',

  // code
  'code-text': '#101820',
  'code-bg': '#f7f8f9',

  // Sizing variables
  'base-font-size-px': '16px',
  'base-line-height-px': '22px',
  'base-line-height': '1.375',
  'size-xl': '48px', // Super-size
  'size-i': '34px', // h1-size
  'size-ii': '26px', // h2-size
  'size-iii': '22px', // h3-size
  'size-iv': '18px', // h4-size
  'size-v': '14px', // h5-site
  'size-vi': '12px', // h6-size
  'size-code': '13px', // Custom size only for Mono code blocks


  // Web fonts
  'webfont-regular': 'AvenirNextLTW01-Regular',
  'webfont-italic': 'AvenirNextLTW01-Regular',
  'webfont-medium': 'AvenirNextLTW01-Medium',
  'webfont-demi': 'AvenirNextLTW01-Medium', 

  // Breakpoints
  'bp-xs-max': '600px',
  'bp-sm-min': '601px',
  'bp-sm-max': '900px',
  'bp-med-min': '901px',
  'bp-med-max': '1020px',
  'bp-lg-min': '1021px',
  'bp-lg-max': '1230px',
  'bp-xl-min': '1231px',
}

module.exports = vars
