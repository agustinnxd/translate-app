import React, { useEffect } from 'react'
import { useTranslation } from 'react-google-multi-lang'
import TranslatedText from '../TranslatedText/TranslatedText'

export const TranslationOutput = ({ text }) => {
  return (
    <>      
      <div className='mt-4'>
        <p className='text-gray-700'>Traducción:</p>
        <TranslatedText text={text} />
      </div>
    </>
  )
}
