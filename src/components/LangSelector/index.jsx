import React, { useEffect } from 'react'
import { useTranslation } from 'react-google-multi-lang'

export const LangSelector = () => {
    const { setLanguage } = useTranslation()
    const handleChange = (e) => {
        setLanguage(e.target.value)
    }
    return (
        <div className='flex ml-4'>
            <h1 className='font-size-40'>Selecciona un idioma:</h1>
            <select onChange={handleChange} className='border border-gray-700 bg-gray-200 rounded ml-2 w-24 text-center active:accent-current'>
                <option value={'En'} className='btn mr-2 rounded py-2 px-4 bg'> Inglés </option>
                <option value={'Es'} className='btn rounded py-2 px-4 mb-4'> Español </option>
                <option value={'Fr'} className='btn rounded py-2 px-4 mb-4'> Frances </option>
                <option value={'Pt'} className='btn rounded py-2 px-4 mb-4'> Portugués </option>
                <option value={'De'} className='btn rounded py-2 px-4 mb-4'> Alemán </option>
                <option value={'Ja'} className='btn rounded py-2 px-4 mb-4'> Japonés </option>
                {/* AGREGAR MAS IDIOMAS */}
            </select>
        </div>
    )
}
