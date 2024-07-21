import React from 'react'

export const TranslationInput = ({text, setText}) => {

    return (
        <div className='flex flex-col mb-4'>
            <label className='mb-2 text-gray-700'>Traducir:</label>
            <textarea 
                className="border border-gray-300 rounded-md resize-none" 
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}
