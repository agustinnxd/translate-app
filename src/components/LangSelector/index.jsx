import React, { useEffect } from 'react'
import { useTranslation } from 'react-google-multi-lang'

export const LangSelector = () => {
    const { setLanguage } = useTranslation()
    const handleChange = (e) => {
        setLanguage(e.target.value)
    }
    return (
        <div className='flex'>
            <select onChange={handleChange} className='rounded mb-4 w-24 text-center focus:none'>
                <option value={'En'} className='btn mr-2 rounded py-2 px-4 bg'> inglés </option>
                <option value={'Es'} className='btn rounded py-2 px-4 mb-4'> español </option>
                <option value={'Fr'} className='btn rounded py-2 px-4 mb-4'> francés </option>
                <option value={'Pt'} className='btn rounded py-2 px-4 mb-4'> portugués </option>
                <option value={'De'} className='btn rounded py-2 px-4 mb-4'> alemán </option>
                <option value={'Ja'} className='btn rounded py-2 px-4 mb-4'> japonés </option>
                {/* AGREGAR MAS IDIOMAS */}
            </select>
        </div>
    )
}
