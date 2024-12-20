import { CONFIG } from './config'

export const WORDS = [
  'կոճակ',
  'շաբաթ',
  'խաղող',
  'ծաղիկ',
  'խաղալ',
  'առաջին',
  'գոցել',
  'ցեղեկ',
  'շապիկ',
  'չամիչ',
  'փողոց',
  'պարոն',
  'տափատ',
  'արկած',
  'նորէն',
  'խնձոր',
  'ուրիշ',
  'որեւէ',
  'կապիկ',
  'կամար',
  'ծիրան',
  'մոխիր',
  'աշուն',
  'կացին',
  'հիւլէ',
  'զօդել',
  'թուիլ',
  'առնակ',
  'պանան',
  'գնդակ',
  'ճաղատ',
  'բոպիկ',
  'գարին',
  'հաջել',
  'տակառ',
  'ռեհան',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
