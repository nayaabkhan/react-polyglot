import { useContext } from 'react'
import I18nContext from './i18n-context'

export default function useTranslate() {
  return useContext(I18nContext)
}
