import React from 'react'
import spinner from '/spinner.svg'
import { Link } from 'react-router-dom';

export function Button({ loading, btnText, linkTo, text, span }) {

    return (
        <div className='flex flex-col items-center w-full gap-4'>
            <button type='submit' className='w-full py-4 rounded-lg flex items-center gap-2 justify-center text-[#FFFFFF] font-[500] leading-[18px] bg-[#6172F3]' > {loading ? <img src={spinner} alt="" /> : btnText}</button>
            <p className='text-[#000000] font-medium text-base text-center *:text-[#6172F3]'> {text} <Link to={linkTo}><span>{span}</span></Link></p>
        </div>
    )
}
