import React from 'react'

export const TranslationInput = ({text, setText}) => {

    return (
        <div className='flex flex-col mt-10 ml-60'>
            <label className='text-blue-600 font-semibold mb-4 text-lg'>Traducir:</label>
            <textarea 
                className="border border-gray-300 rounded-lg resize-none w-480 h-40 text-2xl" 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}
