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
      header: 'Feature Plan',
      andmore: 'And more!',
      interactivemap: 'Interactive region map',
      climatesim: 'Climate simulator'
    },
    conversions: {
      header: 'Unit Conversions',
      nounitgroup: 'Psst- try selecting a unit group!',
      sourcenum: 'Source unit value',
      group: 'Unit group',
      lengthlbl: 'Length',
      masslbl: 'Mass',
      volumelbl: 'Volume',
      temperaturelbl: 'Temperature',
      sourceunit: 'Source unit',
      targetunit: 'Target unit',
      convertbtn: 'Convert',
      result: 'Result:', // do not leave a space after this please
      length: {
        meter: 'meter',
        kmeter: 'kilometer',
        mmeter: 'millimeter',
        seijagemil: 'seijagemil',
        kaibroza: 'kaibroza',
        omstaz: 'omstaz',
        lidhchazerun: 'liðčazerun',
        chazerun: 'čazerun'
      },
      mass: {
        gram: 'gram',
        kgram: 'kilogram',
        mton: 'metric ton',
        agozuba: 'agozuba',
        ezuba: 'ezuba',
        madhezuba: 'maðezuba'
      },
      volume: {
        liter: 'liter',
        mliter: 'milliliter',
        paijas: 'paijas',
        thusbaijas: 'þusbaijas'
      },
      temperature: {
        celcius: 'celcius',
        thozhe: 'þože'
      }
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
      conversions: '',
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
    },
    plan: {
      featuresheader: '   ',
      header: '',
      andmore: '  ',
      interactivemap: ' ',
      climatesim: ''
    },
    conversions: {
      header: '',
      nounitgroup: '  ',
      sourcenum: '',
      group: '',
      lengthlbl: '',
      masslbl: '',
      volumelbl: '',
      temperaturelbl: '',
      sourceunit: '',
      targetunit: '',
      convertbtn: '',
      result: ' ', // do not leave a space after this please
      length: {
        meter: '',
        kmeter: '',
        mmeter: '',
        seijagemil: '',
        kaibroza: '',
        omstaz: '',
        lidhchazerun: '',
        chazerun: ''
      },
      mass: {
        gram: '',
        kgram: '',
        mton: '',
        agozuba: '',
        ezuba: '',
        madhezuba: ''
      },
      volume: {
        liter: '',
        mliter: '',
        paijas: '',
        thusbaijas: ''
      },
      temperature: {
        celcius: '',
        thozhe: ''
      }
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

  if (place.length == 2) {
    var text1 = languages[langlist[lang]]
    if (!text1) return languages['English'][place[0]][place[1]]

    var text2 = text1[place[0]]
    if (!text2) return languages['English'][place[0]][place[1]]

    var text3 = text2[place[1]]
    if (!text3) return languages['English'][place[0]][place[1]]

    return text3
  } else if (place.length == 3) {
    var text1 = languages[langlist[lang]]
    if (!text1) return languages['English'][place[0]][place[1]][place[2]]

    var text2 = text1[place[0]]
    if (!text2) return languages['English'][place[0]][place[1]][place[2]]

    var text3 = text2[place[1]]
    if (!text3) return languages['English'][place[0]][place[1]][place[2]]
    
    var text4 = text3[place[2]]
    if (!text4) return languages['English'][place[0]][place[1]][place[2]]

    return text4
  } else {
    return 'issue !!'
  }
}

function number(num, lang) {
  if (lang == 3) { // progaza, octal
    return num.toString(8)
  } else {
    return num.toString()
  }
}

module.exports = { langlist: langlist, gettext: get, numconv: number }
