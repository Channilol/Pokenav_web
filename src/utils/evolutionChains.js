// Evolution chains data - based on classic Pokemon evolution lines
// Each chain contains the evolution line with IDs and evolution methods/levels

export const evolutionChains = {
  // Kanto Starters
  1: [1, 2, 3], // Bulbasaur -> Ivysaur -> Venusaur
  2: [1, 2, 3],
  3: [1, 2, 3],
  
  4: [4, 5, 6], // Charmander -> Charmeleon -> Charizard
  5: [4, 5, 6],
  6: [4, 5, 6],
  
  7: [7, 8, 9], // Squirtle -> Wartortle -> Blastoise
  8: [7, 8, 9],
  9: [7, 8, 9],
  
  // Caterpie line
  10: [10, 11, 12], // Caterpie -> Metapod -> Butterfree
  11: [10, 11, 12],
  12: [10, 11, 12],
  
  // Weedle line
  13: [13, 14, 15], // Weedle -> Kakuna -> Beedrill
  14: [13, 14, 15],
  15: [13, 14, 15],
  
  // Pidgey line
  16: [16, 17, 18], // Pidgey -> Pidgeotto -> Pidgeot
  17: [16, 17, 18],
  18: [16, 17, 18],
  
  // Rattata line
  19: [19, 20], // Rattata -> Raticate
  20: [19, 20],
  
  // Spearow line
  21: [21, 22], // Spearow -> Fearow
  22: [21, 22],
  
  // Ekans line
  23: [23, 24], // Ekans -> Arbok
  24: [23, 24],
  
  // Pikachu line
  25: [172, 25, 26], // Pichu -> Pikachu -> Raichu
  26: [172, 25, 26],
  172: [172, 25, 26],
  
  // Sandshrew line
  27: [27, 28], // Sandshrew -> Sandslash
  28: [27, 28],
  
  // Nidoran lines
  29: [29, 30, 31], // Nidoran♀ -> Nidorina -> Nidoqueen
  30: [29, 30, 31],
  31: [29, 30, 31],
  
  32: [32, 33, 34], // Nidoran♂ -> Nidorino -> Nidoking
  33: [32, 33, 34],
  34: [32, 33, 34],
  
  // Clefairy line
  35: [173, 35, 36], // Cleffa -> Clefairy -> Clefable
  36: [173, 35, 36],
  173: [173, 35, 36],
  
  // Vulpix line
  37: [37, 38], // Vulpix -> Ninetales
  38: [37, 38],
  
  // Jigglypuff line
  39: [174, 39, 40], // Igglybuff -> Jigglypuff -> Wigglytuff
  40: [174, 39, 40],
  174: [174, 39, 40],
  
  // Zubat line
  41: [41, 42, 169], // Zubat -> Golbat -> Crobat
  42: [41, 42, 169],
  169: [41, 42, 169],
  
  // Oddish line
  43: [43, 44, 45], // Oddish -> Gloom -> Vileplume
  44: [43, 44, 45],
  45: [43, 44, 45],
  182: [43, 44, 182], // Oddish -> Gloom -> Bellossom
  
  // Paras line
  46: [46, 47], // Paras -> Parasect
  47: [46, 47],
  
  // Venonat line
  48: [48, 49], // Venonat -> Venomoth
  49: [48, 49],
  
  // Diglett line
  50: [50, 51], // Diglett -> Dugtrio
  51: [50, 51],
  
  // Meowth line
  52: [52, 53], // Meowth -> Persian
  53: [52, 53],
  
  // Psyduck line
  54: [54, 55], // Psyduck -> Golduck
  55: [54, 55],
  
  // Mankey line
  56: [56, 57], // Mankey -> Primeape
  57: [56, 57],
  
  // Growlithe line
  58: [58, 59], // Growlithe -> Arcanine
  59: [58, 59],
  
  // Poliwag line
  60: [60, 61, 62], // Poliwag -> Poliwhirl -> Poliwrath
  61: [60, 61, 62],
  62: [60, 61, 62],
  186: [60, 61, 186], // Poliwag -> Poliwhirl -> Politoed
  
  // Abra line
  63: [63, 64, 65], // Abra -> Kadabra -> Alakazam
  64: [63, 64, 65],
  65: [63, 64, 65],
  
  // Machop line
  66: [66, 67, 68], // Machop -> Machoke -> Machamp
  67: [66, 67, 68],
  68: [66, 67, 68],
  
  // Bellsprout line
  69: [69, 70, 71], // Bellsprout -> Weepinbell -> Victreebel
  70: [69, 70, 71],
  71: [69, 70, 71],
  
  // Tentacool line
  72: [72, 73], // Tentacool -> Tentacruel
  73: [72, 73],
  
  // Geodude line
  74: [74, 75, 76], // Geodude -> Graveler -> Golem
  75: [74, 75, 76],
  76: [74, 75, 76],
  
  // Ponyta line
  77: [77, 78], // Ponyta -> Rapidash
  78: [77, 78],
  
  // Slowpoke line
  79: [79, 80], // Slowpoke -> Slowbro
  80: [79, 80],
  199: [79, 199], // Slowpoke -> Slowking
  
  // Magnemite line
  81: [81, 82, 462], // Magnemite -> Magneton -> Magnezone
  82: [81, 82, 462],
  462: [81, 82, 462],
  
  // Farfetch'd line
  83: [83], // Farfetch'd (no evolution)
  
  // Doduo line
  84: [84, 85], // Doduo -> Dodrio
  85: [84, 85],
  
  // Seel line
  86: [86, 87], // Seel -> Dewgong
  87: [86, 87],
  
  // Grimer line
  88: [88, 89], // Grimer -> Muk
  89: [88, 89],
  
  // Shellder line
  90: [90, 91], // Shellder -> Cloyster
  91: [90, 91],
  
  // Gastly line
  92: [92, 93, 94], // Gastly -> Haunter -> Gengar
  93: [92, 93, 94],
  94: [92, 93, 94],
  
  // Onix line
  95: [95, 208], // Onix -> Steelix
  208: [95, 208],
  
  // Drowzee line
  96: [96, 97], // Drowzee -> Hypno
  97: [96, 97],
  
  // Krabby line
  98: [98, 99], // Krabby -> Kingler
  99: [98, 99],
  
  // Voltorb line
  100: [100, 101], // Voltorb -> Electrode
  101: [100, 101],
  
  // Exeggcute line
  102: [102, 103], // Exeggcute -> Exeggutor
  103: [102, 103],
  
  // Cubone line
  104: [104, 105], // Cubone -> Marowak
  105: [104, 105],
  
  // Hitmons
  106: [236, 106], // Tyrogue -> Hitmonlee
  107: [236, 107], // Tyrogue -> Hitmonchan
  237: [236, 237], // Tyrogue -> Hitmontop
  236: [236, 106, 107, 237], // Tyrogue branches
  
  // Lickitung line
  108: [108, 463], // Lickitung -> Lickilicky
  463: [108, 463],
  
  // Koffing line
  109: [109, 110], // Koffing -> Weezing
  110: [109, 110],
  
  // Rhyhorn line
  111: [111, 112, 464], // Rhyhorn -> Rhydon -> Rhyperior
  112: [111, 112, 464],
  464: [111, 112, 464],
  
  // Chansey line
  113: [440, 113, 242], // Happiny -> Chansey -> Blissey
  242: [440, 113, 242],
  440: [440, 113, 242],
  
  // Tangela line
  114: [114, 465], // Tangela -> Tangrowth
  465: [114, 465],
  
  // Kangaskhan
  115: [115], // Kangaskhan (no evolution)
  
  // Horsea line
  116: [116, 117, 230], // Horsea -> Seadra -> Kingdra
  117: [116, 117, 230],
  230: [116, 117, 230],
  
  // Goldeen line
  118: [118, 119], // Goldeen -> Seaking
  119: [118, 119],
  
  // Staryu line
  120: [120, 121], // Staryu -> Starmie
  121: [120, 121],
  
  // Mr. Mime line
  122: [439, 122], // Mime Jr. -> Mr. Mime
  439: [439, 122],
  
  // Scyther line
  123: [123, 212], // Scyther -> Scizor
  212: [123, 212],
  
  // Jynx line
  124: [238, 124], // Smoochum -> Jynx
  238: [238, 124],
  
  // Electabuzz line
  125: [239, 125, 466], // Elekid -> Electabuzz -> Electivire
  239: [239, 125, 466],
  466: [239, 125, 466],
  
  // Magmar line
  126: [240, 126, 467], // Magby -> Magmar -> Magmortar
  240: [240, 126, 467],
  467: [240, 126, 467],
  
  // Pinsir
  127: [127], // Pinsir (no evolution)
  
  // Tauros
  128: [128], // Tauros (no evolution)
  
  // Magikarp line
  129: [129, 130], // Magikarp -> Gyarados
  130: [129, 130],
  
  // Lapras
  131: [131], // Lapras (no evolution)
  
  // Ditto
  132: [132], // Ditto (no evolution)
  
  // Eevee evolutions
  133: [133, 134, 135, 136, 196, 197, 470, 471, 700], // Eevee -> multiple evolutions
  134: [133, 134], // Vaporeon
  135: [133, 135], // Jolteon
  136: [133, 136], // Flareon
  196: [133, 196], // Espeon
  197: [133, 197], // Umbreon
  470: [133, 470], // Leafeon
  471: [133, 471], // Glaceon
  700: [133, 700], // Sylveon
  
  // Porygon line
  137: [137, 233, 474], // Porygon -> Porygon2 -> Porygon-Z
  233: [137, 233, 474],
  474: [137, 233, 474],
  
  // Omanyte line
  138: [138, 139], // Omanyte -> Omastar
  139: [138, 139],
  
  // Kabuto line
  140: [140, 141], // Kabuto -> Kabutops
  141: [140, 141],
  
  // Aerodactyl
  142: [142], // Aerodactyl (no evolution)
  
  // Snorlax line
  143: [446, 143], // Munchlax -> Snorlax
  446: [446, 143],
  
  // Legendary/Mythical (no evolutions)
  144: [144], // Articuno
  145: [145], // Zapdos
  146: [146], // Moltres
  147: [147, 148, 149], // Dratini -> Dragonair -> Dragonite
  148: [147, 148, 149],
  149: [147, 148, 149],
  150: [150], // Mewtwo
  151: [151], // Mew

  // Generation 2 Pokemon (152-251)
  // Johto Starters
  152: [152, 153, 154], // Chikorita -> Bayleef -> Meganium
  153: [152, 153, 154],
  154: [152, 153, 154],
  
  155: [155, 156, 157], // Cyndaquil -> Quilava -> Typhlosion
  156: [155, 156, 157],
  157: [155, 156, 157],
  
  158: [158, 159, 160], // Totodile -> Croconaw -> Feraligatr
  159: [158, 159, 160],
  160: [158, 159, 160],
  
  // Sentret line
  161: [161, 162], // Sentret -> Furret
  162: [161, 162],
  
  // Hoothoot line
  163: [163, 164], // Hoothoot -> Noctowl
  164: [163, 164],
  
  // Ledyba line
  165: [165, 166], // Ledyba -> Ledian
  166: [165, 166],
  
  // Spinarak line
  167: [167, 168], // Spinarak -> Ariados
  168: [167, 168],
  
  // Chinchou line
  170: [170, 171], // Chinchou -> Lanturn
  171: [170, 171],
  
  // Togepi line
  175: [175, 176, 468], // Togepi -> Togetic -> Togekiss
  176: [175, 176, 468],
  468: [175, 176, 468],
  
  // Natu line
  177: [177, 178], // Natu -> Xatu
  178: [177, 178],
  
  // Mareep line
  179: [179, 180, 181], // Mareep -> Flaaffy -> Ampharos
  180: [179, 180, 181],
  181: [179, 180, 181],
  
  // Hoppip line
  187: [187, 188, 189], // Hoppip -> Skiploom -> Jumpluff
  188: [187, 188, 189],
  189: [187, 188, 189],
  
  // Aipom line
  190: [190, 424], // Aipom -> Ambipom
  424: [190, 424],
  
  // Sunkern line
  191: [191, 192], // Sunkern -> Sunflora
  192: [191, 192],
  
  // Yanma line
  193: [193, 469], // Yanma -> Yanmega
  469: [193, 469],
  
  // Wooper line
  194: [194, 195], // Wooper -> Quagsire
  195: [194, 195],
  
  // Murkrow line
  198: [198, 430], // Murkrow -> Honchkrow
  430: [198, 430],
  
  // Misdreavus line
  200: [200, 429], // Misdreavus -> Mismagius
  429: [200, 429],
  
  // Unown
  201: [201], // Unown (no evolution)
  
  // Wobbuffet line
  202: [360, 202], // Wynaut -> Wobbuffet
  360: [360, 202],
  
  // Girafarig line
  203: [203, 981], // Girafarig -> Farigiraf
  981: [203, 981],
  
  // Pineco line
  204: [204, 205], // Pineco -> Forretress
  205: [204, 205],
  
  // Dunsparce line
  206: [206, 982], // Dunsparce -> Dudunsparce
  982: [206, 982],
  
  // Gligar line
  207: [207, 472], // Gligar -> Gliscor
  472: [207, 472],
  
  // Snubbull line
  209: [209, 210], // Snubbull -> Granbull
  210: [209, 210],
  
  // Qwilfish line
  211: [211, 904], // Qwilfish -> Overqwil
  904: [211, 904],
  
  // Shuckle
  213: [213], // Shuckle (no evolution)
  
  // Heracross
  214: [214], // Heracross (no evolution)
  
  // Sneasel line
  215: [215, 461], // Sneasel -> Weavile
  461: [215, 461],
  
  // Teddiursa line
  216: [216, 217], // Teddiursa -> Ursaring
  217: [216, 217],
  
  // Slugma line
  218: [218, 219], // Slugma -> Magcargo
  219: [218, 219],
  
  // Swinub line
  220: [220, 221, 473], // Swinub -> Piloswine -> Mamoswine
  221: [220, 221, 473],
  473: [220, 221, 473],
  
  // Corsola line
  222: [222, 864], // Corsola -> Cursola
  864: [222, 864],
  
  // Remoraid line
  223: [223, 224], // Remoraid -> Octillery
  224: [223, 224],
  
  // Delibird
  225: [225], // Delibird (no evolution)
  
  // Mantine line
  226: [458, 226], // Mantyke -> Mantine
  458: [458, 226],
  
  // Skarmory
  227: [227], // Skarmory (no evolution)
  
  // Houndour line
  228: [228, 229], // Houndour -> Houndoom
  229: [228, 229],
  
  // Phanpy line
  231: [231, 232], // Phanpy -> Donphan
  232: [231, 232],
  
  // Stantler line
  234: [234, 899], // Stantler -> Wyrdeer
  899: [234, 899],
  
  // Smeargle
  235: [235], // Smeargle (no evolution)
  
  // Miltank
  241: [241], // Miltank (no evolution)
  
  // Raikou, Entei, Suicune (Legendary)
  243: [243], // Raikou
  244: [244], // Entei
  245: [245], // Suicune
  
  // Larvitar line
  246: [246, 247, 248], // Larvitar -> Pupitar -> Tyranitar
  247: [246, 247, 248],
  248: [246, 247, 248],
  
  // Lugia, Ho-Oh (Legendary)
  249: [249], // Lugia
  250: [250], // Ho-Oh
  
  // Celebi (Mythical)
  251: [251], // Celebi

  // Generation 3 Pokemon (252-386) - Key evolutions
  // Hoenn Starters
  252: [252, 253, 254], // Treecko -> Grovyle -> Sceptile
  253: [252, 253, 254],
  254: [252, 253, 254],
  
  255: [255, 256, 257], // Torchic -> Combusken -> Blaziken
  256: [255, 256, 257],
  257: [255, 256, 257],
  
  258: [258, 259, 260], // Mudkip -> Marshtomp -> Swampert
  259: [258, 259, 260],
  260: [258, 259, 260],
  
  // Poochyena line
  261: [261, 262], // Poochyena -> Mightyena
  262: [261, 262],
  
  // Zigzagoon line
  263: [263, 264], // Zigzagoon -> Linoone
  264: [263, 264],
  
  // Wurmple line (branches)
  265: [265, 266, 267], // Wurmple -> Silcoon -> Beautifly
  266: [265, 266, 267],
  267: [265, 266, 267],
  268: [265, 268, 269], // Wurmple -> Cascoon -> Dustox
  269: [265, 268, 269],
  
  // Lotad line
  270: [270, 271, 272], // Lotad -> Lombre -> Ludicolo
  271: [270, 271, 272],
  272: [270, 271, 272],
  
  // Seedot line
  273: [273, 274, 275], // Seedot -> Nuzleaf -> Shiftry
  274: [273, 274, 275],
  275: [273, 274, 275],
  
  // Taillow line
  276: [276, 277], // Taillow -> Swellow
  277: [276, 277],
  
  // Wingull line
  278: [278, 279], // Wingull -> Pelipper
  279: [278, 279],
  
  // Ralts line
  280: [280, 281, 282], // Ralts -> Kirlia -> Gardevoir
  281: [280, 281, 282],
  282: [280, 281, 282],
  475: [280, 281, 475], // Ralts -> Kirlia -> Gallade
  
  // Surskit line
  283: [283, 284], // Surskit -> Masquerain
  284: [283, 284],
  
  // Shroomish line
  285: [285, 286], // Shroomish -> Breloom
  286: [285, 286],
  
  // Slakoth line
  287: [287, 288, 289], // Slakoth -> Vigoroth -> Slaking
  288: [287, 288, 289],
  289: [287, 288, 289],
  
  // Nincada line
  290: [290, 291, 292], // Nincada -> Ninjask (+ Shedinja)
  291: [290, 291],
  292: [290, 292],
  
  // Whismur line
  293: [293, 294, 295], // Whismur -> Loudred -> Exploud
  294: [293, 294, 295],
  295: [293, 294, 295],
  
  // Makuhita line
  296: [296, 297], // Makuhita -> Hariyama
  297: [296, 297],
    
  // Azurill line (connects to Gen 1)
  298: [298, 183, 184], // Azurill -> Marill -> Azumarill
  183: [298, 183, 184],
  184: [298, 183, 184],
  
  // Nosepass line
  299: [299, 476], // Nosepass -> Probopass
  476: [299, 476],
  
  // Skitty line
  300: [300, 301], // Skitty -> Delcatty
  301: [300, 301],
  
  // Single stage Pokemon (no evolutions)
  302: [302], // Sableye
  303: [303], // Mawile
  304: [304, 305, 306], // Aron -> Lairon -> Aggron
  305: [304, 305, 306],
  306: [304, 305, 306],
  
  // Meditite line
  307: [307, 308], // Meditite -> Medicham
  308: [307, 308],
  
  // Electrike line
  309: [309, 310], // Electrike -> Manectric
  310: [309, 310],
  
  // Plusle & Minun
  311: [311], // Plusle
  312: [312], // Minun
  
  // Volbeat & Illumise
  313: [313], // Volbeat
  314: [314], // Illumise
  
  // Roselia line
  315: [406, 315, 407], // Budew -> Roselia -> Roserade
  406: [406, 315, 407],
  407: [406, 315, 407],
  
  // Gulpin line
  316: [316, 317], // Gulpin -> Swalot
  317: [316, 317],
  
  // Carvanha line
  318: [318, 319], // Carvanha -> Sharpedo
  319: [318, 319],
  
  // Wailmer line
  320: [320, 321], // Wailmer -> Wailord
  321: [320, 321],
  
  // Numel line
  322: [322, 323], // Numel -> Camerupt
  323: [322, 323],
  
  // Torkoal
  324: [324], // Torkoal
  
  // Spoink line
  325: [325, 326], // Spoink -> Grumpig
  326: [325, 326],
  
  // Spinda
  327: [327], // Spinda
  
  // Trapinch line
  328: [328, 329, 330], // Trapinch -> Vibrava -> Flygon
  329: [328, 329, 330],
  330: [328, 329, 330],
  
  // Cacnea line
  331: [331, 332], // Cacnea -> Cacturne
  332: [331, 332],
  
  // Swablu line
  333: [333, 334], // Swablu -> Altaria
  334: [333, 334],
  
  // Zangoose & Seviper
  335: [335], // Zangoose
  336: [336], // Seviper
  
  // Lunatone & Solrock
  337: [337], // Lunatone
  338: [338], // Solrock
  
  // Barboach line
  339: [339, 340], // Barboach -> Whiscash
  340: [339, 340],
  
  // Corphish line
  341: [341, 342], // Corphish -> Crawdaunt
  342: [341, 342],
  
  // Baltoy line
  343: [343, 344], // Baltoy -> Claydol
  344: [343, 344],
  
  // Lileep line
  345: [345, 346], // Lileep -> Cradily
  346: [345, 346],
  
  // Anorith line
  347: [347, 348], // Anorith -> Armaldo
  348: [347, 348],
  
  // Feebas line
  349: [349, 350], // Feebas -> Milotic
  350: [349, 350],
  
  // Castform
  351: [351], // Castform
  
  // Kecleon
  352: [352], // Kecleon
  
  // Shuppet line
  353: [353, 354], // Shuppet -> Banette
  354: [353, 354],
  
  // Duskull line
  355: [355, 356, 477], // Duskull -> Dusclops -> Dusknoir
  356: [355, 356, 477],
  477: [355, 356, 477],
  
  // Tropius
  357: [357], // Tropius
  
  // Chimecho line
  358: [433, 358], // Chingling -> Chimecho
  433: [433, 358],
  
  // Absol
  359: [359], // Absol
  
  // Snorunt line
  361: [361, 362], // Snorunt -> Glalie
  362: [361, 362],
  478: [361, 478], // Snorunt -> Froslass
  
  // Spheal line
  363: [363, 364, 365], // Spheal -> Sealeo -> Walrein
  364: [363, 364, 365],
  365: [363, 364, 365],
  
  // Clamperl line
  366: [366, 367], // Clamperl -> Huntail
  367: [366, 367],
  368: [366, 368], // Clamperl -> Gorebyss
  
  // Relicanth
  369: [369], // Relicanth
  
  // Luvdisc
  370: [370], // Luvdisc
  
  // Bagon line
  371: [371, 372, 373], // Bagon -> Shelgon -> Salamence
  372: [371, 372, 373],
  373: [371, 372, 373],
  
  // Beldum line
  374: [374, 375, 376], // Beldum -> Metang -> Metagross
  375: [374, 375, 376],
  376: [374, 375, 376],
  
  // Regirock, Regice, Registeel
  377: [377], // Regirock
  378: [378], // Regice
  379: [379], // Registeel
  
  // Latias & Latios
  380: [380], // Latias
  381: [381], // Latios
  
  // Kyogre, Groudon, Rayquaza
  382: [382], // Kyogre
  383: [383], // Groudon
  384: [384], // Rayquaza
  
  // Jirachi & Deoxys
  385: [385], // Jirachi
  386: [386], // Deoxys

  // Generation 4 Pokemon (387-493) - Sinnoh
  // Sinnoh Starters
  387: [387, 388, 389], // Turtwig -> Grotle -> Torterra
  388: [387, 388, 389],
  389: [387, 388, 389],
  
  390: [390, 391, 392], // Chimchar -> Monferno -> Infernape
  391: [390, 391, 392],
  392: [390, 391, 392],
  
  393: [393, 394, 395], // Piplup -> Prinplup -> Empoleon
  394: [393, 394, 395],
  395: [393, 394, 395],

  // Starly line
  396: [396, 397, 398], // Starly -> Staravia -> Staraptor
  397: [396, 397, 398],
  398: [396, 397, 398],

  // Bidoof line
  399: [399, 400], // Bidoof -> Bibarel
  400: [399, 400],

  // Kricketot line
  401: [401, 402], // Kricketot -> Kricketune
  402: [401, 402],

  // Shinx line
  403: [403, 404, 405], // Shinx -> Luxio -> Luxray
  404: [403, 404, 405],
  405: [403, 404, 405],

  // Cranidos line
  408: [408, 409], // Cranidos -> Rampardos
  409: [408, 409],

  // Shieldon line
  410: [410, 411], // Shieldon -> Bastiodon
  411: [410, 411],

  // Burmy line
  412: [412, 413, 414], // Burmy -> Wormadam/Mothim
  413: [412, 413],
  414: [412, 414],

  // Combee line
  415: [415, 416], // Combee -> Vespiquen
  416: [415, 416],

  // Pachirisu
  417: [417], // Pachirisu

  // Buizel line
  418: [418, 419], // Buizel -> Floatzel
  419: [418, 419],

  // Cherubi line
  420: [420, 421], // Cherubi -> Cherrim
  421: [420, 421],

  // Shellos line
  422: [422, 423], // Shellos -> Gastrodon
  423: [422, 423],

  // Drifloon line
  425: [425, 426], // Drifloon -> Drifblim
  426: [425, 426],

  // Buneary line
  427: [427, 428], // Buneary -> Lopunny
  428: [427, 428],

  // Glameow line
  431: [431, 432], // Glameow -> Purugly
  432: [431, 432],

  // Stunky line
  434: [434, 435], // Stunky -> Skuntank
  435: [434, 435],

  // Bronzor line
  436: [436, 437], // Bronzor -> Bronzong
  437: [436, 437],

  // Bonsly line
  438: [438, 185], // Bonsly -> Sudowoodo
  185: [438, 185],

  // Spiritomb
  442: [442], // Spiritomb

  // Gible line
  443: [443, 444, 445], // Gible -> Gabite -> Garchomp
  444: [443, 444, 445],
  445: [443, 444, 445],

  // Riolu line
  447: [447, 448], // Riolu -> Lucario
  448: [447, 448],

  // Hippopotas line
  449: [449, 450], // Hippopotas -> Hippowdon
  450: [449, 450],

  // Skorupi line
  451: [451, 452], // Skorupi -> Drapion
  452: [451, 452],

  // Croagunk line
  453: [453, 454], // Croagunk -> Toxicroak
  454: [453, 454],

  // Carnivine
  455: [455], // Carnivine

  // Finneon line
  456: [456, 457], // Finneon -> Lumineon
  457: [456, 457],

  // Snover line
  459: [459, 460], // Snover -> Abomasnow
  460: [459, 460],

  // Rotom
  479: [479], // Rotom

  // Uxie, Mesprit, Azelf
  480: [480], // Uxie
  481: [481], // Mesprit
  482: [482], // Azelf

  // Dialga, Palkia
  483: [483], // Dialga
  484: [484], // Palkia

  // Heatran
  485: [485], // Heatran

  // Regigigas
  486: [486], // Regigigas

  // Giratina
  487: [487], // Giratina

  // Cresselia
  488: [488], // Cresselia

  // Phione line
  489: [489, 490], // Phione -> Manaphy
  490: [489, 490],

  // Darkrai
  491: [491], // Darkrai

  // Shaymin
  492: [492], // Shaymin

  // Arceus
  493: [493], // Arceus

  // Generation 5 Pokemon (494-649) - Unova
  // Victini
  494: [494], // Victini

  // Unova Starters
  495: [495, 496, 497], // Snivy -> Servine -> Serperior
  496: [495, 496, 497],
  497: [495, 496, 497],

  498: [498, 499, 500], // Tepig -> Pignite -> Emboar
  499: [498, 499, 500],
  500: [498, 499, 500],

  501: [501, 502, 503], // Oshawott -> Dewott -> Samurott
  502: [501, 502, 503],
  503: [501, 502, 503],

  // Patrat line
  504: [504, 505], // Patrat -> Watchog
  505: [504, 505],

  // Lillipup line
  506: [506, 507, 508], // Lillipup -> Herdier -> Stoutland
  507: [506, 507, 508],
  508: [506, 507, 508],

  // Purrloin line
  509: [509, 510], // Purrloin -> Liepard
  510: [509, 510],

  // Pansage line
  511: [511, 512], // Pansage -> Simisage
  512: [511, 512],

  // Pansear line
  513: [513, 514], // Pansear -> Simisear
  514: [513, 514],

  // Panpour line
  515: [515, 516], // Panpour -> Simipour
  516: [515, 516],

  // Munna line
  517: [517, 518], // Munna -> Musharna
  518: [517, 518],

  // Pidove line
  519: [519, 520, 521], // Pidove -> Tranquill -> Unfezant
  520: [519, 520, 521],
  521: [519, 520, 521],

  // Blitzle line
  522: [522, 523], // Blitzle -> Zebstrika
  523: [522, 523],

  // Roggenrola line
  524: [524, 525, 526], // Roggenrola -> Boldore -> Gigalith
  525: [524, 525, 526],
  526: [524, 525, 526],

  // Woobat line
  527: [527, 528], // Woobat -> Swoobat
  528: [527, 528],

  // Drilbur line
  529: [529, 530], // Drilbur -> Excadrill
  530: [529, 530],

  // Audino
  531: [531], // Audino

  // Timburr line
  532: [532, 533, 534], // Timburr -> Gurdurr -> Conkeldurr
  533: [532, 533, 534],
  534: [532, 533, 534],

  // Tympole line
  535: [535, 536, 537], // Tympole -> Palpitoad -> Seismitoad
  536: [535, 536, 537],
  537: [535, 536, 537],

  // Throh & Sawk
  538: [538], // Throh
  539: [539], // Sawk

  // Sewaddle line
  540: [540, 541, 542], // Sewaddle -> Swadloon -> Leavanny
  541: [540, 541, 542],
  542: [540, 541, 542],

  // Venipede line
  543: [543, 544, 545], // Venipede -> Whirlipede -> Scolipede
  544: [543, 544, 545],
  545: [543, 544, 545],

  // Cottonee line
  546: [546, 547], // Cottonee -> Whimsicott
  547: [546, 547],

  // Petilil line
  548: [548, 549], // Petilil -> Lilligant
  549: [548, 549],

  // Basculin
  550: [550], // Basculin

  // Sandile line
  551: [551, 552, 553], // Sandile -> Krokorok -> Krookodile
  552: [551, 552, 553],
  553: [551, 552, 553],

  // Darumaka line
  554: [554, 555], // Darumaka -> Darmanitan
  555: [554, 555],

  // Maractus
  556: [556], // Maractus

  // Dwebble line
  557: [557, 558], // Dwebble -> Crustle
  558: [557, 558],

  // Scraggy line
  559: [559, 560], // Scraggy -> Scrafty
  560: [559, 560],

  // Sigilyph
  561: [561], // Sigilyph

  // Yamask line
  562: [562, 563], // Yamask -> Cofagrigus
  563: [562, 563],

  // Tirtouga line
  564: [564, 565], // Tirtouga -> Carracosta
  565: [564, 565],

  // Archen line
  566: [566, 567], // Archen -> Archeops
  567: [566, 567],

  // Trubbish line
  568: [568, 569], // Trubbish -> Garbodor
  569: [568, 569],

  // Zorua line
  570: [570, 571], // Zorua -> Zoroark
  571: [570, 571],

  // Minccino line
  572: [572, 573], // Minccino -> Cinccino
  573: [572, 573],

  // Gothita line
  574: [574, 575, 576], // Gothita -> Gothorita -> Gothitelle
  575: [574, 575, 576],
  576: [574, 575, 576],

  // Solosis line
  577: [577, 578, 579], // Solosis -> Duosion -> Reuniclus
  578: [577, 578, 579],
  579: [577, 578, 579],

  // Ducklett line
  580: [580, 581], // Ducklett -> Swanna
  581: [580, 581],

  // Vanillite line
  582: [582, 583, 584], // Vanillite -> Vanillish -> Vanilluxe
  583: [582, 583, 584],
  584: [582, 583, 584],

  // Deerling line
  585: [585, 586], // Deerling -> Sawsbuck
  586: [585, 586],

  // Emolga
  587: [587], // Emolga

  // Karrablast line
  588: [588, 589], // Karrablast -> Escavalier
  589: [588, 589],

  // Foongus line
  590: [590, 591], // Foongus -> Amoonguss
  591: [590, 591],

  // Frillish line
  592: [592, 593], // Frillish -> Jellicent
  593: [592, 593],

  // Alomomola
  594: [594], // Alomomola

  // Joltik line
  595: [595, 596], // Joltik -> Galvantula
  596: [595, 596],

  // Ferroseed line
  597: [597, 598], // Ferroseed -> Ferrothorn
  598: [597, 598],

  // Klink line
  599: [599, 600, 601], // Klink -> Klang -> Klinklang
  600: [599, 600, 601],
  601: [599, 600, 601],

  // Tynamo line
  602: [602, 603, 604], // Tynamo -> Eelektrik -> Eelektross
  603: [602, 603, 604],
  604: [602, 603, 604],

  // Elgyem line
  605: [605, 606], // Elgyem -> Beheeyem
  606: [605, 606],

  // Litwick line
  607: [607, 608, 609], // Litwick -> Lampent -> Chandelure
  608: [607, 608, 609],
  609: [607, 608, 609],

  // Axew line
  610: [610, 611, 612], // Axew -> Fraxure -> Haxorus
  611: [610, 611, 612],
  612: [610, 611, 612],

  // Cubchoo line
  613: [613, 614], // Cubchoo -> Beartic
  614: [613, 614],

  // Cryogonal
  615: [615], // Cryogonal

  // Shelmet line
  616: [616, 617], // Shelmet -> Accelgor
  617: [616, 617],

  // Stunfisk
  618: [618], // Stunfisk

  // Mienfoo line
  619: [619, 620], // Mienfoo -> Mienshao
  620: [619, 620],

  // Druddigon
  621: [621], // Druddigon

  // Golett line
  622: [622, 623], // Golett -> Golurk
  623: [622, 623],

  // Pawniard line
  624: [624, 625], // Pawniard -> Bisharp
  625: [624, 625],

  // Bouffalant
  626: [626], // Bouffalant

  // Rufflet line
  627: [627, 628], // Rufflet -> Braviary
  628: [627, 628],

  // Vullaby line
  629: [629, 630], // Vullaby -> Mandibuzz
  630: [629, 630],

  // Heatmor
  631: [631], // Heatmor

  // Durant
  632: [632], // Durant

  // Deino line
  633: [633, 634, 635], // Deino -> Zweilous -> Hydreigon
  634: [633, 634, 635],
  635: [633, 634, 635],

  // Larvesta line
  636: [636, 637], // Larvesta -> Volcarona
  637: [636, 637],

  // Cobalion, Terrakion, Virizion
  638: [638], // Cobalion
  639: [639], // Terrakion
  640: [640], // Virizion

  // Tornadus, Thundurus
  641: [641], // Tornadus
  642: [642], // Thundurus

  // Reshiram, Zekrom
  643: [643], // Reshiram
  644: [644], // Zekrom

  // Landorus
  645: [645], // Landorus

  // Kyurem
  646: [646], // Kyurem

  // Keldeo
  647: [647], // Keldeo

  // Meloetta
  648: [648], // Meloetta

  // Genesect
  649: [649], // Genesect

  // Generation 6 Pokemon (650-721) - Kalos
  // Kalos Starters
  650: [650, 651, 652], // Chespin -> Quilladin -> Chesnaught
  651: [650, 651, 652],
  652: [650, 651, 652],

  653: [653, 654, 655], // Fennekin -> Braixen -> Delphox
  654: [653, 654, 655],
  655: [653, 654, 655],

  656: [656, 657, 658], // Froakie -> Frogadier -> Greninja
  657: [656, 657, 658],
  658: [656, 657, 658],

  // Bunnelby line
  659: [659, 660], // Bunnelby -> Diggersby
  660: [659, 660],

  // Fletchling line
  661: [661, 662, 663], // Fletchling -> Fletchinder -> Talonflame
  662: [661, 662, 663],
  663: [661, 662, 663],

  // Scatterbug line
  664: [664, 665, 666], // Scatterbug -> Spewpa -> Vivillon
  665: [664, 665, 666],
  666: [664, 665, 666],

  // Litleo line
  667: [667, 668], // Litleo -> Pyroar
  668: [667, 668],

  // Flabébé line
  669: [669, 670, 671], // Flabébé -> Floette -> Florges
  670: [669, 670, 671],
  671: [669, 670, 671],

  // Skiddo line  
  672: [672, 673], // Skiddo -> Gogoat
  673: [672, 673],

  // Pancham line
  674: [674, 675], // Pancham -> Pangoro
  675: [674, 675],

  // Furfrou
  676: [676], // Furfrou

  // Espurr line
  677: [677, 678], // Espurr -> Meowstic
  678: [677, 678],

  // Honedge line
  679: [679, 680, 681], // Honedge -> Doublade -> Aegislash
  680: [679, 680, 681],
  681: [679, 680, 681],

  // Spritzee line
  682: [682, 683], // Spritzee -> Aromatisse
  683: [682, 683],

  // Swirlix line
  684: [684, 685], // Swirlix -> Slurpuff
  685: [684, 685],

  // Inkay line
  686: [686, 687], // Inkay -> Malamar
  687: [686, 687],

  // Binacle line
  688: [688, 689], // Binacle -> Barbaracle
  689: [688, 689],

  // Skrelp line
  690: [690, 691], // Skrelp -> Dragalge
  691: [690, 691],

  // Clauncher line
  692: [692, 693], // Clauncher -> Clawitzer
  693: [692, 693],

  // Helioptile line
  694: [694, 695], // Helioptile -> Heliolisk
  695: [694, 695],

  // Tyrunt line
  696: [696, 697], // Tyrunt -> Tyrantrum
  697: [696, 697],

  // Amaura line
  698: [698, 699], // Amaura -> Aurorus
  699: [698, 699],

  // Hawlucha
  701: [701], // Hawlucha

  // Dedenne
  702: [702], // Dedenne

  // Carbink
  703: [703], // Carbink

  // Goomy line
  704: [704, 705, 706], // Goomy -> Sliggoo -> Goodra
  705: [704, 705, 706],
  706: [704, 705, 706],

  // Klefki
  707: [707], // Klefki

  // Phantump line
  708: [708, 709], // Phantump -> Trevenant
  709: [708, 709],

  // Pumpkaboo line
  710: [710, 711], // Pumpkaboo -> Gourgeist
  711: [710, 711],

  // Bergmite line
  712: [712, 713], // Bergmite -> Avalugg
  713: [712, 713],

  // Noibat line
  714: [714, 715], // Noibat -> Noivern
  715: [714, 715],

  // Xerneas, Yveltal, Zygarde
  716: [716], // Xerneas
  717: [717], // Yveltal
  718: [718], // Zygarde

  // Diancie
  719: [719], // Diancie

  // Hoopa
  720: [720], // Hoopa

  // Volcanion
  721: [721], // Volcanion

  // Generation 7 Pokemon (722-809) - Alola
  // Alola Starters
  722: [722, 723, 724], // Rowlet -> Dartrix -> Decidueye
  723: [722, 723, 724],
  724: [722, 723, 724],

  725: [725, 726, 727], // Litten -> Torracat -> Incineroar
  726: [725, 726, 727],
  727: [725, 726, 727],

  728: [728, 729, 730], // Popplio -> Brionne -> Primarina
  729: [728, 729, 730],
  730: [728, 729, 730],

  // Pikipek line
  731: [731, 732, 733], // Pikipek -> Trumbeak -> Toucannon
  732: [731, 732, 733],
  733: [731, 732, 733],

  // Yungoos line
  734: [734, 735], // Yungoos -> Gumshoos
  735: [734, 735],

  // Grubbin line
  736: [736, 737, 738], // Grubbin -> Charjabug -> Vikavolt
  737: [736, 737, 738],
  738: [736, 737, 738],

  // Crabrawler line
  739: [739, 740], // Crabrawler -> Crabominable
  740: [739, 740],

  // Oricorio
  741: [741], // Oricorio

  // Cutiefly line
  742: [742, 743], // Cutiefly -> Ribombee
  743: [742, 743],

  // Rockruff line
  744: [744, 745], // Rockruff -> Lycanroc
  745: [744, 745],

  // Wishiwashi
  746: [746], // Wishiwashi

  // Mareanie line
  747: [747, 748], // Mareanie -> Toxapex
  748: [747, 748],

  // Mudbray line
  749: [749, 750], // Mudbray -> Mudsdale
  750: [749, 750],

  // Dewpider line
  751: [751, 752], // Dewpider -> Araquanid
  752: [751, 752],

  // Fomantis line
  753: [753, 754], // Fomantis -> Lurantis
  754: [753, 754],

  // Morelull line
  755: [755, 756], // Morelull -> Shiinotic
  756: [755, 756],

  // Salandit line
  757: [757, 758], // Salandit -> Salazzle
  758: [757, 758],

  // Stufful line
  759: [759, 760], // Stufful -> Bewear
  760: [759, 760],

  // Bounsweet line
  761: [761, 762, 763], // Bounsweet -> Steenee -> Tsareena
  762: [761, 762, 763],
  763: [761, 762, 763],

  // Comfey
  764: [764], // Comfey

  // Oranguru
  765: [765], // Oranguru

  // Passimian
  766: [766], // Passimian

  // Wimpod line
  767: [767, 768], // Wimpod -> Golisopod
  768: [767, 768],

  // Sandygast line
  769: [769, 770], // Sandygast -> Palossand
  770: [769, 770],

  // Pyukumuku
  771: [771], // Pyukumuku

  // Type: Null line
  772: [772, 773], // Type: Null -> Silvally
  773: [772, 773],

  // Minior
  774: [774], // Minior

  // Komala
  775: [775], // Komala

  // Turtonator
  776: [776], // Turtonator

  // Togedemaru
  777: [777], // Togedemaru

  // Mimikyu
  778: [778], // Mimikyu

  // Bruxish
  779: [779], // Bruxish

  // Drampa
  780: [780], // Drampa

  // Dhelmise
  781: [781], // Dhelmise

  // Jangmo-o line
  782: [782, 783, 784], // Jangmo-o -> Hakamo-o -> Kommo-o
  783: [782, 783, 784],
  784: [782, 783, 784],

  // Tapu Koko, Tapu Lele, Tapu Bulu, Tapu Fini
  785: [785], // Tapu Koko
  786: [786], // Tapu Lele
  787: [787], // Tapu Bulu
  788: [788], // Tapu Fini

  // Cosmog line
  789: [789, 790, 791], // Cosmog -> Cosmoem -> Solgaleo
  790: [789, 790, 791],
  791: [789, 790, 791],
  792: [789, 790, 792], // Cosmog -> Cosmoem -> Lunala

  // Necrozma
  800: [800], // Necrozma

  // Magearna
  801: [801], // Magearna

  // Marshadow
  802: [802], // Marshadow

  // Zeraora
  807: [807], // Zeraora

  // Generation 8 Pokemon (810-905) - Galar
  // Galar Starters
  810: [810, 811, 812], // Grookey -> Thwackey -> Rillaboom
  811: [810, 811, 812],
  812: [810, 811, 812],

  813: [813, 814, 815], // Scorbunny -> Raboot -> Cinderace
  814: [813, 814, 815],
  815: [813, 814, 815],

  816: [816, 817, 818], // Sobble -> Drizzile -> Inteleon
  817: [816, 817, 818],
  818: [816, 817, 818],

  // Skwovet line
  819: [819, 820], // Skwovet -> Greedent
  820: [819, 820],

  // Rookidee line
  821: [821, 822, 823], // Rookidee -> Corvisquire -> Corviknight
  822: [821, 822, 823],
  823: [821, 822, 823],

  // Blipbug line
  824: [824, 825, 826], // Blipbug -> Dottler -> Orbeetle
  825: [824, 825, 826],
  826: [824, 825, 826],

  // Nickit line
  827: [827, 828], // Nickit -> Thievul
  828: [827, 828],

  // Gossifleur line
  829: [829, 830], // Gossifleur -> Eldegoss
  830: [829, 830],

  // Wooloo line
  831: [831, 832], // Wooloo -> Dubwool
  832: [831, 832],

  // Chewtle line
  833: [833, 834], // Chewtle -> Drednaw
  834: [833, 834],

  // Yamper line
  835: [835, 836], // Yamper -> Boltund
  836: [835, 836],

  // Rolycoly line
  837: [837, 838, 839], // Rolycoly -> Carkol -> Coalossal
  838: [837, 838, 839],
  839: [837, 838, 839],

  // Applin line
  840: [840, 841], // Applin -> Flapple
  841: [840, 841],
  842: [840, 842], // Applin -> Appletun
  1011: [840, 1011], // Applin -> Dipplin

  // Silicobra line
  843: [843, 844], // Silicobra -> Sandaconda
  844: [843, 844],

  // Cramorant
  845: [845], // Cramorant

  // Arrokuda line
  846: [846, 847], // Arrokuda -> Barraskewda
  847: [846, 847],

  // Toxel line
  848: [848, 849], // Toxel -> Toxtricity
  849: [848, 849],

  // Sizzlipede line
  850: [850, 851], // Sizzlipede -> Centiskorch
  851: [850, 851],

  // Clobbopus line
  852: [852, 853], // Clobbopus -> Grapploct
  853: [852, 853],

  // Sinistea line
  854: [854, 855], // Sinistea -> Polteageist
  855: [854, 855],

  // Hatenna line
  856: [856, 857, 858], // Hatenna -> Hattrem -> Hatterene
  857: [856, 857, 858],
  858: [856, 857, 858],

  // Impidimp line
  859: [859, 860, 861], // Impidimp -> Morgrem -> Grimmsnarl
  860: [859, 860, 861],
  861: [859, 860, 861],

  // Obstagoon line (Galarian)
  862: [263, 264, 862], // Zigzagoon -> Linoone -> Obstagoon

  // Perrserker line (Galarian)
  863: [52, 863], // Meowth -> Perrserker

  // Cursola line (Galarian)
  // Already defined: 864: [222, 864]

  // Mr. Rime line (Galarian)
  866: [439, 122, 866], // Mime Jr. -> Mr. Mime -> Mr. Rime

  // Runerigus line (Galarian)
  867: [562, 867], // Yamask -> Runerigus

  // Milcery line
  868: [868, 869], // Milcery -> Alcremie
  869: [868, 869],

  // Falinks
  870: [870], // Falinks

  // Pincurchin
  871: [871], // Pincurchin

  // Snom line
  872: [872, 873], // Snom -> Frosmoth
  873: [872, 873],

  // Stonjourner
  874: [874], // Stonjourner

  // Eiscue
  875: [875], // Eiscue

  // Indeedee
  876: [876], // Indeedee

  // Morpeko
  877: [877], // Morpeko

  // Cufant line
  878: [878, 879], // Cufant -> Copperajah
  879: [878, 879],

  // Dracozolt
  880: [880], // Dracozolt

  // Arctozolt
  881: [881], // Arctozolt

  // Dracovish
  882: [882], // Dracovish

  // Arctovish
  883: [883], // Arctovish

  // Duraludon line
  884: [884, 1018], // Duraludon -> Archaludon
  1018: [884, 1018],

  // Dreepy line
  885: [885, 886, 887], // Dreepy -> Drakloak -> Dragapult
  886: [885, 886, 887],
  887: [885, 886, 887],

  // Zacian
  888: [888], // Zacian

  // Zamazenta
  889: [889], // Zamazenta

  // Eternatus
  890: [890], // Eternatus

  // Kubfu line
  891: [891, 892], // Kubfu -> Urshifu
  892: [891, 892],

  // Regieleki
  894: [894], // Regieleki

  // Regidrago
  895: [895], // Regidrago

  // Glastrier
  896: [896], // Glastrier

  // Spectrier
  897: [897], // Spectrier

  // Calyrex
  898: [898], // Calyrex

  // Generation 9 Pokemon (906-1025) - Paldea
  // Paldea Starters
  906: [906, 907, 908], // Sprigatito -> Floragato -> Meowscarada
  907: [906, 907, 908],
  908: [906, 907, 908],

  909: [909, 910, 911], // Fuecoco -> Crocalor -> Skeledirge
  910: [909, 910, 911],
  911: [909, 910, 911],

  912: [912, 913, 914], // Quaxly -> Quaxwell -> Quaquaval
  913: [912, 913, 914],
  914: [912, 913, 914],

  // Lechonk line
  915: [915, 916], // Lechonk -> Oinkologne
  916: [915, 916],

  // Tarountula line
  917: [917, 918], // Tarountula -> Spidops
  918: [917, 918],

  // Nymble line
  919: [919, 920], // Nymble -> Lokix
  920: [919, 920],

  // Pawmi line
  921: [921, 922, 923], // Pawmi -> Pawmo -> Pawmot
  922: [921, 922, 923],
  923: [921, 922, 923],

  // Tandemaus line
  924: [924, 925], // Tandemaus -> Maushold
  925: [924, 925],

  // Fidough line
  926: [926, 927], // Fidough -> Dachsbun
  927: [926, 927],

  // Smoliv line
  928: [928, 929, 930], // Smoliv -> Dolliv -> Arboliva
  929: [928, 929, 930],
  930: [928, 929, 930],

  // Squawkabilly
  931: [931], // Squawkabilly

  // Nacli line
  932: [932, 933, 934], // Nacli -> Naclstack -> Garganacl
  933: [932, 933, 934],
  934: [932, 933, 934],

  // Charcadet line
  935: [935, 936], // Charcadet -> Armarouge
  936: [935, 936],
  937: [935, 937], // Charcadet -> Ceruledge

  // Tadbulb line
  938: [938, 939], // Tadbulb -> Bellibolt
  939: [938, 939],

  // Wattrel line
  940: [940, 941], // Wattrel -> Kilowattrel
  941: [940, 941],

  // Maschiff line
  942: [942, 943], // Maschiff -> Mabosstiff
  943: [942, 943],

  // Shroodle line
  944: [944, 945], // Shroodle -> Grafaiai
  945: [944, 945],

  // Bramblin line
  946: [946, 947], // Bramblin -> Brambleghast
  947: [946, 947],

  // Toedscool line
  948: [948, 949], // Toedscool -> Toedscruel
  949: [948, 949],

  // Klawf
  950: [950], // Klawf

  // Capsakid line
  951: [951, 952], // Capsakid -> Scovillain
  952: [951, 952],

  // Rellor line
  953: [953, 954], // Rellor -> Rabsca
  954: [953, 954],

  // Flittle line
  955: [955, 956], // Flittle -> Espathra
  956: [955, 956],

  // Tinkatink line
  957: [957, 958, 959], // Tinkatink -> Tinkaton -> Tinkaton
  958: [957, 958, 959],
  959: [957, 958, 959],

  // Wiglett line
  960: [960, 961], // Wiglett -> Wugtrio
  961: [960, 961],

  // Bombirdier
  962: [962], // Bombirdier

  // Finizen line
  963: [963, 964], // Finizen -> Palafin
  964: [963, 964],

  // Varoom line
  965: [965, 966], // Varoom -> Revavroom
  966: [965, 966],

  // Cyclizar
  967: [967], // Cyclizar

  // Orthworm
  968: [968], // Orthworm

  // Glimmet line
  969: [969, 970], // Glimmet -> Glimmora
  970: [969, 970],

  // Greavard line
  971: [971, 972], // Greavard -> Houndstone
  972: [971, 972],

  // Flamigo
  973: [973], // Flamigo

  // Cetoddle line
  974: [974, 975], // Cetoddle -> Cetitan
  975: [974, 975],

  // Veluza
  976: [976], // Veluza

  // Dondozo
  977: [977], // Dondozo

  // Tatsugiri
  978: [978], // Tatsugiri

  // Annihilape line
  979: [56, 57, 979], // Mankey -> Primeape -> Annihilape

  // Clodsire line
  980: [194, 980], // Wooper -> Clodsire

  // Farigiraf line
  // Already defined: 981: [203, 981]

  // Dudunsparce line
  // Already defined: 982: [206, 982]

  // Kingambit line
  983: [624, 625, 983], // Pawniard -> Bisharp -> Kingambit

  // Great Tusk
  984: [984], // Great Tusk

  // Scream Tail
  985: [985], // Scream Tail

  // Brute Bonnet
  986: [986], // Brute Bonnet

  // Flutter Mane
  987: [987], // Flutter Mane

  // Slither Wing
  988: [988], // Slither Wing

  // Sandy Shocks
  989: [989], // Sandy Shocks

  // Iron Treads
  990: [990], // Iron Treads

  // Iron Bundle
  991: [991], // Iron Bundle

  // Iron Hands
  992: [992], // Iron Hands

  // Iron Jugulis
  993: [993], // Iron Jugulis

  // Iron Moth
  994: [994], // Iron Moth

  // Iron Thorns
  995: [995], // Iron Thorns

  // Frigibax line
  996: [996, 997, 998], // Frigibax -> Arctibax -> Baxcalibur
  997: [996, 997, 998],
  998: [996, 997, 998],

  // Gimmighoul line
  999: [999, 1000], // Gimmighoul -> Gholdengo
  1000: [999, 1000],

  // Wo-Chien
  1001: [1001], // Wo-Chien

  // Chien-Pao
  1002: [1002], // Chien-Pao

  // Ting-Lu
  1003: [1003], // Ting-Lu

  // Chi-Yu
  1004: [1004], // Chi-Yu

  // Roaring Moon
  1005: [1005], // Roaring Moon

  // Iron Valiant
  1006: [1006], // Iron Valiant

  // Koraidon
  1007: [1007], // Koraidon

  // Miraidon
  1008: [1008], // Miraidon

  // Walking Wake
  1009: [1009], // Walking Wake

  // Iron Leaves
  1010: [1010], // Iron Leaves

  // Hydrapple line
  1012: [840, 1011, 1012], // Applin -> Dipplin -> Hydrapple

  // Gouging Fire
  1013: [1013], // Gouging Fire

  // Raging Bolt
  1014: [1014], // Raging Bolt

  // Iron Boulder
  1015: [1015], // Iron Boulder

  // Iron Crown
  1016: [1016], // Iron Crown

  // Terapagos
  1024: [1024], // Terapagos

  // Pecharunt
  1025: [1025], // Pecharunt
};

// Helper function to get evolution chain for a Pokemon ID
export const getEvolutionChain = (pokemonId) => {
  return evolutionChains[pokemonId] || [pokemonId];
};

// Helper function to get evolution stage (0 = base, 1 = first evolution, etc.)
export const getEvolutionStage = (pokemonId) => {
  const chain = getEvolutionChain(pokemonId);
  return chain.indexOf(pokemonId);
};

// Helper function to check if Pokemon can evolve
export const canEvolve = (pokemonId) => {
  const chain = getEvolutionChain(pokemonId);
  const stage = getEvolutionStage(pokemonId);
  return stage < chain.length - 1;
};

// Helper function to get next evolution
export const getNextEvolution = (pokemonId) => {
  const chain = getEvolutionChain(pokemonId);
  const stage = getEvolutionStage(pokemonId);
  return stage < chain.length - 1 ? chain[stage + 1] : null;
};

// Helper function to get previous evolution
export const getPreviousEvolution = (pokemonId) => {
  const chain = getEvolutionChain(pokemonId);
  const stage = getEvolutionStage(pokemonId);
  return stage > 0 ? chain[stage - 1] : null;
};