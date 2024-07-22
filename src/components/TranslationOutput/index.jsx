import React from 'react'
import TranslatedText from '../TranslatedText'
import { LangSelector } from '../LangSelector'

export const TranslationOutput = ({ text }) => {
  return (
    <>      
      <div className='mr-4'>
        <LangSelector/>
        <TranslatedText text={text} />
      </div>
    </>
  )
}
