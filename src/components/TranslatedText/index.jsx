import React from 'react'
import { withTranslation } from 'react-google-multi-lang'

const TranslatedText = ({ text }) => {
    return (
        <div className='border border-gray-300 w-480 h-60 rounded-md mt-2'>
            <p>{text}</p>
        </div>
    )
}

export default withTranslation(TranslatedText);
