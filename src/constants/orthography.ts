import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ա',
  'բ',
  'գ',
  'դ',
  'ե',
  'զ',
  'է',
  'ը',
  'թ',
  'ժ',
  'ի',
  'լ',
  'խ',
  'ծ',
  'կ',
  'հ',
  'ձ',
  'ղ',
  'ճ',
  'մ',
  'յ',
  'ն',
  'շ',
  'ո',
  'չ',
  'պ',
  'ջ',
  'ռ',
  'ս',
  'վ',
  'տ',
  'ր',
  'ց',
  'ւ',
  'փ',
  'ք',
  'օ',
  'ֆ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
