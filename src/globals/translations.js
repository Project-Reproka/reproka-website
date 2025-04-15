const languages = {
  'English': {
    general: {
      projname: 'Project Reproka',
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
      header: 'Project Reproka',
      construction: 'This website is currently under construction.',
      checkback: 'Check back later and I\'m sure there\'ll be something new here!'
    },
    clock: {
      title: 'Reproka Clock',
      return: 'Return to the homepage via the sidebar to the left.'
    }
  },
  'Spanish': {
    navbar: {
      copyright: 'spanish',
      headertext: 'spanish',
      home: 'spanish',
      clock: 'spanish',
      conversions: 'spanish',
      featureplan: 'spanish',
      btnalt: 'spanish'
    }
  },
  'German': {
    navbar: {
      copyright: 'german',
      headertext: 'german',
      home: 'german',
      clock: 'german',
      conversions: 'german',
      featureplan: 'german',
      btnalt: 'german'
    }
  },
  'Progaza (North Valley/Capital)': {
    navbar: {
      copyright: '[]  ',
      headertext: '',
      home: 'progaza',
      clock: '',
      conversions: '',
      featureplan: '',
      btnalt: ''
    }
  },
  'Reska': {
    navbar: {
      copyright: 'reska',
      headertext: 'reska',
      home: 'reska',
      clock: 'reska',
      conversions: 'reska',
      featureplan: 'reska',
      btnalt: 'reska'
    }
  },
  'Thassian': {
    navbar: {
      copyright: 'thassian+friends',
      headertext: 'thassian+friends',
      home: 'thassian+friends',
      clock: 'thassian+friends',
      conversions: 'thassian+friends',
      featureplan: 'thassian+friends',
      btnalt: 'thassian+friends'
    }
  },
  'Kokos': {
    navbar: {
      copyright: 'kokos+friends',
      headertext: 'kokos+friends',
      clock: 'kokos+friends',
      home: 'kokos+friends',
      conversions: 'kokos+friends',
      featureplan: 'kokos+friends',
      btnalt: 'kokos+friends'
    }
  },
  'Xorgara': {
    navbar: {
      copyright: 'xorgara',
      headertext: 'xorgara',
      home: 'xorgara',
      clock: 'xorgara',
      conversions: 'xorgara',
      featureplan: 'xorgara',
      btnalt: 'xorgara'
    }
  },
  'Tolema': {
    navbar: {
      copyright: 'tolema',
      headertext: 'tolema',
      home: 'tolema',
      clock: 'tolema',
      conversions: 'tolema',
      featureplan: 'tolema',
      btnalt: 'tolema'
    }
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
