const languages = {
  'English': {
    general: {
      projectname: 'Project Reproka',
      planetname: 'Reproka',
      numberbase: 10,
      numbers: {0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9"},
      decimalsep: '.',
      negnum: '-'
    },
    navbar: {
      langswitch: {
        select: 'Select',
        saveexit: 'Save & Exit',
        langs: 'Languages',
        changelang: 'Change Language',
        search: 'Search languages...'
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
//  '    ': { // this doesnt exist anymore, keeping for testing
//    general: {
//      projectname: '',
//      planetname: '',
//      numberbase: 8,
//      numbers: {
//        0: "", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: ""
//      },
//      decimalsep: '',
//      negnum: ''
//    },
//    navbar: {
//      langswitch: {
//        select: '',
//        saveexit: '   ',
//        langs: '',
//        changelang: ' ',
//        search: ' '
//      },
//      copyright: '  ',
//      headertext: '',
//      home: '',
//      clock: '',
//      conversions: '',
//      featureplan: '',
//      btnalt: ''
//    },
//    notfound: {
//      pagenotfound: '  ',
//      lost: '     ',
//      pagereq: '        '
//    },
//    home: {
//      construction: '  ',
//      checkback: '        '
//    },
//    clock: {
//      title: '',
//      clockfacealt: '',
//      smonthnames: {
//        bsp: '', esp: '',
//        bsu: '', esu: '',
//        bhr: '', ehr: '',
//        bwr: '', ewr: ''
//      },
//      lmonthnames: {
//        1: '', 2: '', 3: '', 4: '',
//        5: '', 6: '', 7: '', 8: '',
//        9: '', 10: '', 11: '', 12: '',
//        13: '', 14: '', 15: '', 16: '',
//        17: '', 18: '', 19: '', 20: ''
//      },
//      lwdaynames: {
//        1: '', 2: '', 3: '', 4: '',
//        5: '', 6: '', 7: '', 8: ''
//      }
//    },
//    plan: {
//      featuresheader: '   ',
//      header: '',
//      andmore: '  ',
//      interactivemap: ' ',
//      climatesim: ''
//    },
//    conversions: {
//      header: '',
//      nounitgroup: '  ',
//      sourcenum: '',
//      group: '',
//      lengthlbl: '',
//      masslbl: '',
//      volumelbl: '',
//      temperaturelbl: '',
//      sourceunit: '',
//      targetunit: '',
//      convertbtn: '',
//      result: ' ', // do not leave a space after this please
//      length: {
//        meter: '',
//        kmeter: '',
//        mmeter: '',
//        seijagemil: '',
//        kaibroza: '',
//        omstaz: '',
//        lidhchazerun: '',
//        chazerun: ''
//      },
//      mass: {
//        gram: '',
//        kgram: '',
//        mton: '',
//        agozuba: '',
//        ezuba: '',
//        madhezuba: ''
//      },
//      volume: {
//        liter: '',
//        mliter: '',
//        paijas: '',
//        thusbaijas: ''
//      },
//      temperature: {
//        celcius: '',
//        thozhe: ''
//      }
//    }
//  },
    '  ': {
    general: {
      projectname: ' ',
      planetname: '',
      numberbase: 8,
      numbers: {0: "", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: ""},
      decimalsep: '',
      negnum: ''
    },
    navbar: {
      langswitch: {
        select: '',
        saveexit: '',
        langs: '',
        changelang: ' ',
        search: ' '
      },
      copyright: '  ',
      headertext: ' ',
      home: '',
      clock: '',
      conversions: '',
      featureplan: '',
      btnalt: ''
    },
    notfound: {
      pagenotfound: '404 -  .',
      lost: '     ',
      pagereq: ' .'
    },
    home: {
      construction: '   ',
      checkback: '        '
    },
    clock: {
      title: ' ',
      clockfacealt: '',
      smonthnames: {
        bsp: '', esp: '',
        bsu: '', esu: '',
        bhr: '', ehr: '',
        bwr: '', ewr: ''
      },
      lmonthnames: {
        1: '', 2: '', 3: '', 4: '',
        5: '', 6: '', 7: '', 8: '',
        9: '', 10: '', 11: '', 12: '',
        13: '', 14: '', 15: '', 16: '',
        17: '', 18: '', 19: '', 20: ''
      },
      lwdaynames:  {
        1: ' ', 2: ' ', 3: ' ', 4: ' ',
        5: ' ', 6: ' ', 7: ' ', 8: ' '
      }
    },
    plan: {
      featuresheader: '    ',
      header: ' ',
      andmore: ' ',
      interactivemap: '  ',
      climatesim: ''
    },
    conversions: {
      header: '',
      nounitgroup: '   ',
      sourcenum: ' ',
      group: ' ',
      lengthlbl: '',
      masslbl: '',
      volumelbl: '',
      temperaturelbl: '',
      sourceunit: '',
      targetunit: '',
      convertbtn: '',
      result: ':', // do not leave a space after this please
      length: {
        meter: '',
        kmeter: '',
        mmeter: '',
        seijagemil: ' ',
        kaibroza: '  ',
        omstaz: ' ',
        lidhchazerun: '  ',
        chazerun: ''
      },
      mass: {
        gram: '',
        kgram: '',
        mton: '',
        agozuba: '',
        ezuba: '',
        madhezuba: '' 
      },
      volume: {
        liter: '',
        mliter: '',
        paijas: '',
        thusbaijas: ''
      },
      temperature: {
        celcius: '',
        thozhe: ''
      }
    }
  },
  'Tamón (naránl Latínu)': {
    general: {
      projectname: 'Anjú Róku',
      planetname: 'Rok',
      numberbase: 8,
      numbers: {0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7"},
      decimalsep: ',',
      negnum: '-'
    },
    navbar: {
      langswitch: {
        select: 'Wjén',
        saveexit: 'Lésor',
        langs: 'Katmónn',
        changelang: 'Katmóne nánar',
        search: 'Katmoníjo tišl...'
      },
      copyright: '(š) anjú Róku',
      headertext: 'Anjú Róku',
      home: 'Raut',
      clock: 'Tok',
      conversions: 'Tatjánl',
      featureplan: 'Tet',
      btnalt: 'Icon'
    },
    notfound: {
      pagenotfound: '404 - Lan wesrn.',
      lost: 'Koskratásos? Rutjót kákem e tákaš čáswo.',
      pagereq: 'lan wesrn.'
    },
    home: {
      construction: 'Sóne matnónu ni taríwn.',
      checkback: 'Toč e šau ja kei ošr sonnét tiš ra!'
    },
    clock: {
      title: 'Tok Róku',
      clockfacealt: 'tokfín',
      smonthnames: {
        bsp: 'Tujašmansálu', esp: 'Šujašmansálu',
        bsu: 'Tujašmássu', esu: 'Šujašmássu',
        bhr: 'Tujažjokélu', ehr: 'Šujažjokélu',
        bwr: 'Tujažlaíf', ewr: 'Šujažlaíf'
      },
      lmonthnames: {
        1: 'Teusúnu', 2: 'Teučaskílu', 3: 'Teuseolósu', 4: 'Teusatkašósu',
        5: 'Teusatósu', 6: 'Tefanksunétu', 7: 'Teučúfu', 8: 'Teutúnu',
        9: 'Tefankósu', 10: 'Teušoí', 11: 'Teukjusósu', 12: 'Tefatáč',
        13: 'Teukčeú', 14: 'Teuteú', 15: 'Teusér', 16: 'Teutašáju',
        17: 'Tefotísu', 18: 'Tefómu', 19: 'Teusakólu', 20: 'Teulít'
      },
      lwdaynames:  {
        1: 'kan Šónu', 2: 'kan Kisónu', 3: 'kan Tekóju', 4: 'kan Ksónu',
        5: 'kan Krásu', 6: 'kan Krúku', 7: 'kan Wénu', 8: 'kan Mánu'
      }
    },
    plan: {
      featuresheader: 'Tet akéšu juósu:',
      header: 'Tet Akéšu',
      andmore: 'Se wat!',
      interactivemap: 'Kaulán e Takét',
      climatesim: 'Sátoskau'
    },
    conversions: {
      header: 'Tatjánl',
      nounitgroup: 'Ai- wutíjau tatjanlósu wjénwo!',
      sourcenum: 'Aték tatjanlútu',
      group: 'Wutí tatjánl',
      lengthlbl: 'Tokéje',
      masslbl: 'Atúje',
      volumelbl: 'Tátje',
      temperaturelbl: 'Storés',
      sourceunit: 'Tatjanlút',
      targetunit: 'Tatjanjót',
      convertbtn: 'Nánar',
      result: 'Jasé:', // do not leave a space after this please
      length: {
        meter: 'Míter',
        kmeter: 'Kilomíter',
        mmeter: 'Milimíter',
        seijagemil: 'Kem sejósu',
        kaibroza: 'Sei e kai',
        omstaz: 'Stásl ómu',
        lidhchazerun: 'Časrún e lit',
        chazerun: 'Časrún'
      },
      mass: {
        gram: 'kram',
        kgram: 'kilokrám',
        mton: 'ton',
        agozuba: 'Čkat',
        ezuba: 'Kat',
        madhezuba: 'Matkát'
      },
      volume: {
        liter: 'Líter',
        mliter: 'Mililíter',
        paijas: 'Wajás',
        thusbaijas: 'Tuswajás'
      },
      temperature: {
        celcius: 'Kelkjús',
        thozhe: 'Storés'
      }
    }
  },
  'Eudeň': {
    general: {
      projectname: 'Reproka o Aniň',
      planetname: 'Reproka',
      numberbase: 10,
      numbers: {0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9"},
      decimalsep: '.',
      negnum: '-'
    },
    navbar: {
      langswitch: {
        select: 'Wjen',
        saveexit: 'Kaþmon Wjen',
        langs: 'Kaþmonen',
        changelang: 'Kaþmon Wjen',
        search: 'Kaþmon Dižly'
      },
      copyright: '© Reproka o Aniň 2025',
      headertext: 'Reproka o Aniň',
      home: 'Raud',
      clock: 'Kolyznel',
      conversions: 'Tadjanol Rynanar',
      featureplan: 'Tjad',
      btnalt: 'Ryhadoþ'
    },
    notfound: {
      pagenotfound: '404 - Lan i ducjanka',
      lost: 'Ja e reuse? Kes o ryňau kaþ ošerwo.',
      pagereq: 'Ja kþyšai lan i ducjanka'
    },
    home: {
      construction: 'Ni kolyz dy ni lan iwen.',
      checkback: 'Ja ošeršosir osen dudisašo!'
    },
    clock: {
      title: 'Reproka o Kolyznel',
      clockfacealt: 'kolyznel',
      smonthnames: {
        bsp: 'icnowoh', esp: 'maþnowoh',
        bsu: 'icpešem', esu: 'maþpešem',
        bhr: 'iclacejoh', ehr: 'maþlacejoh',
        bwr: 'icydud', ewr: 'maþydud'
      },
      lmonthnames: {
        1: 'yrakeud', 2: 'žirakeud', 3: 'karakeud', 4: 'sarakeud',
        5: 'norakeud', 6: 'marakeud', 7: 'tarakeud', 8: 'þeirakeud',
        9: 'kaurakeud', 10: 'carakeud', 11: 'cayrakeud', 12: 'cažirakeud',
        13: 'cakarakeud', 14: 'casarakeud', 15: 'canorakeud', 16: 'camarakeud',
        17: 'catarakeud', 18: 'caþeirakeud', 19: 'cakaurakeud', 20: 'žicarakeud'
      },
      lwdaynames:  {
        1: 'yrakan', 2: 'žirakan', 3: 'karakan', 4: 'sarakan',
        5: 'norakan', 6: 'marakan', 7: 'tarakan', 8: 'þeirakan'
      }
    },
    plan: {
      featuresheader: 'Inri krytjað þydisa:',
      header: 'Os krac tjadol',
      andmore: 'Heke za!',
      interactivemap: 'Salyn krac kþylažyo ňeunel',
      climatesim: 'Maþsadaškal'
    },
    conversions: {
      header: 'Tadjanol nanar',
      nounitgroup: 'Psst- Ja tadjanolcun cjanoh þusce!',
      sourcenum: 'Krysko auš',
      group: 'Auš o toucjel',
      lengthlbl: 'Šmakil',
      masslbl: 'Ňyscol',
      volumelbl: 'Hwel',
      temperaturelbl: 'Seþor',
      sourceunit: 'Rysko o tadjanol',
      targetunit: 'Þynanarka o tadjanol',
      convertbtn: 'Nanarwo',
      result: 'Þynanarka:', // do not leave a space after this please
      length: {
        meter: 'miter',
        kmeter: 'wamiter',
        mmeter: 'warkemiter',
        seijagemil: 'sejašmal',
        kaibroza: 'maþsejašmal',
        omstaz: 'om šcol',
        lidhchazerun: 'icycazel',
        chazerun: 'cazel'
      },
      mass: {
        gram: 'gram',
        kgram: 'wagram',
        mton: 'žugram',
        agozuba: 'icezupa',
        ezuba: 'ezupa',
        madhezuba: 'maþezupa' //idk what an ezuba is tbh
      },
      volume: {
        liter: 'liter',
        mliter: 'warkeliter',
        paijas: 'pajas',
        thusbaijas: 'þupajas'
      },
      temperature: {
        celcius: 'selsjus',
        thozhe: 'þože'
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
    // todo
  },
  'Takekava': {
    // todo
  },
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

function getnum(num, lang) {
  var numstr = num.toString(get('general.numberbase', lang)) // convert to whatever base the language uses
  var thing = numstr.split("") // split the number into individual characters
  var other = "" // IT'S THE oh

  thing.forEach(number => {
    if (number == '.') {
      other += get('general.decimalsep', lang) // add the decimal point so it doesn't complain
    } else if (number == '-') {
      other += get('general.negnum', lang) // add the negative sign so it doesn't complain
    } else {
      other += get(`general.numbers.${number}`, lang) // get the number from the language, translate it, then add it to the thingy mabob
    }
  })
  
  return other
}

module.exports = { langlist: langlist, gettext: get, getnumber: getnum }
