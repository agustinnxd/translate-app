import React from 'react'
import { withTranslation } from 'react-google-multi-lang'

const TranslatedText = ({ text }) => {
    return (
        <div>
            <p>hola</p>
        </div>
    )
}

export default withTranslation(TranslatedText);
