import React, { useEffect } from 'react'
import { useTranslation } from 'react-google-multi-lang'

export const LangSelector = () => {
    const { setLanguage } = useTranslation()
    
    useEffect(() => {
      console.log('idioma cambiado');
    }, [setLanguage])
    

    return (
        <div>
            <h1 className='font-size-40'>Selecciona un idioma:</h1>
            <button onClick={() => setLanguage('en')} className='btn bg-blue-500 mr-2 rounded text-white py-2 px-4'> Inglés </button>
            <button onClick={() => setLanguage('es')} className='btn bg-blue-500 rounded text-white py-2 px-4 mb-4'> Español </button>
            {/* AGREGAR MAS IDIOMAS */}
        </div>
    )
}
