const languages = {
  'English': {
    general: {
      projectname: 'Project Reproka',
      planetname: 'Reproka',
      numberbase: 10
    },
    navbar: {
      langswitch: {
        select: 'Select',
        saveexit: 'Save & Exit',
        langs: 'Languages',
        changelang: 'Change Language'
      },
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
      title: 'Reproka Clock',
      clockfacealt: 'clockface',
      smonthnames: {
        bsp: 'nozoþu', esp: 'nozošau',
        bsu: 'masojažeþu', esu: 'masojažšau',
        bhr: 'lačejoþu', ehr: 'lačejošau',
        bwr: 'duðyþu', ewr: 'duðyšau'
      },
      lmonthnames: {
        1: 'water moon', 2: 'flower moon', 3: 'fire moon', 4: 'tree moon',
        5: 'sky moon', 6: 'fog moon', 7: 'lightning moon', 8: 'thunder moon',
        9: 'wind moon', 10: 'middle moon', 11: 'story moon', 12: 'battle moon',
        13: 'bright moon', 14: 'dark moon', 15: 'blue moon', 16: 'mountain moon',
        17: 'cave moon', 18: 'stone moon', 19: 'gold moon', 20: 'short moon'
      },
      lwdaynames:  {
        1: 'weekday 1', 2: 'weekday 2', 3: 'weekday 3', 4: 'weekday 4',
        5: 'weekday 5', 6: 'weekday 6', 7: 'weekday 7', 8: 'weekday 8'
      }
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
        seijagemil: 'grass blade',
        kaibroza: 'tall grass',
        omstaz: 'stone throw',
        lidhchazerun: 'short journey',
        chazerun: 'journey'
      },
      mass: {
        gram: 'gram',
        kgram: 'kilogram',
        mton: 'metric ton',
        agozuba: 'small ezuba',
        ezuba: 'ezuba',
        madhezuba: 'large ezuba' //idk what an ezuba is tbh
      },
      volume: {
        liter: 'liter',
        mliter: 'milliliter',
        paijas: 'generic container',
        thusbaijas: 'hundred generic container'
      },
      temperature: {
        celcius: 'celcius',
        thozhe: 'heat'
      }
    }
  },
  'Español': {
    // todo
  },
  'Deutsch': {
    // todo
  },
  '    ': {
    general: {
      projectname: '',
      planetname: '',
      numberbase: 8
    },
    navbar: {
      langswitch: {
        select: '',
        saveexit: '   ',
        langs: '',
        changelang: ' '
      },
      copyright: '  ',
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
      checkback: '        '
    },
    clock: {
      title: '',
      clockfacealt: '',
      smonthnames: {
        bsp: '', esp: '',
        bsu: '', esu: '',
        bhr: '', ehr: '',
        bwr: '', ewr: ''
      },
      lmonthnames: {
        1: '', 2: '', 3: '', 4: '',
        5: '', 6: '', 7: '', 8: '',
        9: '', 10: '', 11: '', 12: '',
        13: '', 14: '', 15: '', 16: '',
        17: '', 18: '', 19: '', 20: ''
      },
      lwdaynames: {
        1: '', 2: '', 3: '', 4: '',
        5: '', 6: '', 7: '', 8: ''
      }
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
  'tasi': {
    // todo
  },
  'kōkos kas': {
    // todo
  },
  'Xorǧara': {
    general: {
      numberbase: 20
    }
  },
  'Takekava': {
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
