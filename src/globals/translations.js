const langlist = [ 'English', 'Spanish', 'German', 'Progaza', 'Reska', 'Thassian', 'Kokos', 'Xorgara', 'Tolema' ]

const languages = { // dont uncapitalize those
  'English': {
    navbar: {
      copyright: '© Project Reproka 2025',
      headertext: 'Project Reproka',
      clock: 'Clock',
      conversions: 'Unit Conversions',
      featureplan: 'Feature Plan',
      btnalt: 'Icon'
    }
  },
  'Spanish': {
    navbar: {
      copyright: 'spanish',
      headertext: 'spanish',
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
      clock: 'german',
      conversions: 'german',
      featureplan: 'german',
      btnalt: 'german'
    }
  },
  'Progaza': {
    navbar: {
      copyright: 'progaza',
      headertext: 'progaza',
      clock: 'progaza',
      conversions: 'progaza',
      featureplan: 'progaza',
      btnalt: 'progaza'
    }
  },
  'Reska': {
    navbar: {
      copyright: 'reska',
      headertext: 'reska',
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
      conversions: 'kokos+friends',
      featureplan: 'kokos+friends',
      btnalt: 'kokos+friends'
    }
  },
  'Xorgara': {
    navbar: {
      copyright: 'xorgara',
      headertext: 'xorgara',
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
      clock: 'tolema',
      conversions: 'tolema',
      featureplan: 'tolema',
      btnalt: 'tolema'
    }
  }
}

function get(thing, lang) {
  var place = thing.split('.')

  return languages[langlist[lang]][place[0]][place[1]]
}

module.exports = { langlist: langlist, gettext: get }
