import { Cocktail } from "./Components/CocktailCard/CocktailCard.types";

export const Cocktails: Cocktail[] = [
  {
    id: 1,
    name: "manhattan",
    image_name: "manhattan",
    own_image_name: "own_manhattan",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "rye whiskey vagy canadian whisky",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "martini rosso",
      },
      {
        quantity: 1,
        unit: "dash",
        name: "angostura bitters",
      },
    ],
    technique: "keverőpohár",
    glass: "martini",
    decoration: "koktélcseresznye",
    instructions:
      "Töltsd az összetevőket jégre a keverőpohárba, majd keverés után szűrd a hűtött martinis pohárba!",
    other_info: "Ha skót whiskeyvel készíted, a koktél neve Rob Roy",
  },
  {
    id: 2,
    name: "frozen daiquiri",
    image_name: "frozen_daiquiri",
    own_image_name: "own_frozen_daiquiri",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 2,
        unit: "bsp",
        name: "nádcukor",
      },
    ],
    technique: "blender",
    glass: "daiquiri kehely (copue)",
    decoration: "limehéj, vagy limekarika",
    instructions:
      "Töltsd az összetevőket a blenderbe, majd a cukor feloldása után add hozzá a törtjeget és keverd simára!",
  },
  {
    id: 3,
    name: "passion fruit daiquiri",
    image_name: "passion_fruit_daiquiri",
    own_image_name: "own_passion_fruit_daiquiri",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 1,
        unit: "bsp",
        name: "nádcukor",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "monin passion fruit püré",
      },
    ],
    technique: "blender",
    glass: "daiquiri kehely (copue)",
    decoration: "friss passion fruit és/vagy limekarika",
    instructions:
      "Töltsd az összetevőket a blenderbe, majd a cukor feloldása után add hozzá a törtjeget és keverd simára!",
  },
  {
    id: 4,
    name: "daiquiri",
    image_name: "daiquiri",
    own_image_name: "own_daiquiri",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 2,
        unit: "bsp",
        name: "nádcukor",
      },
    ],
    technique: "shaker",
    glass: "cocktail",
    decoration: "-",
    instructions:
      "Töltsd az összetevőket a shakerbe, majd a cukor feloldása után intenzíven rád össze! Hűtött koktélos pohárba duplán szűrjük",
  },
  {
    id: 5,
    name: "strawberry daiquiri",
    image_name: "strawberry_daiquiri",
    own_image_name: "own_strawberry_daiquiri",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 1,
        unit: "bsp",
        name: "nádcukor",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "monin strawberry püré, vagy 4-5 szem friss eper",
      },
    ],
    technique: "blender",
    glass: "daiquiri kehely (copue)",
    decoration: "friss eper és/vagy limehéj, limekarika",
    instructions:
      "Töltsd az összetevőket a blenderbe, majd a cukor feloldása után add hozzá a törtjeget és keverd simára!",
  },
  {
    id: 6,
    name: "green apple daiquiri",
    image_name: "green_apple_daiquiri",
    own_image_name: "own_green_apple_daiquiri",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 1,
        unit: "bsp",
        name: "nádcukor",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "monin green apple püré",
      },
    ],
    technique: "blender",
    glass: "daiquiri kehely (copue)",
    decoration: "friss zöldalmaszelet és/vagy limehéj, limekarika",
    instructions:
      "Töltsd az összetevőket a blenderbe, majd a cukor feloldása után add hozzá a törtjeget és keverd simára!",
  },
  {
    id: 7,
    name: "mojito",
    image_name: "mojito",
    own_image_name: "own_mojito",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 2,
        unit: "bsp",
        name: "nádcukor",
      },
      {
        quantity: "10-12",
        unit: "db",
        name: "friss mentalevél",
      },
      {
        name: "szódavíz",
      },
    ],
    technique: "épített ital",
    glass: "long drink",
    decoration: "limecikk, friss mentaág",
    instructions:
      "Töltsd a pohárba a limelét, a cukrot és egy öntet szódát! Old fel a cukrot, majd add hozzá a friss mentát és gyengéden nyomkodd meg a muddlerrel! Ezután add hozzá a jeget, a rumot, a szódát és kever meg bárkanállal!",
    other_info:
      "Limetól függ a cukor/cukorszirup mennyisége. 2cl cukorszirup elég 3cl limehoz. Nem szabad megnyomkodni a mentát, mert keserű lesz. Helyette kézzel nyomd a pohár belső falához körbe-körbe. Zúzott jéggel jobb. A díszítés mentaágat ütögesd hozzá a pohárhoz, hogy kijöjjenek az illóolajok és utána szúrd a pohárba.",
  },
  {
    id: 8,
    name: "cuba libre",
    image_name: "cuba_libre",
    own_image_name: "own_cuba_libre",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        name: "kóla felöntése",
      },
    ],
    technique: "épített ital",
    glass: "long drink",
    decoration: "2 limecikk",
    instructions: "Töltsd jégre az összetevőket!",
  },
  {
    id: 9,
    name: "dry martini",
    image_name: "dry_martini",
    own_image_name: "own_dry_martini",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "gin",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "martini dry",
      },
    ],
    technique: "keverőpohár",
    glass: "martini",
    decoration: "olivabogyó, citromhéjpermet",
    instructions:
      "Forgasd át a vermutot a pohárban, majd töltsd az összetevőket a jégre a keverőpohárba és keverés után szűrd a hűtött martinis pohárba!",
    other_info:
      "VODKA MARTINI: Az ital megegyezik a DRY MARTINI-val, de az alapszeszt cseréld vodkára!",
  },
  {
    id: 10,
    name: "gibson",
    image_name: "gibson",
    own_image_name: "own_gibson",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "gin",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "martini dry",
      },
    ],
    technique: "keverőpohár",
    glass: "martini",
    decoration: "gyöngyhagyma, citromhéjpermet",
    instructions:
      "Forgasd át a vermutot a pohárban, majd töltsd az összetevőket a jégre a keverőpohárba és keverés után szűrd a hűtött martinis pohárba!",
    other_info:
      "VODKA GIBSON: Az ital megegyezik a GIBSON-val, de az alapszeszt cseréld vodkára!",
  },
  {
    id: 11,
    name: "espresso martini",
    image_name: "espresso_martini",
    own_image_name: "own_espresso_martini",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "vodka",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "kávélikőr",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "cukorszirup",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "frissen főzött espresso",
      },
    ],
    technique: "shaker",
    glass: "martini",
    decoration: "3 szem pörkölt kávé",
    instructions:
      "Az italt shakerben készítjük, majd hűtött koktélos pohárba duplán szűrjük.",
  },
  {
    id: 12,
    name: "hugo",
    image_name: "hugo",
    own_image_name: "own_hugo",
    ingredients: [
      {
        quantity: 6.0,
        unit: "cl",
        name: "prosecco",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "bodzaszirup",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "szóda",
      },
    ],
    technique: "épített ital",
    glass: "boros pohár",
    decoration: "friss menta, lime",
    instructions: "Töltsd jégre az összetevőket, majd keverd meg bárkanállal!",
  },
  {
    id: 13,
    name: "gin and tonic",
    image_name: "gin_and_tonic",
    own_image_name: "own_gin_and_tonic",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "gin",
      },
      {
        name: "tonik felöntése",
      },
    ],
    technique: "épített ital",
    glass: "boros pohár",
    decoration:
      "dehidratált lime, friss lime karika, bors, narancs, csillagánizs, friss bazsalikom, uborka spirál stb...",
    instructions: "Töltsd jégre az összetevőket, majd keverd meg bárkanállal!",
  },
  {
    id: 14,
    name: "aperol spitz",
    image_name: "aperol_spitz",
    own_image_name: "own_aperol_spitz",
    ingredients: [
      {
        quantity: 6.0,
        unit: "cl",
        name: "prosecco",
      },
      {
        quantity: 4.0,
        unit: "cl",
        name: "aperol",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "szóda",
      },
    ],
    technique: "épített ital",
    glass: "boros pohár",
    decoration: "fél szelet narancs",
    instructions: "Töltsd jégre az összetevőket, majd keverd meg bárkanállal!",
  },
  {
    id: 15,
    name: "negroni",
    image_name: "negroni",
    own_image_name: "own_negroni",
    ingredients: [
      {
        quantity: 3.0,
        unit: "cl",
        name: "gin",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "campari",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "martini rosso",
      },
    ],
    technique: "épített ital / keverőpohár",
    glass: "old fashioned",
    decoration: "narancs cikk és / vagy narancshéj permet",
    instructions:
      "Töltsd az összetevőket jégre a keverőpohárba, majd keverés után szűrd old fashioned pohárba!",
  },
  {
    id: 16,
    name: "americano",
    image_name: "americano",
    own_image_name: "own_americano",
    ingredients: [
      {
        quantity: 3.0,
        unit: "cl",
        name: "campari",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "martini rosso",
      },
      {
        quantity: 1,
        unit: "öntet",
        name: "szóda",
      },
    ],
    technique: "épített ital",
    glass: "old fashioned",
    decoration: "narancs cikk és / vagy narancshéj permet",
    instructions:
      "Hűtsd le az old fashioned vagy colins poharat, majd töltsd jégre az összetevőket, végül kever meg bárkanállal!",
  },
  {
    id: 17,
    name: "margarita",
    image_name: "margarita",
    own_image_name: "own_margarita",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "tequila",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin triple sec",
      },
      {
        quantity: 2,
        unit: "cl",
        name: "limelé",
      },
    ],
    technique: "shaker",
    glass: "cocktail",
    decoration: "só crusta, limekarika",
    instructions:
      "Az italt shakerben készítjük, majd a hűtött koktélos pohárba duplán szűrjük.",
  },
  {
    id: 18,
    name: "frozen margarita",
    image_name: "frozen_margarita",
    own_image_name: "own_frozen_margarita",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "tequila",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin triple sec",
      },
      {
        quantity: 2,
        unit: "cl",
        name: "limelé",
      },
    ],
    technique: "blender",
    glass: "margarita",
    decoration: "só crusta, limehéj és/vagy limekarika",
    instructions:
      "Töltsd az összetevőket a blenderbe, add hozzá a törtjeget és keverd simára!",
  },
  {
    id: 19,
    name: "raspberry margarita",
    image_name: "raspberry_margarita",
    own_image_name: "own_raspberry_margarita",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "tequila",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin triple sec",
      },
      {
        quantity: 2,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "monin raspberry püré",
      },
    ],
    technique: "blender",
    glass: "margarita",
    decoration: "málna, limehéj vagy limekarika",
    instructions:
      "Töltsd az összetevőket a blenderbe, add hozzá a törtjeget és keverd simára!",
  },
  {
    id: 20,
    name: "blue margarita",
    image_name: "blue_margarita",
    own_image_name: "own_blue_margarita",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "tequila",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin blue curacao",
      },
      {
        quantity: 2,
        unit: "cl",
        name: "limelé",
      },
    ],
    technique: "blender",
    glass: "margarita",
    decoration: "imehéj vagy limekarika",
    instructions:
      "Töltsd az összetevőket a blenderbe, add hozzá a törtjeget és keverd simára!",
  },
  {
    id: 21,
    name: "bellini",
    image_name: "bellini",
    own_image_name: "own_bellini",
    ingredients: [
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin peach püré",
      },
      {
        quantity: 1.0,
        unit: "dl",
        name: "prosecco",
      },
    ],
    technique: "keverőpohár",
    glass: "pezsgős",
    decoration: "-",
    instructions:
      "Töltsd az összetevőket jégre a keverőpohárba, gyengéden keverd meg, majd szűrd át a pezsgőspohárba.",
  },
  {
    id: 22,
    name: "testarossa",
    image_name: "testarossa",
    own_image_name: "own_testarossa",
    ingredients: [
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin strawberry püré",
      },
      {
        quantity: 1.0,
        unit: "dl",
        name: "száraz pezsgő",
      },
    ],
    technique: "keverőpohár",
    glass: "pezsgős",
    decoration: "-",
    instructions:
      "Töltsd az összetevőket jégre a keverőpohárba, gyengéden keverd meg, majd szűrd át a pezsgőspohárba.",
  },
  {
    id: 23,
    name: "kir royal",
    image_name: "kir_royal",
    own_image_name: "own_kir_royal",
    ingredients: [
      {
        quantity: 1.0,
        unit: "cl",
        name: "monin créme de cassis",
      },
      {
        quantity: 1.0,
        unit: "dl",
        name: "száraz pezsgő",
      },
    ],
    technique: "épített ital",
    glass: "pezsgős",
    decoration: "-",
    instructions:
      "Töltsd a Cassis-t a pezsgőspohárba, majd töltsd fel pezsgővel úgy, hogy összekeveredjen!",
  },
  {
    id: 24,
    name: "mimosa",
    image_name: "mimosa",
    own_image_name: "own_mimosa",
    ingredients: [
      {
        quantity: "1/2",
        unit: "rész",
        name: "narancslé",
      },
      {
        quantity: "1/2",
        unit: "rész",
        name: "száraz pezsgő",
      },
    ],
    technique: "épített ital",
    glass: "pezsgős",
    decoration: "-",
    instructions:
      "Töltsd a narancslét a pezsgőspohárba, majd töltsd fel a pezsgővel úgy, hogy összekeveredjen!",
  },
  {
    id: 25,
    name: "tequila sunrise",
    image_name: "tequila_sunrise",
    own_image_name: "own_tequila_sunrise",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "tequila",
      },
      {
        name: "narancslé feltöltés",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "monin grenadine",
      },
    ],
    technique: "épített ital",
    glass: "hurricane",
    decoration: "narancs cikk, koktélcseresznye",
    instructions:
      "Töltsd a tequilát és a narancslét jégre, keverd meg bárkanállal, majd öntsd bele a grenadint!",
  },
  {
    id: 26,
    name: "b52",
    image_name: "b52",
    own_image_name: "own_b52",
    ingredients: [
      {
        quantity: "1/3",
        unit: "rész",
        name: "kávélikőr",
      },
      {
        quantity: "1/3",
        unit: "rész",
        name: "irish cream liqueur",
      },
      {
        quantity: "1/3",
        unit: "rész",
        name: "narancshéj likőr",
      },
    ],
    technique: "épített ital",
    glass: "shot",
    decoration: "-",
    instructions:
      "Bárkanál segítségével rétegezd egymásra az összetevőket. Meggyújtva, szívószállal szervírozd!",
  },
  {
    id: 27,
    name: "bloody brain",
    image_name: "bloody_brain",
    own_image_name: "own_bloody_brain",
    ingredients: [
      {
        quantity: "2/3",
        unit: "rész",
        name: "peachtree őszibarack likőr",
      },
      {
        quantity: "1/3",
        unit: "rész",
        name: "irish cream liqueur",
      },
      {
        quantity: "1-2",
        unit: "csepp",
        name: "monin grenadine",
      },
    ],
    technique: "épített ital",
    glass: "shot",
    decoration: "-",
    instructions:
      "Bárkanál segítségével rétegezd a krémlikőrt a baracklikőrre, majd csepegtetsd bele a grenadint!",
  },
  {
    id: 28,
    name: "orgasm",
    image_name: "orgasm",
    own_image_name: "own_orgasm",
    ingredients: [
      {
        quantity: 3.0,
        unit: "cl",
        name: "irish cream liqueur",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "amaretto",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "narancshéj likőr",
      },
    ],
    technique: "shaker",
    glass: "cocktail",
    decoration: "koktélcseresznye",
    instructions:
      "Az italt shakerben készítjük, majd a hűtött koktélos pohárba duplán szűrjük.",
  },
  {
    id: 29,
    name: "chokito",
    image_name: "chokito",
    own_image_name: "own_chokito",
    ingredients: [
      {
        quantity: 2.0,
        unit: "cl",
        name: "vodka",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "irish cream liqueur",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "monin kókuszszirup",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "monin mandulaszirup (orgeat)",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "tejszín",
      },
    ],
    technique: "shaker",
    glass: "cocktail",
    decoration: "raffaello",
    instructions:
      "Az italt shakerben készítjük, majd a hűtött koktélos pohárba duplán szűrjük.",
  },
  {
    id: 30,
    name: "grasshopper",
    image_name: "grasshopper",
    own_image_name: "own_grasshopper",
    ingredients: [
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin zöld mentalikőr",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin fehér kakaólikőr",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "tejszín",
      },
    ],
    technique: "shaker",
    glass: "cocktail",
    decoration: "reszelt csokoládé",
    instructions:
      "Az italt shakerben készítjük, majd a hűtött koktélos pohárba duplán szűrjük.",
  },
  {
    id: 31,
    name: "long island iced tea",
    image_name: "long_island_iced_tea",
    own_image_name: "own_long_island_iced_tea",
    ingredients: [
      {
        quantity: 1.5,
        unit: "cl",
        name: "vodka",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "gin",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "tequila",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "monin triple sec",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "monin cukorszirup",
      },
      {
        quantity: 3,
        unit: "cikk",
        name: "citrom",
      },
      {
        quantity: 1,
        unit: "cikk",
        name: "narancs",
      },
      {
        name: "kóla felöntése",
      },
    ],
    technique: "épített ital / shaker",
    glass: "long drink",
    decoration: "-",
    instructions:
      "Töltsd jégre az italokat, add hozzá a citrusokat, töltd fel egy kevés kólával és keverd meg bárkanállal.",
  },
  {
    id: 32,
    name: "mai tai",
    image_name: "mai_tai",
    own_image_name: "own_mai_tai",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "bacardi black",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "bacardi gold",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "monin triple sec",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "orgeat (mandulaszirup)",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "lime",
      },
    ],
    technique: "shaker",
    glass: "old fashioned (nagy)",
    decoration: "narancs szelet, koktélcseresznye, limecikk, menta",
    instructions:
      "Az italt shakerben készítjük, majd törtjégre, old fashioned pohárba szűrjük.",
  },

  {
    id: 33,
    name: "gin fizz",
    image_name: "gin_fizz",
    own_image_name: "own_gin_fizz",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "gin",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "monin cukorszirup",
      },
      {
        name: "szódavíz felöntés",
      },
    ],
    technique: "shaker",
    glass: "longdrink",
    decoration: "citromkarika",
    instructions:
      "Az italt shakerben készítjük, majd a hűtött koktélos pohárba szűrjük, végül szódával felöntjük.",
  },

  {
    id: 34,
    name: "singapore sling",
    image_name: "singapore_sling",
    own_image_name: "own_singapore_sling",
    ingredients: [
      {
        quantity: 3.0,
        unit: "cl",
        name: "gin",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "meggylikőr",
      },
      {
        quantity: 0.75,
        unit: "cl",
        name: "bénédictine dom",
      },
      {
        quantity: 0.75,
        unit: "cl",
        name: "narancshéj likőr",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "monin grenadine",
      },
      {
        quantity: 1.0,
        unit: "dash",
        name: "angostura bitters",
      },
      {
        quantity: 12.0,
        unit: "cl",
        name: "ananászlé",
      },
    ],
    technique: "shaker",
    glass: "sling",
    decoration: "narancs cikk, koktélcseresznye",
    instructions:
      "Az italt shakerben készítjük, majd törtjégre, slinges pohárba szűrjük!",
  },

  {
    id: 35,
    name: "fruit caipirinha",
    image_name: "fruit_caipirinha",
    own_image_name: "own_fruit_caipirinha",
    ingredients: [
      {
        quantity: "1/2",
        name: "lime",
      },
      {
        quantity: "3-4",
        unit: "dkg",
        name: "gyümölcs",
      },
      {
        quantity: 2.5,
        unit: "bsp",
        name: "fehér nádcukor",
      },
      {
        quantity: "5-6",
        unit: "cl",
        name: "cachaca (kászásá)",
      },
    ],
    technique: "épített ital",
    glass: "old fashioned (nagy)",
    decoration: "friss gyümölcs",
    instructions:
      "Vágd fel a lime-ot és a gyümölcsöt, tedd a pohárba, add hozzá a cukrot és nyomkodd meg mudlerrel! Töltsd fel a poharat jéggel, add hozzá a Cachaca-t és keverd meg bárkanállal!",
  },

  {
    id: 36,
    name: "caipirinha",
    image_name: "caipirinha",
    own_image_name: "own_caipirinha",
    ingredients: [
      {
        quantity: 1.0,
        unit: "db",
        name: "lime",
      },
      {
        quantity: 2.5,
        unit: "bsp",
        name: "cukor",
      },
      {
        quantity: "5-6",
        unit: "cl",
        name: "cachaca (kászásá)",
      },
    ],
    technique: "épített ital",
    glass: "old fashioned (nagy)",
    decoration: "-",
    instructions:
      "Vágd fel a lime-ot 8 felé, tedd a pohárba, add hozzá a cukrot és nyomkodd meg a muddlerrel, töltsd fel a poharat jéggel, idd hozzá a Cachaca-t és keverd meg bárkanállal!",
    other_info:
      "Caiprissima: Az ital megegyezik a Caiprinha-val, de az alapszeszt cseréld rumra! Caipiroska: Az ital megegyezik a Caiprinha-val, de az alapszeszt cseréld vodkára!!",
  },
  {
    id: 37,
    name: "old fashioned",
    image_name: "old_fashioned",
    own_image_name: "own_old_fashioned",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "bourbon vagy rye whiskey",
      },
      {
        quantity: 1.0,
        unit: "db",
        name: "kockacukor",
      },
      {
        quantity: 1.0,
        unit: "dash",
        name: "angostura bitters",
      },
      {
        quantity: 1.0,
        unit: "cikk",
        name: "narancs",
      },
      {
        name: "szódavíz felöntés",
      },
    ],
    technique: "épített ital / keverőpohár",
    glass: "old fashioned",
    decoration: "narancs cikk, koktélcseresznye",
    instructions:
      "Tégy egy Angosturával átitatott kockacukrot a lehűtött pohárba! Tölts rá egy kevés szódát és nyomkodd meg muddlerrel! Töltsd fel a poharat kockajéggel, add hozzá a whiskey-t, a narancscikket, egy öntet szódát és keverd meg bárkanállal!",
  },
  {
    id: 38,
    name: "whiskey sour",
    image_name: "whiskey_sour",
    own_image_name: "own_whiskey_sour",
    ingredients: [
      {
        quantity: 5.0,
        unit: "cl",
        name: "bourbon whiskey",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "citromlé",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "monin cukorszirup",
      },
      {
        quantity: "1/2",
        name: "tojásfehérje",
      },
    ],
    technique: "shaker",
    glass: "old fashioned",
    decoration: "koktélcseresznye, narancshéj permet",
    instructions:
      "Az italt shakerben készítjük, majd hűtött old fashioned pohárba jégre töltjük.",
  },

  {
    id: 39,
    name: "bloody mary",
    image_name: "bloody_mary",
    own_image_name: "own_bloody_mary",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "vodka",
      },
      {
        name: "só, bors",
      },
      {
        name: "tabasco",
      },
      {
        name: "worcestershire",
      },
      {
        name: "citromlé",
      },
      {
        name: "paradicsomlé feltöltés",
      },
    ],
    technique: "épített ital",
    glass: "long drink",
    decoration: "friss zellerszár",
    instructions:
      "Töltsd a vodkát jégre, a lehűtött long drink pohárba. Add hozzá a fűszereket és a citromlét, töltsd fel paradicsomlével és keverd meg bárkanállal!",
  },

  {
    id: 40,
    name: "screwdriver",
    image_name: "screwdriver",
    own_image_name: "own_screwdriver",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "vodka",
      },
      {
        name: "narancslé feltöltés",
      },
    ],
    technique: "épített ital",
    glass: "long drink",
    decoration: "narancscikk",
    instructions:
      "Töltsd az összetevőket jégre a lehűtött long drink pohárba, majd keverd meg bárkanállal!",
  },

  {
    id: 41,
    name: "cosmopolitan",
    image_name: "cosmopolitan",
    own_image_name: "own_cosmopolitan",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "vodka",
      },
      {
        quantity: 2.5,
        unit: "cl",
        name: "monin triple sec",
      },
      {
        quantity: 1.5,
        unit: "cl",
        name: "limelé",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "áfonyalé",
      },
    ],
    technique: "shaker",
    glass: "martini",
    decoration: "narancshéj permet",
    instructions:
      "Az italt shakerben készítjük, majd hűtött martinis pohárba duplán szűrjük!",
  },
  {
    id: 42,
    name: "kamikaze",
    image_name: "kamikaze",
    own_image_name: "own_kamikaze",
    ingredients: [
      {
        quantity: 2.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "monin triple sec",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "limelé",
      },
    ],
    technique: "shaker",
    glass: "shot",
    decoration: "-",
    instructions:
      "Az italt shakerben készítjük, majd hűtött shot pohárba szűrjük.",
  },
  {
    id: 43,
    name: "fruit kamikaze",
    image_name: "fruit_kamikaze",
    own_image_name: "own_fruit_kamikaze",
    ingredients: [
      {
        quantity: 2.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "monin gyümölcs szirup vagy püré",
      },
      {
        quantity: 1.0,
        unit: "cl",
        name: "limelé",
      },
    ],
    technique: "shaker",
    glass: "shot",
    decoration: "-",
    instructions:
      "Az italt shakerben készítjük, majd hűtött shot pohárba szűrjük.",
  },
  {
    id: 44,
    name: "swimming pool",
    image_name: "swimming_pool",
    own_image_name: "own_swimming_pool",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "vodka",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "monin kókuszszirup",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin blue curacao",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "tejszín",
      },
      {
        quantity: 10.0,
        unit: "cl",
        name: "ananászlé",
      },
    ],
    technique: "blender / speed mixer",
    glass: "hurricane",
    decoration: "ananászcikk, koktélcseresznye",
    instructions:
      "Tégy a blenderbe, vagy a speed mixerbe egy lapát törtjeget, add hozzá az összetevőket és keverd simára!",
  },
  {
    id: 45,
    name: "strawberry colada",
    image_name: "strawberry_colada",
    own_image_name: "own_strawberry_colada",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "monin kókuszszirup",
      },
      {
        quantity: "4-5",
        unit: "dkg",
        name: "friss eper",
      },
      {
        quantity: "[VAGY 2.0",
        unit: "cl",
        name: "monin strawberry püré]",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "tejszín",
      },
      {
        quantity: 10.0,
        unit: "cl",
        name: "ananászlé",
      },
    ],
    technique: "blender / speed mixer",
    glass: "hurricane",
    decoration: "friss eper, (könyvben: ananászcikk, koktélcseresznye)",
    instructions:
      "Tégy a blenderbe, vagy a speed mixerbe egy lapát törtjeget, add hozzá az összetevőket és keverd simára!",
  },
  {
    id: 46,
    name: "piña colada",
    image_name: "pina_colada",
    own_image_name: "own_pina_colada",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "fehér rum",
      },
      {
        quantity: 3.0,
        unit: "cl",
        name: "monin kókuszszirup",
      },
      {
        quantity: "4-5",
        unit: "dkg",
        name: "friss ananász",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "tejszín",
      },
      {
        quantity: 10.0,
        unit: "cl",
        name: "ananászlé",
      },
    ],
    technique: "blender / speed mixer",
    glass: "hurricane",
    decoration: "ananászcikk, koktélcseresznye",
    instructions:
      "Tégy a blenderbe, vagy a speed mixerbe egy lapát törtjeget, add hozzá az összetevőket és keverd simára!",
  },
  {
    id: 47,
    name: "sex on the beach",
    image_name: "sex_on_the_beach",
    own_image_name: "own_sex_on_the_beach",
    ingredients: [
      {
        quantity: 4.0,
        unit: "cl",
        name: "vodka",
      },
      {
        quantity: 2.0,
        unit: "cl",
        name: "őszibarack likőr",
      },
      {
        quantity: 8.0,
        unit: "cl",
        name: "áfonyalé",
      },
      {
        quantity: 8.0,
        unit: "cl",
        name: "narancslé",
      },
    ],
    technique: "épített ital / shaker",
    glass: "hurricane",
    decoration: "narancscikk, koktélcseresznye",
    instructions:
      "Töltsd jégre a pohárba az őszibaracklikőrt, a narancslét és keverd meg bárkanállal! Rázd össze shakerben a vodkát és az áfonyalét, majd óvatosan rétegezd rá az italra!",
  },
];
