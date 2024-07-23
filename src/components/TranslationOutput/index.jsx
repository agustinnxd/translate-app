import React from 'react'
import TranslatedText from '../TranslatedText'
import { LangSelector } from '../LangSelector'

export const TranslationOutput = ({ text }) => {
  return (
    <>      
      <div className='flex flex-col mt-12 mr-60'>
        <LangSelector/>
        <TranslatedText text={text} />
      </div>
    </>
  )
}
