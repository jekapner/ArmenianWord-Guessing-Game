import { CONFIG } from './config'

export const VALIDGUESSES = [
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
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
