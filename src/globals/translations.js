const languages = {
  'English': {
    general: {
      projectname: 'Project Reproka',
      planetname: 'Reproka'
    },
    navbar: {
      copyright: '© Project Reproka 2025',
      headertext: 'Project Reproka',
      home: 'Home',
      clock: 'Clock',
      conversions: 'Unit Conversions',
      featureplan: 'Feature Plan',
      btnalt: 'Icon'
    },
    notfound: {
      pagenotfound: '404 - Page not found',
      lost: 'Lost? Return to our homepage via the sidebar to the left.',
      pagereq: 'The page you requested could not be found.'
    },
    home: {
      construction: 'This website is currently under construction.',
      checkback: 'Check back later and I\'m sure there\'ll be something new here!'
    },
    clock: {
      title: 'Reproka Clock'
    },
    plan: {
      featuresheader: 'Our planned features include:',
      andmore: 'And more!',
      interactivemap: 'Interactive region map',
      climatesim: 'Climate simulator'
    }
  },
  'Spanish': {
    // todo
  },
  'German': {
    // todo
  },
  'Progaza (North Valley/Capital)': {
    general: {
      projectname: '',
      planetname: ''
    },
    navbar: {
      copyright: '[]  ',
      headertext: '',
      home: '',
      clock: '',
      conversions: '',
      featureplan: '',
      btnalt: ''
    },
    notfound: {
      pagenotfound: '  ',
      lost: '     ',
      pagereq: '        '
    },
    home: {
      construction: '  ',
      checkback: '       '
    },
    clock: {
      title: ''
    }
  },
  'Reska': {
    // todo
  },
  'Thassian': {
    // todo
  },
  'Kokos': {
    // todo
  },
  'Xorgara': {
    // todo
  },
  'Tolema': {
    // todo
  }
}

const langlist = Object.keys(languages)

function get(thing, lang) {
  var place = thing.split('.')

  var text1 = languages[langlist[lang]]
  if (!text1) return languages['English'][place[0]][place[1]]

  var text2 = text1[place[0]]
  if (!text2) return languages['English'][place[0]][place[1]]

  var text3 = text2[place[1]]
  if (!text3) return languages['English'][place[0]][place[1]]

  return text3
}

function number(num, lang) {
  if (lang == 3) { // progaza, octal
    return num.toString(8)
  } else {
    return num.toString()
  }
}

module.exports = { langlist: langlist, gettext: get, numconv: number }
