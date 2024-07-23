import React from 'react'
import { useTranslation, withTranslation } from 'react-google-multi-lang'

const TranslatedText = ({ text }) => {
    return (
        <div className='rounded-lg w-480 h-40 bg-gray-100'>
            <p className='ml-4 pt-1 text-2xl text-gray-500'>{ text ? text : 'Traducción'}</p>
        </div>
    )
}

export default withTranslation(TranslatedText);
